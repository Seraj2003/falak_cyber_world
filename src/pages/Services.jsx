import React from 'react';
import print from  "../assets/print.avif"
const serviceHubs = [
    {
        title: "Digital Government & Portals",
        category: "01 / G2C Services",
        // Verified: Office setting for documentation
        image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=1200",
        description: "Official assistance for central and Bihar state documentation portals. Fast, verified, and reliable.",
        accent: "text-indigo-600",
        items: [
            "Aadhaar Update & Mobile Linking", "PAN Card (New & Corrections)", "Bihar RTPS (Jati, Niwas, Aay)", 
            "Passport Seva & Visa Forms", "Voter ID (NVSP) Registration", "Driving License Slot Booking", 
            "Ration Card Services", "All Govt Job & Scholarship Forms"
        ]
    },
    {
        title: "Banking & Financial Hub",
        category: "02 / Fintech Solutions",
        // Verified: Digital banking/credit card interaction
        image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=1200",
        description: "Your local digital bank point for HDFC, IndusInd, and Fino Bank. Safe and instant transactions.",
        accent: "text-emerald-600",
        items: [
            "Cash Withdrawal (AEPS/Fingerprint)", "Instant Money Transfer (DMT)", "Vehicle Insurance (Gadi Bima)", 
            "HDFC & Fino Banking Services", "Railway (IRCTC) & Air Tickets", "Electricity & Gas Bill Payments", 
            "DTH & Mobile Recharge", "Commercial Tax & GST Assistance"
        ]
    },
     {
        title: "Hardware & Software Lab",
        category: "04 / Hardware & OS",
        // Verified: Electronic repair/circuitry
        image: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?auto=format&fit=crop&q=80&w=1200",
        description: "Chip-level hardware repair and expert software troubleshooting for all personal devices.",
        accent: "text-cyan-600",
        items: [
            "Laptop Screen & Hinges Repair", "Mobile Display (Combo) Fix", "Windows 10/11 & Linux Setup", 
            "Android FRP & Device Unlocking", "Data Recovery & Security", "Printer Refilling & Servicing", 
        ]
    },
    {
        title: "Creative Studio & Custom Print",
        category: "03 / Media & Design",
        // Verified: Designer workspace
       image:"https://plus.unsplash.com/premium_photo-1674581208166-e29c52bf61c0?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: "Premium personalization services for gifts, apparel, and ceremonial invitations with high-definition finish.",
        accent: "text-rose-600",
        items: [
            "Custom Photo Cup/Mug Printing", "T-Shirt & Fabric Sublimation", "Wedding (Shadi) Card Design", 
            "Birthday & Invitation Cards", "Personalized Photo Frames", "Digital Logo & Graphic Design",
            "PVC Card & ID Badge Printing", "Premium Banner & Poster Design"
        ]
    }
];

export default function Services() {
    return (
        <section className="bg-white py-32 selection:bg-indigo-100 selection:text-indigo-900">
            <div className="max-w-7xl mx-auto px-6">
                
                {/* Global Header */}
                <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 mb-32 border-b border-slate-100 pb-15">
                    <div className="space-y-4">
                        <div className="flex items-center gap-3">
                            <span className="h-px w-10 bg-indigo-600"></span>
                            <h2 className="text-xs font-black tracking-[0.4em] text-indigo-600 uppercase">Our Capabilities</h2>
                        </div>
                        <h3 className="text-6xl md:text-9xl font-bold text-slate-900 tracking-tighter uppercase italic leading-[0.8] transition-all">
                            Service <br /> <span className="text-slate-300">Portfolio</span>
                        </h3>
                    </div>
                    <div className="lg:max-w-xs">
                        <p className="text-slate-500 font-bold text-lg italic leading-relaxed border-l-4 border-slate-100 pl-6">
                            "Delivering professional digital assistance and technical repair at Bishnupura Bazar."
                        </p>
                    </div>
                </div>

                {/* Hubs Layout */}
                <div className="space-y-48">
                    {serviceHubs.map((hub, index) => (
                        <div 
                            key={index} 
                            className={`flex flex-col lg:flex-row gap-20 items-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
                        >
                            {/* Visual Asset */}
                            <div className="w-full lg:w-1/2 group">
                                <div className="relative overflow-hidden rounded-[3.5rem] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] transition-all duration-1000 group-hover:shadow-indigo-200/40 bg-slate-100">
                                    <img 
                                        src={hub.image} 
                                        alt={hub.title} 
                                        loading="lazy"
                                        className="w-full h-[650px] object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105" 
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/20 to-transparent"></div>
                                    <div className="absolute inset-0 border-[16px] border-white/5 pointer-events-none rounded-[3.5rem]"></div>
                                    
                                    <div className="absolute bottom-12 left-12 right-12 translate-y-4 group-hover:translate-y-0 transition-transform duration-700">
                                        <p className="text-white/50 font-mono text-[10px] tracking-[0.6em] uppercase mb-4">{hub.category}</p>
                                        <h4 className="text-5xl font-black text-white uppercase italic leading-none tracking-tighter">{hub.title}</h4>
                                    </div>
                                </div>
                            </div>

                            {/* Details Container */}
                            <div className="w-full lg:w-1/2 space-y-12">
                                <div className="space-y-6">
                                    <div className={`text-[11px] font-black uppercase tracking-[0.4em] ${hub.accent} flex items-center gap-3`}>
                                        <span className="w-2 h-2 rounded-full bg-current animate-pulse"></span>
                                        Verified Solutions
                                    </div>
                                    <p className="text-slate-800 font-bold text-3xl md:text-4xl leading-tight tracking-tighter">
                                        {hub.description}
                                    </p>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-5 gap-x-10">
                                    {hub.items.map((item, idx) => (
                                        <div key={idx} className="group/item flex items-center gap-4 py-1">
                                            <div className="h-px w-6 bg-slate-200 group-hover/item:w-10 group-hover/item:bg-indigo-600 transition-all duration-500"></div>
                                            <span className="text-[12px] font-black text-slate-500 uppercase tracking-widest group-hover/item:text-slate-900 transition-colors">
                                                {item}
                                            </span>
                                        </div>
                                    ))}
                                </div>

                                <div className="pt-10">
                                    <button className="group relative overflow-hidden px-14 py-6 bg-slate-900 text-white rounded-2xl font-black text-[10px] uppercase tracking-[0.5em] transition-all hover:shadow-[0_20px_40px_rgba(99,102,241,0.2)] active:scale-95">
                                        <span className="relative z-10">Inquiry Hub</span>
                                        <div className="absolute inset-0 bg-indigo-600 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}