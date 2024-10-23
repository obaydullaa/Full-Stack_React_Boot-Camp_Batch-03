// Event propagation
//==============================================

// export default function Toolbar() {
//     return (
//         <div
//             className="Toolbar"
//             onClick={() => {
//                 console.log("You clicked on the toolbar!");
//             }}
//         >
//             <button onClick={() => console.log("Playing!")}>Play Movie</button>
//             <button onClick={() => console.log("Uploading!")}>
//                 Upload Image
//             </button>
//         </div>
//     );
// }


// Stopping propagation 
//==============================================


// function Button({ onSmash, children }) {
//     return (
//       <button onClick={(e) => {
//         e.stopPropagation();
//         onSmash();
//       }}
//       >
//         {children}
//       </button>
//     );
//   }
  
//   export default function Toolbar() {
//     return (
//       <div className="Toolbar" onClick={() => {
//         console.log('You clicked on the toolbar!');
//       }}>
//         <Button onSmash={() => console.log('Playing!')}>
//           Play Movie
//         </Button>
//         <Button onSmash={() => console.log('Uploading!')}>
//           Upload Image
//         </Button>
//       </div>
//     );
//   }

// Preventing default behavior
//==============================================

// export default function Signup() {
//     return (
//         <form
//             onSubmit={(e) => {
//                 e.preventDefault();
//                 console.log("Submitting!");
//             }}
//         >
//             <input />
//             <button>Send</button>
//         </form>
//     );
// }




// export default function Signup() {
//     const handleSubmit = (e) => {
//         e.preventDefault();
//         console.log("Thank For this");
//     }
//     return (
//         <form
//             onSubmit={handleSubmit}
//         >
//             <input />
//             <button>Send</button>
//         </form>
//     );
// }


// Recap
// You can handle events by passing a function as a prop to an element like <button>.
// Event handlers must be passed, not called! onClick={handleClick}, not onClick={handleClick()}.
// You can define an event handler function separately or inline.
// Event handlers are defined inside a component, so they can access props.
// You can declare an event handler in a parent and pass it as a prop to a child.
// You can define your own event handler props with application-specific names.
// Events propagate upwards. Call e.stopPropagation() on the first argument to prevent that.
// Events may have unwanted default browser behavior. Call e.preventDefault() to prevent that.
// Explicitly calling an event handler prop from a child handler is a good alternative to propagation.