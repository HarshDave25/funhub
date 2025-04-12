// pages/index.js
import Link from 'next/link';

export default function Home() {
  return (
    <div className="container">
      <h1>🎮 Welcome to FunHub!</h1>
      <p>Your ultimate fun zone for quick games & trivia.</p>

      <h2>🚀 Explore Games</h2>
      <ul>
        <li><Link href="/games/tictactoe">Tic Tac Toe (2-Player)</Link></li>
        <li><Link href="/trivia">Trivia Quiz</Link></li>
        {/* Add more games as you finish them */}
      </ul>

      <Link href="/games/tictactoe">
        <button>Play Tic Tac Toe</button>
      </Link>

      <Link href="/trivia">
        <button>Start Trivia Quiz</button>
      </Link>
    </div>
  );
}
