import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap } from 'rxjs';

import { GamesService } from '../games.service';
import { loadGames, loadGamesSuccess, setGamesLoading } from './games.actions';

@Injectable()
export class GamesEffects {
  constructor(private actions$: Actions, private service: GamesService) {}

  loadGames$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadGames),
      mergeMap(() =>
        this.service
          .getGames()
          .pipe(map((games) => loadGamesSuccess({ games })))
      )
    );
  });

  setGamesLoading$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadGames),
      map(() => setGamesLoading())
    );
  });
}
