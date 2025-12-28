import { Gamepad2, Target, Sparkles } from "lucide-react";

interface Game {
  id: number;
  title: string;
  description: string;
  status: "released" | "development" | "concept";
  tags: string[];
  color: string;
}

// Sample data - you can replace this with your actual games
const releasedGames: Game[] = [
  {
    id: 1,
    title: "Oliver the Octopus",
    description: "A platform game based on crates with different mechanics.",
    status: "released",
    tags: ["Adventure", "Platformer", "2.5D", "Single Player", "Casual"],
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: 2,
    title: "Tinturaria",
    description: "A game about delivering as many colored boxes with the right color within a time limit.",
    status: "released",
    tags: ["Puzzle", "Casual", "Time Management", "Single Player", "Color Matching", "Mobile"],
    color: "from-purple-500 to-pink-500",
  },
  {
    id: 3,
    title: "Flappy Black Cat",
    description: "Based on the classic Flappy Bird game, featuring a black cat navigating through obstacles in a dark environment.",
    status: "released",
    tags: ["Arcade", "Casual", "Endless Runner", "Single Player", "Mobile"],
    color: "from-green-500 to-emerald-500",
  },
  {
    id: 4,
    title: "Crazy Stack Blocks",
    description: "A puzzle game where you have to stack as many blocks as you can.",
    status: "released",
    tags: ["Puzzle", "Casual", "Stacking", "Single Player", "Mobile", "Addictive", "Family Friendly", "Tetris-like"],
    color: "from-red-500 to-yellow-500",
  },
  {
    id: 5,
    title: "Running Food",
    description: "An endless runner game where you Help Lucy defeat the Blubbers, an organization that threatens planet Earth forcing the habitants to only eat the world's fattest foods.",
    status: "released",
    tags: ["Endless Runner", "Casual", "Single Player", "Mobile", "Collecting", "Obstacles"],
    color: "from-indigo-500 to-purple-500",
  },
];

function GameCard({ game }: { game: Game }) {
  // Limit tags to first 4
  const displayTags = game.tags.slice(0, 4);
  const remainingTags = game.tags.slice(4);
  const hasMoreTags = game.tags.length > 4;

  return (
    <div className="group relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col h-full">
      {/* Image placeholder */}
      <div className={`h-64 bg-linear-to-br ${game.color} flex items-center justify-center relative overflow-hidden`}>
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all" />
        <Gamepad2 className="relative z-10 w-24 h-24 text-white" />
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
        <button className="w-full mt-auto px-6 py-3 bg-linear-to-r from-purple-600 to-pink-600 text-white rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all transform hover:scale-105">
          Learn More
        </button>
      </div>
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

        {/* Unreleased Games Section */}
        <div className="mt-24 text-center mb-16 space-y-4">
          <h3 className="text-4xl md:text-5xl font-bold bg-linear-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
            Unreleased Gems
          </h3>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Projects we've worked on that are waiting for the perfect moment
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 opacity-75">
          <div className="group relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
            <div className="h-64 bg-linear-to-br from-amber-500 to-orange-500 flex items-center justify-center relative">
              <div className="absolute inset-0 bg-black/20" />
              <Target className="relative z-10 w-24 h-24 text-white" />
            </div>
            <div className="p-6 space-y-4">
              <h4 className="text-2xl font-bold text-gray-900 dark:text-white">
                Unreleased Title 1
              </h4>
              <p className="text-gray-600 dark:text-gray-300">
                An ambitious project exploring new gameplay mechanics
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 rounded-full text-sm font-medium">
                  Experimental
                </span>
              </div>
            </div>
          </div>

          <div className="group relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
            <div className="h-64 bg-linear-to-br from-teal-500 to-cyan-500 flex items-center justify-center relative">
              <div className="absolute inset-0 bg-black/20" />
              <Sparkles className="relative z-10 w-24 h-24 text-white" />
            </div>
            <div className="p-6 space-y-4">
              <h4 className="text-2xl font-bold text-gray-900 dark:text-white">
                Unreleased Title 2
              </h4>
              <p className="text-gray-600 dark:text-gray-300">
                A creative experiment that pushed our boundaries
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-teal-100 dark:bg-teal-900/30 text-teal-600 dark:text-teal-400 rounded-full text-sm font-medium">
                  Archive
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
