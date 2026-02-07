import React from 'react'
import { MdPlace } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { IoCall } from "react-icons/io5"
import { FaFacebook } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";


export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#020617] text-white pt-20 pb-10 px-6 overflow-hidden relative">
      {/* Decorative Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-indigo-500 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        
        {/* Brand Section */}
        <div className="space-y-6">
          <h2 className="text-2xl font-black tracking-tighter">
            FALAK <span className="text-cyan-400">CYBER WORLD</span>
          </h2>
          <p className="text-slate-400 leading-relaxed font-medium">
            Your trusted partner for digital documentation and professional electronics repair in Bishunpura.
          </p>
          <div className="flex gap-4">
            {/* Social Icons Placeholders */}
            {[<FaFacebook/>, <FaSquareInstagram/>].map((social) => (
              <a key={social} href="#" className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center font-bold text-xs hover:bg-cyan-500 hover:text-slate-950 transition-all">
                {social}
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-bold mb-6 text-white uppercase tracking-widest">Services</h3>
          <ul className="space-y-4 text-slate-400 font-medium">
            <li><a href="#services" className="hover:text-cyan-400 transition-colors">Aadhar & PAN Services</a></li>
            <li><a href="#services" className="hover:text-cyan-400 transition-colors">Mobile & PC Repair</a></li>
            <li><a href="#gallery" className="hover:text-cyan-400 transition-colors">Custom Printing</a></li>
            <li><a href="#services" className="hover:text-cyan-400 transition-colors">Online Form Filling</a></li>
          </ul>
        </div>

        {/* Working Hours */}
        <div>
          <h3 className="text-lg font-bold mb-6 text-white uppercase tracking-widest">Business Hours</h3>
          <ul className="space-y-4 text-slate-400 font-medium">
            <li className="flex justify-between"><span>Mon - Sat:</span> <span className="text-white">09:00 AM - 08:00 PM</span></li>
            <li className="flex justify-between"><span>Sunday:</span> <span className="text-cyan-400">10:00 AM - 02:00 PM</span></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="space-y-6">
          <h3 className="text-lg font-bold mb-6 text-white uppercase tracking-widest">Contact Us</h3>
          <div className="space-y-4 text-slate-400 font-medium">
            <p className="flex items-start gap-3">
              <span className="text-cyan-400"><MdPlace/></span> 
              Bishnupura Bazar, Barauli, <br /> Gopalganj, Bihar
            </p>
            <p className="flex items-center gap-3">
              <span className="text-cyan-400"><IoCall/></span> 
              +91-8010101135
            </p>
            <p className="flex items-center gap-3">
              <span className="text-cyan-400"><MdEmail/></span> 
              falakcyberworld@gmail.com
            </p>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="max-w-7xl mx-auto pt-10 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-sm font-bold">
        <p>© {currentYear} Falak Cyber World. All rights reserved.</p>
        <p className="flex gap-6 uppercase tracking-tighter">
          <span>Developed with ❤️</span>
        </p>
      </div>
    </footer>
  )
}