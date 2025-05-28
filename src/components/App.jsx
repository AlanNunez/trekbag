import { useState } from "react";
import { defaultItems } from "../lib/contants";
import BackgroundHeading from "./BackgroundHeading";
import Footer from "./Footer";
import Header from "./Header";
import ItemList from "./ItemList";
import Sidedar from "./Sidedar";

function App() {

  const [items, setItems] = useState(defaultItems);

  const handleAddItem = (item) => {
    const newItem = { name: item, id: new Date().getTime(), tracked: false };
    setItems((items) => [...items, newItem]);
  };

  const handleRemoveAllItems = () => {
    setItems([]); 
  }

  const handleMarkAllAsComplete = () => {
    setItems((items) => items.map(item => ({ ...item, tracked: true })));
  };

  const handleMarkAllAsIncomplete = () => {
    setItems((items) => items.map(item => ({ ...item, tracked: false })));
  };

  const handleResetToInitial = () => {
    setItems(defaultItems);
  };

  return (
    <>
      <BackgroundHeading />
      <main>
        <Header />
        <ItemList items={items}/>
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
