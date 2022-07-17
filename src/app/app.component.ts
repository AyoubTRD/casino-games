import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
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
