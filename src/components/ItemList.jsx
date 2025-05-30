import Select from "react-select";
import Empty from "./Empty";
import { useState, useMemo, useContext } from "react";
import { ItemsContext } from "../contexts/ItemsContextProvider";

const options = [
  { value: "default", label: "Sort by default" },
  { value: "packed", label: "Sort by packed" },
  { value: "unpacked", label: "Sort by unpacked" },
];
export default function ItemList() { 
  const [sortBy, setSortBy] = useState("default");
  const { items, deleteSelectedItems, handleToggleItem } = useContext(ItemsContext);
  const sortedItems = useMemo(() => [...items].sort((a, b) => {
  
    if (sortBy === "unpacked") {
      return a.tracked - b.tracked;
    }
    if (sortBy === "packed") {
      return b.tracked - a.tracked;
    }

    return;
  }), [items, sortBy]);
  return ( 
    <ul>
      {items.length === 0 && <Empty />}
      {items.length > 0 && (
        <section className="sorting">
          <Select defaultValue={options[0]} options={options} onChange={(e) => setSortBy(e.value)}/>
        </section>
      )}
      {sortedItems.map((item) => (
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
