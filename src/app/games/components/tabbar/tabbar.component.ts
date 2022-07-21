import { Component } from '@angular/core';

import { TabbarButton } from '../tabbar-button/tabbar-button.component';

const buttons: TabbarButton[] = [
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
    label: 'Classic',
    categories: ['classic'],
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

@Component({
  selector: 'app-tabbar',
  templateUrl: './tabbar.component.html',
})
export class TabbarComponent {
  buttons = buttons;
}
