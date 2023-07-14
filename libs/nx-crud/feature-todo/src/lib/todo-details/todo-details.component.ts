import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable, map, tap } from 'rxjs';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { TodoStore } from '../+state/todo.store';
import { Todo } from '../todo';

@Component({
  selector: 'nx-crud-todo-details',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>todo-details works!</p>
    ID is: {{id$ | async}}
    {{todo$ | async | json}}
  `,
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [TodoStore]
})
export class TodoDetailsComponent {

  public readonly id$: Observable<string> = this.route.paramMap.pipe(
    map((params: ParamMap) => params.get('id') || ''),
    tap((id: string) => this.store.setActiveTodo(parseInt(id)))
  );

  public readonly todo$: Observable<Todo | undefined> = this.store.activeTodo$;

  constructor(private readonly route: ActivatedRoute, private store: TodoStore){}

}
