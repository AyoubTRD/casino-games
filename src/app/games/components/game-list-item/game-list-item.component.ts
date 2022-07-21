import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';

import { Game } from '../../game';
import { selectCategories } from '../../store';

@Component({
  selector: 'app-game-list-item',
  templateUrl: './game-list-item.component.html',
  styleUrls: ['./game-list-item.component.css'],
})
export class GameListItemComponent {
  @Input()
  game!: Game;

  showNewBadge$: Observable<boolean> = this.store
    .select(selectCategories)
    .pipe(
      map(
        (categories) =>
          !categories.includes('new') && this.game.categories.includes('new')
      )
    );

  showTopBadge$: Observable<boolean> = this.store
    .select(selectCategories)
    .pipe(
      map(
        (categories) =>
          !categories.includes('top') && this.game.categories.includes('top')
      )
    );

  constructor(private store: Store) {}
}
