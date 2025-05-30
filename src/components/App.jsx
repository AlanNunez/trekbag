import { useEffect, useState } from "react";
import { defaultItems } from "../lib/contants";
import BackgroundHeading from "./BackgroundHeading";
import Footer from "./Footer";
import Header from "./Header";
import ItemList from "./ItemList";
import Sidedar from "./Sidedar";
import Logo from "./Logo";
import Counter from "./Counter";
import ItemsContextProvider from "../contexts/ItemsContextProvider";

function App() {
  return (
    <>
      <BackgroundHeading />
      <main>
        <ItemsContextProvider>
          <Header />
          <ItemList />
          <Sidedar />
        </ItemsContextProvider>
      </main>
      <Footer />
    </>
  );
}

export default App;
