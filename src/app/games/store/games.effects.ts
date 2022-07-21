import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';

import { GamesService } from '../games.service';
import { GamesApiActions } from './actions/';

@Injectable()
export class GamesEffects {
  constructor(private actions$: Actions, private service: GamesService) {}

  loadGames$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(GamesApiActions.loadGames),
      switchMap(() =>
        this.service.getGames().pipe(
          map((games) => GamesApiActions.loadGamesSuccess({ games })),
          catchError(() =>
            of(
              GamesApiActions.loadGamesFailure({
                error: 'Failed to load the games',
              })
            )
          )
        )
      )
    );
  });

  setGamesLoading$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(GamesApiActions.loadGames),
      map(() => GamesApiActions.setGamesLoading())
    );
  });
}
