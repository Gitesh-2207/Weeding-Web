import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

export const PetalsOverlay = ({ count = 18 }) => {
  const petals = useMemo(() => {
    return Array.from({ length: count }).map((_, i) => ({
      id: i,
      left: `${(i * (100 / count) + (i % 3) * 5) % 96}%`,
      delay: (i * 0.7) % 6,
      duration: 12 + (i % 8) * 2,
      size: 14 + (i % 4) * 5,
      type: i % 3 === 0 ? 'marigold' : i % 3 === 1 ? 'rose' : 'gold',
      rotation: (i * 45) % 360,
    }));
  }, [count]);

  return (
    <div className="petals-container" aria-hidden="true">
      {petals.map((petal) => {
        const isMarigold = petal.type === 'marigold';
        const isRose = petal.type === 'rose';

        return (
          <motion.div
            key={petal.id}
            initial={{
              y: '-10%',
              x: '0px',
              rotate: petal.rotation,
              opacity: 0,
            }}
            animate={{
              y: '105vh',
              x: ['0px', '25px', '-20px', '15px'],
              rotate: petal.rotation + 360,
              opacity: [0, 0.75, 0.85, 0],
            }}
            transition={{
              duration: petal.duration,
              delay: petal.delay,
              repeat: Infinity,
              ease: 'linear',
            }}
            style={{
              position: 'absolute',
              left: petal.left,
              top: 0,
              width: petal.size,
              height: petal.size * 1.3,
            }}
          >
            <svg viewBox="0 0 30 40" fill="none" className="w-full h-full filter drop-shadow-[0_2px_4px_rgba(0,0,0,0.06)]">
              {isMarigold && (
                <path
                  d="M15 2 C25 12, 28 26, 15 38 C2 26, 5 12, 15 2 Z"
                  fill="url(#marigoldGrad)"
                  opacity="0.85"
                />
              )}
              {isRose && (
                <path
                  d="M15 4 C24 10, 26 24, 15 36 C4 24, 6 10, 15 4 Z"
                  fill="url(#roseGrad)"
                  opacity="0.8"
                />
              )}
              {!isMarigold && !isRose && (
                <path
                  d="M15 3 C22 12, 24 24, 15 37 C6 24, 8 12, 15 3 Z"
                  fill="url(#goldGrad)"
                  opacity="0.75"
                />
              )}
              <defs>
                <linearGradient id="marigoldGrad" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#F9A825" />
                  <stop offset="60%" stopColor="#FB8C00" />
                  <stop offset="100%" stopColor="#E65100" />
                </linearGradient>
                <linearGradient id="roseGrad" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#F48FB1" />
                  <stop offset="60%" stopColor="#C2185B" />
                  <stop offset="100%" stopColor="#880E4F" />
                </linearGradient>
                <linearGradient id="goldGrad" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#FFF9EF" />
                  <stop offset="50%" stopColor="#C5A15A" />
                  <stop offset="100%" stopColor="#9B7832" />
                </linearGradient>
              </defs>
            </svg>
          </motion.div>
        );
      })}
    </div>
  );
};
