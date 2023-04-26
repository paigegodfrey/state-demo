import "./ListItemDumb.css";

function ListItemDumb({ food, quantity = 1 }) {
  return (
    <div className="ListItemDumb">
      <h1>Item: {food}</h1>
      <h2>Quantity: {quantity}</h2>
    </div>
  );
}

export default ListItemDumb;
