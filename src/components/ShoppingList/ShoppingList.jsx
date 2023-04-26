/* eslint-disable react/prop-types */
import ListItem from "../ListItem/ListItem";
import "./ShoppingList.css"

function ShoppingList({ items }) {
  return (
    <div className="ShoppingList">
      <h1 className="title">Shopping List</h1>
      {items?.map((item, idx) =>
        <ListItem
          food={item.food}
          initialQuantity={item.quantity}
          key={idx} />
      )}
    </div>
  );
}

export default ShoppingList;
