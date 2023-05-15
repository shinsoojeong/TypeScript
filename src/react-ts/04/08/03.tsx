import { useState, useEffect } from 'react';

export default function Counter() {
  const count = useCounter(1000);
  return <h1>Seconds passed: {count}</h1>;
}


function useCounter(delay: number) {
  const [count, setCount] = useState<number>(0);
  useInterval(() => {
    setCount(c => c + 1);
  }, delay);
  return count;
}


function useInterval(onTick: () => void, delay: number) {
  useEffect(() => {
    const id = setInterval(onTick, delay);
    return () => clearInterval(id);
  }, [onTick, delay]);
}
