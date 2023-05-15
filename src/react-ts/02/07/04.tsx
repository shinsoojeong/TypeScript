import { useState } from 'react';
import { useImmer } from 'use-immer';
import AddTodo from './AddTodo';
import TaskList from './TaskList';

let nextId: number = 3;

export type initialTodosType = {
  id: number;
  title: string;
  done: boolean;
}

const initialTodos: Array<initialTodosType> = [
  { id: 0, title: 'Buy milk', done: true },
  { id: 1, title: 'Eat tacos', done: false },
  { id: 2, title: 'Brew tea', done: false },
];

export default function TaskApp() {
  const [todos, updateTodos] = useImmer<Array<initialTodosType>>(initialTodos);

  function handleAddTodo(title: string) {
    updateTodos(draft => {
      draft.push({
        id: nextId++,
        title: title,
        done: false
      });
    });
  }

  function handleChangeTodo(nextTodo: initialTodosType) {
    updateTodos(draft => {
      const todo = draft.find(t =>
        t.id === nextTodo.id
      );
      if (todo != undefined) {
        todo.title = nextTodo.title;
        todo.done = nextTodo.done;
      }
    });
  }

  function handleDeleteTodo(todoId: number) {
    updateTodos(draft => {
      const index = draft.findIndex(t =>
        t.id === todoId
      );
      draft.splice(index, 1);
    });
  }

  return (
    <>
      <AddTodo
        onAddTodo={handleAddTodo}
      />
      <TaskList
        todos={todos}
        onChangeTodo={handleChangeTodo}
        onDeleteTodo={handleDeleteTodo}
      />
    </>
  );
}
