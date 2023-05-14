import { PeopleType } from './Data';

export function getImageUrl(person:PeopleType) {
    return (
      'https://i.imgur.com/' +
      person.imageId +
      's.jpg'
    );
  }
  