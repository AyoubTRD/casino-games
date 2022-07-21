import { createAction, props } from '@ngrx/store';

export const changeCategories = createAction(
  '[Games Tabbar] Change Categories',
  props<{ categories: string[] }>()
);

export const setShowJackpotGamesOnly = createAction(
  '[Games Tabbar] Show Jackpot Games Only'
);
