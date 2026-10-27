import React, { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

export const MusicToggle = ({ t }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);
  const audioContextRef = useRef(null);
  const synthIntervalRef = useRef(null);

  // Traditional Indian Classical Raag Yaman Notes frequencies (Hz)
  const notes = [220, 247.5, 275, 311.1, 330, 371.25, 412.5, 440, 495, 550];

  const playSynthesizedMelody = () => {
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!audioContextRef.current) {
        audioContextRef.current = new AudioCtx();
      }
      const ctx = audioContextRef.current;
      if (ctx.state === 'suspended') {
        ctx.resume();
      }

      // Continuous gentle tanpura drone
      const droneOsc = ctx.createOscillator();
      const droneGain = ctx.createGain();
      droneOsc.type = 'triangle';
      droneOsc.frequency.setValueAtTime(110, ctx.currentTime); // Sa
      droneGain.gain.setValueAtTime(0.04, ctx.currentTime);
      droneOsc.connect(droneGain);
      droneGain.connect(ctx.destination);
      droneOsc.start();

      let step = 0;
      synthIntervalRef.current = setInterval(() => {
        if (!audioContextRef.current) return;
        const noteFreq = notes[step % notes.length];
        step++;

        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(noteFreq, ctx.currentTime);

        // Shehnai-like gentle attack and soft decay
        gain.gain.setValueAtTime(0.001, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.08, ctx.currentTime + 0.3);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 1.8);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start();
        osc.stop(ctx.currentTime + 2.0);
      }, 900);
    } catch (e) {
      console.warn("Web Audio synthesis not available:", e);
    }
  };

  const stopSynthesizedMelody = () => {
    if (synthIntervalRef.current) {
      clearInterval(synthIntervalRef.current);
      synthIntervalRef.current = null;
    }
    if (audioContextRef.current) {
      audioContextRef.current.close().catch(() => {});
      audioContextRef.current = null;
    }
  };

  const toggleMusic = () => {
    if (isPlaying) {
      if (audioRef.current && !audioRef.current.paused) {
        audioRef.current.pause();
      }
      stopSynthesizedMelody();
      setIsPlaying(false);
    } else {
      // Try local audio file first
      if (audioRef.current) {
        audioRef.current.volume = 0.5;
        audioRef.current.play().then(() => {
          setIsPlaying(true);
        }).catch((err) => {
          console.info("Audio element playback prevented or file not present, using Web Audio Indian Shehnai synthesis:", err.message);
          playSynthesizedMelody();
          setIsPlaying(true);
        });
      } else {
        playSynthesizedMelody();
        setIsPlaying(true);
      }
    }
  };

  useEffect(() => {
    return () => {
      stopSynthesizedMelody();
    };
  }, []);

  return (
    <>
      <audio
        ref={audioRef}
        src="/audio/shehnai-wedding-theme.mp3"
        loop
        preload="auto"
        onError={() => {
          // Fallback seamlessly ready
        }}
      />
      <button
        onClick={toggleMusic}
        className="fixed bottom-6 right-6 z-50 group flex items-center space-x-2.5 px-4 py-2.5 rounded-full bg-[#FFF9EF]/90 backdrop-blur-md border border-gold/50 shadow-royal hover:border-gold hover:shadow-gold-glow transition-all duration-300"
        aria-label={isPlaying ? t.music.pause : t.music.play}
        title={isPlaying ? t.music.pause : t.music.play}
      >
        <div className="relative flex items-center justify-center w-7 h-7 rounded-full bg-gold/15 text-gold group-hover:bg-gold group-hover:text-[#FFF9EF] transition-colors">
          {isPlaying ? (
            <Volume2 className="w-4 h-4 animate-pulse" />
          ) : (
            <VolumeX className="w-4 h-4 opacity-70" />
          )}
        </div>

        {/* Visualizer Soundbars */}
        {isPlaying ? (
          <div className="flex items-end space-x-0.5 h-3.5 px-0.5">
            <span className="w-0.5 h-full bg-burgundy rounded-full animate-bounce [animation-delay:0.1s]" />
            <span className="w-0.5 h-full bg-gold rounded-full animate-bounce [animation-delay:0.3s]" />
            <span className="w-0.5 h-full bg-burgundy rounded-full animate-bounce [animation-delay:0.2s]" />
            <span className="w-0.5 h-full bg-gold rounded-full animate-bounce [animation-delay:0.4s]" />
          </div>
        ) : (
          <span className="text-xs uppercase tracking-widest font-serif text-royal-brown/80 hidden sm:inline">
            Shehnai
          </span>
        )}
      </button>
    </>
  );
};
