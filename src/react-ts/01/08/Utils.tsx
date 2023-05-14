export type PeopleType = {
name: string;
imageId: string;
}
  
export function getImageUrl(person:PeopleType) {
    return (
    'https://i.imgur.com/' +
    person.imageId +
    's.jpg'
    );
}
    