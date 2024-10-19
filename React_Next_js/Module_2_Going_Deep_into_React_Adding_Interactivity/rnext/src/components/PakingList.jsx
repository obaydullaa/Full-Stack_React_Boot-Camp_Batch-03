function Item({ name, isPacked }) {
    let itemCount = "";
    if (isPacked) {
        itemCount = name + "✅";
    } else {
        itemCount = name;
    }
    return <li className="item">{itemCount}</li>;
}

export default function PackingList() {
    return (
        <section>
            <h1>Sally Rides Packing List</h1>
            <ul>
                <Item isPacked={true} name="Space suit" />
                <Item isPacked={true} name="Helmet with a golden leaf" />
                <Item isPacked={false} name="Photo of Tam" />
            </ul>
        </section>
    );
}
