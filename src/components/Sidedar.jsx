import React from "react";
import AddItemForm from "./AddItemForm";
import GroupButton from "./GroupButton";
export default function Sidedar({ setItems }) {
  return (
    <div className="sidebar">
      <AddItemForm setItems={setItems}/>
      <GroupButton />
    </div>
  );
}
