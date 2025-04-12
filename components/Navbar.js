import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-gray-800 p-4 flex justify-between items-center shadow-lg">
      <h1 className="text-xl font-bold text-white">🎮 FunHub</h1>
      <div className="space-x-4">
        <Link href="/" className="text-white hover:text-blue-400">Home</Link>
        <Link href="/games" className="text-white hover:text-blue-400">Games</Link>
        <Link href="/trivia" className="text-white hover:text-blue-400">Trivia</Link>
      </div>
    </nav>
  );
}
