import { useState } from 'react';

type PanelProps = {
  children: React.ReactNode;
};

export default function Panel({ children }: PanelProps) {
  const [isOpen, setIsOpen] = useState(true);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <section className="panel">
      <button onClick={handleToggle}>
        {isOpen ? 'Collapse' : 'Expand'}
      </button>
      {isOpen && children}
    </section>
  );
}
