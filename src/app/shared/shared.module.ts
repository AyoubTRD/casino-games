import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { EmptyStateComponent } from './components/empty-state/empty-state.component';

@NgModule({
  declarations: [EmptyStateComponent],
  exports: [EmptyStateComponent],
  imports: [CommonModule],
})
export class SharedModule {}
