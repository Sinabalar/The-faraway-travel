import { useState } from "react";
import Item from "./Item"
export default function PackingList({
    items,
    handelDeleteItems,
    handelPackedItems,
    handelClearList }) {

    const [sortBy, setSortBy] = useState('input');
    let sortedItems;


    switch (sortBy) {
        case ('input'):
            sortedItems = items;
            break;
        case ('description'):
            sortedItems = items.slice().sort((a, b) => a.description.localeCompare(b.description));
            break;
        case ('packed'):
            sortedItems = items.slice().sort((a, b) => Number(a.packed) - Number(b.packed));
            break;
        default:
            sortedItems = items;
    };


    return (
        <div className="list">
            <ul>
                {
                    sortedItems.map(el =>
                        <Item
                            item={el}
                            onDeleteItems={handelDeleteItems}
                            onPackedItems={handelPackedItems}
                            key={el.id}
                        />)
                }
            </ul>
            {
                items.length >= 1
                    ? (<div className="actions">
                        <select
                            value={sortBy}
                            onChange={event => setSortBy(event.target.value)}
                        >


                            <option value={'input'}>Sort by input order</option>
                            <option value={'description'}>Sort by description</option>
                            <option value={'packed'}>Sort by packed status</option>
                        </select>
                        <button onClick={handelClearList}>clear list</button>
                    </div>) : null


            }
        </div>
    );
};