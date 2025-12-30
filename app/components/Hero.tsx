"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-linear-to-br from-purple-50 via-white to-pink-50 dark:from-gray-900 dark:via-black dark:to-purple-950"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 -translate-x-1/2 -translate-y-1/2 bg-linear-to-br from-purple-200/30 to-transparent rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 w-96 h-96 translate-x-1/2 translate-y-1/2 bg-linear-to-tl from-pink-200/30 to-transparent rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <div className="space-y-8 opacity-0 animate-[fade-in_1s_ease-out_forwards]">
          <div className="flex justify-center mb-6">
            <Image
              src="/MasterCat_Logo.png"
              alt="Master Cat"
              width={600}
              height={200}
              priority
              className="w-auto h-32 md:h-48 animate-gradient"
            />
          </div>
          {/* <p className="text-2xl md:text-3xl text-gray-700 dark:text-gray-300 font-light">
            Indie Game Studio
          </p> */}
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto flex items-center justify-center gap-2">
            Crafting unique gaming experiences with passion, creativity, and a
            touch of feline excellence
          </p>
          <div className="flex gap-4 justify-center pt-8">
            <button
              onClick={() => document.getElementById("games")?.scrollIntoView({ behavior: "smooth" })}
              className="px-8 py-4 bg-linear-to-r from-purple-600 to-pink-600 text-white rounded-full text-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              View Our Games
            </button>
            <button
              onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
              className="px-8 py-4 bg-white dark:bg-gray-800 text-purple-600 dark:text-purple-400 rounded-full text-lg font-semibold hover:bg-gray-50 dark:hover:bg-gray-700 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl border-2 border-purple-200 dark:border-purple-800"
            >
              About Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
