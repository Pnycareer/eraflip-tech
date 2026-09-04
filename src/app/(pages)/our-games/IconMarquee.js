"use client";

import Image from "next/image";


// 14 icons living in /public/icons/1.webp ... 14.webp
const icons = Array.from({ length: 14 }, (_, i) => `/icons/${i + 1}.webp`);

function Row({ direction = "left", duration = 60, offset = 0 }) {
  // rotate the list per row so rows don't look identical, then duplicate
  const rotated = [...icons.slice(offset), ...icons.slice(0, offset)];
  const items = [...rotated, ...rotated, ...rotated, ...rotated];

  return (
    <div className="relative overflow-hidden py-2 sm:py-3">
      <div
        className={`flex w-max gap-4 sm:gap-6 marquee-track-${direction}`}
        style={{ animationDuration: `${duration}s` }}
      >
        {items.map((src, i) => (
          <div
            key={`${src}-${i}`}
            className="relative h-24 w-24 sm:h-32 sm:w-32 md:h-40 md:w-40 shrink-0 rounded-3xl overflow-hidden shadow-lg ring-1 ring-black/5 transition-transform duration-300 hover:scale-105"
          >
            <Image
              src={src}
              alt={`Game icon ${(i % 14) + 1}`}
              fill
              sizes="160px"
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function IconMarquee() {
  return (
    <section className="relative bg-white pt-28 md:pt-32 pb-12 md:pb-16 overflow-hidden">
      <div className="space-y-4">
        <Row direction="right" duration={70} offset={0} />
        <Row direction="left" duration={75} offset={5} />
        <Row direction="right" duration={65} offset={9} />
      </div>

      {/* edge fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-40 bg-gradient-to-r from-white via-white/70 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-40 bg-gradient-to-l from-white via-white/70 to-transparent" />
    </section>
  );
}
