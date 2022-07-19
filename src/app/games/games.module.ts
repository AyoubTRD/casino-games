import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { HomeComponent } from '../home/home.component';
import { SharedModule } from '../shared/shared.module';
import { GameListComponent } from './game-list/game-list.component';
import { GameListItemComponent } from './game-list-item/game-list-item.component';
import { TabbarComponent } from './tabbar/tabbar.component';

@NgModule({
  declarations: [
    GameListComponent,
    TabbarComponent,
    GameListItemComponent,
    HomeComponent,
  ],
  imports: [CommonModule, HttpClientModule, SharedModule],
})
export class GamesModule {}
