import React from 'react';

export const CornerFlourish = ({ className = "w-8 h-8", position = "top-left", color = "#C5A15A" }) => {
  const rotationClass = {
    "top-left": "",
    "top-right": "rotate-90",
    "bottom-right": "rotate-180",
    "bottom-left": "-rotate-90",
  }[position] || "";

  return (
    <svg
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className} ${rotationClass} pointer-events-none`}
    >
      <path
        d="M4 56V20C4 11.1634 11.1634 4 20 4H56"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M10 56V26C10 17.1634 17.1634 10 26 10H56"
        stroke={color}
        strokeWidth="0.75"
        strokeDasharray="2 2"
      />
      <circle cx="20" cy="20" r="3" fill={color} />
      <path
        d="M20 20C25 15 32 18 36 24C38 27 40 33 46 34"
        stroke={color}
        strokeWidth="1"
        strokeLinecap="round"
      />
      <circle cx="4" cy="56" r="2" fill={color} />
      <circle cx="56" cy="4" r="2" fill={color} />
      <path
        d="M14 36C18 30 26 30 30 36"
        stroke={color}
        strokeWidth="0.8"
      />
    </svg>
  );
};

export const RoyalMandala = ({ size = 64, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`inline-block ${className}`}
  >
    <circle cx="50" cy="50" r="46" stroke="#C5A15A" strokeWidth="1" strokeDasharray="3 3" opacity="0.6" />
    <circle cx="50" cy="50" r="40" stroke="#C5A15A" strokeWidth="1.2" />
    <circle cx="50" cy="50" r="32" stroke="#6F2927" strokeWidth="0.8" opacity="0.8" />
    <circle cx="50" cy="50" r="20" stroke="#C5A15A" strokeWidth="1" />
    
    {/* 8 radiating lotus petals */}
    {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
      <g key={i} transform={`rotate(${angle} 50 50)`}>
        <path
          d="M50 20 C53 28, 58 32, 58 40 C58 46, 54 50, 50 50 C46 50, 42 46, 42 40 C42 32, 47 28, 50 20 Z"
          fill="#C5A15A"
          opacity="0.3"
        />
        <path
          d="M50 15 C52 22, 55 26, 55 33 C55 37, 52 40, 50 40 C48 40, 45 37, 45 33 C45 26, 48 22, 50 15 Z"
          fill="#6F2927"
          opacity="0.7"
        />
        <circle cx="50" cy="11" r="1.5" fill="#C5A15A" />
      </g>
    ))}
    <circle cx="50" cy="50" r="6" fill="#C5A15A" />
    <circle cx="50" cy="50" r="2.5" fill="#6F2927" />
  </svg>
);

export const FloralGarland = ({ className = "" }) => (
  <div className={`w-full flex items-center justify-center overflow-hidden py-1 ${className}`}>
    <div className="flex items-center space-x-2 text-gold">
      <div className="h-[1px] w-12 sm:w-24 bg-gradient-to-r from-transparent via-gold to-gold/60" />
      <span className="text-xs tracking-widest text-burgundy">♦</span>
      <span className="text-gold font-serif text-sm">❧</span>
      <RoyalMandala size={28} />
      <span className="text-gold font-serif text-sm">☙</span>
      <span className="text-xs tracking-widest text-burgundy">♦</span>
      <div className="h-[1px] w-12 sm:w-24 bg-gradient-to-l from-transparent via-gold to-gold/60" />
    </div>
  </div>
);

export const HangingToran = ({ count = 9, className = "" }) => (
  <div className={`w-full flex justify-between items-start pointer-events-none px-4 ${className}`}>
    {Array.from({ length: count }).map((_, i) => {
      const height = i % 2 === 0 ? "h-10 sm:h-14" : "h-6 sm:h-9";
      const isMarigold = i % 2 === 0;
      return (
        <div key={i} className="flex flex-col items-center">
          <div className={`w-[1px] ${height} bg-gold/50`} />
          <div
            className={`w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full shadow-sm ${
              isMarigold ? "bg-[#F9A825]" : "bg-[#6F2927]"
            } border border-gold/40 flex items-center justify-center`}
          >
            <div className="w-1.5 h-1.5 rounded-full bg-[#FFF9EF]" />
          </div>
        </div>
      );
    })}
  </div>
);
