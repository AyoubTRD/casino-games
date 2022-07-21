import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription, timer } from 'rxjs';

import { loadGames } from '../../store/games.actions';
import {
  selectError,
  selectFilteredGames,
  selectHasInitiallyLoaded,
} from '../../store/games.selectors';
import { Game } from '../../store/games.state';

const GAMES_RELOAD_INTERVAL = 8000;

@Component({
  selector: 'app-games',
  templateUrl: './games-page.component.html',
})
export class GamesPageComponent implements OnInit, OnDestroy {
  hasInitiallyLoaded$: Observable<boolean> = this.store.select(
    selectHasInitiallyLoaded
  );
  filteredGames$: Observable<Game[]> = this.store.select(selectFilteredGames);
  error$: Observable<string | null> = this.store.select(selectError);

  sub!: Subscription;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.sub = timer(0, GAMES_RELOAD_INTERVAL).subscribe({
      next: () => {
        this.store.dispatch(loadGames());
      },
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
