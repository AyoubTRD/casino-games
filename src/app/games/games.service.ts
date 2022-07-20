import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as Sentry from '@sentry/angular';
import {
  catchError,
  map,
  Observable,
  switchMap,
  throwError,
  timer,
} from 'rxjs';
import { environment } from 'src/environments/environment';

import { Game } from './store/games.state';

export const GAMES_ENDPOINT = environment.backendUrl + '/games.php';
export const JACKPOTS_ENDPOINT = environment.backendUrl + '/jackpots.php';

interface IJackpot {
  game: string;
  amount: number;
}

@Injectable({
  providedIn: 'root',
})
export class GamesService {
  constructor(private http: HttpClient) {}

  getGames(): Observable<Game[]> {
    return this.http.get<Game[]>(GAMES_ENDPOINT).pipe(
      switchMap((data) => {
        return this.http.get<IJackpot[]>(JACKPOTS_ENDPOINT).pipe(
          map((jackpots) => {
            for (const jackpot of jackpots) {
              data.find((game) => game.id === jackpot.game)!.jackpotAmount =
                jackpot.amount;
            }
            return data;
          }),
          catchError(this.handleError)
        );
      }),
      catchError(this.handleError)
    );
  }

  subscribeToGames(interval: number = 8000): Observable<Game[]> {
    return timer(0, interval).pipe(switchMap(() => this.getGames()));
  }

  private handleError(err: HttpErrorResponse) {
    Sentry.captureException(err);
    return throwError(() => err);
  }
}
