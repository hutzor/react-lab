import { Action } from './messengerReducer';
import { Contact } from './App';

export default function Chat({
  contact,
  message,
  dispatch
}: {
  contact: Contact;
  message: string;
  dispatch: (action: Action) => void;
}) {
  function handleChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    dispatch({
      type: 'edited_message',
      message: e.target.value,
    });
  }

  function handleSend() {
    alert(`Sending "${message}" to ${contact.email}`);
    dispatch({ type: 'sent_message' });
  }

  return (
    <section className="chat">
      <textarea
        value={message}
        placeholder={`Chat to ${contact.name}`}
        onChange={handleChange}
      />
      <br />
      <button onClick={handleSend}>
        Send to {contact.email}
      </button>
    </section>
  );
}
