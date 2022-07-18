import {
  Component,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { Subscription } from 'rxjs';

import { IGame } from '../game';
import { GamesService } from '../games.service';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
})
export class GameListComponent implements OnInit, OnChanges, OnDestroy {
  @Input()
  categories!: string[];
  @Input()
  showJackpotGamesOnly!: boolean;

  games: IGame[] = [];
  filteredGames: IGame[] = [];

  isLoading = true;
  error = false;

  service: GamesService;
  sub!: Subscription;

  constructor(service: GamesService) {
    this.service = service;
  }

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
