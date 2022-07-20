import { Component, Input } from '@angular/core';

import { Game } from '../../store/games.state';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
})
export class GameListComponent {
  @Input()
  categories!: string[];

  @Input()
  games!: Game[];

  identifyGame(_index: number, game: Game) {
    return game.id;
  }
}
