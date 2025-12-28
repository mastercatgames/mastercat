import { Rocket } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Next Big Project",
    description: "Our most ambitious project yet! A revolutionary gaming experience that combines innovative mechanics with stunning visuals.",
    status: "In Active Development",
    progress: 65,
    expectedRelease: "2026",
    color: "from-violet-500 to-purple-500",
    features: ["New Engine", "Multiplayer", "VR Support"],
  },
  {
    id: 2,
    title: "Secret Project Alpha",
    description: "Something exciting is brewing in our studio. Stay tuned for announcements!",
    status: "Early Concept",
    progress: 20,
    expectedRelease: "TBA",
    color: "from-pink-500 to-rose-500",
    features: ["Innovative Gameplay", "Unique Art Style"],
  },
];

function ProjectCard({ project }: { project: typeof projects[0] }) {
  return (
    <div className="relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300">
      <div className={`h-80 bg-linear-to-br ${project.color} flex items-center justify-center relative overflow-hidden`}>
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 text-white space-y-4 text-center p-8">
          <Rocket className="w-28 h-28 mx-auto mb-4 text-white" />
          <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-md rounded-full text-sm font-semibold">
            {project.status}
          </div>
        </div>
      </div>

      <div className="p-8 space-y-6">
        <div>
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
            {project.title}
          </h3>
          <p className="text-gray-600 dark:text-gray-300 text-lg">
            {project.description}
          </p>
        </div>

        {/* <div className="space-y-3">
          <div className="flex justify-between text-sm font-medium">
            <span className="text-gray-600 dark:text-gray-400">Development Progress</span>
            <span className="text-purple-600 dark:text-purple-400">{project.progress}%</span>
          </div>
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
            <div
              className="bg-linear-to-r from-purple-600 to-pink-600 h-full rounded-full transition-all duration-1000"
              style={{ width: `${project.progress}%` }}
            />
          </div>
        </div> */}

        <div className="flex flex-wrap gap-2">
          {project.features.map((feature) => (
            <span
              key={feature}
              className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-full text-sm font-medium"
            >
              {feature}
            </span>
          ))}
        </div>

        <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
          <div className="flex justify-between items-center">
            <span className="text-gray-600 dark:text-gray-400">Expected Release:</span>
            <span className="text-lg font-bold text-purple-600 dark:text-purple-400">
              {project.expectedRelease}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function InDevelopmentSection() {
  return (
    <section id="in-development" className="py-24 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-5xl md:text-6xl font-bold bg-linear-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            In Development
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Get a sneak peek at what we're currently working on
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block p-8 bg-linear-to-r from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 rounded-2xl">
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
              Want to stay updated on our development progress?
            </p>
            <button className="px-8 py-3 bg-linear-to-r from-purple-600 to-pink-600 text-white rounded-full font-semibold hover:from-purple-700 hover:to-pink-700 transition-all transform hover:scale-105">
              Follow Our Journey
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
