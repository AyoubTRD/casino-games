import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GameListComponent } from './games/game-list/game-list.component';
import { TabbarComponent } from './shared/tabbar/tabbar.component';
import { GameListItemComponent } from './games/game-list-item/game-list-item.component';
import { GamesService } from './games/games.service';
import { EmptyStateComponent } from './shared/empty-state/empty-state.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    GameListComponent,
    TabbarComponent,
    GameListItemComponent,
    EmptyStateComponent,
  ],
  imports: [BrowserModule, HttpClientModule],
  providers: [GamesService],
  bootstrap: [AppComponent],
})
export class AppModule {}
