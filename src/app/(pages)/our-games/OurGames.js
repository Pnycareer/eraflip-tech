"use client";

import { useMemo, useRef, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence, useInView } from "framer-motion";
import CountUp from "react-countup";
import {
  Gamepad2, Lightbulb, PenTool, Code2, Users, Bug, Rocket,
  ArrowRight, Sparkles,
} from "lucide-react";

import { categories, games, pipeline, stats } from "./gamesData";
import GameCard from "./GameCard";

const pipelineIcons = [Lightbulb, PenTool, Code2, Users, Bug, Rocket];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

export default function OurGames() {
  const [activeCategory, setActiveCategory] = useState("All Games");

  const statsRef = useRef(null);
  const isStatsInView = useInView(statsRef, { once: true, amount: 0.4 });

  const filteredGames = useMemo(() => {
    if (activeCategory === "All Games") return games;
    return games.filter((g) => g.categories.includes(activeCategory));
  }, [activeCategory]);

  return (
    <div className="min-h-screen w-full bg-[#0b2b4f] overflow-x-hidden">
      {/* ---------------- HERO ---------------- */}
      <section className="relative pt-32 md:pt-44 pb-20 md:pb-28 px-4 sm:px-6 min-h-[85vh] flex items-center justify-center w-full overflow-hidden">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0b2b4f] via-[#0e3157] to-[#0b2b4f]" />

        {/* Neon glow orbs */}
        <div className="absolute top-1/4 left-1/5 w-72 h-72 md:w-[28rem] md:h-[28rem] bg-orange-500/20 rounded-full blur-[100px] animate-blob" />
        <div className="absolute bottom-1/4 right-1/5 w-72 h-72 md:w-[26rem] md:h-[26rem] bg-blue-400/10 rounded-full blur-[100px] animate-blob animation-delay-2000" />

        {/* Floating decorative gaming elements */}
        <div className="absolute inset-0 pointer-events-none">
          {[
            { icon: "🎮", top: "18%", left: "8%", size: "text-4xl md:text-5xl", delay: 0 },
            { icon: "🕹️", top: "65%", left: "12%", size: "text-3xl md:text-4xl", delay: 1.2 },
            { icon: "🏆", top: "25%", left: "88%", size: "text-3xl md:text-4xl", delay: 0.6 },
            { icon: "💰", top: "72%", left: "85%", size: "text-3xl md:text-4xl", delay: 1.8 },
            { icon: "⚔️", top: "45%", left: "92%", size: "text-2xl md:text-3xl", delay: 2.4 },
            { icon: "🎯", top: "50%", left: "4%", size: "text-2xl md:text-3xl", delay: 0.9 },
          ].map((el, i) => (
            <span
              key={i}
              className={`absolute ${el.size} opacity-20 animate-float select-none`}
              style={{ top: el.top, left: el.left, animationDelay: `${el.delay}s` }}
            >
              {el.icon}
            </span>
          ))}
        </div>

        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.07]">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="games-grid" width="50" height="50" patternUnits="userSpaceOnUse">
                <path d="M 50 0 L 0 0 0 50" fill="none" stroke="rgb(255 255 255)" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#games-grid)" />
          </svg>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-orange-500/30 text-orange-400 text-xs sm:text-sm font-medium mb-6 backdrop-blur-sm"
          >
            <Sparkles className="w-4 h-4" /> AAA-Quality Game Studio
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
          >
            Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600">
              Games
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-10"
          >
            Crafting immersive worlds and unforgettable gaming experiences.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <Link href="/contact-us">
              <button className="group inline-flex items-center gap-2 px-7 sm:px-9 py-3.5 sm:py-4 rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold text-base sm:text-lg shadow-[0_10px_40px_rgba(255,107,0,0.35)] hover:shadow-[0_10px_50px_rgba(255,107,0,0.5)] transition-all duration-400 hover:-translate-y-0.5">
                Start Your Project
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ---------------- FEATURED GAMES ---------------- */}
      <section className="relative py-16 md:py-24 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            className="text-center mb-10 md:mb-14"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Featured <span className="text-orange-500">Games</span>
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto text-base sm:text-lg">
              A showcase of titles built with precision, creativity and a passion for play.
            </p>
          </motion.div>

          {/* Category tabs */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10 md:mb-14">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`relative px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-medium border transition-all duration-300 ${
                  activeCategory === cat
                    ? "text-white border-orange-500 bg-orange-500/10"
                    : "text-gray-300 border-white/10 bg-white/5 hover:border-orange-500/40 hover:text-white"
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
          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
            <AnimatePresence mode="popLayout">
              {filteredGames.map((game, i) => (
                <GameCard key={game.id} game={game} index={i} />
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredGames.length === 0 && (
            <p className="text-center text-gray-400 mt-10">No games found in this category yet.</p>
          )}
        </div>
      </section>

      {/* ---------------- TIMELINE ---------------- */}
      <section className="relative py-16 md:py-24 px-4 sm:px-6 bg-gradient-to-b from-[#0b2b4f] to-[#0a2545]">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            className="text-center mb-14 md:mb-20"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Our Development <span className="text-orange-500">Pipeline</span>
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto text-base sm:text-lg">
              From spark of an idea to a title in players hands — every step engineered for quality.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={stagger}
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-5 md:gap-4 relative"
          >
            {/* connector line for large screens */}
            <div className="hidden lg:block absolute top-9 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-500/30 to-transparent" />

            {pipeline.map((step, i) => {
              const Icon = pipelineIcons[i];
              return (
                <motion.div
                  key={step.title}
                  variants={fadeUp}
                  whileHover={{ y: -6 }}
                  className="relative flex flex-col items-center text-center group"
                >
                  <div className="relative z-10 w-16 h-16 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl flex items-center justify-center mb-4 shadow-lg group-hover:border-orange-500/50 group-hover:shadow-orange-500/20 transition-all duration-400">
                    <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-[#0b2b4f] border border-orange-500/50 text-orange-400 text-xs font-bold flex items-center justify-center">
                      {i + 1}
                    </span>
                  </div>
                  <h3 className="text-white font-semibold text-sm sm:text-base mb-1.5">{step.title}</h3>
                  <p className="text-gray-400 text-xs sm:text-sm leading-relaxed px-1">{step.desc}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ---------------- STATS ---------------- */}
      <section ref={statsRef} className="relative py-16 md:py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl overflow-hidden">
            <div className="absolute top-0 left-1/4 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl" />

            <div className="relative grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 py-12 px-6 sm:px-10">
              {stats.map((s) => (
                <div key={s.label} className="text-center">
                  <p className="text-3xl sm:text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600 mb-2">
                    {isStatsInView ? <CountUp end={s.value} duration={2} /> : 0}
                    {s.suffix}
                  </p>
                  <p className="text-gray-300 text-xs sm:text-sm font-medium uppercase tracking-wide">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- CTA ---------------- */}
      <section className="relative py-20 md:py-28 px-4 sm:px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0e3157] via-[#0b2b4f] to-[#0a2545]" />
        <div className="absolute top-0 left-1/3 w-72 h-72 bg-orange-500/15 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-1/3 w-72 h-72 bg-blue-400/10 rounded-full blur-[100px]" />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="relative max-w-3xl mx-auto text-center"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500 to-orange-600 shadow-lg shadow-orange-500/30 mb-6">
            <Gamepad2 className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-5">
            Ready to build your next hit game?
          </h2>
          <p className="text-gray-300 text-base sm:text-lg mb-9 max-w-xl mx-auto">
            Let&apos;s turn your vision into a polished, market-ready title  from first concept to global launch.
          </p>
          <Link href="/contact-us">
            <button className="group inline-flex items-center gap-2 px-8 sm:px-10 py-3.5 sm:py-4 rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold text-base sm:text-lg shadow-[0_10px_40px_rgba(255,107,0,0.35)] hover:shadow-[0_10px_50px_rgba(255,107,0,0.5)] transition-all duration-400 hover:-translate-y-0.5">
              Let&apos;s Talk
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
