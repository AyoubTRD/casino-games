import { createReducer, on } from '@ngrx/store';

import {
  addCategories,
  loadGamesFailure,
  loadGamesSuccess,
  removeAllCategories,
  removeCategories,
  setGamesLoading,
  setShowJackpotGamesOnly,
  unsetShowJackpotGamesOnly,
} from './games.actions';
import { GamesState } from './games.state';

const initialState: GamesState = {
  categories: ['new'],
  showJackpotGamesOnly: false,
  games: [],
  error: null,
  isLoadingGames: false,
};

export const gamesReducer = createReducer<GamesState>(
  initialState,

  on(
    addCategories,
    (state, { categories }): GamesState => ({
      ...state,
      categories: [...state.categories, ...categories],
    })
  ),

  on(
    removeCategories,
    (state, { categories }): GamesState => ({
      ...state,
      categories: state.categories.filter(
        (category) => !categories.includes(category)
      ),
    })
  ),

  on(
    removeAllCategories,
    (state): GamesState => ({ ...state, categories: [] })
  ),

  on(
    setShowJackpotGamesOnly,
    (state): GamesState => ({
      ...state,
      showJackpotGamesOnly: true,
    })
  ),

  on(
    unsetShowJackpotGamesOnly,
    (state): GamesState => ({
      ...state,
      showJackpotGamesOnly: false,
    })
  ),

  on(
    setGamesLoading,
    (state): GamesState => ({ ...state, isLoadingGames: true })
  ),

  on(
    loadGamesFailure,
    (state, { error }): GamesState => ({
      ...state,
      isLoadingGames: false,
      error,
    })
  ),

  on(
    loadGamesSuccess,
    (state, { games }): GamesState => ({
      ...state,
      isLoadingGames: false,
      error: null,
      games,
    })
  )
);
