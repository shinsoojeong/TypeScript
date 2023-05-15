
import { initialLetters, InitialLettersType } from './Data';

type Props = {
  letter: InitialLettersType;
  isHighlighted: boolean;
  onHover: (letterId: number | null) => void;
  onToggleStar: (starredId: number) => void;
}

export default function Letter({ letter, isHighlighted, onHover, onToggleStar, }: Props) {
  return (
    <li
      className={
        isHighlighted ? 'highlighted' : ''
      }
      onFocus={() => {
        onHover(letter.id);
      }}
      onPointerMove={() => {
        onHover(letter.id);
      }}
    >
      <button onClick={() => {
        onToggleStar(letter.id);
      }}>
        {letter.isStarred ? 'Unstar' : 'Star'}
      </button>
      {letter.subject}
    </li>
  )
}

type Props2 = {
  letter: InitialLettersType;
  isSelected: boolean;
  onToggle: (toggledId: number) => void;
}

export function Letter2({ letter, onToggle, isSelected, }: Props2) {
  return (
    <li className={
      isSelected ? 'selected' : ''
    }>
      <label>
        <input
          type="checkbox"
          checked={isSelected}
          onChange={() => {
            onToggle(letter.id);
          }}
        />
        {letter.subject}
      </label>
    </li>
  )
}