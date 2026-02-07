import React from 'react';

export default function Contact() {
  return (
    <section className="py-24 px-6 bg-[#F8F9FA]" id="contact">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20 pb-10 border-b border-slate-200">
          <div className="space-y-4">
            <h2 className="text-sm font-black tracking-[0.3em] text-indigo-600 uppercase">Connect With Us</h2>
            <h3 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter uppercase leading-none">
              Visit Our <span className="text-slate-400">Digital Hub</span>
            </h3>
          </div>
          <p className="text-slate-500 font-bold max-w-sm text-lg italic leading-relaxed">
            "We are located at the heart of Bishnupura Bazar, ready to solve your technical challenges."
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Contact Details Cards */}
          <div className="lg:col-span-1 space-y-6">
            {[
              { label: "Our Location", detail: "Bishnupura Bazar, Barauli, Gopalganj, Bihar India", icon: "📍" },
              { label: "Phone Number", detail: "+91 8010101135", icon: "📞" },
              { label: "Email Address", detail: "falakcyberworld@gmail.com", icon: "✉️" },
              { label: "Working Hours", detail: "Mon - Sat: 9:00 AM - 8:00 PM", icon: "⏰" }
            ].map((item, i) => (
              <div key={i} className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm group hover:border-indigo-200 transition-all duration-500">
                <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center text-2xl mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-all shadow-inner">
                  {item.icon}
                </div>
                <p className="text-[10px] font-black uppercase tracking-[0.25em] text-indigo-600 mb-2">{item.label}</p>
                <p className="text-lg font-bold text-slate-900 leading-snug">{item.detail}</p>
              </div>
            ))}
          </div>

          {/* Map & WhatsApp Integration */}
          <div className="lg:col-span-2 space-y-8">
            {/* Map Container - Professional Glassmorphism */}
            <div className="bg-white p-3 rounded-[3rem] border border-slate-100 shadow-xl h-[450px] overflow-hidden group relative">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3142.8150829451424!2d84.61642197473766!3d26.33216038479975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3993200fad8664c3%3A0x82316ae23fc51490!2sFALAK%20CYBER%20WORLD!5e1!3m2!1sen!2sin!4v1770445213295!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-[2.5rem] grayscale contrast-125 opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000 ease-in-out"
              ></iframe>
              
              {/* Floating Address Tag over Map */}
              <div className="absolute bottom-10 right-10 bg-white/80 backdrop-blur-xl px-6 py-4 rounded-2xl border border-white/20 shadow-2xl pointer-events-none transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <p className="text-[10px] font-black uppercase tracking-widest text-indigo-600">Location</p>
                <p className="text-sm font-bold text-slate-900">Bishnupura Bazar</p>
              </div>
            </div>

            {/* Premium CTA Row */}
            <div className="bg-slate-900 rounded-[2.5rem] p-10 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden group">
              {/* Background Animated Gradient */}
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10 text-center md:text-left">
                <h4 className="text-2xl font-black text-white mb-2 italic">Ready to solve it?</h4>
                <p className="text-slate-400 font-bold text-xs uppercase tracking-[0.2em]">Live Technical Support via WhatsApp</p>
              </div>
              
              <button className="relative z-10 px-10 py-5 bg-emerald-500 text-slate-900 font-black rounded-2xl text-[11px] uppercase tracking-[0.25em] hover:bg-white hover:scale-105 transition-all shadow-[0_20px_40px_rgba(16,185,129,0.2)] active:scale-95">
                Start Chat Now
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}