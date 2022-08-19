import { createContext } from "react";
import { useReducer } from "react";
import { INCREMENT, DECREMENT, RESETCOUNT } from "./action";
import { countReducer } from "./countReduce";

// Create a context
export const CounterContext = createContext()


// create a provider
export const CountProvider = ({children}) => {

    
 const [count, dispatch] = useReducer(countReducer, 0)



 const handleIncrement = () => {
   // setCount((prevCount) => prevCount + 1);
   dispatch({type: INCREMENT, payload: 1})
 
 };
 const handleDecrement = () => {
   // setCount((prevCount) => prevCount - 1);
   dispatch({type: DECREMENT, payload: 1})
   
 };

 const handleReset = () => {
   // setCount(0);
   dispatch({type: RESETCOUNT, payload: 1})
 };

 const value = {
    count,
    handleDecrement,
    handleIncrement,
    handleReset,
 }
    
    return (
        <CounterContext.Provider value={value}>
            {children}
        </CounterContext.Provider>
    )
}