import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
const loeuf = 'Hello world';

export class AppComponent {
  title = 'casino-games';

  handleClick() {
    console.log('Hello world');
  }
}
