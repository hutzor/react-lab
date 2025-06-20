import { useState } from 'react';
import ContactList from './ContactList';
import EditContact from './EditContact';

export default function ContactManager() {
  const [contacts, setContacts] = useState(initialContacts);
  const [selectedId, setSelectedId] = useState(0);

  const selectedContact = contacts.find(contact => contact.id === selectedId)!;

  function handleSave(updatedData: ContactType) {
    const nextContacts = contacts.map(contact =>
      contact.id === updatedData.id ? updatedData : contact
    );

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
        key={selectedContact.id}
        savedContact={selectedContact}
        onSave={handleSave}
      />
    </div>
  );
}

export type ContactType = {
  id: number;
  name: string;
  email: string;
};

const initialContacts: ContactType[] = [
  { id: 0, name: 'Taylor', email: 'taylor@mail.com' },
  { id: 1, name: 'Alice', email: 'alice@mail.com' },
  { id: 2, name: 'Bob', email: 'bob@mail.com' },
];