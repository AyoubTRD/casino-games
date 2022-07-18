import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { EmptyStateComponent } from './shared/components/empty-state/empty-state.component';

const routes: Route[] = [
  {
    path: '',
    component: HomeComponent,
  },

  // TODO: Create a 404 page
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
