import { Injectable } from '@angular/core';
import { ComponentStore, tapResponse } from '@ngrx/component-store';
import { TodoApiService } from './todo-api.service';
import { Observable } from 'rxjs';
import { exhaustMap } from 'rxjs/operators';
import { Todo, TodoResponse } from '../todo';
import { HttpErrorResponse } from '@angular/common/http';

export interface TodoState {
  activeTodoId: number | null;
  todos: Todo[];
};

const initialState: TodoState = {
  activeTodoId: null,
  todos: []
};

@Injectable()
export class TodoStore extends ComponentStore<TodoState> {

  constructor(private service: TodoApiService) {
    super(initialState);
    this.fetchTodos();
  }

  readonly todos$: Observable<Todo[]> = this.select(({todos}) => todos);
  readonly activeTodoId$ = this.select(({activeTodoId}) => activeTodoId);
  readonly activeTodo$ = this.select(({todos, activeTodoId}) => todos.find(todo => todo.id == activeTodoId));

  readonly loadTodos = this.updater((state, todos: Todo[] | null) => ({
    ...state,
    todos: todos || [],
  }));

  readonly setActiveTodo = this.updater((state, activeTodoId: number) => ({
    ...state,
    activeTodoId,
  }));

  readonly fetchTodos = this.effect<void>(
    (trigger$: Observable<unknown>) => trigger$.pipe(
      exhaustMap(() =>
        this.service.getTodos().pipe(
          tapResponse({
            next: (todos: TodoResponse<Todo[]>) => this.loadTodos(todos.data),
            error: (error: HttpErrorResponse) => { console.log(error) },
          })
        )
      )
    )
  );
}
