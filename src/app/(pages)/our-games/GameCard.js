"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import GooglePlayIcon from "./GooglePlayIcon";

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
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5, delay: (index % 8) * 0.06, ease: "easeOut" }}
      className="group relative flex flex-col items-center"
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
          className="relative w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 rounded-3xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.15)] ring-1 ring-black/5 group-hover:shadow-[0_0_40px_rgba(255,107,0,0.3)] transition-all duration-500"
        >
          <Image
            src={game.icon}
            alt={game.title}
            fill
            sizes="144px"
            className="object-cover group-hover:scale-110 transition-transform duration-700"
          />
        </div>
      </Link>

      {game.playStore ? (
        <a
          href={game.playStore}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 flex items-center justify-center"
          aria-label={`${game.title} on Google Play`}
        >
          <GooglePlayIcon className="w-5 h-5 sm:w-6 sm:h-6" />
        </a>
      ) : (
        <span className="mt-3 text-[10px] sm:text-xs font-medium text-orange-500">Coming Soon</span>
      )}

      <h3 className="mt-2 text-gray-900 font-semibold text-sm sm:text-base text-center leading-tight line-clamp-1">
        {game.title}
      </h3>
    </motion.div>
  );
}
