import { useState } from 'react';
import ContactList, { ContactsType } from './ContactList';
import EditContact from './EditContact';


const initialContacts: ContactsType[] = [
  { id: 0, name: 'Taylor', email: 'taylor@mail.com' },
  { id: 1, name: 'Alice', email: 'alice@mail.com' },
  { id: 2, name: 'Bob', email: 'bob@mail.com' }
];


export default function ContactManager() {
  const [contacts, setContacts] = useState<ContactsType[]>(initialContacts);
  const [selectedId, setSelectedId] = useState<number>(0);
  const selectedContact = contacts.find(c => c.id === selectedId);

  function handleSave(updatedData: ContactsType): void {
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
      {selectedContact && (<EditContact
        key={selectedId}
        initialData={selectedContact}
        onSave={handleSave}
      />)}
    </div>
  )
}

