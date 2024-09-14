import { useState } from 'react';
import OddOrEven from './OddOrEven';
import CardNum from './CardNum';
import AppClass from './Appclass';

import './style.css';

function App() {

  const [count, setCount ] = useState(0)
  const randomCards = [30, 33, 37, 42]
  // const [randomCards, setRandomCards ] = useState()
  const [pickedNum, setPickedNum ] = useState(null)

  const incrementCount = () => {
    // setCount( count + 1);
    setCount((prevCount) => prevCount + 1)
  }

  const decrementCount = () => {
    setCount(prevCount => {
      return prevCount - 1;
    })
  }

  const resetCount = () => {
    setCount(0);
  }

  const pickedValueAlt = (cardValue) => {
    setPickedNum(cardValue)
  }

  return (
    <div className="app">
      <p>Count: {count}</p>
      <button onClick={incrementCount}>Increment</button>
      <button onClick={decrementCount}>Decrement</button>
      <button onClick={resetCount} >Reset</button>
      <OddOrEven count={count} pickedNum={pickedNum}/>

      {randomCards.map((cardValue, index) => {
        return (
          <CardNum 
            key={cardValue}
            cardValue={cardValue}
            setPickedNum={setPickedNum}
            pickedValueAlt ={pickedValueAlt}
          />
        )
      })}
      <AppClass />
      
    </div>
  )
  
}

export default App;

/*
import { useState } from 'react'; 
import OddOrEven  from './OddOrEven';
import CardNum from './CardNum';

import './style.css';

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

*/
