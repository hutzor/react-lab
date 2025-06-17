import { useState } from 'react';

export default function App() {
  const [showHint, setShowHint] = useState(false);
  const [text, setText] = useState('');

  function handleToggleHint() {
    setShowHint(prev => !prev);
  }

  return (
    <div>
      {showHint && (
        <p>
          <i>Hint: Your favorite city?</i>
        </p>
      )}
      <Form text={text} setText={setText} />
      <button onClick={handleToggleHint}>
        {showHint ? 'Hide hint' : 'Show hint'}
      </button>
    </div>
  );
}

interface FormProps {
  text: string;
  setText: (text: string) => void;
}

function Form({ text, setText }: FormProps) {
  function handleChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    setText(e.target.value);
  }

  return (
    <textarea
      value={text}
      onChange={handleChange}
    />
  );
}
