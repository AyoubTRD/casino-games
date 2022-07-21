import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription, timer } from 'rxjs';

import { Game } from '../../game';
import {
  selectCategories,
  selectError,
  selectFilteredGames,
  selectHasInitiallyLoaded,
} from '../../store';
import { GamesApiActions } from '../../store/actions';

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
  categories$: Observable<string[]> = this.store.select(selectCategories);
  error$: Observable<string | null> = this.store.select(selectError);

  sub!: Subscription;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.sub = timer(0, GAMES_RELOAD_INTERVAL).subscribe({
      next: () => {
        this.store.dispatch(GamesApiActions.loadGames());
      },
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
