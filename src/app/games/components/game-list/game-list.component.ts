import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { Game } from '../../game';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GameListComponent {
  @Input()
  categories: string[] = [];
  @Input()
  games: Game[] = [];

  @Input()
  showSkeleton: boolean = false;
  @Input()
  skeletonCount: number = 5;

  identifyGame(_index: number, game: Game) {
    return game.id;
  }
}
