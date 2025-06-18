import { useState } from 'react';
import Contact from './Contact';

export default function ContactList() {
  const [reverse, setReverse] = useState(false);
  const [showEmailMap, setShowEmailMap] = useState<Record<number, boolean>>({});

  function handleToggleEmail(id: number) {
    setShowEmailMap(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  }

  const displayedContacts = reverse
    ? [...contacts].reverse()
    : contacts;

  return (
    <>
      <label>
        <input
          type="checkbox"
          checked={reverse}
          onChange={e => setReverse(e.target.checked)}
        />
        {' '}
        Show in reverse order
      </label>
      <ul>
        {displayedContacts.map(contact => (
          <li key={contact.id}>
            <Contact
              contact={contact}
              showEmail={!!showEmailMap[contact.id]}
              onToggleEmail={() => handleToggleEmail(contact.id)}
            />
          </li>
        ))}
      </ul>
    </>
  );
}

export type ContactType = {
  id: number;
  name: string;
  email: string;
};

const contacts: ContactType[] = [
  { id: 0, name: 'Alice', email: 'alice@mail.com' },
  { id: 1, name: 'Bob', email: 'bob@mail.com' },
  { id: 2, name: 'Taylor', email: 'taylor@mail.com' }
];
