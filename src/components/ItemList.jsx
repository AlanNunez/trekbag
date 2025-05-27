export default function ItemList({ items }) {
  return (
    <ul>
      {items.map((item) => (
        <Item key={item.name} type={item.tracked}>
          {item.name}
        </Item>
      ))}
    </ul>
  );
}

function Item({ type, children }) {
  return (
    <li className="item">
      <label>
        <input checked={type} type="checkbox" onChange={() => {}} />
        {children}
      </label>
      <button>❌</button>
    </li>
  );
}
