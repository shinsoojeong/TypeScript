import { useState } from 'react';

export type ContactType = {
  id: number;
  name: string;
  email: string;
}

export default function Contact({ contact }: { contact: ContactType }) {
  const [expanded, setExpanded] = useState<boolean>(false);
  return (
    <>
      <p><b>{contact.name}</b></p>
      {expanded &&
        <p><i>{contact.email}</i></p>
      }
      <button onClick={() => {
        setExpanded(!expanded);
      }}>
        {expanded ? 'Hide' : 'Show'} email
      </button>
    </>
  );
}
