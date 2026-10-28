import React from 'react';

/**
 * ScrollExploreIndicator
 * A refined, royal wedding scroll indicator with subtle breathing text animation,
 * a delicate vertical gold hairline track, and an animated burgundy bead moving smoothly downwards.
 * 
 * Features:
 * - Pure transform & opacity hardware-accelerated animations
 * - Responsive sizing and motion travel distance
 * - Clickable smooth navigation via scrollIntoView({ behavior: 'smooth' })
 * - Full accessibility with keyboard navigation & prefers-reduced-motion support
 */
export const ScrollExploreIndicator = ({
  t,
  lang = 'en',
  targetId = 'countdown',
  className = '',
}) => {
  const handleScrollToNext = (e) => {
    if (e) {
      e.preventDefault();
    }
    const nextSection = document.getElementById(targetId);
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const labelText = t?.hero?.scrollHint || 'Scroll to explore the celebration';

  return (
    <a
      href={`#${targetId}`}
      onClick={handleScrollToNext}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          handleScrollToNext(e);
        }
      }}
      role="button"
      tabIndex={0}
      aria-label={labelText}
      className={`group flex flex-col items-center justify-center cursor-pointer select-none outline-none focus-visible:ring-2 focus-visible:ring-gold/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#F8F1E3] rounded-2xl px-4 py-2 transition-transform duration-300 ${className}`}
    >
      {/* Scroll Prompt Text with subtle breathing animation */}
      <div className="flex items-center space-x-2 sm:space-x-3 mb-2.5">
        <span
          className="hidden sm:inline-block w-4 h-[1px] bg-gradient-to-r from-transparent to-gold/50 transition-opacity duration-300 group-hover:to-burgundy/60"
          aria-hidden="true"
        />
        <span
          className={`scroll-text-float ${lang === 'hi' ? 'font-devanagari' : 'font-cormorant'} text-[10px] sm:text-xs font-semibold tracking-[0.26em] sm:tracking-[0.3em] uppercase text-royal-brown/80 group-hover:text-burgundy transition-colors duration-300 whitespace-nowrap`}
        >
          {labelText}
        </span>
        <span
          className="hidden sm:inline-block w-4 h-[1px] bg-gradient-to-l from-transparent to-gold/50 transition-opacity duration-300 group-hover:to-burgundy/60"
          aria-hidden="true"
        />
      </div>

      {/* Animated Scroll Indicator: Fine vertical hairline track & descending royal dot */}
      <div className="relative flex flex-col items-center h-11 sm:h-13 w-6">
        {/* Top miniature ornamental anchor node */}
        <div
          className="w-1.5 h-1.5 rounded-full bg-gold/80 border border-gold-light/60 mb-0.5 group-hover:bg-burgundy/80 transition-colors duration-300 flex-shrink-0"
          aria-hidden="true"
        />

        {/* Vertical guide track container */}
        <div className="relative flex-1 w-full flex items-center justify-center overflow-visible">
          {/* Subtle gold gradient track line */}
          <div
            className="w-[1.5px] h-full bg-gradient-to-b from-gold/75 via-gold/35 to-transparent transition-opacity duration-300 group-hover:from-gold group-hover:via-gold/50"
            aria-hidden="true"
          />

          {/* Animated descending dot with opacity transition */}
          <div
            className="scroll-dot-move absolute top-0 left-1/2 w-2 h-2 rounded-full bg-burgundy border border-gold/70 shadow-[0_0_6px_rgba(197,161,90,0.45)] group-hover:border-gold-shimmer group-hover:shadow-[0_0_8px_rgba(111,41,39,0.35)] transition-shadow duration-300 pointer-events-none"
            aria-hidden="true"
          />
        </div>

        {/* Bottom subtle terminal indicator */}
        <div
          className="w-1.5 h-1.5 rotate-45 border-r border-b border-gold/45 mt-0.5 group-hover:border-burgundy/70 transition-colors duration-300 flex-shrink-0"
          aria-hidden="true"
        />
      </div>
    </a>
  );
};

