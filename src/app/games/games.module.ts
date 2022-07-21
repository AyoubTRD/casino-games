import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { SharedModule } from '../shared/shared.module';
import { GameListComponent } from './components/game-list/game-list.component';
import { GameListItemComponent } from './components/game-list-item/game-list-item.component';
import { GamesPageComponent } from './components/games-page/games-page.component';
import { TabbarComponent } from './components/tabbar/tabbar.component';
import { TabbarButtonComponent } from './components/tabbar-button/tabbar-button.component';
import { GamesRoutingModule } from './games-routing.module';
import { GamesEffects } from './store/games.effects';
import { gamesReducer } from './store/games.reducer';

@NgModule({
  declarations: [
    GameListComponent,
    GameListItemComponent,
    TabbarComponent,
    GamesPageComponent,
    TabbarButtonComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    GamesRoutingModule,
    StoreModule.forFeature('games', gamesReducer),
    EffectsModule.forFeature([GamesEffects]),
  ],
})
export class GamesModule {}
