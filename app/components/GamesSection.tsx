import { Gamepad2, Target, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface Game {
  id: number;
  title: string;
  description: string;
  status: "released" | "development" | "concept";
  tags: string[];
  color: string;
  image?: string;
  link?: string;
}

// Sample data - you can replace this with your actual games
export const releasedGames: Game[] = [
  {
    id: 1,
    title: "Oliver the Octopus",
    description: "A platform game based on crates with different mechanics.",
    status: "released",
    tags: ["Adventure", "Platformer", "2.5D", "Single Player", "Casual"],
    color: "from-blue-500 to-cyan-500",
    image: '/game_covers/Oliver_the_octopus.jpg',
    link: 'https://mastercatgames.itch.io/oliver-the-octopus', // Add your game link here
  },
  {
    id: 2,
    title: "Tinturaria",
    description: "A game about delivering as many colored boxes with the right color within a time limit.",
    status: "released",
    tags: ["Puzzle", "Casual", "Time Management", "Single Player", "Color Matching", "Mobile"],
    color: "from-purple-500 to-pink-500",
    image: '/game_covers/Tinturaria.png',
    link: 'https://play.google.com/store/apps/details?id=com.mastercat.tinturaria', // Add your game link here
  },
  {
    id: 3,
    title: "Flappy Black Cat",
    description: "Based on the classic Flappy Bird game, featuring a black cat navigating through obstacles in a dark environment.",
    status: "released",
    tags: ["Arcade", "Casual", "Endless Runner", "Single Player", "Mobile"],
    color: "from-green-500 to-emerald-500",
    image: '/game_covers/Flappy_Black_Cat.png',
    link: 'https://play.google.com/store/apps/details?id=com.mastercat.flappyblackcat', // Add your game link here
  },
  {
    id: 4,
    title: "Crazy Stack Blocks",
    description: "A puzzle game where you have to stack as many blocks as you can.",
    status: "released",
    tags: ["Puzzle", "Casual", "Stacking", "Single Player", "Mobile", "Addictive", "Family Friendly", "Tetris-like"],
    color: "from-red-500 to-yellow-500",
    image: '/game_covers/Crazy_Stack_Blocks.png',
    link: 'https://mastercatgames.itch.io/crazy-stack-blocks', // Add your game link here
  },
  {
    id: 5,
    title: "Running Food",
    description: "An endless runner game where you Help Lucy defeat the Blubbers, an organization that threatens planet Earth forcing the habitants to only eat the world's fattest foods.",
    status: "released",
    tags: ["Endless Runner", "Casual", "Single Player", "Mobile", "Collecting", "Obstacles"],
    color: "from-indigo-500 to-purple-500",
    image: '/game_covers/Running_Food.png',
    link: 'https://play.google.com/store/apps/details?id=com.mastercat.runningfood', // Add your game link here
  },
];

function GameCard({ game }: { game: Game }) {
  // Limit tags to first 4
  const displayTags = game.tags.slice(0, 4);
  const remainingTags = game.tags.slice(4);
  const hasMoreTags = game.tags.length > 4;

  const cardContent = (
    <>
      {/* Game cover image or color gradient */}
      <div className="aspect-video relative overflow-hidden bg-gray-900">
        {game.image ? (
          <>
            <Image
              src={game.image}
              alt={game.title}
              fill
              className="object-contain group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          </>
        ) : (
          <>
            <div className={`h-full bg-linear-to-br ${game.color} flex items-center justify-center relative`}>
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all" />
              <Gamepad2 className="relative z-10 w-24 h-24 text-white" />
            </div>
          </>
        )}
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
          {game.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 line-clamp-3 mb-4">
          {game.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {displayTags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-full text-sm font-medium"
            >
              {tag}
            </span>
          ))}
          {hasMoreTags && (
            <span className="relative group/tooltip px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded-full text-sm font-medium cursor-help">
              +{game.tags.length - 4}
              <span className="invisible group-hover/tooltip:visible absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 bg-gray-900 dark:bg-gray-700 text-white text-xs rounded-lg whitespace-nowrap z-10 shadow-lg">
                {remainingTags.join(", ")}
                <span className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 border-4 border-transparent border-t-gray-900 dark:border-t-gray-700"></span>
              </span>
            </span>
          )}
        </div>
        <div className="w-full mt-auto px-6 py-3 bg-linear-to-r from-purple-600 to-pink-600 text-white rounded-lg font-semibold text-center">
          Learn More
        </div>
      </div>
    </>
  );

  if (game.link) {
    return (
      <Link
        href={game.link}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col h-full cursor-pointer"
      >
        {cardContent}
      </Link>
    );
  }

  return (
    <div className="group relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col h-full">
      {cardContent}
    </div>
  );
}

export default function GamesSection() {
  return (
    <section id="games" className="py-24 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-5xl md:text-6xl font-bold bg-linear-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Our Games
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Explore our collection of released titles that have brought joy to
            players worldwide
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {releasedGames.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>

       
      </div>
    </section>
  );
}
