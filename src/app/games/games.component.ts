import {
  Component,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { Subscription } from 'rxjs';

import { IGame } from './game';
import { GamesService } from './games.service';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
})
export class GamesComponent implements OnInit, OnChanges, OnDestroy {
  categories = ['new'];

  showJackpotGamesOnly = false;

  handleCategoriesChange(categories: string[]) {
    this.showJackpotGamesOnly = false;
    this.categories = categories;
  }

  handleShowJackpots() {
    this.categories = [];
    this.showJackpotGamesOnly = true;
  }

  games: IGame[] = [];
  filteredGames: IGame[] = [];

  isLoading = true;
  error = false;

  sub!: Subscription;

  constructor(private service: GamesService) {}

  ngOnInit(): void {
    this.sub = this.service.subscribeToGames().subscribe({
      next: (games) => {
        this.games = games;
        this.isLoading = false;
        this.filterGames();
      },
      error: () => (this.error = true),
    });
  }

  filterGames() {
    if (this.showJackpotGamesOnly) {
      this.filteredGames = this.games.filter((game) => !!game.jackpotAmount);
      return;
    }

    this.filteredGames = this.games.filter((game) =>
      game.categories.some((category) => this.categories.includes(category))
    );
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['categories'] || changes['showJackpotGamesOnly']) {
      this.filterGames();
    }
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
