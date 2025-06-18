import { useState } from 'react';
import { Contact } from './App';

export default function EditContact({
  initialData,
  onSave,
}: {
  initialData: Contact;
  onSave: (data: Contact) => void;
}) {
  const [name, setName] = useState(initialData.name);
  const [email, setEmail] = useState(initialData.email);

  function handleSave() {
    onSave({
      id: initialData.id,
      name,
      email,
    });
  }

  function handleReset() {
    setName(initialData.name);
    setEmail(initialData.email);
  }

  return (
    <section>
      <label>
        Name:{' '}
        <input
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
        />
      </label>
      <label>
        Email:{' '}
        <input
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
      </label>
      <button onClick={handleSave}>
        Save
      </button>
      <button onClick={handleReset}>
        Reset
      </button>
    </section>
  );
}
