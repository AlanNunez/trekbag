import { useContext } from "react";
import Button from "./Button";
import { ItemsContext } from "../contexts/ItemsContextProvider";

export default function GroupButton() {
  const {
    handleMarkAllAsComplete,
    handleMarkAllAsIncomplete,
    handleResetToInitial,
    handleRemoveAllItems,
  } = useContext(ItemsContext);

  const secondayButtons = [
    {
      text: "Mark all as complete",
      onClick: handleMarkAllAsComplete,
    },
    {
      text: "Mark all as incomplete",
      onClick: handleMarkAllAsIncomplete,
    },
    {
      text: "Reset to initial",
      onClick: handleResetToInitial,
    },
    {
      text: "Remove all items",
      onClick: handleRemoveAllItems,
    },
  ];

  return (
    <section className="button-group">
      {secondayButtons.map((button) => (
        <Button key={button.text} type="secondary" onClick={button.onClick}>
          {button.text}
        </Button>
      ))}
    </section>
  );
}
