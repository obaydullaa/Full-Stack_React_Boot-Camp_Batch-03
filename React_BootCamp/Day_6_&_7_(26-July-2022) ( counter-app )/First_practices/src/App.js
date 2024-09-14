import { useState } from "react";
import IsOddOrEven from "./IsOddOrEven";
import RandomCard from "./RandomCard";

function App() {
  const [count, setCount] = useState(0);
  const [pickedValue, setPickedValue] = useState(null);
  const cardValues = [10, 13, 18, 20];
  //  const count = 0;

  const handleIncrement = (num) => {
    // setCount(count + 1)
    setCount((prevCount) => prevCount + num);
  };
  const handleDecrement = (num) => {
    // setCount(count - 1)
    setCount((prevCount) => prevCount - num);
  };
  const handleReset = () => {
    setCount(0);
  };

  return (
    <div className="container">
      <div className="counter-box">
        <h2>Count: {count} </h2>
        <button onClick={() => handleIncrement(1)}>Increment</button>
        <button onClick={() => handleDecrement(1)}>Decrement</button>
        <button onClick={handleReset} className="reset-btn">
          Reset
        </button>
      </div>
      <IsOddOrEven count={count} pickedValue={pickedValue} />
      <RandomCard cardValues={cardValues} setPickedValue={setPickedValue} />
    </div>
  );
}

export default App;
