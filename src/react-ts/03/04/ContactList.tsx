export type ContactsType = {
  id: number;
  name: string;
  email: string;
}


type ContactListProps = {
  contacts: ContactsType[];
  selectedId: number;
  onSelect: (a: number) => void;
}

export default function ContactList({ contacts, selectedId, onSelect }: ContactListProps) {
  return (
    <section>
      <ul>
        {contacts.map(contact =>
          <li key={contact.id}>
            <button onClick={() => {
              onSelect(contact.id);
            }}>
              {contact.id === selectedId ?
                <b>{contact.name}</b> :
                contact.name
              }
            </button>
          </li>
        )}
      </ul>
    </section>
  );
}
