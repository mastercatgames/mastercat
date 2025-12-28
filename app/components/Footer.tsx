"use client";

import { Twitter, Youtube, MessageCircle, Instagram } from "lucide-react";

const socialIcons = [
  { icon: Twitter, url: "#" },
  { icon: Youtube, url: "#" },
  { icon: MessageCircle, url: "#" },
  { icon: Instagram, url: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-linear-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Master Cat Games
            </h3>
            <p className="text-gray-400">
              Indie game studio crafting unique experiences with passion and creativity.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <button
                  onClick={() => document.getElementById("games")?.scrollIntoView({ behavior: "smooth" })}
                  className="hover:text-purple-400 transition-colors"
                >
                  Games
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById("in-development")?.scrollIntoView({ behavior: "smooth" })}
                  className="hover:text-purple-400 transition-colors"
                >
                  In Development
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
                  className="hover:text-purple-400 transition-colors"
                >
                  About
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Support</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <button
                  onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                  className="hover:text-purple-400 transition-colors"
                >
                  Contact
                </button>
              </li>
              <li>
                <a href="#" className="hover:text-purple-400 transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-400 transition-colors">
                  Press Kit
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Legal</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-purple-400 transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-400 transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Master Cat Game Studio. All rights reserved.
          </p>
          <div className="flex gap-4">
            {socialIcons.map((social, index) => {
              const Icon = social.icon;
              return (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 hover:bg-purple-600 rounded-full flex items-center justify-center transition-all transform hover:scale-110"
                >
                  <Icon className="w-5 h-5" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}
