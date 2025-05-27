import Button from "./Button";

const buttons = ["Mark all as complete", "Mark all as incomplete", "Reset to initial", "Remove all items"];
export default function GroupButton() {
  return (
    <section className="button-group">
      {buttons.map((button) => (
        <Button key={button} type="secondary">{button}</Button>
      ))}
    </section>
  );
}
