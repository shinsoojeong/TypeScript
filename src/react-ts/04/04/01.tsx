import { useState } from 'react';
import { initialTodos, createTodo, CreateTodoReturn } from './todos';

export default function TodoList() {
  const [todos, setTodos] = useState<CreateTodoReturn[]>(initialTodos);
  const [showActive, setShowActive] = useState<boolean>(false);
  const activeTodos = todos.filter(todo => !todo.completed);
  const visibleTodos = showActive ? activeTodos : todos;

  return (
    <>
      <label>
        <input
          type="checkbox"
          checked={showActive}
          onChange={e => setShowActive(e.target.checked)}
        />
        Show only active todos
      </label>
      <NewTodo onAdd={newTodo => setTodos([...todos, newTodo])} />
      <ul>
        {visibleTodos.map(todo => (
          <li key={todo.id}>
            {todo.completed ? <s>{todo.text}</s> : todo.text}
          </li>
        ))}
      </ul>
      <footer>
        {activeTodos.length} todos left
      </footer>
    </>
  );
}

type NewTodoProps = {
  onAdd: (newTodo: CreateTodoReturn) => void;
}

function NewTodo({ onAdd }: NewTodoProps) {
  const [text, setText] = useState<string>('');

  function handleAddClick() {
    setText('');
    onAdd(createTodo(text));
  }

  return (
    <>
      <input value={text} onChange={e => setText(e.target.value)} />
      <button onClick={handleAddClick}>
        Add
      </button>
    </>
  );
}
