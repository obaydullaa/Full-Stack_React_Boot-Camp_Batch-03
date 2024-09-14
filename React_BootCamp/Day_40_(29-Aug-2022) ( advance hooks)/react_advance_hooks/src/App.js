import { useState } from 'react'; 
import OddOrEven  from './OddOrEven';
import CardNum from './CardNum';

import './style.css';

/**
 * Class Topic:
 * -----------------
 *  React Advance Hook
 * -useReduce
 * -useCallback
 * -useMemo
 * -memo (Higher order function)
 * 
 * Context API
 * parent-children-children (props Drilling)
 * 
 */

function App() {
  const [count, setCount] = useState(0);
  const randomCards = [30, 33, 37, 42];
  // const [randomCards, setRandonCards] = useState([30, 33, 37, 42]);
  const [pickedNum, setPickedNum] = useState(null);

  // setCount(10)
  const incrementCount = () => {
    // setCount(count + 1)
    // setCount(() =>{
    //   return count + 1
    // })
    setCount((prevCount) => prevCount + 1)
  }

  const decrementCount = () => {
// const myVar  = setCount(() => count - 1)
     setCount(() => count - 1) 
  }

  const resetCount = () => {
    setCount(0)
  }

  const pickedValueAlt =  (cardNum) => {
    setPickedNum(cardNum)
  }

  return (
    <div className="app">
      <p>Count: {count}</p>
      <button onClick={incrementCount}>Increment</button>
      <button onClick={decrementCount}>Decrement</button>
      <button onClick={resetCount}>Reset</button>

      <OddOrEven count={count} pickedNum={pickedNum}/>
     { 
     randomCards.map(cardValue => {
        return <CardNum key={cardValue}
         cardValue={cardValue} 
         setPickedNum={setPickedNum}
         pickedValueAlt={pickedValueAlt}
        />
      })
      }
    </div>
  );
}

export default App;


