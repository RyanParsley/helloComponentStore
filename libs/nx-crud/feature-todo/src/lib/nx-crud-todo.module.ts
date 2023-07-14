import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { nxCrudTodoRoutes } from './lib.routes';
import { TodoStore } from './+state/todo.store';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(nxCrudTodoRoutes)],
  providers: [TodoStore],
})
export class NxCrudTodoModule {}
