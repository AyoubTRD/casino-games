import * as AppState from '../../app.state';

export interface Game {
  name: string;
  id: string;
  image: string;
  categories: string[];
  jackpotAmount?: number;
}

export interface GamesState {
  categories: string[];
  showJackpotGamesOnly: boolean;
  games: Game[];
  error: string | null;
  isLoadingGames: boolean;
}

export interface State extends AppState.State {
  games: GamesState;
}
