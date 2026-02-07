import React from 'react'

export default function Home() {
  return (
    <div className="font-sans antialiased text-slate-900 bg-white">
      {/* --- HERO SECTION --- */}
      <div className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden bg-[#020617]">
        
        {/* Animated Background Blobs */}
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-cyan-500/30 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-600/20 rounded-full blur-[120px] animate-pulse delay-700"></div>
        
        {/* Subtle Tech Grid */}
        <div className="absolute inset-0 opacity-[0.15] [background-image:linear-gradient(to_right,#334155_1px,transparent_1px),linear-gradient(to_bottom,#334155_1px,transparent_1px)] [background-size:45px_45px]"></div>

        {/* Content Container */}
        <div className="relative z-10 mx-auto px-6 max-w-5xl">
          <div className="bg-slate-900/40 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] p-8 md:p-20 shadow-2xl text-center transform transition-all duration-1000 animate-in fade-in zoom-in slide-in-from-bottom-10">
            
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 text-xs font-bold tracking-widest text-cyan-400 uppercase bg-cyan-400/10 border border-cyan-400/20 rounded-full">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              Now Open in Bishnupura
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black text-white mb-8 leading-[1.1] tracking-tighter">
              Falak <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400">Cyber World</span>
            </h1>
            
            <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-12">
              The ultimate destination for precision <span className="text-slate-200">Electronics Repair</span> and 
              high-speed <span className="text-slate-200">Cyber Services</span>. 
              Engineering solutions for a digital age.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
              <button className="group relative px-10 py-4 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-black rounded-2xl transition-all duration-300 shadow-[0_0_30px_rgba(34,211,238,0.4)] hover:scale-105 active:scale-95">
                OUR SERVICES
                <span className="ml-2 group-hover:translate-x-1 transition-transform inline-block">→</span>
              </button>
              <button className="px-10 py-4 bg-slate-800/50 hover:bg-slate-800 text-white font-bold rounded-2xl border border-slate-700 backdrop-blur-md transition-all duration-300 hover:border-slate-500">
                LOCATE US
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* --- INTRO SECTION --- */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
              Expertise Meets Efficiency
            </h2>
            <div className="h-1.5 w-24 bg-gradient-to-r from-cyan-500 to-indigo-600 mx-auto rounded-full"></div>
          </div>
          <p className="text-slate-500 text-xl leading-relaxed font-medium">
            We provide a complete range of cyber services and electronics repairing
            solutions. Our skilled technicians ensure accurate, fast, and 
            cost-effective results for every client.
          </p>
        </div>
      </section>

      {/* --- WHY CHOOSE US (Glow Cards) --- */}
      <section className="relative py-24 px-6 bg-slate-50 overflow-hidden">
        {/* Subtle Grid Pattern for background */}
        <div className="absolute inset-0 [background-image:radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:24px_24px] opacity-40"></div>
        
        <div className="relative max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-16 text-center tracking-tight">
            Why People Trust Us
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Expert Techs", desc: "Certified professionals handling your gear." },
              { title: "Rapid Turnaround", desc: "We value your time. Same-day service available." },
              { title: "Fair Pricing", desc: "Quality service shouldn't break the bank." },
              { title: "Genuine Parts", desc: "We only use original, verified components." },
              { title: "Support", desc: "Friendly help whenever you need it." },
              { title: "Secure Data", desc: "Your privacy is our top priority." },
            ].map((item, index) => (
              <div
                key={index}
                className="group relative bg-white p-10 rounded-[2rem] border border-slate-200 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] hover:-translate-y-2 overflow-hidden"
              >
                {/* Hover Gradient Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-slate-900 text-cyan-400 rounded-2xl flex items-center justify-center mb-6 font-black text-xl group-hover:bg-cyan-500 group-hover:text-slate-950 transition-colors duration-300">
                    0{index + 1}
                  </div>
                  <h3 className="font-black text-slate-900 text-xl mb-3 tracking-tight">{item.title}</h3>
                  <p className="text-slate-500 leading-relaxed font-medium">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CALL TO ACTION --- */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-stretch">
            {/* Mission Section */}
            <div className="bg-slate-900 p-12 md:p-16 rounded-[3rem] text-white flex flex-col justify-center border border-slate-800">
              <h2 className="text-4xl font-black mb-6 tracking-tight">Our Mission</h2>
              <p className="text-slate-400 text-xl leading-relaxed font-medium">
                To provide dependable cyber services and expert electronics repair
                solutions with honesty, efficiency, and absolute customer satisfaction.
              </p>
            </div>

            {/* Visit Us Card */}
            <div className="group relative bg-indigo-600 p-12 md:p-16 rounded-[3rem] text-white overflow-hidden shadow-2xl transition-transform duration-500 hover:scale-[1.02]">
              {/* Decorative Circle */}
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl group-hover:bg-white/20 transition-all duration-700"></div>
              
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div>
                  <h2 className="text-4xl font-black mb-4 tracking-tight">Visit Us Today</h2>
                  <p className="text-indigo-100 text-xl mb-12 font-medium">
                    Ready to fix your device or access premium web services? 
                    Visit our hub at Bishnupura Bazar.
                  </p>
                </div>
                <button className="w-full py-5 bg-white text-indigo-600 font-black rounded-2xl hover:bg-slate-100 transition-all duration-300 uppercase tracking-widest shadow-xl active:scale-95">
                  GET DIRECTIONS
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}