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

  const removeAllItems = () => {
    setItems([]); 
  }

  return (
    <>
      <BackgroundHeading />
      <main>
        <Header />
        <ItemList items={items}/>
        <Sidedar handleAddItem={handleAddItem} handleRemoveAllItems={removeAllItems} />
      </main>
      <Footer />
    </>
  );
}

export default App;
