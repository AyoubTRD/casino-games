import {
  Component,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';

import { GamesService } from '../games.service';
import { Game, State } from '../store/games.state';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
})
export class GamesComponent implements OnInit, OnChanges, OnDestroy {
  categories!: string[];

  showJackpotGamesOnly!: boolean;

  constructor(private service: GamesService, private store: Store<State>) {}

  handleCategoriesChange(categories: string[]) {
    this.showJackpotGamesOnly = false;
    this.categories = categories;
  }

  handleShowJackpots() {
    this.categories = [];
    this.showJackpotGamesOnly = true;
  }

  games: Game[] = [];
  filteredGames: Game[] = [];

  isLoading = true;
  error = false;

  sub!: Subscription;

  ngOnInit(): void {
    this.store.select('games').subscribe({
      next: ({ categories, showJackpotGamesOnly }) => {
        this.categories = categories;
        this.showJackpotGamesOnly = showJackpotGamesOnly;

        this.filterGames();
      },
    });
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
      console.log(changes);
      this.filterGames();
    }
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
