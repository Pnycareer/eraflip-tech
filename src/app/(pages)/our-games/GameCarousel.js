"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

import { games } from "./gamesData";
import GooglePlayIcon from "./GooglePlayIcon";

const AUTO_MS = 6000;

export default function GameCarousel() {
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState(1);
  const [paused, setPaused] = useState(false);
  const draggedRef = useRef(false);

  const count = games.length;
  const game = games[active];
  // both visuals come from the game's own screenshots (served from public/Webp/<game>)
  const heroShot = game.screenshots[1] ?? game.screenshots[0];
  const iconShot = game.screenshots[0];

  const go = useCallback(
    (dir) => {
      setDirection(dir);
      setActive((i) => (i + dir + count) % count);
    },
    [count]
  );

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => go(1), AUTO_MS);
    return () => clearInterval(id);
  }, [paused, go, active]);

  const cardVariants = {
    enter: (dir) => ({ opacity: 0, x: dir > 0 ? 120 : -120, rotateY: dir > 0 ? -18 : 18, scale: 0.9 }),
    center: { opacity: 1, x: 0, rotateY: 0, scale: 1 },
    exit: (dir) => ({ opacity: 0, x: dir > 0 ? -120 : 120, rotateY: dir > 0 ? 18 : -18, scale: 0.9 }),
  };

  return (
    <section className="relative overflow-hidden bg-white py-16 md:py-24 px-4 sm:px-6">
      {/* ambient glows */}
      <div className="pointer-events-none absolute -top-24 left-1/4 w-[30rem] h-[30rem] rounded-full bg-orange-200/40 blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-24 right-1/4 w-[28rem] h-[28rem] rounded-full bg-fuchsia-200/30 blur-[120px]" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative max-w-7xl mx-auto text-center mb-10 md:mb-14"
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
          Our <span className="text-orange-500">Games</span>
        </h2>
      </motion.div>

      <div
        className="relative max-w-6xl mx-auto"
        style={{ perspective: "1600px" }}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {/* arrows */}
        <button
          onClick={() => go(-1)}
          aria-label="Previous game"
          className="absolute -left-2 sm:-left-6 lg:-left-14 top-1/2 -translate-y-1/2 z-20 grid place-items-center w-11 h-16 sm:w-14 sm:h-20 rounded-2xl bg-gray-100 hover:bg-gray-200 border border-gray-200 text-gray-700 shadow-sm backdrop-blur-md transition-colors"
        >
          <ChevronLeft className="w-6 h-6 sm:w-7 sm:h-7" />
        </button>
        <button
          onClick={() => go(1)}
          aria-label="Next game"
          className="absolute -right-2 sm:-right-6 lg:-right-14 top-1/2 -translate-y-1/2 z-20 grid place-items-center w-11 h-16 sm:w-14 sm:h-20 rounded-2xl bg-gray-100 hover:bg-gray-200 border border-gray-200 text-gray-700 shadow-sm backdrop-blur-md transition-colors"
        >
          <ChevronRight className="w-6 h-6 sm:w-7 sm:h-7" />
        </button>

        {/* stage */}
        <div className="relative md:min-h-[34rem]" style={{ transformStyle: "preserve-3d" }}>
          <AnimatePresence mode="wait" custom={direction} initial={false}>
            <motion.div
              key={game.id}
              custom={direction}
              variants={cardVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.15}
              onDragStart={() => {
                draggedRef.current = true;
              }}
              onDragEnd={(_, info) => {
                if (info.offset.x < -80) go(1);
                else if (info.offset.x > 80) go(-1);
                setTimeout(() => {
                  draggedRef.current = false;
                }, 50);
              }}
              className="w-full md:absolute md:inset-0"
              style={{ transformStyle: "preserve-3d" }}
            >
              <div className="grid md:grid-cols-2 gap-6 md:gap-10 items-center rounded-3xl border border-gray-200 bg-white p-5 sm:p-8 md:p-10 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.15)]">
                {/* big screenshot */}
                <motion.div
                  className="relative mx-auto w-full max-w-sm aspect-[4/5] rounded-2xl overflow-hidden ring-1 ring-gray-200 bg-gray-50 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.25)]"
                >
                  <Image
                    src={heroShot}
                    alt={game.title}
                    fill
                    sizes="(max-width: 768px) 90vw, 400px"
                    className="object-contain"
                    priority
                  />
                </motion.div>

                {/* details */}
                <div className="text-left">
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight">
                    {game.title}
                  </h3>

                  <div className="mt-3 flex items-center gap-2">
                    {game.rating && (
                      <>
                        <span className="text-xl sm:text-2xl font-bold text-gray-900">{game.rating}</span>
                        <span className="flex items-center gap-0.5">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <Star
                              key={i}
                              className={`w-4 h-4 sm:w-5 sm:h-5 ${
                                i < Math.round(game.rating)
                                  ? "fill-orange-400 text-orange-400"
                                  : "text-gray-200"
                              }`}
                            />
                          ))}
                        </span>
                      </>
                    )}
                    <span className="text-gray-500 text-sm sm:text-base">
                      {game.downloads ? `${game.downloads} Downloads` : game.status}
                    </span>
                  </div>

                  <div className="mt-5 flex items-start gap-4">
                    <div className="relative w-20 h-20 sm:w-24 sm:h-24 shrink-0 rounded-2xl overflow-hidden ring-1 ring-gray-200 shadow-lg">
                      <Image src={iconShot} alt={`${game.title} icon`} fill sizes="96px" className="object-cover" />
                    </div>
                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed line-clamp-5">
                      {game.description}
                    </p>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-3">
                    {game.playStore && (
                    <a
                      href={game.playStore}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => {
                        if (draggedRef.current) e.preventDefault();
                      }}
                      className="inline-flex items-center gap-2.5 rounded-xl bg-gray-900 px-4 py-2.5 text-white shadow-lg hover:-translate-y-0.5 hover:bg-black transition-all"
                    >
                      <GooglePlayIcon className="w-6 h-6" />
                      <span className="text-left leading-none">
                        <span className="block text-[10px] text-gray-300">Get it on</span>
                        <span className="block text-sm font-semibold">Google Play</span>
                      </span>
                    </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* dots */}
        <div className="mt-8 flex flex-wrap justify-center gap-2">
          {games.map((g, i) => (
            <button
              key={g.id}
              onClick={() => {
                setDirection(i > active ? 1 : -1);
                setActive(i);
              }}
              aria-label={`Go to ${g.title}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === active ? "w-8 bg-orange-400" : "w-2 bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
