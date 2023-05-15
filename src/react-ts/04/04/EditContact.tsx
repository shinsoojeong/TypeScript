import { useState } from 'react';
import {InitialContacts} from './03';

export default function EditContact(props: EditorProps) {
  return (
    <EditForm
      {...props}
      key={props.savedContact.id}
    />
  );
}

type EditorProps = {
  savedContact: InitialContacts;
  onSave: (updatedData: InitialContacts) => void;
}

function EditForm({ savedContact, onSave }: EditorProps) {
  const [name, setName] = useState(savedContact.name);
  const [email, setEmail] = useState(savedContact.email);

  return (
    <section>
      <label>
        Name:{' '}
        <input
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
        />
      </label>
      <label>
        Email:{' '}
        <input
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
      </label>
      <button onClick={() => {
        const updatedData = {
          id: savedContact.id,
          name: name,
          email: email
        };
        onSave(updatedData);
      }}>
        Save
      </button>
      <button onClick={() => {
        setName(savedContact.name);
        setEmail(savedContact.email);
      }}>
        Reset
      </button>
    </section>
  );
}
