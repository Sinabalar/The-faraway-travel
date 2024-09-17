import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";
import ConfirmDialog from "./ConfirmDialog";


export default function App() {
  const [items, setItems] = useState([]);
  const [showConfrim, setShowConfrim] = useState(false);

  function handelAddItems(newItem) {
    setItems(items => [...items, newItem]);

  };

  function handelDeleteItems(id) {
    setItems(items => items.filter(el => el.id !== id));
  };

  function handelPackedItems(id) {
    setItems(items => items.map(el => el.id === id
      ? { ...el, packed: !el.packed }
      : el))
  };

  function handelClearList() {
    setShowConfrim(true);
  };
  function handelConfrimedClear() {
    setItems([]);
    setShowConfrim(false);
  };
  function handelCanseldClear() {
    setShowConfrim(false);
  };

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handelAddItems} />
      <PackingList
        items={items}
        handelDeleteItems={handelDeleteItems}
        handelPackedItems={handelPackedItems}
        handelClearList={handelClearList}
      />
      <Stats items={items} />
      {showConfrim && (
        <ConfirmDialog
          message={`you are clearing the ${items.length} item${items.length > 1 ? 's' : ''}. Are you sure ?`}
          onConfrim={handelConfrimedClear}
          onCansel={handelCanseldClear}
        />
      )}
    </div>
  );
};



