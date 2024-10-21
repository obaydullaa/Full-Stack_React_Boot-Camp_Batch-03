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

  