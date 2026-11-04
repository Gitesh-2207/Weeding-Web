// Singleton background music manager for persistent, seamless audio playback
// across website exploration, component re-renders, and tab visibility changes.

class MusicManager {
  constructor() {
    this.audio = null;
    this.currentSourceIndex = 0;
    this.targetVolume = 0.45; // 45% volume (comfortable, clear ambient music)
    this.isPlaying = false;
    this.manualPause = false; // Set to true when user explicitly turns music off
    this.wasAutoPaused = false; // Tracks if music was paused due to tab switch or minimize
    this.fadeInterval = null;
    this.subscribers = new Set();

    if (typeof window !== 'undefined') {
      this.handleVisibilityChange = this.handleVisibilityChange.bind(this);
      this.handlePageUnload = this.handlePageUnload.bind(this);
      this.setupVisibilityListeners();
    }
  }

  getSources() {
    try {
      const base = (typeof import.meta !== 'undefined' && import.meta.env && import.meta.env.BASE_URL) || '/';
      const cleanBase = base.endsWith('/') ? base.slice(0, -1) : base;
      return [
        `${cleanBase}/music/wedding-piano.m4a`,
        `${cleanBase}/music/wedding-piano.mp3`,
        `${cleanBase}/music/wedding-piano.aac`,
      ];
    } catch {
      return [
        '/music/wedding-piano.m4a',
        '/music/wedding-piano.mp3',
        '/music/wedding-piano.aac',
      ];
    }
  }

  setupVisibilityListeners() {
    if (typeof document !== 'undefined') {
      document.addEventListener('visibilitychange', this.handleVisibilityChange);
    }
    if (typeof window !== 'undefined') {
      window.addEventListener('pagehide', this.handlePageUnload);
      window.addEventListener('beforeunload', this.handlePageUnload);
    }
  }

  handleVisibilityChange() {
    if (!this.audio) return;

    // When the visitor switches tab or minimizes the browser
    if (document.hidden || document.visibilityState === 'hidden') {
      if (!this.audio.paused && !this.manualPause) {
        this.wasAutoPaused = true;
        if (this.fadeInterval) {
          clearInterval(this.fadeInterval);
          this.fadeInterval = null;
        }
        this.audio.pause();
      }
    } else if (document.visibilityState === 'visible') {
      // When the visitor returns to the wedding website tab
      // ONLY resume if it was auto-paused and user hasn't explicitly turned it off
      if (this.wasAutoPaused && !this.manualPause) {
        this.wasAutoPaused = false;
        if (this.audio.paused) {
          this.audio.volume = this.targetVolume;
          this.audio.play().catch(() => {});
        }
      }
    }
  }

  handlePageUnload() {
    if (this.audio) {
      if (this.fadeInterval) {
        clearInterval(this.fadeInterval);
        this.fadeInterval = null;
      }
      this.audio.pause();
    }
  }

  tryNextSource() {
    const sources = this.getSources();
    if (this.currentSourceIndex + 1 < sources.length) {
      this.currentSourceIndex++;
      const nextSrc = sources[this.currentSourceIndex];
      console.warn('Switching to alternative audio source:', nextSrc);
      if (this.audio) {
        const wasPlaying = this.isPlaying && !this.manualPause;
        this.audio.src = nextSrc;
        this.audio.load();
        if (wasPlaying) {
          const p = this.audio.play();
          if (p !== undefined) {
            p.catch((err) => console.warn('Next source play catch:', err));
          }
        }
      }
      return true;
    }
    return false;
  }

  init() {
    if (this.audio || typeof window === 'undefined') return;

    try {
      const sources = this.getSources();
      this.currentSourceIndex = 0;

      this.audio = new Audio();
      this.audio.loop = true; // Loops continuously while website is open
      this.audio.preload = 'auto';
      this.audio.volume = this.targetVolume;
      this.audio.src = sources[this.currentSourceIndex];

      // Sync state with native HTML5 audio events
      this.audio.addEventListener('play', () => {
        this.isPlaying = true;
        this.notify();
      });

      this.audio.addEventListener('playing', () => {
        this.isPlaying = true;
        this.notify();
      });

      this.audio.addEventListener('pause', () => {
        this.isPlaying = false;
        this.notify();
      });

      this.audio.addEventListener('ended', () => {
        if (!this.manualPause && this.audio) {
          this.audio.currentTime = 0;
          this.audio.play().catch(() => {});
        } else {
          this.isPlaying = false;
          this.notify();
        }
      });

      this.audio.addEventListener('error', (e) => {
        console.warn('Wedding audio source notice for', this.audio?.src, e);
        const switched = this.tryNextSource();
        if (!switched) {
          this.isPlaying = false;
          this.notify();
        }
      });
    } catch (err) {
      console.warn('Audio initialization notice:', err);
    }
  }

  fadeVolumeTo(targetVol, durationMs = 1800) {
    if (this.fadeInterval) {
      clearInterval(this.fadeInterval);
      this.fadeInterval = null;
    }
    if (!this.audio) return;

    const steps = 18;
    const stepTime = Math.max(20, Math.round(durationMs / steps));
    const startVol = this.audio.volume;
    const diff = targetVol - startVol;
    let currentStep = 0;

    this.fadeInterval = setInterval(() => {
      currentStep++;
      if (!this.audio || this.manualPause || this.audio.paused) {
        clearInterval(this.fadeInterval);
        this.fadeInterval = null;
        return;
      }

      this.audio.volume = Math.min(1, Math.max(0, startVol + (diff * (currentStep / steps))));

      if (currentStep >= steps) {
        this.audio.volume = targetVol;
        clearInterval(this.fadeInterval);
        this.fadeInterval = null;
      }
    }, stepTime);
  }

  startWithFadeIn(durationMs = 2400) {
    this.init();
    if (!this.audio) return;

    // Respect user's explicit decision if they manually turned music off
    if (this.manualPause) return;

    // If already playing at normal volume, do not restart
    if (!this.audio.paused && this.isPlaying && this.audio.volume >= this.targetVolume) {
      return;
    }

    if (this.fadeInterval) {
      clearInterval(this.fadeInterval);
      this.fadeInterval = null;
    }

    try {
      this.audio.volume = 0.05;
      const playPromise = this.audio.play();

      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            if (this.manualPause && this.audio) {
              this.audio.pause();
              this.isPlaying = false;
              this.notify();
              return;
            }
            this.isPlaying = true;
            this.notify();
            this.fadeVolumeTo(this.targetVolume, durationMs);
          })
          .catch((err) => {
            console.warn('Fade-in playback notice:', err);
            const switched = this.tryNextSource();
            if (!switched && this.audio) {
              this.isPlaying = !this.audio.paused;
              this.notify();
            }
          });
      }
    } catch (err) {
      console.warn('Audio play error:', err);
      this.tryNextSource();
    }
  }

  // Toggles music ON / OFF directly as per the user's need
  togglePlayPause() {
    this.init();
    if (!this.audio) return;

    if (this.fadeInterval) {
      clearInterval(this.fadeInterval);
      this.fadeInterval = null;
    }

    // Is the audio currently playing?
    const isCurrentlyPlaying = !this.audio.paused;

    if (isCurrentlyPlaying) {
      // 1. User wants music OFF -> Pause immediately
      this.manualPause = true;
      this.wasAutoPaused = false;
      this.audio.pause();
      this.isPlaying = false;
      this.notify();
    } else {
      // 2. User wants music ON -> Resume playing immediately
      this.manualPause = false;
      this.wasAutoPaused = false;
      this.audio.volume = this.targetVolume;

      const playPromise = this.audio.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            if (this.manualPause && this.audio) {
              this.audio.pause();
              this.isPlaying = false;
              this.notify();
              return;
            }
            this.isPlaying = true;
            this.notify();
          })
          .catch((err) => {
            console.warn('Audio play error:', err);
            const switched = this.tryNextSource();
            if (!switched && this.audio) {
              this.isPlaying = !this.audio.paused;
              this.notify();
            }
          });
      }
    }
  }

  pause() {
    if (this.audio) {
      if (this.fadeInterval) {
        clearInterval(this.fadeInterval);
        this.fadeInterval = null;
      }
      this.manualPause = true;
      this.wasAutoPaused = false;
      this.audio.pause();
      this.isPlaying = false;
      this.notify();
    }
  }

  subscribe(callback) {
    this.subscribers.add(callback);
    // Immediately emit current state
    callback({
      isPlaying: this.isPlaying,
      hasFailed: false,
    });
    return () => this.subscribers.delete(callback);
  }

  notify() {
    const state = {
      isPlaying: this.isPlaying,
      hasFailed: false,
    };
    this.subscribers.forEach((cb) => {
      try {
        cb(state);
      } catch (err) {
        console.error('Subscriber callback error:', err);
      }
    });
  }

  getState() {
    return {
      isPlaying: this.isPlaying,
      hasFailed: false,
    };
  }
}

export const musicManager = new MusicManager();
