import ListItem from "./components/ListItem/ListItem";
import "./App.css";

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
      <div>
        {foodData?.map((item, idx) =>
          <ListItem
            food={item.food}
            initialQuantity={item.quantity}
            key={idx} />
        )}
      </div>
    </div>
  );
}

export default App;
