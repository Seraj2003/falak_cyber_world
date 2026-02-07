import React from 'react';

const FalakLogo = () => {
  return (
    <div className="flex items-center gap-3 py-2 px-4 cursor-pointer group">
      {/* Stylized Cyber Icon / Bird */}
      <div className="relative w-10 h-10 flex items-center justify-center">
        {/* Colorful Abstract Curves (SVG) */}
        <svg 
          viewBox="0 0 100 100" 
          className="w-full h-full drop-shadow-sm transition-transform duration-300 group-hover:scale-110"
        >
          {/* Top Yellow Curve */}
          <path d="M20,40 Q50,10 90,40" fill="none" stroke="#FBBF24" strokeWidth="8" strokeLinecap="round" />
          {/* Middle Green/Blue Curves */}
          <path d="M15,55 Q45,35 85,55" fill="none" stroke="#10B981" strokeWidth="8" strokeLinecap="round" />
          <path d="M10,70 Q40,60 80,80" fill="none" stroke="#3B82F6" strokeWidth="8" strokeLinecap="round" />
          {/* The "Eye" */}
          <circle cx="45" cy="45" r="8" fill="white" />
          <circle cx="45" cy="45" r="4" fill="#1D4ED8" />
        </svg>
      </div>

      {/* Text Elements */}
      <div className="flex flex-col sm:flex-row sm:gap-2 items-baseline">
        <span className="text-2xl font-black tracking-tighter text-slate-800 uppercase italic">
          Falak
        </span>
        <span className="text-2xl font-extrabold tracking-tight text-red-600 uppercase drop-shadow-[1px_1px_0px_rgba(0,0,0,0.1)]">
          Cyber World
        </span>
      </div>
    </div>
  );
};

export default FalakLogo;