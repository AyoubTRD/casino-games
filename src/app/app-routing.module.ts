import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EmptyStateComponent } from './shared/components/empty-state/empty-state.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./games/games.module').then((m) => m.GamesModule),
  },
  {
    path: '**',
    component: EmptyStateComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
