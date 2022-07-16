import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabbar',
  templateUrl: './tabbar.component.html',
  styleUrls: ['./tabbar.component.css'],
})
export class TabbarComponent {
  items = [
    'New Games',
    'Top Games',
    'Slots',
    'Jackpots',
    'Blackjack',
    'Roulette',
    'Table',
    'Poker',
    'Other',
  ];
}
