import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GameListComponent } from './game-list/game-list.component';
import { TabbarComponent } from './tabbar/tabbar.component';
import { GameListItemComponent } from './game-list-item/game-list-item.component';
import { GamesService } from './game-list/games.service';
import { NotFoundComponent } from './not-found/not-found.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    GameListComponent,
    TabbarComponent,
    GameListItemComponent,
    NotFoundComponent,
  ],
  imports: [BrowserModule, HttpClientModule],
  providers: [GamesService],
  bootstrap: [AppComponent],
})
export class AppModule {}
