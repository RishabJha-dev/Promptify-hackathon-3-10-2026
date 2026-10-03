import React from 'react';

interface CareerStackLogoProps {
  className?: string;
  size?: number;
  showText?: boolean;
  showTagline?: boolean;
}

export const CareerStackIcon: React.FC<{ size?: number; className?: string }> = ({
  size = 32,
  className = ''
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`shrink-0 ${className}`}
    >
      <defs>
        <linearGradient id="top-face" x1="8" y1="4" x2="40" y2="24" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#38BDF8" />
          <stop offset="50%" stopColor="#3B82F6" />
          <stop offset="100%" stopColor="#6366F1" />
        </linearGradient>

        <linearGradient id="top-left" x1="8" y1="14" x2="24" y2="26" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#0284C7" />
          <stop offset="100%" stopColor="#4F46E5" />
        </linearGradient>

        <linearGradient id="mid-plate" x1="8" y1="18" x2="40" y2="34" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#3B82F6" />
          <stop offset="60%" stopColor="#8B5CF6" />
          <stop offset="100%" stopColor="#A855F7" />
        </linearGradient>

        <linearGradient id="mid-edge" x1="8" y1="24" x2="40" y2="34" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#1D4ED8" />
          <stop offset="100%" stopColor="#7E22CE" />
        </linearGradient>

        <linearGradient id="bot-plate" x1="8" y1="26" x2="40" y2="42" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#6366F1" />
          <stop offset="50%" stopColor="#9333EA" />
          <stop offset="100%" stopColor="#C084FC" />
        </linearGradient>

        <linearGradient id="bot-edge" x1="8" y1="32" x2="40" y2="42" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#4338CA" />
          <stop offset="100%" stopColor="#6B21A8" />
        </linearGradient>

        <filter id="cs-glow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#3B82F6" floodOpacity="0.3" />
        </filter>
      </defs>

      <g filter="url(#cs-glow)">
        {/* Layer 3: Bottom Plate */}
        <path d="M8 29.5 L24 38.5 L40 29.5 L40 33 L24 42 L8 33 Z" fill="url(#bot-edge)" />
        <path d="M24 25 L40 34 L24 43 L8 34 Z" fill="url(#bot-plate)" opacity="0.95" />

        {/* Layer 2: Middle Plate */}
        <path d="M8 21.5 L24 30.5 L40 21.5 L40 25 L24 34 L8 25 Z" fill="url(#mid-edge)" />
        <path d="M24 17 L40 26 L24 35 L8 26 Z" fill="url(#mid-plate)" />

        {/* Layer 1: Top Plate with 'C' cutout */}
        <path d="M8 13 L24 22 L40 13 L40 16.5 L24 25.5 L8 16.5 Z" fill="url(#top-left)" />
        <path d="M24 5 L40 14 L24 23 L8 14 Z" fill="url(#top-face)" />
        <path d="M20 11.8 L30 16 L23 20 L15 15.5 Z" fill="#070B14" />
        <path
          d="M24 9.5 L34 14.5 L29 17.5 L24 15 L18 18.5 L24 21.8 L32 17.5 L32 15.5 L24 11 L16 15.5 L24 19.8"
          stroke="url(#top-face)"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
};

export const CareerStackLogo: React.FC<CareerStackLogoProps> = ({
  size = 32,
  showText = true,
  showTagline = false,
  className = ''
}) => {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <CareerStackIcon size={size} />

      {showText && (
        <div className="flex flex-col leading-none">
          <div className="flex items-center text-lg sm:text-xl font-extrabold tracking-tight">
            <span className="text-white">Career</span>
            <span className="bg-gradient-to-r from-sky-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              Stack
            </span>
          </div>
          {showTagline && (
            <span className="text-[10px] font-mono tracking-widest text-slate-400 uppercase mt-0.5">
              Stack Skills. Build Your Career.
            </span>
          )}
        </div>
      )}
    </div>
  );
};
