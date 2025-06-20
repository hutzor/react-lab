import { useState, useEffect } from 'react';

export function useCounter(delay: number) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, delay);

    return () => clearInterval(id);
  }, [delay]);

  return count;
}