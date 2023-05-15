import { useState } from 'react';
import { MyInput2 } from './MyInput';

export default function Form() {
  const [show, setShow] = useState<boolean>(false);
  const [firstName, setFirstName] = useState<string>('Taylor');
  const [lastName, setLastName] = useState<string>('Swift');
  const [upper, setUpper] = useState<boolean>(false);
  const name: string = firstName + ' ' + lastName;
  return (
    <>
      <button onClick={() => setShow(s => !s)}>{show ? 'Hide' : 'Show'} form</button>
      <br />
      <hr />
      {show && (
        <>
          <label>
            Enter your first name:
            <MyInput2
              value={firstName}
              onChange={e => setFirstName(e.target.value)}
              shouldFocus={true}
            />
          </label>
          <label>
            Enter your last name:
            <MyInput2
              value={lastName}
              onChange={e => setLastName(e.target.value)}
              shouldFocus={false}
            />
          </label>
          <p>Hello, <b>{upper ? name.toUpperCase() : name}</b></p>
        </>
      )}
    </>
  );
}
