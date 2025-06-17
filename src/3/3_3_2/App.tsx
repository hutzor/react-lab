import { useState } from 'react';
import { foods, filterItems, Item } from './data';

export default function FilterableList() {
  const [query, setQuery] = useState('');
  const filteredItems = filterItems(foods, query);

  return (
    <>
      <SearchBar query={query} onQueryChange={setQuery} />
      <hr />
      <List items={filteredItems} />
    </>
  );
}

interface SearchBarProps {
  query: string;
  onQueryChange: (value: string) => void;
}

function SearchBar({ query, onQueryChange }: SearchBarProps) {
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    onQueryChange(e.target.value);
  }

  return (
    <label>
      Search:{' '}
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Enter search query"
      />
    </label>
  );
}

interface ListProps {
  items: Item[];
}

function List({ items }: ListProps) {
  return (
    <table>
      <tbody>
        {items.map(food => (
          <tr key={food.id}>
            <td>{food.name}</td>
            <td>{food.description}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
