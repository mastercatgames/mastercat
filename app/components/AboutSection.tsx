"use client";

import { Gamepad2, Sparkles, Users, Star, Cat } from "lucide-react";
import { releasedGames } from "./GamesSection";
import { projects } from "./InDevelopmentSection";
import Image from "next/image";

export default function AboutSection() {
  const values = [
    {
      icon: Gamepad2,
      title: "Passion for Gaming",
      description: "Every game we create comes from our genuine love for the medium",
    },
    {
      icon: Sparkles,
      title: "Creative Innovation",
      description: "We push boundaries and explore new ideas in game design",
    },
    {
      icon: Users,
      title: "Player First",
      description: "Our players' experience and feedback shape everything we do",
    },
    {
      icon: Star,
      title: "Quality Focused",
      description: "We take pride in polishing every detail of our games",
    },
  ];

  return (
    <section id="about" className="py-24 bg-linear-to-br from-purple-50 via-white to-pink-50 dark:from-gray-900 dark:via-black dark:to-purple-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-5xl md:text-6xl font-bold bg-linear-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            About Master Cat Games
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            An indie studio with big dreams and feline finesse
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
              Our Story
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              Master Cat Game Studio was born in 2020 from a simple dream: 
              to bring our childhood passion for games to life. We're a couple 
              working together from home, pouring our hearts into every project, 
              learning and growing with each game we create.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              What started as a dream has become our reality. We may be small, 
              but we're dedicated to crafting fun, unique gaming experiences that 
              bring joy to players. Every game we release is a piece of our journey, 
              made with love and determination to make those childhood dreams come true.
            </p>
            <div className="flex gap-4 pt-4">
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-600 dark:text-purple-400">
                  {releasedGames.length}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Games Released
                </div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-600 dark:text-purple-400">
                  {projects.length}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Projects in Progress
                </div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-600 dark:text-purple-400">
                  ∞
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Creative Ideas
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square bg-linear-to-br from-purple-500 to-pink-500 rounded-3xl flex items-center justify-center transform hover:rotate-3 transition-transform duration-300">
              {/* <Cat className="w-48 h-48 text-white" /> */}
              <Image
                src="/MasterCat_team.jpg"
                alt="Master Cat Games Team"
                fill
                className="object-cover rounded-3xl"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-linear-to-br from-pink-400 to-purple-400 rounded-full blur-3xl opacity-50" />
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-linear-to-br from-purple-400 to-pink-400 rounded-full blur-3xl opacity-50" />
          </div>
        </div>

        <div className="mt-16">
          <h3 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Our Values
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  <Icon className="w-12 h-12 text-purple-600 dark:text-purple-400 mb-4" />
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {value.title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>        
      </div>
    </section>
  );
}
