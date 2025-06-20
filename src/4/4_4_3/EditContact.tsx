import { useState } from 'react';
import { ContactType } from './App';

export default function EditContact({
  savedContact,
  onSave,
}: {
  savedContact: ContactType;
  onSave: (updatedData: ContactType) => void;
}) {
  const [name, setName] = useState(savedContact.name);
  const [email, setEmail] = useState(savedContact.email);

  const handleSaveClick = () => {
    const updatedData = {
      id: savedContact.id,
      name,
      email,
    };
    onSave(updatedData);
  };

  const handleResetClick = () => {
    setName(savedContact.name);
    setEmail(savedContact.email);
  };

  return (
    <section>
      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <button onClick={handleSaveClick}>Save</button>
      <button onClick={handleResetClick}>Reset</button>
    </section>
  );
}