"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Star, Monitor, Gamepad, Smartphone, Gamepad2 } from "lucide-react";

const platformIcon = (platform) => {
  switch (platform) {
    case "PC":
      return <Monitor className="w-3.5 h-3.5" />;
    case "PlayStation":
    case "Xbox":
      return <Gamepad2 className="w-3.5 h-3.5" />;
    case "Mobile":
      return <Smartphone className="w-3.5 h-3.5" />;
    default:
      return <Gamepad className="w-3.5 h-3.5" />;
  }
};

const statusColors = {
  Live: "bg-emerald-500/15 text-emerald-400 border-emerald-500/30",
  "In Development": "bg-orange-500/15 text-orange-400 border-orange-500/30",
  Beta: "bg-sky-500/15 text-sky-400 border-sky-500/30",
};

export default function GameCard({ game, index }) {
  const cardRef = useRef(null);
  const [tilt, setTilt] = useState({ rx: 0, ry: 0 });

  const handleMouseMove = (e) => {
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ rx: y * -8, ry: x * 8 });
  };

  const resetTilt = () => setTilt({ rx: 0, ry: 0 });

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5, delay: (index % 8) * 0.06, ease: "easeOut" }}
      className="group relative w-full"
    >
      <Link href={`/our-games/${game.slug}`} className="block">
        <div
          ref={cardRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={resetTilt}
          style={{
            transform: `perspective(900px) rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg)`,
            transition: "transform 0.2s ease-out",
          }}
          className="relative rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl shadow-[0_8px_30px_rgba(0,0,0,0.4)] group-hover:shadow-[0_0_40px_rgba(255,107,0,0.35)] group-hover:border-orange-500/40 transition-all duration-500"
        >
          {/* Thumbnail */}
          <div className="relative h-44 sm:h-48 w-full overflow-hidden">
            <Image
              src={game.screenshots[0]}
              alt={game.title}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0b2b4f] via-[#0b2b4f]/20 to-transparent" />

            {/* Status badge */}
            <span
              className={`absolute top-3 left-3 text-[10px] font-semibold uppercase tracking-wide px-2.5 py-1 rounded-full border backdrop-blur-sm ${statusColors[game.status] || "bg-white/10 text-white border-white/20"}`}
            >
              {game.status}
            </span>
          </div>

          {/* Body */}
          <div className="pt-5 pb-5 px-4">
            <div className="flex items-center justify-between mb-1">
              <h3 className="text-white font-bold text-base sm:text-lg leading-tight group-hover:text-orange-400 transition-colors duration-300 line-clamp-1">
                {game.title}
              </h3>
            </div>
            <p className="text-orange-400/90 text-xs font-semibold tracking-wide uppercase mb-2">{game.genre}</p>
            <p className="text-gray-300 text-sm leading-relaxed mb-4 line-clamp-2">{game.description}</p>

            {/* Rating */}
            <div className="flex items-center gap-1 mb-3">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={`w-3.5 h-3.5 ${i < Math.round(game.rating) ? "fill-orange-400 text-orange-400" : "text-gray-600"}`}
                />
              ))}
              <span className="text-xs text-gray-400 ml-1">{game.rating}</span>
            </div>

            {/* Platform badges */}
            <div className="flex flex-wrap gap-1.5 mb-3">
              {game.platforms.map((p) => (
                <span
                  key={p}
                  className="flex items-center gap-1 text-[10px] font-medium px-2 py-1 rounded-full bg-white/5 text-gray-300 border border-white/10"
                >
                  {platformIcon(p)} {p}
                </span>
              ))}
            </div>

            {/* Tech badges */}
            <div className="flex flex-wrap gap-1.5">
              {game.tech.map((t) => (
                <span
                  key={t}
                  className="text-[10px] font-medium px-2 py-1 rounded-full bg-orange-500/10 text-orange-300 border border-orange-500/20"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Orange glow ring on hover */}
          <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 ring-1 ring-inset ring-orange-500/30" />
        </div>
      </Link>
    </motion.div>
  );
}
