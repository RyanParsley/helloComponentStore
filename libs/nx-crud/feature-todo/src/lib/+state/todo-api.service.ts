import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Todo, TodoResponse } from '../todo';

@Injectable({
  providedIn: 'root'
})
export class TodoApiService {
  // I don't currently use the next 2 lines, but want to demonstrate what this
  // might look like in the future if we made requests

  private readonly endpoint = 'https://swapi.dev/api';
  constructor(private readonly http: HttpClient) {}

  public getTodos(): Observable<TodoResponse<Todo[]>> {
    // return this.http.get<TodoResponse>(this.endpoint);
    return of({status: 200, data: [{id: 1, title: "hello world"}]});
  }

  // todo: use an id arguement
  public getTodo(): Observable<TodoResponse<Todo>> {
    return of({status: 200, data: {id: 1, title: "hello world"}});
  }

  // todo: use an id arguement
  public updateTodo(): Observable<TodoResponse<string>> {
    return of({ status: 201, data: "Horray, you updated a thing!"});
  }

  public createTodo(): Observable<TodoResponse<string>> {
    return of({ status: 200, data: "Horray, you made a thing!"});
  }
}
