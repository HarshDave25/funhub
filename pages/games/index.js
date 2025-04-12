// pages/index.js
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <header className="navbar">
        <h1>FunHub</h1>
        <nav>
          <Link href="/">Home</Link>
          <Link href="/games/tictactoe">Games</Link>
          <Link href="/trivia">Trivia</Link>
        </nav>
      </header>
      
      <div className="container">
        <h2>🚀 Explore Games</h2>

        <div className="game-card-container">
          <div className="game-card">
            <img src="/images/tictactoe-preview.png" alt="Tic Tac Toe" />
            <h3>Tic Tac Toe (2-Player)</h3>
            <p>Challenge your friend in a classic Tic Tac Toe game.</p>
            <Link href="/games/tictactoe">
              <button>Play Now</button>
            </Link>
          </div>
          
          <div className="game-card">
            {/* <img src="/images/trivia-preview.png" alt="Trivia Quiz" /> */}
            <h3>Trivia Quiz</h3>
            <p>Test your knowledge with fun trivia questions!</p>
            <Link href="/trivia">
              <button>Start Trivia</button>
            </Link>
          </div>
          
          {/* Add more games here */}
        </div>
      </div>
    </>
  );
}
