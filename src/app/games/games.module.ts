import { NgModule } from '@angular/core';

import { EmptyStateComponent } from '../shared/components/empty-state/empty-state.component';
import { GameListComponent } from './game-list/game-list.component';
import { GameListItemComponent } from './game-list-item/game-list-item.component';
import { HomeComponent } from '../home/home.component';
import { TabbarComponent } from './tabbar/tabbar.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    GameListComponent,
    TabbarComponent,
    GameListItemComponent,
    EmptyStateComponent,
    HomeComponent,
  ],
  imports: [CommonModule, HttpClientModule],
})
export class GamesModule {}
