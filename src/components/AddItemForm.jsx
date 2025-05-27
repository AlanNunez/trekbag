import { useRef, useState } from "react";
import Button from "./Button";

export default function AddItemForm({ setItems }) {
  const [text, setText] = useState("");
  const inputRef = useRef();
  const handleSubmit = (e) => {
    if (!e) {
      inputRef.current.focus();
      return;
    }

    e.preventDefault();
    setItems((items) => [
      ...items,
      { id: new Date().getTime(), name: text, tracked: false },
    ]);
    setText("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <h2>Add an item</h2>
      <input
        ref={inputRef}
        value={text}
        onChange={(e) => setText(e.target.value)}
        type="text"
        autoFocus
      />
      <Button>Add to list</Button>
    </form>
  );
}
