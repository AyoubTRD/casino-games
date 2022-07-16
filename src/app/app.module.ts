import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GameListComponent } from './game-list/game-list.component';
import { TabbarComponent } from './tabbar/tabbar.component';
import { GameListItemComponent } from './game-list-item/game-list-item.component';

@NgModule({
  declarations: [
    AppComponent,
    GameListComponent,
    TabbarComponent,
    GameListItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
