import { INCREMENT, DECREMENT, RESETCOUNT } from "./action";


export const countReducer = (state, action) => {
    const {type, payload} = action;
    switch(type) {
      case INCREMENT:
        return state + payload;
      case DECREMENT:
        return state - payload;
      case RESETCOUNT:
        return 0;
      default:
        return state;
    }
    
   }