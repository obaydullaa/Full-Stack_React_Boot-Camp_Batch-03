/*
	1.2_react_installation_and_development_environment_setup
	===================================================

	1. Node js Install
	2. NPM Install
	3.  Project Create with vite
	npm create vite@latest
		proeject name:  .
		select a framwork: > react
		select a variant: > Javascript
		
	Run the project: ->  npm run dev

	4.  vs : extention ==> ESLint
		Prettier - Code formatter
		live server
		pathautocompleter
		auto rename tag
*/

/*

	1.4 - Basics of React Components Your first component
	=========================================
*/

// Gallery.jsx

function Profile() {
    return (
        <img src="https://i.imgur.com/MK3eW3As.jpg" alt="Katherine Johnson" />
    );
}

export default function Gallery() {
    return (
        <section>
            <h1>Amazing scientists</h1>
            <Profile />
            <Profile />
            <Profile />
            <Profile />
            <Profile />
            <Profile />
        </section>
    );
}

// main.jsx

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <App />
    </StrictMode>
);
