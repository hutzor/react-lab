import { useEffect, useState, useRef } from 'react';
import { usePointerPosition } from './usePointerPosition';

type Position = { x: number; y: number };

function useDelayedValue(value: Position, delay: number): Position {
  const [delayedValue, setDelayedValue] = useState<Position>(value);
  const queue = useRef<{ value: Position; timestamp: number }[]>([]);

  useEffect(() => {
    const now = Date.now();
    queue.current.push({ value, timestamp: now });

    const interval = setInterval(() => {
      const currentTime = Date.now();

      while (queue.current.length > 0 && currentTime - queue.current[0].timestamp >= delay) {
        const item = queue.current.shift();
        if (item) {
          setDelayedValue(item.value);
        }
      }
    }, 30);

    return () => clearInterval(interval);
  }, [value, delay]);

  return delayedValue;
}

export default function Canvas() {
  const pos1 = usePointerPosition();
  const pos2 = useDelayedValue(pos1, 100);
  const pos3 = useDelayedValue(pos2, 200);
  const pos4 = useDelayedValue(pos3, 100);
  const pos5 = useDelayedValue(pos4, 50);

  return (
    <>
      <Dot position={pos1} opacity={1} />
      <Dot position={pos2} opacity={0.8} />
      <Dot position={pos3} opacity={0.6} />
      <Dot position={pos4} opacity={0.4} />
      <Dot position={pos5} opacity={0.2} />
    </>
  );
}

function Dot({ position, opacity }: { position: Position; opacity: number }) {
  return (
    <div
      style={{
        position: 'absolute',
        backgroundColor: 'pink',
        borderRadius: '50%',
        opacity,
        transform: `translate(${position.x}px, ${position.y}px)`,
        pointerEvents: 'none',
        left: -20,
        top: -20,
        width: 40,
        height: 40,
      }}
    />
  );
}