import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { EmptyStateComponent } from '../shared/components/empty-state/empty-state.component';
import { GameListComponent } from './games/game-list/game-list.component';
import { GameListItemComponent } from './games/game-list-item/game-list-item.component';
import { GamesService } from './games/games.service';
import { HomeComponent } from './home.component';
import { TabbarComponent } from './tabbar/tabbar.component';

@NgModule({
  declarations: [
    GameListComponent,
    TabbarComponent,
    GameListItemComponent,
    EmptyStateComponent,
    HomeComponent,
  ],
  providers: [GamesService],
  imports: [CommonModule],
})
export class HomeModule {}
