import { createFeatureSelector, createSelector } from '@ngrx/store';

import { GamesState } from './games.state';

export const selectGamesFeatureState =
  createFeatureSelector<GamesState>('games');

export const selectCategories = createSelector(
  selectGamesFeatureState,
  (state) => state.categories
);

export const selectShowJackpotGamesOnly = createSelector(
  selectGamesFeatureState,
  (state) => state.showJackpotGamesOnly
);

export const selectAllGames = createSelector(
  selectGamesFeatureState,
  (state) => state.games
);

export const selectFilteredGames = createSelector(
  selectGamesFeatureState,
  selectAllGames,
  ({ categories, showJackpotGamesOnly }, games) =>
    showJackpotGamesOnly
      ? games.filter((game) => !!game.jackpotAmount)
      : games.filter((game) =>
          game.categories.some((category) => categories.includes(category))
        )
);

export const selectIsLoadingGames = createSelector(
  selectGamesFeatureState,
  (state) => state.isLoadingGames
);

export const selectError = createSelector(
  selectGamesFeatureState,
  (state) => state.error
);

export const selectHasInitiallyLoaded = createSelector(
  selectAllGames,
  selectIsLoadingGames,
  selectError,
  (games, isLoadingGames, error) =>
    (games.length > 0 && !isLoadingGames) || !!error
);
