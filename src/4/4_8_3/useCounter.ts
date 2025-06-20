import { useState } from 'react';
import { useInterval } from './useInterval';

export function useCounter(delay: number = 1000) {
  const [count, setCount] = useState(0);

  useInterval(() => {
    setCount(prevCount => prevCount + 1);
  }, delay);

  return count;
}