"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

function GooglePlayIcon({ className = "w-5 h-5" }) {
  return (
    <svg viewBox="0 0 512 512" className={className} aria-hidden="true">
      <path fill="#00D0FF" d="M47 20 316 289l-70 70L36 149C25 138 20 123 20 108V44c0-16 12-30 27-24z" />
      <path fill="#00F076" d="M47 20c-1 0-2 1-3 1L288 261 366 183 90 18C75 9 60 14 47 20z" />
      <path fill="#FFC900" d="m366 183-78 78 78 78 90-52c22-13 22-39 0-52l-90-52z" />
      <path fill="#FF3A44" d="M44 493c1 1 2 1 3 1 13 6 28 1 43-8l276-165-78-78L44 493z" />
    </svg>
  );
}

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
            src={game.screenshots[0]}
            alt={game.title}
            fill
            sizes="144px"
            className="object-cover group-hover:scale-110 transition-transform duration-700"
          />
        </div>
      </Link>

      {/* Play Store link */}
      <a
        href={game.playStore}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-3 flex items-center justify-center"
        aria-label={`${game.title} on Google Play`}
      >
        <GooglePlayIcon className="w-5 h-5 sm:w-6 sm:h-6" />
      </a>

      <h3 className="mt-2 text-gray-900 font-semibold text-sm sm:text-base text-center leading-tight line-clamp-1">
        {game.title}
      </h3>
    </motion.div>
  );
}
