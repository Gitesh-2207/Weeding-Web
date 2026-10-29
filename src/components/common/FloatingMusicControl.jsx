import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { VolumeX, Music } from 'lucide-react';
import { useBackgroundMusic } from '../../hooks/useBackgroundMusic';

export const FloatingMusicControl = () => {
  const { isPlaying, togglePlayPause, hasFailed } = useBackgroundMusic();
  const [isHovered, setIsHovered] = useState(false);

  // If audio completely failed or isn't supported, hide or show silent control gracefully
  if (hasFailed) return null;

  return (
    <div
      className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-40 flex items-center select-none"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Floating status tooltip on hover or tap */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, x: 10, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 8, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="mr-2.5 hidden sm:flex items-center px-3 py-1.5 rounded-full bg-[#FFF9EF]/95 border border-gold/60 shadow-royal backdrop-blur-md text-[11px] font-serif uppercase tracking-widest text-burgundy pointer-events-none"
          >
            <span className="inline-block w-1.5 h-1.5 rounded-full mr-2 bg-gold animate-pulse" />
            {isPlaying ? 'Music: Playing' : 'Music: Paused'}
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        type="button"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.94 }}
        onClick={togglePlayPause}
        className={`relative group flex items-center justify-center w-12 h-12 sm:w-13 sm:h-13 rounded-full bg-[#FFF9EF]/95 border shadow-royal backdrop-blur-md transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gold/60 cursor-pointer ${
          isPlaying
            ? 'border-gold/80 hover:shadow-gold-glow text-burgundy'
            : 'border-gold/40 hover:border-gold/70 text-royal-brown/70 hover:text-burgundy'
        }`}
        aria-label={isPlaying ? 'Pause romantic piano music' : 'Play romantic piano music'}
        title={isPlaying ? 'Pause background music' : 'Play background music'}
      >
        {/* Subtle glowing ring pulse when music is active */}
        {isPlaying && (
          <span className="absolute -inset-1 rounded-full bg-gold/25 animate-ping opacity-30 pointer-events-none" />
        )}

        {/* Ambient subtle spinning gold halo border */}
        {isPlaying && (
          <span className="absolute inset-0 rounded-full border border-dashed border-gold/40 animate-spin-slow pointer-events-none" />
        )}

        {/* Dynamic Center Visual: Equalizer bars + Music/Volume indicator */}
        <div className="relative flex items-center justify-center">
          {isPlaying ? (
            <div className="flex items-center space-x-1">
              <Music className="w-4 h-4 text-burgundy transition-transform group-hover:scale-110" />
              {/* Subtle animated sound wave / equalizer bars */}
              <div className="flex items-end space-x-[2px] h-3.5 pl-0.5" aria-hidden="true">
                <span className="w-[2.5px] bg-gold-dark rounded-full animate-music-bar-1" />
                <span className="w-[2.5px] bg-burgundy rounded-full animate-music-bar-2" />
                <span className="w-[2.5px] bg-gold-dark rounded-full animate-music-bar-3" />
              </div>
            </div>
          ) : (
            <div className="flex items-center justify-center">
              <VolumeX className="w-5 h-5 text-royal-brown/70 transition-transform group-hover:scale-110 group-hover:text-burgundy" />
            </div>
          )}
        </div>
      </motion.button>
    </div>
  );
};
