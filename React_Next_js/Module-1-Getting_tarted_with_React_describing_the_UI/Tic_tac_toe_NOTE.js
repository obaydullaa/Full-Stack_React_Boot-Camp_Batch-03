Date: 16 Sep 2024

1.create react projects: npm create vite@latest tic-tac-toe -- --template react
2. Install tailwind css: npm install -D tailwindcss postcss autoprefixer
3. tailwind configure: npx tailwindcss init -p
tailwind.config.js: 
	  content: [
                       "./index.html",
                      "./src/**/*.{js,ts,jsx,tsx}",
                   ],

4. clean: src=> index.css ( all clean ) and use tailwind directory
			@tailwind base;
			@tailwind components;
			@tailwind utilities;


/**
 *  Part: 01
 */



/**
  Game
    -> Board
      -> Square
    -> History
 */

    function Square({value}) {
		return  <button className="bg-white border border-gray-400 h-12 w-12 m-1 leading-9 text-lg  cursor-pointer">
		{value}
	</button>
	  }
  
  export default function Board() {
	  return (
		  <>
			  <div>
				<Square value="1" />
				<Square value="2" />
				<Square value="3" />
			  </div>
			  <div>
				<Square value="4" />
				<Square value="5" />
				<Square value="6" />
			  </div>
			  <div>
				<Square value="7" />
				<Square value="8" />
				<Square value="9" />
			  </div>
		  </>
	  );
  }
  

  /**
   * Lifting the state
   */