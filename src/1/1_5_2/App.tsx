import { getImageUrl } from './util';

export type Person = {
  name: string;
  imageId: string;
};

function Avatar({ person, size }: { person: Person; size: number }) {
  const thumbnailSize = size < 90 ? 's' : 'b';

  return (
    <img
      className="avatar"
      src={getImageUrl(person, thumbnailSize)}
      alt={person.name}
      width={size}
      height={size}
    />
  );
}

export default function Profile() {
  return (
    <div>
      <Avatar
        person={{
          name: 'Katsuko Saruhashi',
          imageId: 'KatsukoSaruhashi'
        }}
        size={100}
      />

      <Avatar
        person={{
          name: 'Gregorio Y. Zara',
          imageId: 'GregorioYZara'
        }}
        size={40}
      />
    </div>
  );
}