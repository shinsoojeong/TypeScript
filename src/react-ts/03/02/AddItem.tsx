import { useState } from 'react';

type OnaddItemProps = {
  onAddItem: (title: string) => void;
}

export default function AddItem({ onAddItem }: OnaddItemProps) {
  const [title, setTitle] = useState('');
  return (
    <>
      <input
        placeholder="Add item"
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
      <button onClick={() => {
        setTitle('');
        onAddItem(title);
      }}>Add</button>
    </>
  )
}
