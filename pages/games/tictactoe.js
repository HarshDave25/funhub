import { useState } from 'react';
import Link from 'next/link';

export default function TicTacToe() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  function handleClick(i) {
    const newSquares = [...squares];
    if (calculateWinner(newSquares) || newSquares[i]) return;
    newSquares[i] = xIsNext ? "❌" : "⭕";
    setSquares(newSquares);
    setXIsNext(!xIsNext);
  }

  function restart() {
    setSquares(Array(9).fill(null));
    setXIsNext(true);
  }

  const winner = calculateWinner(squares);
  const status = winner ? `🎉 Winner: ${winner}` : `Next Player: ${xIsNext ? "❌" : "⭕"}`;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-bold mb-4">Tic Tac Toe</h1>
      <p className="text-xl mb-4">{status}</p>
      <div className="grid grid-cols-3 gap-2">
        {squares.map((square, i) => (
          <button
            key={i}
            onClick={() => handleClick(i)}
            className="w-20 h-20 bg-gray-800 text-3xl rounded-xl hover:bg-gray-700"
          >
            {square}
          </button>
        ))}
      </div>
      <button onClick={restart} className="mt-6 bg-blue-600 px-4 py-2 rounded hover:bg-blue-500">
        Restart Game
      </button>
      <Link href="/games">
        <p className="mt-4 underline text-blue-400 hover:text-blue-200">Back to Games</p>
      </Link>
    </div>
  );
}

function calculateWinner(sq) {
  const lines = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
  ];
  for (let [a, b, c] of lines) {
    if (sq[a] && sq[a] === sq[b] && sq[a] === sq[c]) return sq[a];
  }
  return null;
}
