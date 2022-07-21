import { createAction, props } from '@ngrx/store';

import { Game } from '../../game';

export const loadGames = createAction('[Games Api] Load Games');
export const loadGamesSuccess = createAction(
  '[Games Api] Load Games Success',
  props<{ games: Game[] }>()
);
export const loadGamesFailure = createAction(
  '[Games Api] Load Games Failure',
  props<{ error: string }>()
);

export const setGamesLoading = createAction('[Games Page] Set Games Loading');
