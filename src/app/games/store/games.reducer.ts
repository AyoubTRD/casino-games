import { createReducer, on } from '@ngrx/store';

import {
  changeCategories,
  loadGamesFailure,
  loadGamesSuccess,
  setGamesLoading,
  setShowJackpotGamesOnly,
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
    changeCategories,
    (state, { categories }): GamesState => ({
      ...state,
      categories,
      showJackpotGamesOnly: false,
    })
  ),

  on(
    setShowJackpotGamesOnly,
    (state): GamesState => ({
      ...state,
      categories: [],
      showJackpotGamesOnly: true,
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
