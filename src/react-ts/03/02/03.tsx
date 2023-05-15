import { useState } from 'react';
import { initialLetters, InitialLettersType } from './Data';
import Letter from './Letter';

export default function MailClient() {
  const [letters, setLetters] = useState<Array<InitialLettersType>>(initialLetters);
  const [highlightedId, setHighlightedId] = useState<number | null>(null);

  function handleHover(letterId: number | null): void {
    setHighlightedId(letterId);
  }

  function handleStar(starredId: number): void {
    setLetters(letters.map(letter => {
      if (letter.id === starredId) {
        return {
          ...letter,
          isStarred: !letter.isStarred
        };
      } else {
        return letter;
      }
    }));
  }

  return (
    <>
      <h2>Inbox</h2>
      <ul>
        {letters.map(letter => (
          <Letter
            key={letter.id}
            letter={letter}
            isHighlighted={
              letter.id === highlightedId
            }
            onHover={handleHover}
            onToggleStar={handleStar}
          />
        ))}
      </ul>
    </>
  );
}
