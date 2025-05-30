import { useContext } from "react";
import Counter from "./Counter";
import Logo from "./Logo";
import { ItemsContext } from "../contexts/ItemsContextProvider";

export default function Header() {
  const { numberOfItemsPacked, totalNumberOfItems } = useContext(ItemsContext);
  return (
    <header>
      <Logo />
      <Counter numberOfItemsPacked={numberOfItemsPacked} totalNumberOfItems={totalNumberOfItems}/>
    </header>
  );
}
