import { Component, EventEmitter, Input, Output } from '@angular/core';

interface TabbarButton {
  categories?: string[];
  isJackpot?: boolean;
  label: string;
}

@Component({
  selector: 'app-tabbar',
  templateUrl: './tabbar.component.html',
})
export class TabbarComponent {
  @Input()
  categories!: string[];

  @Input()
  showJackpotOnly!: boolean;

  @Output()
  handleCategoriesChange = new EventEmitter<string[]>();

  @Output()
  handleJackpotSelect = new EventEmitter();

  buttons: TabbarButton[] = [
    {
      label: 'New Games',
      categories: ['new'],
    },
    {
      label: 'Top Games',
      categories: ['top'],
    },
    {
      label: 'Slots',
      categories: ['slots'],
    },
    {
      label: 'Live',
      categories: ['live'],
    },
    {
      label: 'Jackpots',
      isJackpot: true,
    },
    {
      label: 'Blackjack',
      categories: ['blackjack'],
    },
    {
      label: 'Roulette',
      categories: ['roulette'],
    },
    {
      label: 'Table',
      categories: ['table'],
    },
    {
      label: 'Poker',
      categories: ['poker'],
    },
    {
      label: 'Other',
      categories: ['ball', 'virtual', 'fun'],
    },
  ];

  handleClick(button: TabbarButton): void {
    if (button.isJackpot) {
      return this.handleJackpotSelect.emit();
    }
    if (button.categories) {
      this.handleCategoriesChange.emit(button.categories);
    }
  }

  isSelected(button: TabbarButton) {
    if (button.isJackpot) {
      return this.showJackpotOnly;
    }
    if (!button.categories) return false;
    return button.categories.every(
      (category, i) => this.categories[i] === category
    );
  }
}
