import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navItems = [
        { name: "Home", link: "/" },
        { name: "Services", link: "/services" },
        { name: "Products", link: "/product" },
        { name: "Contact", link: "/contact" },
    ];

    return (
        <nav 
            className={`fixed top-0 inset-x-0 z-[100] transition-all duration-500 ${
                scrolled 
                ? "bg-white/90 backdrop-blur-xl shadow-md py-3" 
                : "bg-white py-5"
            }`}
        >
            <div className="mx-auto max-w-7xl px-6">
                <div className="flex items-center justify-between">
                    
                    {/* Balanced Logo */}
                    <Link to="/" className="flex flex-col group leading-none">
                        <span className="text-2xl font-black uppercase tracking-tighter text-slate-900 group-hover:text-indigo-600 transition-colors">
                            FALAK
                        </span>
                        <span className="text-[9px] tracking-[0.3em] text-indigo-600 font-black mt-1">
                            CYBER WORLD
                        </span>
                    </Link>

                    {/* Desktop Menu - Clean & Scaled Down */}
                    <div className="hidden md:flex items-center gap-8">
                        {navItems.map((item, i) => (
                            <Link
                                key={i}
                                to={item.link}
                                className={`text-[11px] font-bold uppercase tracking-[0.2em] transition-all hover:text-indigo-600 ${
                                    location.pathname === item.link ? "text-indigo-600" : "text-slate-500"
                                }`}
                            >
                                {item.name}
                            </Link>
                        ))}
                        
                        <Link to="/login">
                            <button className="px-6 py-2.5 bg-slate-900 text-white text-[10px] font-black uppercase tracking-[0.2em] rounded-xl hover:bg-indigo-600 transition-all active:scale-95 shadow-lg shadow-slate-200">
                                Client Login
                            </button>
                        </Link>
                    </div>

                    {/* Mobile Toggle */}
                    <button
                        className="md:hidden p-2 text-slate-900"
                        onClick={() => setOpen(!open)}
                    >
                        <div className="w-6 space-y-1.5">
                            <span className={`block h-0.5 bg-current transition-all ${open ? "rotate-45 translate-y-2" : ""}`}></span>
                            <span className={`block h-0.5 bg-current transition-all ${open ? "opacity-0" : ""}`}></span>
                            <span className={`block h-0.5 bg-current transition-all ${open ? "-rotate-45 -translate-y-2" : ""}`}></span>
                        </div>
                    </button>
                </div>

                {/* Mobile Menu */}
                <div
                    className={`md:hidden absolute top-full left-0 w-full bg-white border-t border-slate-100 transition-all duration-300 ${
                        open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    }`}
                >
                    <div className="flex flex-col p-6 gap-4">
                        {navItems.map((item, i) => (
                            <Link
                                key={i}
                                to={item.link}
                                className="text-sm font-bold text-slate-700 hover:text-indigo-600"
                                onClick={() => setOpen(false)}
                            >
                                {item.name}
                            </Link>
                        ))}
                        <Link to="/login" onClick={() => setOpen(false)}>
                            <button className="w-full py-3 bg-slate-900 text-white text-xs font-bold uppercase tracking-widest rounded-lg">
                                Client Login
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}