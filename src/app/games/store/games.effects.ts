import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';

import { GamesService } from '../games.service';
import {
  loadGames,
  loadGamesFailure,
  loadGamesSuccess,
  setGamesLoading,
} from './games.actions';

@Injectable()
export class GamesEffects {
  constructor(private actions$: Actions, private service: GamesService) {}

  loadGames$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadGames),
      switchMap(() =>
        this.service.getGames().pipe(
          map((games) => loadGamesSuccess({ games })),
          catchError(() =>
            of(loadGamesFailure({ error: 'Failed to load the games' }))
          )
        )
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
