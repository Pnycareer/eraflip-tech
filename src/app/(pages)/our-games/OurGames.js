"use client";

import { motion, useScroll, useSpring } from "framer-motion";

import { games } from "./gamesData";
import GameCard from "./GameCard";
import IconMarquee from "./IconMarquee";
import GameCarousel from "./GameCarousel";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function OurGames() {
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
            animate="visible"
            variants={fadeUp}
            className="text-center mb-8 md:mb-10"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
              All <span className="text-orange-500">Games</span>
            </h2>
          </motion.div>

          {/* Cards grid */}
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-6 sm:gap-8 justify-items-center">
            {games.map((game, i) => (
              <GameCard key={game.id} game={game} index={i} />
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
