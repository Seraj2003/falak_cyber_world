import React from 'react';

const services = [
    {
        category: "Government Portals",
        image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=800",
        icon: "🏦",
        desc: "Official documentation and identity services.",
        items: ["Aadhar Card (Update/Link)", "PAN Card (New/Correction)", "Jati, Niwas, Aay Certificates", "Online Job Form Filling"]
    },
    {
        category: "Banking & Finance",
        image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&q=80&w=800",
        icon: "💳",
        desc: "Digital payment and insurance solutions.",
        items: ["Electricity Bill Payments", "Vehicle Insurance (Gadi Bima)", "Rail & Air Ticket Booking", "Money Transfer Services"]
    },
    {
        category: "Hardware Engineering",
        image: "https://images.unsplash.com/photo-1597733336794-12d05021d510?auto=format&fit=crop&q=80&w=800",
        icon: "🔧",
        desc: "Precision repair for personal electronics.",
        items: ["Mobile Display/Battery Repair", "Laptop Hardware Servicing", "Printer Maintenance & Refills", "Component Soldering"]
    },
    {
        category: "Digital Solutions",
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800",
        icon: "💻",
        desc: "Software support and custom printing.",
        items: ["OS Installation (Win/Linux)", "Data Recovery & Security", "T-Shirt & Cup Custom Print", "Wedding Card (Shadi) Design"]
    }
];

export default function Services() {
    return (
        <section className="py-24 px-6 bg-[#fcfcfd]">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-20 border-b border-slate-200 pb-10">
                    <div className="max-w-2xl">
                        <h2 className="text-sm font-bold tracking-[0.2em] text-indigo-600 uppercase mb-3">Service Catalog</h2>
                        <h3 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
                            Technical <span className="text-slate-400 font-medium">Excellence</span>
                        </h3>
                    </div>
                    <p className="text-slate-500 font-medium max-w-sm text-lg leading-relaxed italic">
                        "Delivering precision digital assistance at the heart of Bishnupura Bazar."
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((s, i) => (
                        <div
                            key={i}
                            className="bg-white group rounded-[2.5rem] overflow-hidden border border-slate-100 shadow-sm transition-all duration-500 hover:shadow-2xl hover:shadow-indigo-100 hover:-translate-y-2"
                        >
                            {/* Service Image Header */}
                            <div className="relative h-48 overflow-hidden">
                                <img 
                                    src={s.image} 
                                    alt={s.category} 
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
                                
                                {/* Floating Icon on Image */}
                                <div className="absolute bottom-4 left-6 bg-white/10 backdrop-blur-md w-12 h-12 rounded-xl flex items-center justify-center text-2xl border border-white/20 shadow-xl">
                                    {s.icon}
                                </div>
                            </div>

                            <div className="p-8">
                                <h4 className="text-xl font-bold text-slate-900 mb-3 tracking-tight group-hover:text-indigo-600 transition-colors">
                                    {s.category}
                                </h4>
                                <p className="text-slate-500 text-xs mb-8 leading-relaxed font-bold uppercase tracking-widest">
                                    {s.desc}
                                </p>

                                <ul className="space-y-4">
                                    {s.items.map((item, idx) => (
                                        <li key={idx} className="flex items-start gap-3 text-slate-700 font-bold text-[12px] group/item leading-tight">
                                            <div className="mt-1 w-1.5 h-1.5 rounded-full bg-indigo-500 shadow-[0_0_8px_rgba(99,102,241,0.6)] transition-all group-hover/item:scale-125"></div>
                                            <span className="group-hover/item:text-slate-900 transition-colors">
                                                {item}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                                
                                <button className="mt-8 w-full py-3 bg-slate-50 text-slate-400 group-hover:bg-indigo-600 group-hover:text-white rounded-xl text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-300">
                                    Enquire Now
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}