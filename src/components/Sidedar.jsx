import React from "react";
import AddItemForm from "./AddItemForm";
import GroupButton from "./GroupButton";
export default function Sidedar({
  handleAddItem,
  handleRemoveAllItems,
  handleMarkAllAsComplete,
  handleMarkAllAsIncomplete,
  handleResetToInitial,
}) {
  return (
    <div className="sidebar">
      <AddItemForm onAddItem={handleAddItem} />
      <GroupButton
        handleRemoveAllItems={handleRemoveAllItems}
        handleMarkAllAsComplete={handleMarkAllAsComplete}
        handleMarkAllAsIncomplete={handleMarkAllAsIncomplete}
        handleResetToInitial={handleResetToInitial}
      />
    </div>
  );
}
