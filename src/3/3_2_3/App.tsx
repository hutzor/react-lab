import { useState } from 'react';
import { initialLetters, LetterType } from './data.js';
import Letter from './Letter.js';

export default function MailClient() {
  const [letters, setLetters] = useState(initialLetters);
  const [highlightedLetter, setHighlightedLetter] = useState<LetterType | null>(null);

  const handleHover = (letter: LetterType) => {
    setHighlightedLetter(letter);
  };

  const handleStar = (targetLetter: LetterType) => {
    setLetters(letters.map(letter =>
      letter.id === targetLetter.id
        ? { ...letter, isStarred: !letter.isStarred }
        : letter
    ));
  };

  return (
    <>
      <h2>Inbox</h2>
      <ul>
        {letters.map(letter => (
          <Letter
            key={letter.id}
            letter={letter}
            isHighlighted={highlightedLetter?.id === letter.id}
            onHover={handleHover}
            onToggleStar={handleStar}
          />
        ))}
      </ul>
    </>
  );
}
