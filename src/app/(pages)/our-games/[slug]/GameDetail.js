"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Star, ArrowLeft, PlayCircle, CheckCircle2,
  Monitor, Gamepad, Smartphone, Gamepad2, X, ChevronLeft, ChevronRight,
} from "lucide-react";

const platformIcon = (platform) => {
  switch (platform) {
    case "PC":
      return <Monitor className="w-4 h-4" />;
    case "PlayStation":
    case "Xbox":
      return <Gamepad2 className="w-4 h-4" />;
    case "Mobile":
      return <Smartphone className="w-4 h-4" />;
    default:
      return <Gamepad className="w-4 h-4" />;
  }
};

const statusColors = {
  Live: "bg-emerald-500/15 text-emerald-400 border-emerald-500/30",
  "In Development": "bg-orange-500/15 text-orange-400 border-orange-500/30",
  Beta: "bg-sky-500/15 text-sky-400 border-sky-500/30",
};

export default function GameDetail({ game, related }) {
  const [activeShot, setActiveShot] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const nextShot = () => setActiveShot((i) => (i + 1) % game.screenshots.length);
  const prevShot = () => setActiveShot((i) => (i - 1 + game.screenshots.length) % game.screenshots.length);

  return (
    <div className="min-h-screen w-full bg-[#0b2b4f] overflow-x-hidden">
      {/* ---------------- HERO / MAIN SCREENSHOT ---------------- */}
      <section className="relative pt-24 md:pt-32">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0b2b4f] via-[#0e3157] to-[#0b2b4f]" />
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-orange-500/15 rounded-full blur-[100px]" />
        <div className="absolute top-1/3 right-1/5 w-72 h-72 bg-blue-400/10 rounded-full blur-[100px]" />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 pb-10">
          <Link
            href="/our-games"
            className="inline-flex items-center gap-2 text-sm text-gray-300 hover:text-orange-400 transition-colors duration-300 mb-6"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Our Games
          </Link>

          <div className="grid lg:grid-cols-5 gap-6 lg:gap-8">
            {/* Main viewer */}
            <div className="lg:col-span-3">
              <button
                onClick={() => setLightboxOpen(true)}
                className="group relative w-full h-64 sm:h-80 md:h-[26rem] rounded-2xl overflow-hidden border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.5)]"
              >
                <Image
                  src={game.screenshots[activeShot]}
                  alt={game.title}
                  fill
                  priority
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-2 px-5 py-2.5 rounded-full bg-black/50 border border-white/20 backdrop-blur-sm text-white text-sm font-medium">
                    <PlayCircle className="w-5 h-5 text-orange-400" /> View Fullscreen
                  </div>
                </div>
              </button>

              {/* Thumbnail strip */}
              <div className="flex gap-2 mt-3 overflow-x-auto pb-1">
                {game.screenshots.map((shot, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveShot(i)}
                    className={`relative shrink-0 w-20 h-14 sm:w-24 sm:h-16 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                      activeShot === i ? "border-orange-500 scale-105" : "border-white/10 opacity-60 hover:opacity-100"
                    }`}
                  >
                    <Image src={shot} alt="" fill className="object-cover" />
                  </button>
                ))}
              </div>
            </div>

            {/* Info panel */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-2 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 sm:p-7 h-fit"
            >
              <span
                className={`inline-block text-[10px] font-semibold uppercase tracking-wide px-2.5 py-1 rounded-full border mb-4 ${statusColors[game.status] || "bg-white/10 text-white border-white/20"}`}
              >
                {game.status}
              </span>

              <p className="text-orange-400 text-xs font-semibold uppercase tracking-widest mb-1">{game.genre}</p>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3">{game.title}</h1>

              <div className="flex items-center gap-1 mb-5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className={`w-4 h-4 ${i < Math.round(game.rating) ? "fill-orange-400 text-orange-400" : "text-gray-600"}`} />
                ))}
                <span className="text-sm text-gray-300 ml-1">{game.rating} · {game.downloads} downloads</span>
              </div>

              <p className="text-gray-300 leading-relaxed mb-6">{game.description}</p>

              <div className="mb-6">
                <h4 className="text-white font-semibold mb-3 text-xs uppercase tracking-wide">Supported Devices</h4>
                <div className="flex flex-wrap gap-2">
                  {game.platforms.map((p) => (
                    <span key={p} className="flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-full bg-white/5 text-gray-200 border border-white/10">
                      {platformIcon(p)} {p}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mb-8">
                <h4 className="text-white font-semibold mb-3 text-xs uppercase tracking-wide">Technology</h4>
                <div className="flex flex-wrap gap-2">
                  {game.tech.map((t) => (
                    <span key={t} className="text-xs font-medium px-3 py-1.5 rounded-full bg-orange-500/10 text-orange-300 border border-orange-500/20">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ---------------- FEATURES ---------------- */}
      <section className="relative py-14 md:py-20 px-4 sm:px-6 bg-gradient-to-b from-[#0b2b4f] to-[#0a2545]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-8 text-center">
            Key <span className="text-orange-500">Features</span>
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {game.features.map((f, i) => (
              <motion.div
                key={f}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 backdrop-blur-xl p-4 hover:border-orange-500/40 transition-colors duration-300"
              >
                <CheckCircle2 className="w-5 h-5 text-orange-400 shrink-0 mt-0.5" />
                <span className="text-gray-200 text-sm font-medium">{f}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- GALLERY GRID ---------------- */}
      {game.screenshots.length > 1 && (
        <section className="relative py-14 md:py-20 px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-8 text-center">
              Screenshot <span className="text-orange-500">Gallery</span>
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
              {game.screenshots.map((shot, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setActiveShot(i);
                    setLightboxOpen(true);
                  }}
                  className="relative h-32 sm:h-40 md:h-48 rounded-xl overflow-hidden border border-white/10 group"
                >
                  <Image src={shot} alt="" fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300" />
                </button>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ---------------- RELATED GAMES ---------------- */}
      {related.length > 0 && (
        <section className="relative py-14 md:py-20 px-4 sm:px-6 bg-gradient-to-b from-[#0b2b4f] to-[#0a2545]">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-8 text-center">
              More <span className="text-orange-500">Games</span>
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {related.map((g) => (
                <Link
                  key={g.slug}
                  href={`/our-games/${g.slug}`}
                  className="group relative rounded-xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl hover:border-orange-500/40 transition-all duration-300"
                >
                  <div className="relative h-36 w-full">
                    <Image src={g.screenshots[0]} alt={g.title} fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0b2b4f] to-transparent" />
                  </div>
                  <div className="p-4">
                    <h3 className="text-white font-semibold group-hover:text-orange-400 transition-colors duration-300">{g.title}</h3>
                    <p className="text-gray-400 text-xs">{g.genre}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ---------------- LIGHTBOX ---------------- */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          >
            <div className="absolute inset-0 bg-black/90 backdrop-blur-sm" onClick={() => setLightboxOpen(false)} />

            <button
              onClick={() => setLightboxOpen(false)}
              className="absolute top-5 right-5 z-10 p-2 rounded-full bg-white/10 hover:bg-orange-500 text-white transition-colors duration-300"
            >
              <X className="w-5 h-5" />
            </button>

            <button
              onClick={prevShot}
              className="absolute left-3 sm:left-6 z-10 p-2 sm:p-3 rounded-full bg-white/10 hover:bg-orange-500 text-white transition-colors duration-300"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
            <button
              onClick={nextShot}
              className="absolute right-3 sm:right-6 z-10 p-2 sm:p-3 rounded-full bg-white/10 hover:bg-orange-500 text-white transition-colors duration-300"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>

            <motion.div
              key={activeShot}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.25 }}
              className="relative w-full max-w-4xl h-[70vh]"
            >
              <Image src={game.screenshots[activeShot]} alt={game.title} fill className="object-contain" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
