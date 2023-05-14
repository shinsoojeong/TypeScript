import { getImageUrl } from './Utils';

type Person = {
  imageId: string;
  name: string;
}

type ProfileData = {
  person: Person;
  size: number;
}

function Avatar({person, size}: ProfileData) {
  let thumbnailSize = 's';
  if(size > 90) {
    thumbnailSize = 'b'; 
  }

  return (
    <img
      className='avatar'
      src={getImageUrl(person.imageId, thumbnailSize)}
      alt={person.name}
      width={size}
      height={size}
    />
  )
}

export default function Profile(){
  return (
    <>
      <Avatar
        size = {40}
        person={{
          name: 'Shin Su Jeong',
          imageId: '7vQD0fP'
        }}
      />

      <Avatar
        size = {100}
        person={{
          name: 'Shin Su Jeong',
          imageId: '7vQD0fP'
        }}
      />
    </>
  )
}