import { useState } from "react";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 3, description: "Socks", quantity: 12, packed: true },
  { id: 2, description: "Charger", quantity: 1, packed: false },
];


export default function App() {
  return (
    <div className="app">
      <Logo />
      <Form />
      <PackingList />
      <Stats />
    </div>
  );
}
function Logo() {
  return (
    <h1>🏝 Far Away 🛄</h1>
  );
}
function Form() {
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
    console.log(newItem);

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
}
function PackingList() {
  return (
    <div className="list">
      <ul>
        {
          initialItems.map(el => <Item item={el} key={el.id} />)
        }
      </ul>
    </div>
  );
};
function Stats() {
  return (
    <footer className="stats">
      <em>
        💼 You have X items on your list and you already packed X (X%)
      </em>
    </footer>
  );
}
function Item({ item }) {
  return (
    <li>
      <span style={item.packed ? { textDecoration: 'line-through' } : {}}>
        {item.quantity} {item.description}
      </span>
      <button>❌</button>
    </li >
  );
}