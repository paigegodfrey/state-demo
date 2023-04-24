/* eslint-disable react-refresh/only-export-components */
import ListItem from "./components/ListItem/ListItem";
import "./App.css";

// dummy data
export const foodData = [
  {
    "food": "apple",
    "quantity": 6
  },
  {
    "food": "orange",
    "quantity": 1
  },
  {
    "food": "banana",
    "quantity": 10
  },
]

function App() {
  return (
    <div className="App">
      <h1 className="title">Shopping List</h1>

      {foodData?.map((item, idx) =>
        <ListItem
          food={item.food}
          quantity={item.quantity}
          key={idx} />
      )}

    </div>
  );
}

export default App;
