import Logo from "./Logo";
import Counter from "./Counter";

export default function Header({ numberOfPackedItems, totalNumberOfItems }) {
  return (
    <header>
      <Logo />
      <Counter
        numberOfPackedItems={numberOfPackedItems}
        totalNumberOfItems={totalNumberOfItems}
      />
    </header>
  );
}
