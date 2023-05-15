import { useState } from 'react';
import { Contacts } from './01';
import { InitialState } from './messengerReducer';


export type CharProps = {
  contact: Contacts;
  message: string;
  dispatch: any;
}
// again
export default function Chat({ contact, message, dispatch }: CharProps) {
  return (
    <section className="chat">
      <textarea
        value={message}
        placeholder={'Chat to ' + contact.name}
        onChange={(e) => {
          dispatch({
            type: 'edited_message',
            message: e.target.value,
          });
        }}
      />
      <br />
      <button>Send to {contact.email}</button>
    </section>
  );
}

