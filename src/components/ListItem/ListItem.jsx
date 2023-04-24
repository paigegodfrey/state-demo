/* eslint-disable react/prop-types */
import { useState } from 'react';
import "./ListItem.css";

function ListItem({ food }) {
  const [quantity, setQuantity] = useState(0);

  function increment() {
    setQuantity(count => count + 1);
  }

  function decrement() {
    setQuantity(count => count + 1);
  }

  return (
    <div className="ListItem">
      <h1>{food}: {quantity}</h1>
      <span>
        <button onClick={decrement}>-</button>
        <button onClick={increment}>+</button>
      </span>
    </div>
  );
}

export default ListItem;
