import React from "react";
import AddItemForm from "./AddItemForm";
import GroupButton from "./GroupButton";
export default function Sidedar({ handleAddItem, handleRemoveAllItems
 }) {
  return (
    <div className="sidebar">
      <AddItemForm onAddItem={handleAddItem} />
      <GroupButton onRemoveAllItems={handleRemoveAllItems}/>
    </div>
  );
}
