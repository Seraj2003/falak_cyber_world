import React from 'react';
import powerbank1 from '../assets/powerbank1.jpg'
const products = [
  { 
    name: "Keyboard & Mouse", 
    price: "799", 
    tag: "Hardware", 
    image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?q=80&w=800&auto=format&fit=crop" 
  },
  { 
    name: "Fast Charging Kit", 
    price: "299", 
    tag: "Power", 
    image: powerbank1 
  },
  { 
    name: "Bluetooth Speaker", 
    price: "399", 
    tag: "Audio", 
    image: "https://images.unsplash.com/photo-1608156639585-b3a032ef9689?q=80&w=800&auto=format&fit=crop" 
  },
  { 
    name: "Wireless Airbuds", 
    price: "399", 
    tag: "Audio", 
    image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?q=80&w=800&auto=format&fit=crop" 
  },
  { 
    name: "LED Smart Light", 
    price: "399", 
    tag: "Utility", 
    image: "https://images.unsplash.com/photo-1550985616-10810253b84d?q=80&w=800&auto=format&fit=crop" 
  },
  { 
    name: "Studio Headphones", 
    price: "199", 
    tag: "Audio", 
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=800&auto=format&fit=crop" 
  }
];

export default function Products() {
  return (
    <section className="py-24 px-6 bg-[#F8F9FA]">
      <div className="max-w-7xl mx-auto">
        
        <div className="mb-20 relative">
          <h2 className="text-[10vw] md:text-[8vw] font-black leading-none text-slate-900/5 tracking-tighter absolute -top-4 left-0 select-none uppercase">
            Inventory
          </h2>
          <h3 className="relative pt-10 text-4xl font-bold text-slate-900 tracking-tight">
            Premium <span className="text-indigo-600">Stock</span>
          </h3>
          <div className="h-1.5 w-16 bg-indigo-600 mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((p, i) => (
            <div 
              key={i} 
              className="group bg-white border border-slate-200/60 rounded-[2.5rem] p-5 transition-all duration-500 hover:border-indigo-200 hover:shadow-[0_30px_60px_rgba(0,0,0,0.06)] hover:-translate-y-2"
            >
              {/* Image Container with Zoom Effect */}
              <div className="relative aspect-square mb-6 bg-slate-100 rounded-[2rem] overflow-hidden">
                <img 
                  src={p.image} 
                  alt={p.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>

                {/* Floating Tag */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="px-4 py-1.5 bg-white/90 backdrop-blur-md border border-slate-200 text-[10px] font-black uppercase tracking-widest text-slate-600 rounded-full shadow-sm">
                    {p.tag}
                  </span>
                </div>
              </div>

              <div className="space-y-4 px-3 pb-2">
                <div className="flex justify-between items-start">
                  <div className="space-y-1">
                    <h3 className="text-xl font-bold text-slate-900 tracking-tight group-hover:text-indigo-600 transition-colors">
                      {p.name}
                    </h3>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]"></div>
                      <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">
                        Available in Shop
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-black text-slate-900 tracking-tighter">
                      ₹{p.price}
                    </p>
                  </div>
                </div>

                <button className="w-full py-4 bg-slate-900 text-white text-[11px] font-black uppercase tracking-[0.25em] rounded-2xl transition-all duration-300 hover:bg-indigo-600 hover:shadow-xl hover:shadow-indigo-100 active:scale-[0.97]">
                  Visit At Shop
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}