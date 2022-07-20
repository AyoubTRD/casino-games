import { createReducer, on } from '@ngrx/store';

import {
  addCategories,
  removeAllCategories,
  removeCategories,
  setShowJackpotGamesOnly,
  unsetShowJackpotGamesOnly,
} from './games.actions';

const initialState = {
  categories: ['new'],
  showJackpotGamesOnly: false,
};

export const gamesReducer = createReducer(
  initialState,

  on(addCategories, (state, { categories }) => ({
    ...state,
    categories: [...state.categories, ...categories],
  })),

  on(removeCategories, (state, { categories }) => ({
    ...state,
    categories: state.categories.filter(
      (category) => !categories.includes(category)
    ),
  })),

  on(removeAllCategories, (state) => ({ ...state, categories: [] })),

  on(setShowJackpotGamesOnly, (state) => ({
    ...state,
    showJackpotGamesOnly: true,
  })),

  on(unsetShowJackpotGamesOnly, (state) => ({
    ...state,
    showJackpotGamesOnly: false,
  }))
);
