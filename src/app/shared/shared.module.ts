import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ButtonComponent } from './components/button/button.component';
import { EmptyStateComponent } from './components/empty-state/empty-state.component';

@NgModule({
  declarations: [EmptyStateComponent, ButtonComponent],
  exports: [EmptyStateComponent, ButtonComponent],
  imports: [CommonModule],
})
export class SharedModule {}
