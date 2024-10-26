// Queueing a Series of State Updates
//=================================================
// Recap
// Setting state does not change the variable in the existing render, but it requests a new render.
// React processes state updates after event handlers have finished running. This is called batching.
// To update some state multiple times in one event, you can use setNumber(n => n + 1) updater function.