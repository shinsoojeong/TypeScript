import Panel from './Panel';
import { getImageUrl,  PeopleType} from './Utils';
import React from 'react';

type Person = {
    person: PeopleType;
}

export default function Profile({ person }: Person) {
  return (
    <Panel>
      <Header person={person} />
      <Avatar person={person} />
    </Panel>
  )
}

function Header({ person }: Person): React.ReactElement {
  return <h1>{person.name}</h1>;
}

function Avatar({ person }: Person): React.ReactElement {
  return (
    <img
      className="avatar"
      src={getImageUrl(person)}
      alt={person.name}
      width={50}
      height={50}
    />
  );
}
