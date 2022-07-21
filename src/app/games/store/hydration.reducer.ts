import { ActionReducer, INIT, MetaReducer, UPDATE } from '@ngrx/store';

import { GamesState, initialState } from './games.reducer';

export const gamesHydrationMetaReducer: MetaReducer<GamesState> = (
  reducer: ActionReducer<GamesState>
) => {
  return (state, action) => {
    if (action.type === INIT || action.type === UPDATE) {
      const params = new URLSearchParams(window.location.search);
      const categories = params.get('categories');
      const showJackpotGamesOnly = params.get('showJackpotGamesOnly');
      return {
        ...initialState,
        categories: categories
          ? categories.split(',')
          : initialState.categories,
        showJackpotGamesOnly: showJackpotGamesOnly === 'true',
      };
    }

    const nextState = reducer(state, action);

    const params = new URLSearchParams(window.location.search);
    params.set('categories', nextState?.categories.join(',') || '');
    params.set(
      'showJackpotGamesOnly',
      nextState?.showJackpotGamesOnly ? 'true' : 'false'
    );

    var newUrl =
      window.location.protocol +
      '//' +
      window.location.host +
      window.location.pathname +
      '?' +
      params.toString();
    window.history.pushState({ path: newUrl }, '', newUrl);

    return nextState;
  };
};
