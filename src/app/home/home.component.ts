import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  categories = ['new'];

  showJackpotGamesOnly = false;

  handleCategoriesChange(categories: string[]) {
    this.showJackpotGamesOnly = false;
    this.categories = categories;
  }

  handleShowJackpots() {
    this.categories = [];
    this.showJackpotGamesOnly = true;
  }
}
