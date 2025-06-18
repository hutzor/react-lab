import { Contact } from './App';
import { Action } from './messengerReducer';

interface ContactListProps {
  contacts: Contact[];
  selectedId: number;
  dispatch: (action: Action) => void;
}

export default function ContactList({
  contacts,
  selectedId,
  dispatch
}: ContactListProps) {
  function handleSelect(id: number) {
    dispatch({
      type: 'changed_selection',
      contactId: id
    });
  }

  return (
    <section className="contact-list">
      <ul>
        {contacts.map(contact => (
          <li key={contact.id}>
            <button onClick={() => handleSelect(contact.id)}>
              {selectedId === contact.id
                ? <b>{contact.name}</b>
                : contact.name}
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}
