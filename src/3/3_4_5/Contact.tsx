import { ContactType } from './App';

export default function Contact({
  contact,
  showEmail,
  onToggleEmail,
}: {
  contact: ContactType;
  showEmail: boolean;
  onToggleEmail: () => void;
}) {
  const { name, email } = contact;

  return (
    <>
      <p>
        <b>{name}</b>
      </p>
      {showEmail && (
        <p>
          <i>{email}</i>
        </p>
      )}
      <button onClick={onToggleEmail}>
        {showEmail ? 'Hide' : 'Show'} email
      </button>
    </>
  );
}
