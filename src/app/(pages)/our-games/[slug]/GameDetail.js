"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Star, ArrowLeft, CheckCircle2,
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
  Live: "bg-emerald-50 text-emerald-600 border-emerald-200",
  "In Development": "bg-orange-50 text-orange-600 border-orange-200",
  Beta: "bg-sky-50 text-sky-600 border-sky-200",
};

// Accepts a youtube.com/watch, youtu.be or youtube.com/embed link and returns an embeddable URL.
const toYoutubeEmbedUrl = (url) => {
  if (!url) return null;
  try {
    const u = new URL(url);
    if (u.hostname.includes("youtu.be")) return `https://www.youtube.com/embed/${u.pathname.slice(1)}`;
    if (u.pathname.startsWith("/embed/")) return url;
    const id = u.searchParams.get("v");
    return id ? `https://www.youtube.com/embed/${id}` : null;
  } catch {
    return null;
  }
};

export default function GameDetail({ game, related }) {
  const [activeShot, setActiveShot] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const nextShot = () => setActiveShot((i) => (i + 1) % game.screenshots.length);
  const prevShot = () => setActiveShot((i) => (i - 1 + game.screenshots.length) % game.screenshots.length);

  const embedUrl = toYoutubeEmbedUrl(game.youtubeUrl);
  const bestShot = game.screenshots[1] ?? game.screenshots[0];

  return (
    <div className="min-h-screen w-full bg-white overflow-x-hidden">
      {/* ---------------- HERO / GAME INFO ---------------- */}
      <section className="relative pt-24 md:pt-32">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-orange-200/30 rounded-full blur-[100px]" />
        <div className="absolute top-1/3 right-1/5 w-72 h-72 bg-blue-200/20 rounded-full blur-[100px]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 pb-10">
          <Link
            href="/our-games"
            className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-orange-500 transition-colors duration-300 mb-6"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Our Games
          </Link>

          <div className="grid lg:grid-cols-2 gap-6 lg:gap-10 items-stretch">
            {/* Info panel */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="rounded-2xl border border-gray-200 bg-white shadow-[0_10px_40px_rgba(0,0,0,0.06)] p-6 sm:p-7 lg:p-8 flex flex-col justify-center order-2 lg:order-1"
            >
              <span
                className={`inline-block w-fit text-[10px] font-semibold uppercase tracking-wide px-2.5 py-1 rounded-full border mb-4 ${statusColors[game.status] || "bg-gray-100 text-gray-600 border-gray-200"}`}
              >
                {game.status}
              </span>

              <p className="text-orange-500 text-xs font-semibold uppercase tracking-widest mb-1">{game.genre}</p>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3">{game.title}</h1>

              {(game.rating || game.downloads) && (
                <div className="flex items-center gap-1 mb-5">
                  {game.rating && Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className={`w-4 h-4 ${i < Math.round(game.rating) ? "fill-orange-400 text-orange-400" : "text-gray-200"}`} />
                  ))}
                  <span className="text-sm text-gray-500 ml-1">
                    {[game.rating, game.downloads && `${game.downloads} downloads`].filter(Boolean).join(" · ")}
                  </span>
                </div>
              )}

              <p className="text-gray-600 leading-relaxed mb-6">{game.description}</p>

              <div className="mb-6">
                <h4 className="text-gray-900 font-semibold mb-3 text-xs uppercase tracking-wide">Supported Devices</h4>
                <div className="flex flex-wrap gap-2">
                  {game.platforms.map((p) => (
                    <span key={p} className="flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-full bg-gray-50 text-gray-700 border border-gray-200">
                      {platformIcon(p)} {p}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-gray-900 font-semibold mb-3 text-xs uppercase tracking-wide">Technology</h4>
                <div className="flex flex-wrap gap-2">
                  {game.tech.map((t) => (
                    <span key={t} className="text-xs font-medium px-3 py-1.5 rounded-full bg-orange-50 text-orange-600 border border-orange-200">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Media panel: trailer if available, otherwise the game's best screenshot */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="relative w-full aspect-video rounded-2xl overflow-hidden border border-gray-200 shadow-[0_10px_40px_rgba(0,0,0,0.06)] bg-gray-50 order-1 lg:order-2"
            >
              {embedUrl ? (
                <iframe
                  src={embedUrl}
                  title={`${game.title} trailer`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                />
              ) : (
                <button
                  onClick={() => {
                    setActiveShot(game.screenshots.indexOf(bestShot));
                    setLightboxOpen(true);
                  }}
                  className="absolute inset-0 w-full h-full"
                >
                  <Image
                    src={bestShot}
                    alt={game.title}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-contain"
                  />
                </button>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ---------------- FEATURES ---------------- */}
      <section className="relative py-14 md:py-20 px-4 sm:px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
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
                className="flex items-start gap-3 rounded-xl border border-gray-200 bg-white p-4 hover:border-orange-400/60 transition-colors duration-300"
              >
                <CheckCircle2 className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
                <span className="text-gray-700 text-sm font-medium">{f}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- GALLERY GRID ---------------- */}
      {game.screenshots.length > 1 && (
        <section className="relative py-14 md:py-20 px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              <span className="text-orange-500">Gallery</span>
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
              {game.screenshots.map((shot, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setActiveShot(i);
                    setLightboxOpen(true);
                  }}
                  className="relative aspect-4/5 rounded-xl overflow-hidden border border-gray-200 group"
                >
                  <Image src={shot} alt="" fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                </button>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ---------------- RELATED GAMES ---------------- */}
      {related.length > 0 && (
        <section className="relative py-14 md:py-20 px-4 sm:px-6 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              More <span className="text-orange-500">Games</span>
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {related.map((g) => (
                <Link
                  key={g.slug}
                  href={`/our-games/${g.slug}`}
                  className="group relative rounded-xl overflow-hidden border border-gray-200 bg-white shadow-sm hover:border-orange-400/60 hover:shadow-md transition-all duration-300"
                >
                  <div className="relative h-36 w-full">
                    <Image src={g.screenshots[0]} alt={g.title} fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <div className="p-4">
                    <h3 className="text-gray-900 font-semibold group-hover:text-orange-500 transition-colors duration-300">{g.title}</h3>
                    <p className="text-gray-500 text-xs">{g.genre}</p>
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
            className="fixed inset-0 z-100 flex items-center justify-center p-4"
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
