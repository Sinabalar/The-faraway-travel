export default function Stats({ items }) {
    if (items.length === 0) {
        return (
            <footer className="stats">
                <em>
                    Start adding some items in your list
                </em>
            </footer>
        );
    }
    const numOfItems = items.length;
    const numOfPackedItems = items.filter(el => el.packed).length;
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