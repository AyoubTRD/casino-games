import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ButtonComponent } from './components/button/button.component';
import { EmptyStateComponent } from './components/empty-state/empty-state.component';
import { SkeletonComponent } from './components/skeleton/skeleton.component';

@NgModule({
  declarations: [EmptyStateComponent, ButtonComponent, SkeletonComponent],
  exports: [EmptyStateComponent, ButtonComponent, SkeletonComponent],
  imports: [CommonModule],
})
export class SharedModule {}
