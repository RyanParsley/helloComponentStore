import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'todo',
    loadChildren: () =>
      import('@nx-crud/nx-crud/feature-todo').then((m) => m.NxCrudTodoModule),
  },
];
