import { PlaceType } from './Data';

export function getImageUrl(place: PlaceType) {
  return (
    'https://i.imgur.com/' +
    place.imageId +
    'l.jpg'
  );
}
