// Singleton background music manager for persistent, seamless audio playback
// across website exploration, component re-renders, and tab visibility changes.

class MusicManager {
  constructor() {
    this.audio = null;
    this.audioSrc = '/music/wedding-piano.mp3';
    this.targetVolume = 0.25; // 25% background volume (comfortable ambient piano)
    this.isPlaying = false;
    this.fadeInterval = null;
    this.subscribers = new Set();
    this.hasInitialized = false;
    this.hasFailed = false;
    this.hasUserInitiated = false; // Only allow audio once visitor has clicked or tapped
    this.wasAutoPaused = false; // Tracks if music was paused due to tab switch or minimize

    if (typeof window !== 'undefined') {
      this.handleVisibilityChange = this.handleVisibilityChange.bind(this);
      this.handlePageUnload = this.handlePageUnload.bind(this);
      this.setupVisibilityListeners();
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
    if (!this.audio || !this.hasUserInitiated) return;

    // When the visitor switches tab or minimizes the browser
    if (document.hidden || document.visibilityState === 'hidden') {
      if (this.isPlaying || !this.audio.paused) {
        this.wasAutoPaused = true;
        if (this.fadeInterval) {
          clearInterval(this.fadeInterval);
          this.fadeInterval = null;
        }
        this.audio.pause();
      }
    } else if (document.visibilityState === 'visible') {
      // When the visitor returns to the wedding website tab
      if (this.wasAutoPaused) {
        this.wasAutoPaused = false;
        if (this.audio.paused) {
          this.audio.volume = this.targetVolume;
          const playPromise = this.audio.play();
          if (playPromise !== undefined) {
            playPromise.catch((err) => {
              // Ignore abort errors from rapid tab switches
              console.warn('Audio auto-resume on visibility notice:', err);
            });
          }
        }
      }
    }
  }

  handlePageUnload() {
    // When the visitor closes the website tab or browser
    if (this.audio) {
      if (this.fadeInterval) {
        clearInterval(this.fadeInterval);
        this.fadeInterval = null;
      }
      this.audio.pause();
    }
  }

  init() {
    if (this.hasInitialized || typeof window === 'undefined') return;
    this.hasInitialized = true;

    try {
      this.audio = new Audio(this.audioSrc);
      this.audio.loop = true; // Music plays continuously while site is open
      this.audio.preload = 'auto';
      this.audio.volume = 0;

      // Reflect actual browser playback events
      this.audio.addEventListener('play', () => {
        this.isPlaying = true;
        this.notify();
      });

      this.audio.addEventListener('pause', () => {
        this.isPlaying = false;
        this.notify();
      });

      this.audio.addEventListener('error', (e) => {
        console.warn('Wedding audio notice: Could not load audio from', this.audioSrc, e);
        this.hasFailed = true;
        this.isPlaying = false;
        this.notify();
      });
    } catch (err) {
      console.warn('Audio initialization notice:', err);
      this.hasFailed = true;
    }
  }

  subscribe(callback) {
    this.subscribers.add(callback);
    // Immediately emit current state
    callback({
      isPlaying: this.isPlaying,
      hasFailed: this.hasFailed,
    });
    return () => this.subscribers.delete(callback);
  }

  notify() {
    const state = {
      isPlaying: this.isPlaying,
      hasFailed: this.hasFailed,
    };
    this.subscribers.forEach((cb) => {
      try {
        cb(state);
      } catch (err) {
        console.error('Subscriber callback error:', err);
      }
    });
  }

  // Smoothly starts playback from low volume up to targetVolume (complying with user gesture)
  startWithFadeIn(durationMs = 2400) {
    this.init();
    if (!this.audio) return;

    this.hasUserInitiated = true;
    this.wasAutoPaused = false;

    // If already playing at normal volume, prevent duplicate playback or restart
    if (this.isPlaying && !this.audio.paused && this.audio.volume >= this.targetVolume) {
      return;
    }

    if (this.fadeInterval) {
      clearInterval(this.fadeInterval);
      this.fadeInterval = null;
    }

    try {
      this.audio.volume = 0.01;
      const playPromise = this.audio.play();

      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            this.isPlaying = true;
            this.notify();

            // Smooth volume ramp-up
            const stepMs = 50;
            const totalSteps = Math.max(1, Math.round(durationMs / stepMs));
            const volumeStep = (this.targetVolume - 0.01) / totalSteps;
            let step = 0;

            this.fadeInterval = setInterval(() => {
              step++;
              if (!this.audio) {
                if (this.fadeInterval) clearInterval(this.fadeInterval);
                return;
              }

              const nextVol = Math.min(this.targetVolume, 0.01 + step * volumeStep);
              this.audio.volume = nextVol;

              if (step >= totalSteps || this.audio.volume >= this.targetVolume) {
                this.audio.volume = this.targetVolume;
                clearInterval(this.fadeInterval);
                this.fadeInterval = null;
              }
            }, stepMs);
          })
          .catch((err) => {
            console.warn('Autoplay prevented or playback error:', err);
          });
      }
    } catch (err) {
      console.warn('Audio play error:', err);
    }
  }

  // Toggles pause / resume preserving exact position
  togglePlayPause() {
    this.init();
    if (!this.audio) return;

    this.hasUserInitiated = true;

    if (this.fadeInterval) {
      clearInterval(this.fadeInterval);
      this.fadeInterval = null;
    }

    if (this.isPlaying) {
      // Manual pause: do not auto-resume on tab switch
      this.wasAutoPaused = false;
      this.audio.pause();
    } else {
      // Manual resume: resume from paused position
      this.wasAutoPaused = false;
      this.audio.volume = this.targetVolume;
      const playPromise = this.audio.play();
      if (playPromise !== undefined) {
        playPromise.catch((err) => {
          console.warn('Audio resume error:', err);
        });
      }
    }
  }

  pause() {
    if (this.audio && this.isPlaying) {
      if (this.fadeInterval) {
        clearInterval(this.fadeInterval);
        this.fadeInterval = null;
      }
      this.wasAutoPaused = false;
      this.audio.pause();
    }
  }

  getState() {
    return {
      isPlaying: this.isPlaying,
      hasFailed: this.hasFailed,
    };
  }
}

export const musicManager = new MusicManager();
