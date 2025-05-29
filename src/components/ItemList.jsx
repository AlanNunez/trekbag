import Empty from "./Empty";

export default function ItemList({
  items,
  deleteSelectedItems,
  handleToggleItem,
}) {
  return (
    <ul>
      {items.length === 0 && (
       <Empty />
      )}
      {items.map((item) => (
        <Item
          key={item.name}
          type={item.tracked}
          deleteSelectedItems={deleteSelectedItems}
          handleToggleItem={handleToggleItem}
          id={item.id}
        >
          {item.name}
        </Item>
      ))}
    </ul>
  );
}

function Item({ type, children, deleteSelectedItems, id, handleToggleItem }) {
  return (
    <li className="item">
      <label>
        <input
          onChange={() => handleToggleItem(id)}
          checked={type}
          type="checkbox"
        />
        {children}
      </label>
      <button onClick={() => deleteSelectedItems(id)}>❌</button>
    </li>
  );
}
