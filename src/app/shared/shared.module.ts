import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ButtonComponent } from './components/button/button.component';
import { EmptyStateComponent } from './components/empty-state/empty-state.component';
import { RibbonComponent } from './components/ribbon/ribbon.component';
import { SkeletonComponent } from './components/skeleton/skeleton.component';

@NgModule({
  declarations: [
    EmptyStateComponent,
    ButtonComponent,
    SkeletonComponent,
    RibbonComponent,
  ],
  exports: [
    EmptyStateComponent,
    ButtonComponent,
    SkeletonComponent,
    RibbonComponent,
  ],
  imports: [CommonModule],
})
export class SharedModule {}
