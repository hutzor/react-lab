import { useState } from 'react';

export default function AddItem({
  onAddItem,
}: {
  onAddItem: (title: string) => void;
}) {
  const [title, setTitle] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleClick = () => {
    setTitle('');
    onAddItem(title);
  };

  return (
    <>
      <input
        placeholder="Add item"
        value={title}
        onChange={handleChange}
      />
      <button onClick={handleClick}>
        Add
      </button>
    </>
  );
}
