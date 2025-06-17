import { useState } from 'react';

export default function App() {
  const [reverse, setReverse] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const fields = reverse ? (
    <>
      <Field label="Last name" value={lastName} onChange={setLastName} />
      <Field label="First name" value={firstName} onChange={setFirstName} />
    </>
  ) : (
    <>
      <Field label="First name" value={firstName} onChange={setFirstName} />
      <Field label="Last name" value={lastName} onChange={setLastName} />
    </>
  );

  return (
    <>
      {fields}
      <ReverseOrderCheckbox
        checked={reverse}
        onChange={setReverse}
      />
    </>
  );
}

interface FieldProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
}

function Field({ label, value, onChange }: FieldProps) {
  return (
    <label>
      {label}:{' '}
      <input
        type="text"
        value={value}
        placeholder={label}
        onChange={e => onChange(e.target.value)}
      />
    </label>
  );
}

interface ReverseOrderCheckboxProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
}

function ReverseOrderCheckbox({ checked, onChange }: ReverseOrderCheckboxProps) {
  return (
    <label>
      <input
        type="checkbox"
        checked={checked}
        onChange={e => onChange(e.target.checked)}
      />
      Reverse order
    </label>
  );
}
