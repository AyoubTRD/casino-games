import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { selectGamesFeatureState } from '../../store';
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
export class TabbarButtonComponent implements OnInit {
  @Input()
  button!: TabbarButton;

  categories!: string[];
  showJackpotGamesOnly!: boolean;

  isSelected!: boolean;

  constructor(private store: Store) {}

  ngOnInit() {
    this.store.select(selectGamesFeatureState).subscribe({
      next: (games) => {
        this.categories = games.categories;
        this.showJackpotGamesOnly = games.showJackpotGamesOnly;

        if (this.button.isJackpot) this.isSelected = this.showJackpotGamesOnly;
        else
          this.isSelected =
            !!this.button.categories &&
            this.button.categories.every((category) =>
              this.categories.includes(category)
            );
      },
    });
  }

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
