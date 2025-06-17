import { useState } from 'react';

export default function EditProfile() {
  const [firstName, setFirstName] = useState('Jane');
  const [lastName, setLastName] = useState('Jacobs');
  const [isEditing, setIsEditing] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setIsEditing((prev) => !prev);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        First name:{' '}
        {isEditing ? (
          <input
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        ) : (
          <b>{firstName}</b>
        )}
      </label>
      <label>
        Last name:{' '}
        {isEditing ? (
          <input
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        ) : (
          <b>{lastName}</b>
        )}
      </label>
      <button type="submit">
        {isEditing ? 'Save Profile' : 'Edit Profile'}
      </button>
      <p>
        <i>Hello, {firstName} {lastName}!</i>
      </p>
    </form>
  );
}
