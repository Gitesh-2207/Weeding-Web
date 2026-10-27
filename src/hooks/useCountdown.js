import { useState, useEffect } from 'react';

export function useCountdown(targetDateString) {
  const [timeLeft, setTimeLeft] = useState({
    days: '00',
    hours: '00',
    minutes: '00',
    seconds: '00',
    isExpired: false,
    isToday: false,
  });

  useEffect(() => {
    const targetDate = new Date(targetDateString).getTime();

    const calculateTime = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        // Check if it's within the same day
        const oneDayMs = 24 * 60 * 60 * 1000;
        if (Math.abs(difference) <= oneDayMs) {
          setTimeLeft({
            days: '00',
            hours: '00',
            minutes: '00',
            seconds: '00',
            isExpired: false,
            isToday: true,
          });
        } else {
          setTimeLeft({
            days: '00',
            hours: '00',
            minutes: '00',
            seconds: '00',
            isExpired: true,
            isToday: false,
          });
        }
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({
        days: String(days).padStart(2, '0'),
        hours: String(hours).padStart(2, '0'),
        minutes: String(minutes).padStart(2, '0'),
        seconds: String(seconds).padStart(2, '0'),
        isExpired: false,
        isToday: false,
      });
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);

    return () => clearInterval(interval);
  }, [targetDateString]);

  return timeLeft;
}
