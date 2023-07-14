import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoStore } from '../+state/todo.store';

@Component({
  selector: 'nx-crud-todo-list',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>todo-list works!</p>
    {{ todos$ | async | json}}
  `,
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [TodoStore],
})
export class TodoListComponent {
  todos$ = this.store.todos$;
  constructor(private store: TodoStore){}
}
