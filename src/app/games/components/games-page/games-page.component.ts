import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { loadGames } from '../../store/games.actions';
import {
  selectError,
  selectFilteredGames,
  selectIsLoadingGames,
} from '../../store/games.selectors';
import { Game } from '../../store/games.state';

@Component({
  selector: 'app-games',
  templateUrl: './games-page.component.html',
})
export class GamesPageComponent implements OnInit {
  filteredGames$: Observable<Game[]> = this.store.select(selectFilteredGames);
  isLoading$: Observable<boolean> = this.store.select(selectIsLoadingGames);
  error$: Observable<string | null> = this.store.select(selectError);

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(loadGames());
  }
}
