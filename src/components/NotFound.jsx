import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center text-center px-6 py-32">
      {/* Massive Error Code */}
      <h1 className="text-[15vw] font-black text-slate-100 leading-none absolute z-0 select-none">
        404
      </h1>
      
      <div className="relative z-10 space-y-6">
        <h2 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter uppercase italic">
          Lost in <span className="text-indigo-600">Cyberspace?</span>
        </h2>
        
        <p className="text-slate-500 text-xl font-bold max-w-lg mx-auto leading-relaxed">
          The page you are looking for doesn't exist or has been moved to a new sector of Falak Cyber World.
        </p>

        <div className="pt-10">
          <Link to="/">
            <button className="px-12 py-6 bg-slate-900 text-white text-sm font-black uppercase tracking-[0.3em] rounded-[2rem] shadow-2xl hover:bg-indigo-600 hover:shadow-indigo-200 transition-all active:scale-95">
              Return to Base
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}