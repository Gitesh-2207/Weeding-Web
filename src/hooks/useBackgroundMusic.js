import { useState, useEffect } from 'react';
import { musicManager } from '../utils/musicManager';

export function useBackgroundMusic() {
  const [musicState, setMusicState] = useState(() => musicManager.getState());

  useEffect(() => {
    return musicManager.subscribe((state) => {
      setMusicState(state);
    });
  }, []);

  return {
    isPlaying: musicState.isPlaying,
    hasFailed: musicState.hasFailed,
    playWithFadeIn: (duration) => musicManager.startWithFadeIn(duration),
    togglePlayPause: () => musicManager.togglePlayPause(),
    pause: () => musicManager.pause(),
  };
}

