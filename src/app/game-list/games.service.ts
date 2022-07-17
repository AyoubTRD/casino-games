import { Injectable } from '@angular/core';

import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { GAMES_ENDPOINT, JACKPOTS_ENDPOINT } from 'src/constants/global';
import { IGame } from './game';
import {
  catchError,
  interval,
  map,
  Observable,
  switchMap,
  tap,
  throwError,
  timer,
} from 'rxjs';

interface IJackpot {
  game: string;
  amount: number;
}

@Injectable({
  providedIn: 'root',
})
export class GamesService {
  constructor(private http: HttpClient) {}

  getGames(): Observable<IGame[]> {
    return timer(0, 5000).pipe(
      switchMap(() =>
        this.http.get<IGame[]>(GAMES_ENDPOINT).pipe(
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
        )
      )
    );
  }

  private handleError(err: HttpErrorResponse) {
    // Report error to Sentry
    console.error(err);

    return throwError(() => err);
  }
}
