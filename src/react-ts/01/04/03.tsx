
const baseImgUrl: string = 'https://i.imgur.com/';

type Person = {
  name: string;
  imgUrl: string;
  imgSize: string;
  theme: {
    backgroundColor: string;
    color: string;
  };
};

let person: Person = {
  name: 'Gregorio Y. Zara',
  imgUrl: '7vQD0fP',
  imgSize: 's',
  theme: {
    backgroundColor: 'black',
    color: 'yellow'
  }
};

export default function TodoList() {
  return (
    <div style={person.theme}>
      <h1>{person.name}'s Todos</h1>
      <img
        className="avatar"
        src={baseImgUrl + person.imgUrl + person.imgSize + '.jpg'}
        alt={person.name}
      />
      <ul>
        <li>Improve the videophone</li>
        <li>Prepare aeronautics lectures</li>
        <li>Work on the alcohol-fuelled engine</li>
      </ul>
    </div>
  );
}
