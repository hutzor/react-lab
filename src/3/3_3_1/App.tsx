import { useState } from 'react';

export default function SyncedInputs() {
  const [value, setValue] = useState('');

  return (
    <>
      <Input label="First input" value={value} onChange={setValue} />
      <Input label="Second input" value={value} onChange={setValue} />
    </>
  );
}

function Input({
  label,
  value,
  onChange
}: {
  label: string;
  value: string;
  onChange: (newValue: string) => void;
}) {
  return (
    <label>
      {label}{' '}
      <input
        value={value}
        onChange={e => onChange(e.target.value)}
      />
    </label>
  );
}
