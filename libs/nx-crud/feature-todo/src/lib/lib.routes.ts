import { Route } from '@angular/router';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoNewComponent } from './todo-new/todo-new.component';
import { TodoEditComponent } from './todo-edit/todo-edit.component';
import { TodoDetailsComponent } from './todo-details/todo-details.component';

export const nxCrudTodoRoutes: Route[] = [
  {
    path: '',
    component: TodoListComponent,
  },
  {
    path: 'new',
    component: TodoNewComponent,
  },
  {
    path: ':id/edit',
    component: TodoEditComponent,
  },
  {
    path: ':id',
    component: TodoDetailsComponent,
  }
];
