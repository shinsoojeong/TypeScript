import React, { useRef, useState } from 'react';
import ContactList from './ContactList';
import EditContact from './EditContact';

type DashBoardType = {
  onClick: () => void;
  children: React.ReactNode;
}

// again
function DebouncedButton({ onClick, children }: DashBoardType) {
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  return (
    <button onClick={() => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      timeoutRef.current = setTimeout(() => {
        const initialContacts: InitialContacts[] = [
          { id: 0, name: 'Taylor', email: 'taylor@mail.com' },
          { id: 1, name: 'Alice', email: 'alice@mail.com' },
          { id: 2, name: 'Bob', email: 'bob@mail.com' }
        ];

        function ContactManager() {
          const [
            contacts,
            setContacts
          ] = useState<InitialContacts[]>(initialContacts);
          const [
            selectedId,
            setSelectedId
          ] = useState<number>(0);
          const selectedContact = contacts.find(c =>
            c.id === selectedId
          ) as InitialContacts;

          function handleSave(updatedData: InitialContacts) {
            const nextContacts = contacts.map(c => {
              if (c.id === updatedData.id) {
                return updatedData;
              } else {
                return c;
              }
            });
            setContacts(nextContacts);
          }

          return (
            <div>
              <ContactList
                contacts={contacts}
                selectedId={selectedId}
                onSelect={(id: number) => setSelectedId(id)}
              />
              <hr />
              <EditContact
                savedContact={selectedContact}
                onSave={handleSave}
              />
            </div>
          )
        }
        onClick();
      }, 1000);
    }}>
      {children}
    </button>
  );
}

export type InitialContacts = {
  id: number;
  name: string;
  email: string;
}

export default function Dashboard() {
  return (
    <>
      <DebouncedButton
        onClick={() => alert('Spaceship launched!')}
      >
        Launch the spaceship
      </DebouncedButton>
      <DebouncedButton
        onClick={() => alert('Soup boiled!')}
      >
        Boil the soup
      </DebouncedButton>
      <DebouncedButton
        onClick={() => alert('Lullaby sung!')}
      >
        Sing a lullaby
      </DebouncedButton>
    </>
  )
}
