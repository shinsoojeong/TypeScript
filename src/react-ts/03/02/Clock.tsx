import React, { useState } from 'react';

type Props = {
  color: string;
  time: React.ReactNode;
}

export default function Clock(props: Props) {
  return (
    <h1 style={{ color: props.color }}>
      {props.time}
    </h1>
  );
}
