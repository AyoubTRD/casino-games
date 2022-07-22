import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';

import { selectGameFilteringParameters } from '../../store';
import { GamesTabbarActions } from '../../store/actions';

export interface TabbarButton {
  categories?: string[];
  isJackpot?: boolean;
  label: string;
}

@Component({
  selector: 'app-tabbar-button',
  templateUrl: './tabbar-button.component.html',
})
export class TabbarButtonComponent {
  @Input()
  button!: TabbarButton;

  isSelected$: Observable<boolean> = this.store
    .select(selectGameFilteringParameters)
    .pipe(
      map(({ showJackpotGamesOnly, categories }) => {
        if (this.button.isJackpot) return showJackpotGamesOnly;
        else
          return (
            !!this.button.categories &&
            this.button.categories.every((category) =>
              categories.includes(category)
            )
          );
      })
    );

  constructor(private store: Store) {}

  handleClick(): void {
    if (this.button.isJackpot) {
      this.store.dispatch(GamesTabbarActions.setShowJackpotGamesOnly());
    } else if (this.button.categories) {
      this.store.dispatch(
        GamesTabbarActions.changeCategories({
          categories: this.button.categories,
        })
      );
    }
  }
}
