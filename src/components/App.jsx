import { useState } from "react";
import { defaultItems } from "../lib/contants";
import BackgroundHeading from "./BackgroundHeading";
import Footer from "./Footer";
import Header from "./Header";
import ItemList from "./ItemList";
import Sidedar from "./Sidedar";

function App() {

  const [items, setItems] = useState(defaultItems);
  return (
    <>
      <BackgroundHeading />
      <main>
        <Header />
        <ItemList items={items}/>
        <Sidedar setItems={setItems}/>
      </main>
      <Footer />
    </>
  );
}

export default App;
