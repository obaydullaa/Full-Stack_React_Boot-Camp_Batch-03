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

	< style={
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


/**
 * 1.9__Conditional_Rendering
 */	



function Item({ name, isPacked }) {
  if (isPacked) {
    return <li className="item">{name} ✅</li>;
  }
  return <li className="item">{name}</li>;
}

export default function PackingList() {
  return (
    <section>
      <h1>Sally Ride's Packing List</h1>
      <ul>
        <Item 
          isPacked={true} 
          name="Space suit" 
        />
        <Item 
          isPacked={true} 
          name="Helmet with a golden leaf" 
        />
        <Item 
          isPacked={false} 
          name="Photo of Tam" 
        />
      </ul>
    </section>
  );
}


// Modify Condition 
//-----------------------------
function Item({ name, isPacked }) {
    return (
        <li className="item">
            {name} {isPacked && "✅"}
        </li>
    );
}

export default function PackingList() {
    return (
        <section>
            <h1>Sally Rides Packing List</h1>
            <ul>
                <Item isPacked={true} name="Space suit" />
                <Item isPacked={true} name="Helmet with a golden leaf" />
                <Item isPacked={false} name="Photo of Tam" />
            </ul>
        </section>
    );
}


// another big condition Or more condition 
//----------------------------------------------

function Item({ name, isPacked }) {
    let itemCount = "";
    if (isPacked) {
        itemCount = name + "✅";
    } else {
        itemCount = name;
    }
    return <li className="item">{itemCount}</li>;
}

export default function PackingList() {
    return (
        <section>
            <h1>Sally Rides Packing List</h1>
            <ul>
                <Item isPacked={true} name="Space suit" />
                <Item isPacked={true} name="Helmet with a golden leaf" />
                <Item isPacked={false} name="Photo of Tam" />
            </ul>
        </section>
    );
}



/**
 * 1.10__Rendering_Lists
 * 
 */

const people = [
  "Creola Katherine Johnson: mathematician",
  "Mario José Molina-Pasquel Henríquez: chemist",
  "Mohammad Abdus Salam: physicist",
  "Percy Lavon Julian: chemist",
  "Subrahmanyan Chandrasekhar: astrophysicist",
];



export default function app() {
  let itemList = people.map((person) => <li>{person}</li>);

  return (
      <div>
          <ul>{itemList}</ul>
      </div>
  );
}


// filer profession => name

const people = [
  {
      id: 0,
      name: "Creola Katherine Johnson",
      profession: "mathematician",
  },
  {
      id: 1,
      name: "Mario José Molina-Pasquel Henríquez",
      profession: "chemist",
  },
  {
      id: 2,
      name: "Mohammad Abdus Salam",
      profession: "physicist",
  },
  {
      id: 3,
      name: "Percy Lavon Julian",
      profession: "chemist",
  },
  {
      id: 4,
      name: "Subrahmanyan Chandrasekhar",
      profession: "astrophysicist",
  },
];

export default function app() {
  let chemists = people.filter((person) => person.profession === "chemist");
  let itemList = chemists.map((chemist) => <li key={chemist.id}>{chemist.name}</li>); //

  return (
      <div>
          <ul>
              <li>{itemList}</li>
          </ul>
      </div>
  );
}


/**
 * 1.11 Pure Components Keeping Components Pure
 * --------------------------------------------------
 */


function Cup({ guest }) {
  return <h2>Tea cup for guest #{guest}</h2>;
}

export default function TeaSet() {
  return (
    //// all ways declarative way te pathabo jano dakhei esasy te boja jai ...it call "declarative syntax"
    // another way name is single responsibility principle
    <>
      <Cup guest={1} />  
      <Cup guest={2} />
      <Cup guest={3} />
    </>
  );
}


// Very Important : When possible, try to express your logic with rendering alone. You’ll be surprised how far this can take you!


/**
 * 1.12 Understanding Complex React UI
 */


// Recap

//     Trees are a common way to represent the relationship between entities. They are often used to model UI.
//     Render trees represent the nested relationship between React components across a single render.
//     With conditional rendering, the render tree may change across different renders. With different prop values, components may render different children components.
//     Render trees help identify what the top-level and leaf components are. Top-level components affect the rendering performance of all components beneath them and leaf components are often re-rendered frequently. Identifying them is useful for understanding and debugging rendering performance.
//     Dependency trees represent the module dependencies in a React app.
//     Dependency trees are used by build tools to bundle the necessary code to ship an app.
//     Dependency trees are useful for debugging large bundle sizes that slow time to paint and expose opportunities for optimizing what code is bundled.
