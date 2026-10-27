import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

export const ScrollProgressBar = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    restDelta: 0.001,
  });

  return (
    <div className="fixed top-0 left-0 right-0 h-[3.5px] z-50 pointer-events-none bg-gold/15">
      <motion.div
        style={{ scaleX, transformOrigin: '0%' }}
        className="h-full bg-gradient-to-r from-gold-dark via-gold to-burgundy-light shadow-[0_0_10px_rgba(212,175,55,0.7)]"
      />
    </div>
  );
};
