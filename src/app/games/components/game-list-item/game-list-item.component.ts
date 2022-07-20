import { Component, Input } from '@angular/core';

import { Game } from '../../store/games.state';

@Component({
  selector: 'app-game-list-item',
  templateUrl: './game-list-item.component.html',
})
export class GameListItemComponent {
  @Input()
  game!: Game;

  @Input()
  selectedCategories!: string[];

  shouldShowNewBadge() {
    return (
      !this.selectedCategories.includes('new') &&
      this.game.categories.includes('new')
    );
  }

  shouldShowTopBadge() {
    return (
      !this.selectedCategories.includes('top') &&
      this.game.categories.includes('top')
    );
  }
}
