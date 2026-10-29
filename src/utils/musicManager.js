// Singleton background music manager for persistent, seamless audio playback
// across website exploration, component re-renders, and route changes.

class MusicManager {
  constructor() {
    this.audio = null;
    this.audioSrc = '/music/wedding-piano.mp3';
    this.targetVolume = 0.25; // 25% background volume (within 20-30% requirement)
    this.isPlaying = false;
    this.fadeInterval = null;
    this.subscribers = new Set();
    this.hasInitialized = false;
    this.hasFailed = false;
  }

  init() {
    if (this.hasInitialized || typeof window === 'undefined') return;
    this.hasInitialized = true;

    try {
      this.audio = new Audio(this.audioSrc);
      this.audio.loop = true;
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

  // Smoothly starts playback from low volume (0.01) up to targetVolume (0.25)
  startWithFadeIn(durationMs = 2400) {
    this.init();
    if (!this.audio) return;

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

    if (this.fadeInterval) {
      clearInterval(this.fadeInterval);
      this.fadeInterval = null;
    }

    if (this.isPlaying) {
      this.audio.pause();
    } else {
      // Resume from paused position with steady comfortable background volume
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

