import { useState } from 'react';
import Counter from './Counter';

export default function App() {
  const [show, setShow] = useState<boolean>(false);
  return (
    <>
      <button onClick={() => setShow(s => !s)}>{show ? 'Hide' : 'Show'} counter</button>
      <br />
      <hr />
      {show && <Counter />}
    </>
  );
}
