import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { nxCrudTodoRoutes } from './lib.routes';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(nxCrudTodoRoutes)],
})
export class NxCrudTodoModule {}
