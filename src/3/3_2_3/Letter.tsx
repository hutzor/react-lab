import { LetterType } from './data';

export default function Letter({
  letter,
  isHighlighted,
  onHover,
  onToggleStar
}: {
  letter: LetterType;
  isHighlighted: boolean;
  onHover: (letter: LetterType) => void;
  onToggleStar: (letter: LetterType) => void;
}) {
  const handleHover = () => onHover(letter);
  const handleToggleStar = () => onToggleStar(letter);

  return (
    <li
      className={isHighlighted ? 'highlighted' : ''}
      onFocus={handleHover}
      onPointerMove={handleHover}
    >
      <button onClick={handleToggleStar}>
        {letter.isStarred ? 'Unstar' : 'Star'}
      </button>
      {letter.subject}
    </li>
  );
}
