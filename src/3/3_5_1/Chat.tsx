import { Action } from './messengerReducer';
import { Contact } from './App';

interface ChatProps {
  contact: Contact;
  message: string;
  dispatch: (action: Action) => void;
}

export default function Chat({
  contact,
  message,
  dispatch
}: ChatProps) {
  function handleChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    dispatch({
      type: 'edited_message',
      message: e.target.value
    });
  }

  return (
    <section className="chat">
      <textarea
        value={message}
        placeholder={`Chat to ${contact.name}`}
        onChange={handleChange}
      />
      <br />
      <button>
        Send to {contact.email}
      </button>
    </section>
  );
}
