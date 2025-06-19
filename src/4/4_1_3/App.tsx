import { useRef } from 'react';

function DebouncedButton({ onClick, children }: {
  onClick: () => void, children: React.ReactNode
}) {
  const timeoutRef = useRef<number>();

  return (
    <button onClick={() => {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => {
        onClick();
      }, 1000);
    }}>
      {children}
    </button>
  );
}

export default function Dashboard() {
  return (
    <>
      <DebouncedButton onClick={() => alert('Spaceship launched!')}>
        Launch the spaceship
      </DebouncedButton>
      <DebouncedButton onClick={() => alert('Soup boiled!')}>
        Boil the soup
      </DebouncedButton>
      <DebouncedButton onClick={() => alert('Lullaby sung!')}>
        Sing a lullaby
      </DebouncedButton>
    </>
  );
}