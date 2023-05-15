import { useReducer } from 'react';
import Chat from './Chat';
import ContactList from './ContactList';
import { initialState, InitialState, messengerReducer } from './messengerReducer';

//again
// 01,02,03,04 all
export default function Messenger() {
  const [state, dispatch] = useReducer(messengerReducer, initialState);
  const message = state.message;
  const contact: any = contacts.find((c) => c.id === state.selectedId);
  return (
    <div>
      <ContactList
        contacts={contacts}
        selectedId={state.selectedId}
        dispatch={dispatch}
      />
      <Chat
        key={contact.id}
        message={message}
        contact={contact}
        dispatch={dispatch}
      />
    </div>
  );
}

export type Contacts = {
  id: number;
  name: string;
  email: string;
}

const contacts: Contacts[] = [
  { id: 0, name: 'Taylor', email: 'taylor@mail.com' },
  { id: 1, name: 'Alice', email: 'alice@mail.com' },
  { id: 2, name: 'Bob', email: 'bob@mail.com' },
];
