/**
    Responding to Events
    React lets you add event handlers to your JSX. Event handlers are your own functions that will be triggered in response to interactions like clicking, hovering, focusing form inputs, and so on.

    You will learn
        Different ways to write an event handler
        How to pass event handling logic from a parent component
        How events propagate and how to stop them
 */

// export default function App() {
//     function handleClick() {
//         console.log('You clicked me!');
//       }

//     return (
//       <button onClick={handleClick}>
//         I dont do anything
//       </button>
//     );
//   }

/**
    Reading props in event handlers 
    =======================================================================
 */

// function AlertButton({ message, children }) {
//     return (
//       <button onClick={() => alert(message)}>
//         {children}
//       </button>
//     );
//   }

//   export default function Toolbar() {
//     return (
//       <div>
//         <AlertButton message="Playing!">
//           Play Movie
//         </AlertButton>
//         <AlertButton message="Uploading!">
//           Upload Image
//         </AlertButton>
//       </div>
//     );
//   }

// function Button({ onClick, children }) {
//     return <button onClick={onClick}>{children}</button>;
// }

// function PlayButton({ movieName }) {
//     function handlePlayClick() {
//         alert(`Playing ${movieName}!`);
//     }

//     return <Button onClick={handlePlayClick}>Play {movieName}</Button>;
// }

// function UploadButton() {
//     return <Button onClick={() => alert("Uploading!")}>Upload Image</Button>;
// }

// export default function Toolbar() {
//     return (
//         <div>
//             <PlayButton movieName="Kiki's Delivery Service" />
//             <UploadButton />
//         </div>
//     );
// }

// export default function App() {
//     return (
//         <Toolbar
//             onPlayMovie={() => alert("Playing!")}
//             onUploadImage={() => alert("Uploading!")}
//         />
//     );
// }

// function Toolbar({ onPlayMovie, onUploadImage }) {
//     return (
//         <div>
//             <Button onSmash={onPlayMovie}>Play Movie </Button>
//             <Button onSmash={onUploadImage}>Upload Image</Button>
//         </div>
//     );
// }

// function Button({ onSmash, children }) {
//     return <button onClick={onSmash}>{children}</button>;
// }

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
//             <button onClick={() => console.log("Uploading!")}>Upload Image</button>
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


// State: A Component's Memory
//=================================================

import { useState } from 'react';

export default function MovingDot() {
  const [position, setPosition] = useState({
    x: 0,
    y: 0
  });
  return (
    <div
      onPointerMove={e => {
        setPosition({
          x: e.clientX,
          y: e.clientY
        })
          
      }}
      style={{
        position: 'relative',
        width: '100vw',
        height: '100vh',
      }}>
      <div style={{
        position: 'absolute',
        backgroundColor: 'red',
        borderRadius: '50%',
        transform: `translate(${position.x}px, ${position.y}px)`,
        left: -10,
        top: -10,
        width: 20,
        height: 20,
      }} />
    </div>
  );
}
