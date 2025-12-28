"use client";

import { Mail, MapPin, Twitter, Youtube, MessageCircle, Instagram, Gamepad2 } from "lucide-react";

const socialLinks = [
  { icon: Twitter, name: "Twitter", url: "https://x.com/MasterCatGames" },
  { icon: Youtube, name: "YouTube", url: "https://www.youtube.com/@mastercatgamestudio6869" },
  { icon: MessageCircle, name: "Discord", url: "#" },
  { icon: Instagram, name: "Instagram", url: "https://instagram.com/mastercatgamestudio" },
];

export default function ContactSection() {

  return (
    <section id="contact" className="py-24 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-5xl md:text-6xl font-bold bg-linear-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Get in Touch
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Have a question, feedback, or just want to say hi? We'd love to hear
            from you!
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Main Contact Card */}
          <div className="bg-linear-to-br from-purple-50 to-pink-50 dark:from-gray-800 dark:to-gray-900 p-12 rounded-3xl shadow-xl">
            <div className="text-center mb-12">
              <div className="inline-block p-6 bg-white dark:bg-gray-700 rounded-full mb-6">
                <Mail className="w-16 h-16 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Let's Talk!
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-lg mb-6">
                Reach out to us for collaborations, questions, or just to say hi!
              </p>
              <a
                href="mailto:mastercatgames@gmail.com"
                className="inline-block text-2xl font-bold text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 transition-colors"
              >
                mastercatgames@gmail.com
              </a>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white dark:bg-gray-700 p-6 rounded-2xl text-center">
                <MapPin className="w-8 h-8 text-purple-600 dark:text-purple-400 mx-auto mb-3" />
                <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                  Location
                </div>
                <div className="font-semibold text-gray-900 dark:text-white">
                  Brazil
                </div>
              </div>

              <div className="bg-white dark:bg-gray-700 p-6 rounded-2xl text-center">
                <Gamepad2 className="w-8 h-8 text-purple-600 dark:text-purple-400 mx-auto mb-3" />
                <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                  Studio Type
                </div>
                <div className="font-semibold text-gray-900 dark:text-white">
                  Indie Game Studio
                </div>
              </div>
            </div>

            <div className="border-t border-gray-200 dark:border-gray-700 pt-8">
              <h4 className="text-xl font-bold text-center text-gray-900 dark:text-white mb-6">
                Follow us on social media
              </h4>
              <div className="flex justify-center gap-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-14 h-14 bg-white dark:bg-gray-700 rounded-full flex items-center justify-center hover:bg-purple-600 dark:hover:bg-purple-600 hover:text-white transition-all transform hover:scale-110 shadow-lg"
                      title={social.name}
                    >
                      <Icon className="w-6 h-6" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
