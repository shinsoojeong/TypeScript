import { getImageUrl2 } from './Utils';

function Avatar({person}:any, {size}: any) {
  let thumbnailSize = 's';
  if(size > 90) {
    thumbnailSize = 'b'; 
  }

  return (
    <img
      className='avatar'
      src={getImageUrl2(person, thumbnailSize)}
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