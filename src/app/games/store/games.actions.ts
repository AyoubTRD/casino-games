import { createAction, props } from '@ngrx/store';

import { Game } from './games.state';

export const addCategories = createAction(
  '[Games] Add Categories',
  props<{ categories: string[] }>()
);
export const removeCategories = createAction(
  '[Games] Remove Categories',
  props<{ categories: string[] }>()
);
export const removeAllCategories = createAction(
  '[Games] Remove All Categories'
);

export const setShowJackpotGamesOnly = createAction(
  '[Games] Show Jackpot Games Only'
);
export const unsetShowJackpotGamesOnly = createAction(
  '[Games] Unset Show Jackpot Games Only'
);

export const loadGames = createAction('[Games] Load Games');
export const loadGamesSuccess = createAction(
  '[Games] Load Games Success',
  props<{ games: Game[] }>()
);
export const loadGamesFailure = createAction(
  '[Games] Load Games',
  props<{ error: string }>()
);

export const setGamesLoading = createAction('[Games] Set Games Loading');
