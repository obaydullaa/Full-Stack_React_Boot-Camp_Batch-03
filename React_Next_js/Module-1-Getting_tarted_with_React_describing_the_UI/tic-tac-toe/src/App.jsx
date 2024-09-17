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
