import Link from 'next/link';

export default function GameCard({ title, slug, emoji }) {
  return (
    <Link href={`/games/${slug}`}>
      <div className="bg-gray-700 hover:bg-gray-600 transition rounded-xl p-4 cursor-pointer shadow-md">
        <div className="text-3xl mb-2">{emoji}</div>
        <h3 className="text-lg font-bold">{title}</h3>
      </div>
    </Link>
  );
}
