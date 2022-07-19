import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { GameListComponent } from './game-list/game-list.component';
import { GameListItemComponent } from './game-list-item/game-list-item.component';
import { TabbarComponent } from './tabbar/tabbar.component';
import { GamesComponent } from './games.component';
import { GamesRoutingModule } from './games-routing.module'

@NgModule({
  declarations: [
    GameListComponent,
    GameListItemComponent,
    TabbarComponent,
    GamesComponent,
  ],
  imports: [CommonModule, SharedModule, GamesRoutingModule],
})
export class GamesModule {}
