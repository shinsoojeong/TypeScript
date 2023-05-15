let nextId = 0;
let calls = 0;

export type CreateTodoReturn = {
  id: number;
  text: string;
  completed: boolean;
}

export function createTodo(text: string, completed: boolean = false): CreateTodoReturn {
  return {
    id: nextId++,
    text,
    completed
  };
}

export const initialTodos: CreateTodoReturn[] = [
  createTodo('Get apples', true),
  createTodo('Get oranges', true),
  createTodo('Get carrots'),
];



export function getVisibleTodos(todos: CreateTodoReturn[], showActive: boolean) {
  console.log(`getVisibleTodos() was called ${++calls} times`);
  const activeTodos = todos.filter(todo => !todo.completed);
  const visibleTodos = showActive ? activeTodos : todos;
  return visibleTodos;
}