import { useImmer } from 'use-immer';
import React from 'react';
import Background from './Background';
import Box from './Box';

type InitialPositionType = {
  x: number;
  y: number;
}

const initialPosition: InitialPositionType = {
  x: 0,
  y: 0
};

export default function Canvas() {
  const [shape, updateShape] = useImmer({
    color: 'orange',
    position: initialPosition
  });

  function handleMove(dx: number, dy: number) {
    updateShape(draft => {
      draft.position.x += dx;
      draft.position.y += dy;
    });
  }

  // 01 
  const handle: React.ChangeEventHandler<HTMLSelectElement> = (e) => {
    updateShape(draft => {
      draft.color = e.target.value;
    });
  }

  // 02
  function handleColorChange(e: React.ChangeEvent<HTMLSelectElement>): void {
    updateShape(draft => {
      draft.color = e.target.value;
    });
  }

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
      <Background
        position={initialPosition}
      />
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
