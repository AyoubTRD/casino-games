import { createAction, props } from '@ngrx/store';

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
