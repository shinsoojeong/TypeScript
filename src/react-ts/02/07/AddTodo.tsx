import React, { useState } from 'react';

type AddTodoType = {
  onAddTodo: (title: string) => void;
}

export default function AddTodo({ onAddTodo }: AddTodoType): React.ReactElement {
  const [title, setTitle] = useState<string>('');
  return (
    <>
      <input
        placeholder="Add todo"
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
      <button onClick={() => {
        setTitle('');
        onAddTodo(title);
      }}>Add</button>
    </>
  )
}
