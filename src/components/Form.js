import { useState } from "react";

export default function Form({ onAddItems }) {
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

        onAddItems(newItem);

        setDescription("");
        setQuantity(1);
    };

    return (
        <form
            className="add-form"
            onSubmit={HandelForm}
        >
            <h3>What do you need for you'r 😍 trip ?</h3>
            <select
                value={quantity}
                onChange={
                    event => setQuantity(Number(event.target.value))
                }
            >
                {
                    Array.from({ length: 20 }, (_, i) => i + 1).map(el =>
                        <option
                            value={el}
                            key={el}
                        >
                            {el}
                        </option>)
                }
            </select>
            <input
                type="text"
                placeholder="Item..."
                value={description}
                onChange={event => setDescription(event.target.value)}
            />
            <button>add</button>
        </form>
    );
};