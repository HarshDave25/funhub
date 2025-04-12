import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <Navbar />
      <main className="flex flex-col items-center justify-center text-center p-10">
        <h1 className="text-4xl font-bold mb-4">Welcome to 🎮 FunHub</h1>
        <p className="text-lg mb-8 max-w-xl">Play fun games, challenge your brain with trivia, and enjoy your time!</p>
        <div className="flex gap-4">
          <Link href="/games" className="bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded-xl">
            🎮 Play Games
          </Link>
          <Link href="/trivia" className="bg-purple-600 hover:bg-purple-500 px-4 py-2 rounded-xl">
            🧠 Take Trivia
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
