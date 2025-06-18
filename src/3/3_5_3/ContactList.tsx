import { Contact } from "./App";
import { Action } from "./messengerReducer";

export default function ContactList({
  contacts,
  selectedId,
  dispatch
}: {
  contacts: Contact[];
  selectedId: number;
  dispatch: (action: Action) => void;
}) {
  const handleSelect = (id: number) => {
    dispatch({
      type: 'changed_selection',
      contactId: id,
    });
  };

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
