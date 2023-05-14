import React, { useState } from 'react';

type Children = {
    children: React.ReactNode;
}

export default function Panel({ children }: Children) {
  const [open, setOpen] = useState(true);
  return (
    <section className="panel">
      <button onClick={() => setOpen(!open)}>
        {open ? 'Collapse' : 'Expand'}
      </button>
      {open && children}
    </section>
  );
}
