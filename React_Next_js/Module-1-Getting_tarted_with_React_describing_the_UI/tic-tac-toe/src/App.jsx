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
