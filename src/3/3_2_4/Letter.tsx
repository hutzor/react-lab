import { LetterType } from './data';

export default function Letter({
  letter,
  onToggle,
  isSelected
}: {
  letter: LetterType;
  onToggle: (id: number) => void;
  isSelected: boolean;
}) {
  const handleChange = () => {
    onToggle(letter.id);
  };

  return (
    <li className={isSelected ? 'selected' : ''}>
      <label>
        <input
          type="checkbox"
          checked={isSelected}
          onChange={handleChange}
        />
        {letter.subject}
      </label>
    </li>
  );
}
