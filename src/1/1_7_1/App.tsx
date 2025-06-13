import { people } from './data.js';
import { getImageUrl } from './utils.js';

export type Person = {
  id: number;
  name: string;
  profession: string;
  accomplishment: string;
  imageId: string;
};

function PersonList({ title, people }: { title: string; people: Person[] }) {
  return (
    <section>
      <h2>{title}</h2>
      <ul>
        {people.map((person) => (
          <li key={person.id}>
            <img src={getImageUrl(person)} alt={person.name} />
            <p>
              <b>{person.name}:</b>{' '}
              {person.profession} known for {person.accomplishment}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default function List() {
  const chemists = people.filter((p) => p.profession === 'chemist');
  const others = people.filter((p) => p.profession !== 'chemist');

  return (
    <article>
      <h1>Scientists</h1>
      <PersonList title="Chemists" people={chemists} />
      <PersonList title="Other scientists" people={others} />
    </article>
  );
}
