import { Component, Input } from '@angular/core';
import { IGame } from '../game-list/game';

@Component({
  selector: 'app-game-list-item',
  templateUrl: './game-list-item.component.html',
  styleUrls: ['./game-list-item.component.css'],
})
export class GameListItemComponent {
  @Input()
  game!: IGame;

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
