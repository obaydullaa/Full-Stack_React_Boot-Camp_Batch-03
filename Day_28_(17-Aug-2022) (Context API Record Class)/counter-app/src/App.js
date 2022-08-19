import { useContext } from "react";

import { useState } from "react";
import {CounterContext} from './context/CounterContext'



// // actin creator(redux)
//  function increment(dispatch, num) {
//   return dispatch({type: INCREMENT, payload: num})
//  }


function App() {
  // const [count, setCount] = useState(0);
  const context = useContext(CounterContext)
  const {handleIncrement, handleDecrement, handleReset, count} = context

  const [pickedValue, setPickedValue] = useState(null);
  const randomCardValues = [10, 13, 16, 21];

  return (
    <div className="container">
      <div className="counter-box">
        <h2>Count: {count} </h2>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={() => handleDecrement(1)}>Decrement</button>
        <button onClick={handleReset} className="reset-btn">
          Reset
        </button>
      </div>
      <IsOddOrEven count={count} pickedValue={pickedValue} />
      <RandomCard
        randomCardValues={randomCardValues}
        setPickedValue={setPickedValue}
      />
    </div>
  );
}

function IsOddOrEven({ count, pickedValue }) {
  const evenOrOdd = pickedValue % 2 === 0 ? "Even " : "Odd"
  return (
    // <h2>Number is {pickedValue && pickedValue % 2 === 0 ? "Even" : "Odd"}</h2>
    // <h2>
    //   Number is{" "}
    //   {pickedValue && pickedValue % 2 === 0 ? (
    //     <span className="even">Even</span>
    //   ) : (
    //     <span className="odd">Odd</span>
    //   )}
    // </h2>

    <h2>
      Number is{" "}
      {pickedValue && (
        <span className={evenOrOdd === 'even' ? 'even' : 'odd'}>
          {evenOrOdd}
        </span>
      )}
    </h2>

  );
}

function RandomCard({ randomCardValues, setPickedValue }) {
  return (
    <div>
      {randomCardValues.map((preValue, index) => {
        return (
          <div
            key={index}
            className="card"
            onClick={() => setPickedValue(preValue)}
          >
            {preValue}
          </div>
        );
      })}
    </div>
  );
}

export default App;
