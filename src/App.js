import { useState } from "react";


export default function App() {
  const [items, setItems] = useState([]);

  function handelAddItems(newItem) {
    setItems(items => [...items, newItem]);

  };

  function handelDeleteItems(id) {
    setItems(items => items.filter(item => item.id !== id));
  };

  function handelPackedItems(id) {
    setItems(items => items.map(item => item.id === id
      ? { ...item, packed: !item.packed } : item))
  };

  return (
    <div className="app">
      <Logo />
      <Form handelAddItems={handelAddItems} />
      <PackingList
        items={items}
        handelDeleteItems={handelDeleteItems}
        handelPackedItems={handelPackedItems}
      />
      <Stats items={items} />
    </div>
  );
};


function Logo() {
  return (
    <h1>🏝 Far Away 🛄</h1>
  );
}
function Form({ handelAddItems }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function HandelForm(e) {
    e.preventDefault();

    if (description === "") return;

    const newItem = {
      id: Date.now(),
      description,
      quantity,
      packed: false
    }

    handelAddItems(newItem);

    setDescription("");
    setQuantity(1);
  };

  return (
    <form className="add-form" onSubmit={HandelForm}>
      <h3>What do you need for you'r 😍 trip ?</h3>
      <select value={quantity} onChange={event => setQuantity(Number(event.target.value))}>
        {Array.from({ length: 20 }, (_, i) => i + 1).map(num => <option value={num} key={num}>{num}</option>)}
      </select>
      <input type="text" placeholder="Item..." value={description} onChange={event => setDescription(event.target.value)} />
      <button> add</button>
    </form>
  );
};


function PackingList({
  items,
  handelDeleteItems,
  handelPackedItems }) {
  return (
    <div className="list">
      <ul>
        {
          items.map(el => <Item
            item={el}
            handelDeleteItems={handelDeleteItems}
            handelPackedItems={handelPackedItems}
            key={el.id}
          />)
        }
      </ul>
    </div>
  );
};


function Item({
  item,
  handelDeleteItems,
  handelPackedItems
}) {
  return (
    <li>
      <input
        type="checkbox"
        value={item.packed}
        onChange={() => handelPackedItems(item.id)}
      >

      </input>
      <span
        style={item.packed ? { textDecoration: 'line-through' } : {}}
      >
        {item.quantity} {item.description}
      </span>
      <button onClick={() => handelDeleteItems(item.id)}>❌</button>
    </li >
  );
}


function Stats({ items }) {
  if (items.length === 0) return (
    <footer className="stats">
      <em>
        Start adding some items in your list
      </em>
    </footer>
  );
  const numOfItems = items.length;
  const numOfPackedItems = items.filter(item => item.packed).length
  const percentageOfPackedItems = Math.round((numOfPackedItems / numOfItems) * 100);
  return (
    <footer className="stats">
      <em>
        {
          percentageOfPackedItems === 100
            ? 'You got everything and ready to Go... ✈'
            : `💼 You have ${numOfItems} items on your list and you already packed ${numOfPackedItems} (${percentageOfPackedItems}%)`
        }
      </em>
    </footer>
  );
};