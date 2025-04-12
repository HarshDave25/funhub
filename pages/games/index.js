import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import GameCard from '../../components/GameCard';

export default function GamesPage() {
  const games = [
    { title: "Tic Tac Toe", slug: "tictactoe", emoji: "❌⭕" },
    { title: "Stone Paper Scissors", slug: "sps", emoji: "✊✋✌️" },
    { title: "Flappy Bird", slug: "flappybird", emoji: "🐤" },
    { title: "Mario Platformer", slug: "mario", emoji: "🧱" },
    { title: "Ludo", slug: "ludo", emoji: "🎲" },
  ];

  return (
    <div>
      <Navbar />
      <div className="p-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {games.map(game => (
          <GameCard key={game.slug} {...game} />
        ))}
      </div>
      <Footer />
    </div>
  );
}
