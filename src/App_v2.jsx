import ShoppingList from "./components/ShoppingList/ShoppingList";
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
      <ShoppingList items={foodData}/>
    </div>
  );
}

export default App;
