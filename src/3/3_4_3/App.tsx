import { useState } from 'react';
import ContactList from './ContactList';
import EditContact from './EditContact';

export default function ContactManager() {
  const [contacts, setContacts] = useState(initialContacts);
  const [selectedId, setSelectedId] = useState(0);

  const selectedContact = contacts.find(c => c.id === selectedId)!;

  function handleSave(updatedData: Contact) {
    const nextContacts = contacts.map(c => {
      if (c.id === updatedData.id) {
        return updatedData;
      } else {
        return c;
      }
    });
    setContacts(nextContacts);
  }

  return (
    <div>
      <ContactList
        contacts={contacts}
        selectedId={selectedId}
        onSelect={id => setSelectedId(id)}
      />
      <hr />
      <EditContact
        key={selectedContact.id}          // ВАЖНО: добавлен key
        initialData={selectedContact}
        onSave={handleSave}
      />
    </div>
  );
}

export type Contact = {
  id: number;
  name: string;
  email: string;
};

const initialContacts: Contact[] = [
  { id: 0, name: 'Taylor', email: 'taylor@mail.com' },
  { id: 1, name: 'Alice', email: 'alice@mail.com' },
  { id: 2, name: 'Bob', email: 'bob@mail.com' }
];
