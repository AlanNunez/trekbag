import { useState } from "react";
import { defaultItems } from "../lib/contants";
import BackgroundHeading from "./BackgroundHeading";
import Footer from "./Footer";
import Header from "./Header";
import ItemList from "./ItemList";
import Sidedar from "./Sidedar";

function App() {
  const [items, setItems] = useState(defaultItems);

  const deleteSelectedItems = (id) => {
    const newItems = items.filter((item) => id !== item.id);
    setItems(newItems);
  };

  const handleAddItem = (item) => {
    const newItem = { name: item, id: new Date().getTime(), tracked: false };
    setItems((items) => [...items, newItem]);
    console.log(newItem);
  };

  const handleRemoveAllItems = () => {
    setItems([]);
  };

  const handleMarkAllAsComplete = () => {
    setItems((items) => items.map((item) => ({ ...item, tracked: true })));
  };

  const handleMarkAllAsIncomplete = () => {
    setItems((items) => items.map((item) => ({ ...item, tracked: false })));
  };

  const handleResetToInitial = () => {
    setItems(defaultItems);
  };

  const handleToggleItem = (id) => {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, tracked: !item.tracked } : item
      )
    );
  };
 
  return (
    <>
      <BackgroundHeading />
      <main>
        <Header numberOfPackedItems={items.filter((item) => item.tracked).length} totalNumberOfItems={items.length} />
        <ItemList items={items} deleteSelectedItems={deleteSelectedItems} handleToggleItem={handleToggleItem} />
        <Sidedar
          handleAddItem={handleAddItem}
          handleRemoveAllItems={handleRemoveAllItems}
          handleMarkAllAsComplete={handleMarkAllAsComplete}
          handleMarkAllAsIncomplete={handleMarkAllAsIncomplete}
          handleResetToInitial={handleResetToInitial}
        />
      </main>
      <Footer />
    </>
  );
}

export default App;
