import { MetaReducer } from '@ngrx/store';

import * as AppState from '../../app.state';
import { GamesState } from './games.reducer';

export { gamesReducer } from './games.reducer';
import { gamesHydrationMetaReducer } from './hydration.reducer';

export const metaReducers: MetaReducer[] = [gamesHydrationMetaReducer];

export interface State extends AppState.State {
  games: GamesState;
}

export * from './games.selectors';
