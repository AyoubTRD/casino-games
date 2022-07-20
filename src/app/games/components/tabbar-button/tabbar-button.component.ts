import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import {
  addCategories,
  removeAllCategories,
  setShowJackpotGamesOnly,
  unsetShowJackpotGamesOnly,
} from '../../store/games.actions';
import { State } from '../../store/games.state';

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

  constructor(private store: Store<State>) {}

  ngOnInit() {
    this.store.select('games').subscribe({
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
    this.store.dispatch(removeAllCategories());
    if (this.button.isJackpot) {
      this.store.dispatch(setShowJackpotGamesOnly());
    } else if (this.button.categories) {
      this.store.dispatch(
        addCategories({
          categories: this.button.categories,
        })
      );
      this.store.dispatch(unsetShowJackpotGamesOnly());
    }
  }
}
