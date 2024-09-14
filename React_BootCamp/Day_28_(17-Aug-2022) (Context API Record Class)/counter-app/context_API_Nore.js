
/**
 * useReducer Hook:
 * =================================
 */

const INCREMENT = 'INCREMENT'

const countReducer = (state, action) => {
  if(action.type === INCREMENT){
    return state + action.payload
  } else{
    return state
  }

  // console.log(state, action)
} 

function App() {
  // const [count, setCount] = useState(0);

  const [count, dispatch] = useReducer(countReducer, 0)

  const handleIncrement = () => {
    // setCount((prevCount) => prevCount + 1);
    dispatch({type: INCREMENT, payload: 2})
  };
}

Action: হলো জাস্ট একটা ইভেন্ট ।
ditpatch: হলো সেই ইভেন্ট টাকে তৈরি করা, রিচ করা । 
useReducer: একটা হুক যেটা ফাংশন এবং ইনিসিয়াল স্টেট দিয়ে দিতে হবে । সেই ফাংশনের মধ্য নিজের প্রয়োজনে ডাটা আপডেট করতে হবে । ডাটা আপডেট করতে হবে dispatch ইউস করে। dispatch এর মধ্য যাই করি না কেন আপডেটেড ভ্যালু সেট হবে count এর মধ্য ।






