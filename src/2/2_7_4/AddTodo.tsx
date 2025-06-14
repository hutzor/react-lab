import { useState } from 'react';

export default function AddTodo({ onAddTodo }: { onAddTodo: (title: string) => void }) {
  const [title, setTitle] = useState('');

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setTitle(e.target.value);
  }

  function handleAdd() {
    onAddTodo(title);
    setTitle('');
  }

  return (
    <>
      <input
        placeholder="Add todo"
        value={title}
        onChange={handleChange}
      />
      <button onClick={handleAdd}>
        Add
      </button>
    </>
  );
}
