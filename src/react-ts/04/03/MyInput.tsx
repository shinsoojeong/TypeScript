import React, { useEffect, useRef } from 'react';

type MyInputType = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  shouldFocus?: boolean;
}

export default function MyInput({ value, onChange }: MyInputType) {
  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (ref.current) {
      ref.current.focus();
    }
  }, []);

  return (
    <input
      ref={ref}
      value={value}
      onChange={onChange}
    />
  );
}


export function MyInput2({ shouldFocus, value, onChange }: MyInputType) {
  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (shouldFocus) {
      if (ref.current) {
        ref.current.focus();
      }
    }
  }, [shouldFocus]);

  return (
    <input
      ref={ref}
      value={value}
      onChange={onChange}
    />
  );
}