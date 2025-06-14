import { useState, ChangeEvent } from 'react';
import Background from './Background';
import Box from './Box';

export type Position = { x: number; y: number };

const initialPosition: Position = { x: 0, y: 0 };

interface Shape {
  color: string;
  position: Position;
}

export default function Canvas() {
  const [shape, setShape] = useState<Shape>({
    color: 'orange',
    position: initialPosition,
  });

  const handleMove = (dx: number, dy: number) => {
    setShape(prevShape => ({
      ...prevShape,
      position: {
        x: prevShape.position.x + dx,
        y: prevShape.position.y + dy,
      },
    }));
  };

  const handleColorChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setShape(prevShape => ({
      ...prevShape,
      color: e.target.value,
    }));
  };

  return (
    <>
      <select
        value={shape.color}
        onChange={handleColorChange}
      >
        <option value="orange">orange</option>
        <option value="lightpink">lightpink</option>
        <option value="aliceblue">aliceblue</option>
      </select>
      <Background position={initialPosition} />
      <Box
        color={shape.color}
        position={shape.position}
        onMove={handleMove}
      >
        Drag me!
      </Box>
    </>
  );
}
