import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  const scrollToContact = () => {
    document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    /* Main wrapper with a very subtle base tint */
    <div className="font-sans antialiased text-slate-900 bg-[#fcfcfd] selection:bg-indigo-500/30">
      
      {/* --- 01. HERO SECTION (Dark Mode Background) --- */}
      <div className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-[#020617]">
        
        {/* Layered Gradient Mesh */}
        <div className="absolute top-[-10%] left-[-10%] w-[70%] h-[70%] bg-indigo-600/20 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[70%] h-[70%] bg-cyan-500/10 rounded-full blur-[150px] animate-pulse delay-1000"></div>

        {/* Technical Grid Overlay */}
        <div className="absolute inset-0 opacity-[0.15] [background-image:linear-gradient(to_right,#334155_1px,transparent_1px),linear-gradient(to_bottom,#334155_1px,transparent_1px)] [background-size:50px_50px]"></div>

        <div className="relative z-10 mx-auto px-6 max-w-6xl">
          <div className="bg-slate-950/40 backdrop-blur-3xl border border-white/5 rounded-[4rem] p-10 md:p-24 shadow-2xl text-center">
            
            <div className="inline-flex items-center gap-3 px-6 py-2 mb-10 text-[10px] font-black tracking-[0.3em] text-cyan-400 uppercase bg-cyan-400/5 border border-cyan-400/20 rounded-full">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              Certified Digital Hub
            </div>

            <h1 className="text-6xl md:text-8xl font-black text-white mb-8 leading-[0.9] tracking-tighter uppercase italic">
              Falak <br /> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-500">
                Cyber World
              </span>
            </h1>

            <p className="text-slate-400 text-lg md:text-2xl max-w-2xl mx-auto leading-relaxed mb-16 font-medium">
              Elite <span className="text-white">Hardware Repair</span> & 
              High-Speed <span className="text-white">Digital Infrastructure</span>. 
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link to='/services' className="w-full sm:w-auto px-12 py-5 bg-indigo-600 text-white font-black rounded-2xl transition-all hover:bg-indigo-500 hover:shadow-[0_20px_40px_rgba(79,70,229,0.3)] hover:scale-105 uppercase tracking-widest text-[11px]">
                Explore Services
              </Link>
              <button onClick={scrollToContact} className="w-full sm:w-auto px-12 py-5 bg-transparent text-white font-black rounded-2xl border border-slate-700 backdrop-blur-md transition-all hover:bg-white hover:text-slate-900 uppercase tracking-widest text-[11px]">
                Locate Branch
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* --- 02. INTRO SECTION (Minimalist White Background) --- */}
      <section className="py-32 px-6 bg-white relative">
         {/* Subtle corner accent */}
         <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-50/50 [clip-path:polygon(100%_0,100%_100%,0%_100%)]"></div>
         
         <div className="max-w-5xl mx-auto text-center relative z-10">
          <h2 className="text-indigo-600 font-black text-xs uppercase tracking-[0.4em] mb-8">Service Philosophy</h2>
          <h3 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter mb-12 leading-none">
            Expertise Meets <span className="text-slate-300 italic">Efficiency.</span>
          </h3>
          <p className="text-slate-500 text-2xl leading-relaxed font-bold max-w-3xl mx-auto">
            Providing high-end technical solutions with a focus on speed, precision, and absolute integrity.
          </p>
        </div>
      </section>

      {/* --- 03. TRUST SECTION (Soft Studio Grey Background) --- */}
      <section className="relative py-32 px-6 bg-[#F1F3F6] overflow-hidden">
        {/* Modern Dot Pattern */}
        <div className="absolute inset-0 [background-image:radial-gradient(#cbd5e1_1.5px,transparent_1.5px)] [background-size:40px_40px] opacity-40"></div>

        <div className="relative max-w-7xl mx-auto">
          <div className="mb-20 space-y-4">
            <h2 className="text-indigo-600 font-black text-xs uppercase tracking-[0.3em]">Built on Trust</h2>
            <h3 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter">Enterprise Standards.</h3>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Expert Techs", desc: "Certified professionals.", icon: "🔬" },
              { title: "Rapid Fix", desc: "Same-day service available.", icon: "⚡" },
              { title: "Secure Data", desc: "Privacy is our priority.", icon: "🔐" },
            ].map((item, index) => (
              <div key={index} className="group bg-white p-12 rounded-[3.5rem] border border-slate-200/50 transition-all duration-500 hover:shadow-2xl hover:shadow-indigo-100 hover:-translate-y-2">
                <div className="w-16 h-16 bg-slate-900 text-white rounded-2xl flex items-center justify-center text-3xl mb-10 group-hover:bg-indigo-600 group-hover:rotate-6 transition-all duration-500">
                  {item.icon}
                </div>
                <h4 className="text-2xl font-black text-slate-900 tracking-tight uppercase italic mb-4">{item.title}</h4>
                <p className="text-slate-500 font-bold text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- 04. MISSION CTA (High-Contrast Bento) --- */}
      <section id="contact-section" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            
            {/* Dark Mission Card */}
            <div className="bg-[#020617] p-16 md:p-24 rounded-[4rem] text-white relative overflow-hidden group shadow-2xl">
                <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-[80px]"></div>
                <div className="relative z-10">
                    <h2 className="text-indigo-500 font-black text-[10px] uppercase tracking-[0.5em] mb-12">The Mission</h2>
                    <h3 className="text-6xl font-black tracking-tighter italic mb-8 uppercase leading-none">Digital <br/> <span className="text-slate-600">Integrity</span></h3>
                    <p className="text-slate-400 text-xl font-bold leading-relaxed">Providing dependable services with absolute customer satisfaction.</p>
                </div>
            </div>

            {/* Indigo Visit Card */}
            <div className="bg-indigo-600 p-16 md:p-24 rounded-[4rem] text-white flex flex-col justify-between shadow-2xl shadow-indigo-200 hover:-translate-y-2 transition-transform duration-500">
                <div className="w-16 h-16 bg-white/10 backdrop-blur-xl rounded-2xl flex items-center justify-center text-3xl mb-12 border border-white/20">📍</div>
                <h3 className="text-5xl font-black tracking-tighter uppercase leading-none mb-10">Visit Our <br/> <span className="text-indigo-200">Hub</span></h3>
                <button className="w-full py-6 bg-white text-indigo-600 font-black rounded-2xl hover:bg-slate-900 hover:text-white transition-all uppercase tracking-widest text-[11px]">Get Directions</button>
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}