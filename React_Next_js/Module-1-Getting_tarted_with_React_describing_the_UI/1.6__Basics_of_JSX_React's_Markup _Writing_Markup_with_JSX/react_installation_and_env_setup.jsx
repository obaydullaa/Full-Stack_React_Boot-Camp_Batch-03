/*
	1.2_react_installation_and_development_environment_setup
	===================================================

	1. Node js Install
	2. NPM Install
	3.  Project Create with vite
	npm create vite@latest
		proeject name:  .
		elect a framwork: > react
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

/**
 * 1.5__Basics_of_React_Components_Importing_Exporting_Components
 *
 */

// All component functionality tak this component
// import Gallery from "./components/Gallery";  // No need to .jsx or Extension

//import Gallery from "./components/Gallery";  // Default import Component
//export default function Gallery() {  // Default Export Component

/**
 * 1.6 - Basics of JSX React's Markup - Writing Markup with JSX
 */

// 1. Return a single root element
//----------------------------------------
// <> </> This empty tag is called a Fragment.

// 2. Close all the tags
//---------------------------------
// Single tag will be closed exam: img tag

// 3. camelCase all most of the things!
//---------------------------------
//  className="photo"
