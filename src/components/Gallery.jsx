import React from 'react'

const galleryItems = [
  {
    title: "Custom T-Shirt Printing",
    category: "Apparel",
    description: "High-quality fabric printing for events, teams, and personal gifts.",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&q=80&w=800",
    tags: ["Cotton", "Durable", "Vibrant"]
  },
  {
    title: "Personalized Coffee Mugs",
    category: "Gifts",
    description: "Ceramic mugs with custom photos and quotes for your morning coffee.",
    image: "https://images.unsplash.com/photo-1514228742587-6b1558fbed39?auto=format&fit=crop&q=80&w=800",
    tags: ["Ceramic", "Glossy", "Microwave Safe"]
  },
  {
    title: "Wedding Card Design",
    category: "Stationery",
    description: "Elegant Shadi Card designs with premium gold-foil and textures.",
    image: "https://images.unsplash.com/photo-1607344645866-009c320b63e0?auto=format&fit=crop&q=80&w=800",
    tags: ["Premium", "Traditional", "Custom"]
  },
  {
    title: "Professional Branding",
    category: "Marketing",
    description: "Large scale banners and posters for local business promotion.",
    image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80&w=800",
    tags: ["Banners", "Posters", "HD"]
  }
];

export default function Gallery() {
  return (
    <section className="py-24 px-6 bg-slate-50" id="gallery">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
              Design <span className="text-indigo-600">Showcase</span>
            </h2>
            <div className="h-1.5 w-24 bg-indigo-600 rounded-full"></div>
            <p className="text-slate-500 text-lg max-w-xl font-medium">
              Take a look at some of the custom printing and design work we've done for our happy customers in Gopalganj.
            </p>
          </div>
          <button className="px-8 py-4 bg-white border border-slate-200 text-slate-900 font-bold rounded-2xl hover:bg-slate-900 hover:text-white transition-all shadow-sm">
            VIEW ALL WORK
          </button>
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {galleryItems.map((item, index) => (
            <div 
              key={index}
              className="group relative bg-white rounded-[2rem] overflow-hidden border border-slate-200 shadow-sm hover:shadow-2xl transition-all duration-500"
            >
              {/* Image Container */}
              <div className="aspect-[4/5] overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                  <div className="flex gap-2 mb-4">
                    {item.tags.map((tag, tIndex) => (
                      <span key={tIndex} className="px-3 py-1 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-[10px] font-bold text-white uppercase tracking-widest">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Content Below Image */}
              <div className="p-6">
                <span className="text-xs font-black text-indigo-600 uppercase tracking-widest mb-2 block">
                  {item.category}
                </span>
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 bg-slate-900 rounded-[3rem] p-8 md:p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/20 blur-[100px]"></div>
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
            <div>
              <h3 className="text-3xl font-black text-white mb-2">Want a custom design?</h3>
              <p className="text-slate-400 font-medium">Bring your photo or idea, and we will print it on a T-shirt or Cup for you today.</p>
            </div>
            <button className="px-10 py-5 bg-indigo-600 text-white font-black rounded-2xl hover:bg-indigo-500 transition-all shadow-[0_0_30px_rgba(79,70,229,0.3)]">
              START YOUR ORDER
            </button>
          </div>
        </div>

      </div>
    </section>
  )
}