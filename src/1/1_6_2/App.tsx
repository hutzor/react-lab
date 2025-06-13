type ItemProps = {
  name: string;
  importance: number;
};

function Item({ name, importance }: ItemProps) {
  return (
    <li className="item">
      {name}
      {importance > 0 && <i> (Важность: {importance})</i>}
    </li>
  );
}

export default function PackingList() {
  return (
    <section>
      <h1>Sally Ride&apos;s Packing List</h1>
      <ul>
        <Item name="Space suit" importance={9} />
        <Item name="Helmet with a golden leaf" importance={0} />
        <Item name="Photo of Tam" importance={6} />
      </ul>
    </section>
  );
}
