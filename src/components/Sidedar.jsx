import React, { useContext } from "react";
import AddItemForm from "./AddItemForm";
import GroupButton from "./GroupButton";
import { ItemsContext } from "../contexts/ItemsContextProvider";
export default function Sidedar() {
  const { handleAddItem } = useContext(ItemsContext);
  
  console.log("Sidebar rendered");
  return (
  <div className="sidebar">
      <AddItemForm onAddItem={handleAddItem} />
      <GroupButton />
    </div>
  );
}
