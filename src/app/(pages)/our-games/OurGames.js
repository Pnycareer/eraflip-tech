"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";

import { categories, games } from "./gamesData";
import GameCard from "./GameCard";
import IconMarquee from "./IconMarquee";
import GameCarousel from "./GameCarousel";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function OurGames() {
  const [activeCategory, setActiveCategory] = useState("All Games");

  const filteredGames = useMemo(() => {
    if (activeCategory === "All Games") return games;
    return games.filter((g) => g.categories.includes(activeCategory));
  }, [activeCategory]);

  const { scrollYProgress } = useScroll();
  const progressX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.3 });

  return (
    <div className="relative min-h-screen w-full bg-white overflow-x-hidden">
      {/* scroll progress bar */}
      <motion.div
        style={{ scaleX: progressX }}
        className="fixed top-0 left-0 right-0 h-1 z-50 origin-left bg-gradient-to-r from-orange-400 via-orange-500 to-fuchsia-500"
      />

      {/* ---------------- ICON MARQUEE ---------------- */}
      <IconMarquee />

      {/* ---------------- GAME CAROUSEL ---------------- */}
      <GameCarousel />

      {/* ---------------- FEATURED GAMES ---------------- */}
      <section className="relative bg-white py-12 md:py-16 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            className="text-center mb-8 md:mb-10"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
              All <span className="text-orange-500">Games</span>
            </h2>
          </motion.div>

          {/* Category tabs */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 md:mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`relative px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-medium border transition-all duration-300 ${
                  activeCategory === cat
                    ? "text-orange-600 border-orange-500 bg-orange-50"
                    : "text-gray-600 border-gray-200 bg-gray-50 hover:border-orange-500/40 hover:text-gray-900"
                }`}
              >
                {activeCategory === cat && (
                  <motion.span
                    layoutId="activeCategoryPill"
                    className="absolute inset-0 rounded-full bg-orange-500/15 border border-orange-500/40"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{cat}</span>
              </button>
            ))}
          </div>

          {/* Cards grid */}
          <motion.div layout className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-6 sm:gap-8 justify-items-center">
            <AnimatePresence mode="popLayout">
              {filteredGames.map((game, i) => (
                <GameCard key={game.id} game={game} index={i} />
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredGames.length === 0 && (
            <p className="text-center text-gray-500 mt-10">No games found in this category yet.</p>
          )}
        </div>
      </section>

    </div>
  );
}
