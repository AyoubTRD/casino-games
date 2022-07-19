import { Component, Input } from '@angular/core';

import { IGame } from '../game';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
})
export class GameListComponent {
  @Input()
  categories!: string[];

  @Input()
  games!: IGame[];

  identifyGame(_index: number, game: IGame) {
    return game.id;
  }
}
