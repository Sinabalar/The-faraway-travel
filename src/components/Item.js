export default function Item({
    item,
    onDeleteItems,
    onPackedItems
}) {
    return (
        <li>
            <input
                type="checkbox"
                value={item.packed}
                onChange={() => onPackedItems(item.id)}
            >
            </input>

            <span
                style={
                    item.packed
                        ? { textDecoration: 'line-through' }
                        : {}
                }
            >
                {item.quantity} {item.description}
            </span>
            <button
                onClick={() => onDeleteItems(item.id)}
            >
                ❌
            </button>
        </li >
    );
}