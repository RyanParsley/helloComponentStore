export interface Todo {
  id: number,
  title: string
}

export interface NewTodo {
  title: string
}

export interface TodoResponse<T> {
  status: number,
  data: T
}
