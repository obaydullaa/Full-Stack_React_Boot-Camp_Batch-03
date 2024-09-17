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

//   Steps: 02

	import { useState } from "react";

	function Square({ value }) {
	
		return (
			<button
				className="bg-white border border-gray-400 h-12 w-12 m-1 leading-9 text-lg  cursor-pointer"
				onClick={onSquareClick}
			>
				{value}
			</button>
		);
	}
	
	export default function Board() {
		const [squares, setSquares] = useState(Array(9).fill(null));
	
		console.log(squares);
		console.log(setSquares);
	
		return (
			<>
				<div className="flex">
					<Square value={squares[0]} />
					<Square value={squares[1]} />
					<Square value={squares[2]} />
				</div>
				<div className="flex">
					<Square value={squares[3]} />
					<Square value={squares[4]} />
					<Square value={squares[5]} />
				</div>
				<div className="flex">
					<Square value={squares[6]} />
					<Square value={squares[7]} />
					<Square value={squares[8]} />
				</div>
			</>
		);
	}
	

	// step: 03

	
function Square({ value, squareClick }) {
    return (
        <button
            className="bg-white border border-gray-400 h-12 w-12 m-1 leading-9 text-lg  cursor-pointer"
            onClick={squareClick}
        >
            {value}
        </button>
    );
}

export default function Board() {
    const [squares, setSquares] = useState(Array(9).fill(null));

    function handClick() {
      console.log('clicked')
    }

    return (
        <>
            <div className="flex">
                <Square value={squares[0]}  squareClick={handClick} />
                <Square value={squares[1]}  squareClick={handClick} />
                <Square value={squares[2]}  squareClick={handClick} />
            </div>
            <div className="flex">
                <Square value={squares[3]}  squareClick={handClick} />
                <Square value={squares[4]}  squareClick={handClick} />
                <Square value={squares[5]}  squareClick={handClick} />
            </div>
            <div className="flex">
                <Square value={squares[6]}  squareClick={handClick} />
                <Square value={squares[7]}  squareClick={handClick} />
                <Square value={squares[8]}  squareClick={handClick} />
            </div>
        </>
    );
}
