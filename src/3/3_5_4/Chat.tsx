import { Action } from './messengerReducer';
import { Contact } from './App';

type ChatProps = {
  contact: Contact;
  message: string;
  dispatch: (action: Action) => void;
};

export default function Chat({ contact, message, dispatch }: ChatProps) {
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    dispatch({
      type: 'edited_message',
      message: e.target.value,
    });
  };

  const handleSend = () => {
    alert(`Sending "${message}" to ${contact.email}`);
    dispatch({ type: 'sent_message' });
  };

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
