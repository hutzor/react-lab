import { useReducer } from 'react';
import Chat from './Chat';
import ContactList from './ContactList';
import { initialState, messengerReducer } from './messengerReducer';

export type Contact = {
  id: number;
  name: string;
  email: string;
};

const contacts: Contact[] = [
  { id: 0, name: 'Taylor', email: 'taylor@mail.com' },
  { id: 1, name: 'Alice', email: 'alice@mail.com' },
  { id: 2, name: 'Bob', email: 'bob@mail.com' }
];

export default function Messenger() {
  const [state, dispatch] = useReducer(messengerReducer, initialState);
  const contact = contacts.find(c => c.id === state.selectedId)!;

  return (
    <div>
      <ContactList
        contacts={contacts}
        selectedId={state.selectedId}
        dispatch={dispatch}
      />
      <Chat
        key={contact.id}
        message={state.message}
        contact={contact}
        dispatch={dispatch}
      />
    </div>
  );
}
