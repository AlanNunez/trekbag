import React, { useState, useEffect, createContext } from "react";
import { defaultItems } from "../lib/contants";

export const ItemsContext = createContext();
export default function ItemsContextProvider({ children }) {
  const [items, setItems] = useState(() => {
    const localItems = localStorage.getItem("items");
    return localItems ? JSON.parse(localItems) : defaultItems;
  });

  const deleteSelectedItems = (id) => {
    const newItems = items.filter((item) => id !== item.id);
    setItems(newItems);
  };

  const handleAddItem = (item) => {
    const newItem = { name: item, id: new Date().getTime(), tracked: false };
    setItems((items) => [...items, newItem]);
    console.log(newItem);
  };

  const handleRemoveAllItems = () => {
    setItems([]);
  };

  const handleMarkAllAsComplete = () => {
    setItems((items) => items.map((item) => ({ ...item, tracked: true })));
  };

  const handleMarkAllAsIncomplete = () => {
    setItems((items) => items.map((item) => ({ ...item, tracked: false })));
  };

  const handleResetToInitial = () => {
    setItems(defaultItems);
  };

  const handleToggleItem = (id) => {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, tracked: !item.tracked } : item
      )
    );
  };

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  return <ItemsContext.Provider value={
    {
      items,
      deleteSelectedItems,
      handleAddItem,
      handleRemoveAllItems,
      handleMarkAllAsComplete,
      handleMarkAllAsIncomplete,
      handleResetToInitial,
      handleToggleItem,
    }
  }
  >{children}</ItemsContext.Provider>;
}
