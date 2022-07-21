import { createAction, props } from '@ngrx/store';

import { Game } from './games.state';

export const changeCategories = createAction(
  '[Games] Change Categories',
  props<{ categories: string[] }>()
);

export const setShowJackpotGamesOnly = createAction(
  '[Games] Show Jackpot Games Only'
);

export const loadGames = createAction('[Games] Load Games');
export const loadGamesSuccess = createAction(
  '[Games] Load Games Success',
  props<{ games: Game[] }>()
);
export const loadGamesFailure = createAction(
  '[Games] Load Games Failure',
  props<{ error: string }>()
);

export const setGamesLoading = createAction('[Games] Set Games Loading');
