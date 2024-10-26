// State as a Snapshot
//=================================================
// Recap
// Setting state requests a new render.
// React stores state outside of your component, as if on a shelf.
// When you call useState, React gives you a snapshot of the state for that render.
// Variables and event handlers don’t “survive” re-renders. Every render has its own event handlers.
// Every render (and functions inside it) will always “see” the snapshot of the state that React gave to that render.
// You can mentally substitute state in event handlers, similarly to how you think about the rendered JSX.
// Event handlers created in the past have the state values from the render in which they were created.

