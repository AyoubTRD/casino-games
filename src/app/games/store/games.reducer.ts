import { createReducer, on } from '@ngrx/store';

import { Game } from '../game';
import { GamesApiActions, GamesTabbarActions } from './actions';

export interface GamesState {
  categories: string[];
  showJackpotGamesOnly: boolean;
  games: Game[];
  error: string | null;
  isLoadingGames: boolean;
}

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
    GamesTabbarActions.changeCategories,
    (state, { categories }): GamesState => ({
      ...state,
      categories,
      showJackpotGamesOnly: false,
    })
  ),

  on(
    GamesTabbarActions.setShowJackpotGamesOnly,
    (state): GamesState => ({
      ...state,
      categories: [],
      showJackpotGamesOnly: true,
    })
  ),

  on(
    GamesApiActions.setGamesLoading,
    (state): GamesState => ({ ...state, isLoadingGames: true })
  ),

  on(
    GamesApiActions.loadGamesFailure,
    (state, { error }): GamesState => ({
      ...state,
      isLoadingGames: false,
      error,
    })
  ),

  on(
    GamesApiActions.loadGamesSuccess,
    (state, { games }): GamesState => ({
      ...state,
      isLoadingGames: false,
      error: null,
      games,
    })
  )
);
