import { initialItemsType } from './02';

type PackingProps = {
  items: initialItemsType[];
  onChangeItem: (nextItem: initialItemsType) => void;
  onDeleteItem: (itemId: number) => void;
}

export default function PackingList({ items, onChangeItem, onDeleteItem }: PackingProps) {
  return (
    <ul>
      {items.map(item => (
        <li key={item.id}>
          <label>
            <input
              type="checkbox"
              checked={item.packed}
              onChange={e => {
                onChangeItem({
                  ...item,
                  packed: e.target.checked
                });
              }}
            />
            {' '}
            {item.title}
          </label>
          <button onClick={() => onDeleteItem(item.id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}
