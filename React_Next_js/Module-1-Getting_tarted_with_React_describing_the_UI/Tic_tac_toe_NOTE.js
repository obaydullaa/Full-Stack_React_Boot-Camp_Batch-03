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
//-----------------------------------------------------------------------------------------------------------

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
	//-------------------------------------------------------------------------------

	
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


// step: 03 (winner dealer done)
//-------------------------------------------------------------

/**
  Game
    -> Board
      -> Square
    -> History
 */

	import { useState } from "react";

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
		const [xIsNext, SetXIsNext] = useState(true);
	
		const winner = calculateWinner(squares);
	
		let status;
	
		if (winner) {
			status = `Winner: ${winner}`;
		} else {
			status = "Next Player:" + (xIsNext ? "X" : "O");
		}
	
		function handClick(i) {
	
		  if (squares[i] || calculateWinner(squares)) {
			  return;
		  }
	
			const nextSquares = squares.slice();
			if (xIsNext) {
				nextSquares[i] = "X";
			} else {
				nextSquares[i] = "O";
			}
	
			setSquares(nextSquares);
			SetXIsNext(!xIsNext);
		}
	
		return (
			<>
				<div>{status}</div>
				<div className="flex">
					<Square value={squares[0]} squareClick={() => handClick(0)} />
					<Square value={squares[1]} squareClick={() => handClick(1)} />
					<Square value={squares[2]} squareClick={() => handClick(2)} />
				</div>
				<div className="flex">
					<Square value={squares[3]} squareClick={() => handClick(3)} />
					<Square value={squares[4]} squareClick={() => handClick(4)} />
					<Square value={squares[5]} squareClick={() => handClick(5)} />
				</div>
				<div className="flex">
					<Square value={squares[6]} squareClick={() => handClick(6)} />
					<Square value={squares[7]} squareClick={() => handClick(7)} />
					<Square value={squares[8]} squareClick={() => handClick(8)} />
				</div>
			</>
		);
	}
	
	function calculateWinner(squares) {
		const lines = [
			[0, 1, 2],
			[3, 4, 5],
			[6, 7, 8],
			[0, 3, 6],
			[1, 4, 7],
			[2, 5, 8],
			[0, 4, 8],
			[2, 4, 6],
		];
		for (let i = 0; i < lines.length; i++) {
			const [a, b, c] = lines[i];
			if (
				squares[a] &&
				squares[a] === squares[b] &&
				squares[a] === squares[c]
			) {
				return squares[a];
			}
		}
		return null;
	}
	
	// problem: slice is not a function
	//-------------------------------------------------------------------------------------------

	/**
  Game
    -> Board
      -> Square
    -> History
 */

import { useState } from "react";

function Square({ value, onSquareClick }) {
    return (
        <button
            className="bg-white border border-gray-400 h-12 w-12 m-1 leading-9 text-lg"
            onClick={onSquareClick}
        >
            {value}
        </button>
    );
}

function Board(xIsNext, squares, onPlay) {
    const winner = calculateWinner(squares);

    let status;

    if (winner) {
        status = `Winner: ${winner}`;
    } else {
        status = "Next Player:" + (xIsNext ? "X" : "O");
    }
    function handClick(i) {
        if (squares[i] || calculateWinner(squares)) {
            return;
        }
        const nextSquares = squares.slice();
        if (xIsNext) {
            nextSquares[i] = "X";
        } else {
            nextSquares[i] = "O";
        }
        onPlay(nextSquares);
    }

    return (
        <>
            <div>{status}</div>
            <div className="flex">
                <Square value={squares[0]} onSquareClick={() => handClick(0)} />
                <Square value={squares[1]} onSquareClick={() => handClick(1)} />
                <Square value={squares[2]} onSquareClick={() => handClick(2)} />
            </div>
            <div className="flex">
                <Square value={squares[3]} onSquareClick={() => handClick(3)} />
                <Square value={squares[4]} onSquareClick={() => handClick(4)} />
                <Square value={squares[5]} onSquareClick={() => handClick(5)} />
            </div>
            <div className="flex">
                <Square value={squares[6]} onSquareClick={() => handClick(6)} />
                <Square value={squares[7]} onSquareClick={() => handClick(7)} />
                <Square value={squares[8]} onSquareClick={() => handClick(8)} />
            </div>
        </>
    );
}

export default function Game() {
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [xIsNext, SetXIsNext] = useState(true);

    const currentSquares = history[history.length - 1];

    function handlePlay(nextSquares) {
        SetXIsNext(!xIsNext);
        setHistory([...history, nextSquares]);
    }

    return (
        <div>
            <div>
                <Board
                    xIsNext={xIsNext}
                    squares={currentSquares}
                    onPlay={handlePlay}
                />
            </div>
            <div>
                <ol>{/* TBD */}</ol>
            </div>
        </div>
    );
}

function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (
            squares[a] &&
            squares[a] === squares[b] &&
            squares[a] === squares[c]
        ) {
            return squares[a];
        }
    }
    return null;
}
