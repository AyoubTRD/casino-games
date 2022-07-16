import { Component, OnInit } from '@angular/core';

interface Game {
  name: string;
  id: string;
  image: string;
  tags: string[];
}

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css'],
})
export class GameListComponent implements OnInit {
  games: Game[] = [];

  isLoading = true;

  async ngOnInit(): Promise<void> {
    const res = await fetch(
      'http://stage.whgstage.com/front-end-test/games.php'
    );

    if (!res.ok) {
      console.log('error');
      return;
    }

    const data: Game[] = await res.json();

    this.games = data;
    this.isLoading = false;
  }
}
