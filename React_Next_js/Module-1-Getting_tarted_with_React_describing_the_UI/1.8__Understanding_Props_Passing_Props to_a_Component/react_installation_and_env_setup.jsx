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

/**
 * 1.7 - Basics of JSX React's Markup - JavaScript in JSX with Curly Braces
 */

// But what if you want to dynamically specify the src or alt text? You could use a value from JavaScript by replacing " and " with { and }:
	//<img className="avatar" src={avatar} alt={description} />


	export default function TodoList() {
		const name = 'Gregorio Y. Zara';
		return (
		  <h1>{name}'s To Do List</h1>
		);
	  }
	  

	const today = new Date();

	function formatDate(date) {
	return new Intl.DateTimeFormat(
		'en-US',
		{ weekday: 'long' }
	).format(date);
	}

	export default function TodoList() {
	return (
		<h1>To Do List for {formatDate(today)}</h1>
	);
	}

	<ul style={
		{
		  backgroundColor: 'black',
		  color: 'pink'
		}
	  }>

	export default function TodoList() {
		return (
		  <ul style={{
			backgroundColor: 'black',
			color: 'pink'
		  }}>
			<li>Improve the videophone</li>
			<li>Prepare aeronautics lectures</li>
			<li>Work on the alcohol-fuelled engine</li>
		  </ul>
		);
	  }
	  

	  {/* Inline style properties are written in camelCase. For example, HTML <ul style="background-color: black"> would be written as <ul style={{ backgroundColor: 'black' }}>  in your component. */}

	  Now you know almost everything about JSX:

    JSX attributes inside quotes are passed as strings.
    Curly braces let you bring JavaScript logic and variables into your markup.
    They work inside the JSX tag content or immediately after = in attributes.
    {{ and }} is not special syntax: it’s a JavaScript object tucked inside JSX curly braces.



/**
 * 1.8 - Understanding Props - Passing Props to a Component
 */

export default function app() {
    return (
        <div>
            <div>
                <Profile>
                    <Avatar />
                </Profile>
            </div>
        </div>
    );
}

//  received children props from avatar 
export default function Profile({ children }) {
    return (
        <div>
            <h2>{children}</h2>
        </div>
    );
}


	