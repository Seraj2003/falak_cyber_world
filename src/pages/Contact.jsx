import React from 'react';
import photo from '../assets/mehtab.png';
import { MdPlace, MdEmail } from "react-icons/md";
import { IoCall } from "react-icons/io5";

export default function Contact() {
    return (
        <section className="py-32 px-6 bg-[#fcfcfd] relative overflow-hidden" id="contact">
            {/* Background Kinetic Element */}
            <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none select-none">
                <div className="absolute inset-0 bg-[radial-gradient(#4f46e5_1px,transparent_1px)] [background-size:40px_40px]"></div>
            </div>

            <div className="max-w-7xl mx-auto relative z-10">

                {/* --- Section Header: High-Contrast Minimalist --- */}
                <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 mb-24 pb-12 border-b border-slate-200">
                    <div className="space-y-4">
                        <div className="flex items-center gap-3">
                            <span className="h-px w-12 bg-indigo-600"></span>
                            <h2 className="text-xs font-black tracking-[0.4em] text-indigo-600 uppercase">Direct Connection</h2>
                        </div>
                        <h3 className="text-5xl md:text-8xl font-bold text-slate-900 tracking-tighter uppercase italic leading-[0.85]">
                            Get in <span className="text-slate-300">Touch</span>
                        </h3>
                    </div>
                    <div className="lg:max-w-xs">
                        <p className="text-slate-500 font-bold text-lg italic leading-relaxed border-l-4 border-indigo-50 pl-6">
                            "Bridging local trust with global technical standards in the heart of Bishnupura Bazar."
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

                    {/* --- OWNER PROFILE & DATA COLUMN --- */}
                    <div className="lg:col-span-4 space-y-8">

                        {/* Professional Founder Card */}
                        <div className="group bg-white p-10 rounded-[3.5rem] border border-slate-100 shadow-[0_20px_50px_rgba(0,0,0,0.04)] hover:shadow-2xl hover:shadow-indigo-100/40 transition-all duration-700 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-1000"></div>

                            <div className="relative z-10">
                                <div className="flex items-center gap-6 mb-10">
                                    <div className="w-24 h-24 rounded-[2rem] overflow-hidden ring-8 ring-slate-50 shadow-inner group-hover:rotate-3 transition-transform duration-500">
                                        <img src={photo} alt="Md. Mehtab Alam" className="w-full h-full object-cover" />
                                    </div>
                                    <div>
                                        <h4 className="text-2xl font-black text-slate-900 leading-none tracking-tight">Md. Mehtab Alam</h4>
                                        <p className="text-indigo-600 text-[10px] font-black uppercase tracking-[0.2em] mt-3">Founder & Owner</p>
                                    </div>
                                </div>

                                <blockquote className="text-slate-500 font-bold leading-relaxed italic text-sm mb-10 pl-6 border-l-2 border-indigo-200">
                                    "Committed to delivering precision electronics repair and high-speed digital solutions with absolute integrity."
                                </blockquote>

                                <div className="flex gap-3">
                                    <span className="px-5 py-2.5 bg-slate-900 text-white text-[9px] font-black uppercase tracking-widest rounded-full shadow-lg shadow-slate-200">Expert Specialist</span>
                                    <span className="px-5 py-2.5 bg-indigo-50 text-indigo-600 text-[9px] font-black uppercase tracking-widest rounded-full">Expert Support</span>
                                </div>
                            </div>
                        </div>

                        {/* Dynamic Info List */}
                        <div className="space-y-4">
                            {[
                                { label: "Physical Base", detail: "Bishnupura Bazar, Gopalganj", icon: <MdPlace />, color: "text-rose-500" },
                                { label: "Verified Line", detail: "+91 8010101135", icon: <IoCall />, color: "text-emerald-500" },
                                { label: "Email Hub", detail: "falakcyberworld@gmail.com", icon: <MdEmail />, color: "text-indigo-500" }
                            ].map((item, i) => (
                                <div key={i} className="group flex items-center gap-6 p-6 bg-white border border-slate-100 rounded-[2rem] hover:border-indigo-200 hover:bg-slate-50/50 transition-all duration-300">
                                    <div className={`w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-2xl shadow-inner group-hover:scale-110 transition-all ${item.color}`}>
                                        {item.icon}
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 mb-1">{item.label}</p>
                                        <p className="text-md font-bold text-slate-900 tracking-tight">{item.detail}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* --- MAP & CTA COLUMN --- */}
                    <div className="lg:col-span-8 space-y-12">

                        {/* Map Architecture */}
                        <div className="bg-white p-4 rounded-[4rem] border border-slate-200 shadow-2xl h-[550px] overflow-hidden group relative">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3574.608035222079!2d84.5966601!3d26.37149!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3992200f248664c3%3A0x82316ae23fc51490!2sFALAK%20CYBER%20WORLD!5e0!3m2!1sen!2sin!4v1738931754020!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="rounded-[3.2rem] grayscale contrast-[1.1] opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000"
                            ></iframe>

                            {/* Floating Glassmorphic Map Tag */}
                            <div className="absolute top-10 right-10 bg-white/70 backdrop-blur-xl px-8 py-4 rounded-3xl border border-white/20 shadow-2xl pointer-events-none group-hover:bg-indigo-600 group-hover:text-white transition-all duration-500">
                                <p className="text-[10px] font-black uppercase tracking-widest opacity-60">Location</p>
                                <p className="text-sm font-bold tracking-tight">
                                    Bishnupura Bazar Main Road
                                </p>
                            </div>
                        </div>

                        {/* WhatsApp High-Contrast Banner */}
                        <div className="bg-[#020617] rounded-[3.5rem] p-12 flex flex-col md:flex-row items-center justify-between gap-10 relative overflow-hidden group border border-white/5">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-600/20 blur-[100px] group-hover:opacity-100 opacity-50 transition-opacity"></div>

                            <div className="relative z-10">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></div>
                                    <span className="text-indigo-400 text-xs font-black uppercase tracking-[0.4em]">Available Now</span>
                                </div>
                                <h4 className="text-4xl font-black text-white tracking-tighter uppercase italic leading-none">
                                    Live <span className="text-slate-600">Technical Desk</span>
                                </h4>
                                <p className="text-slate-400 font-bold text-sm uppercase tracking-[0.2em] mt-4">Direct WhatsApp Support</p>
                            </div>

                            <a
                                href="https://wa.me/918010101135?text=Hello%20Mehtab,%20I%20need%20assistance%20with..."
                                target="_blank"
                                rel="noopener noreferrer"
                                className="relative z-10 w-full md:w-auto"
                            >
                                <button className="w-full px-14 py-6 bg-emerald-500 text-slate-900 font-black rounded-2xl text-[11px] uppercase tracking-[0.3em] hover:bg-white hover:shadow-[0_20px_60px_rgba(16,185,129,0.4)] hover:scale-105 transition-all duration-500 active:scale-95 shadow-xl">
                                    Start Chat
                                </button>
                            </a>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}