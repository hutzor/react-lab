import { useState } from 'react';
import { letters } from './data.js';
import Letter from './Letter.js';

export default function MailClient() {
  const [selectedIds, setSelectedIds] = useState<number[]>([]);

  const selectedCount = selectedIds.length;

  const handleToggle = (toggledId: number) => {
    setSelectedIds(prevSelected =>
      prevSelected.includes(toggledId)
        ? prevSelected.filter(id => id !== toggledId)
        : [...prevSelected, toggledId]
    );
  };

  return (
    <>
      <h2>Inbox</h2>
      <ul>
        {letters.map(letter => (
          <Letter
            key={letter.id}
            letter={letter}
            isSelected={selectedIds.includes(letter.id)}
            onToggle={handleToggle}
          />
        ))}
      </ul>
      <hr />
      <p>
        <b>You selected {selectedCount} letters</b>
      </p>
    </>
  );
}
