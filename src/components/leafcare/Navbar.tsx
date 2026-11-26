import React from 'react';
import { ArrowRight, User } from 'lucide-react';

interface NavbarProps {
  onOpenBooking: () => void;
  onOpenSignIn: () => void;
  onScrollTo: (id: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenBooking,
  onOpenSignIn,
  onScrollTo
}) => {
  return (
    <header className="sticky top-0 z-40 w-full py-4 px-4 sm:px-6 lg:px-8 transition-all">
      <div className="max-w-[1240px] mx-auto flex items-center justify-between">
        {/* Brand Logo */}
        <div 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-2 cursor-pointer group"
        >
          <div className="w-9 h-9 rounded-full bg-[#73cf4c] flex items-center justify-center text-[#0e382c] shadow-sm group-hover:scale-105 transition-transform">
            {/* Stylized Leaf SVG */}
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c2.42 0 4.65-.87 6.4-2.32L9.2 10.48a1 1 0 0 1 1.41-1.41l9.2 9.2C21.13 16.53 22 14.36 22 12c0-5.52-4.48-10-10-10zm-1.5 5.5c2.48 0 4.5 2.02 4.5 4.5 0 .41-.06.81-.16 1.19l-5.53-5.53c.38-.1.78-.16 1.19-.16z" />
            </svg>
          </div>
          <span className="text-2xl font-bold tracking-tight text-[#0e382c]">
            Leafcare
          </span>
        </div>

        {/* Center Pill Menu */}
        <nav className="hidden md:flex items-center gap-1 bg-white/80 backdrop-blur-md px-6 py-2 rounded-full border border-[#cbd8d0] shadow-sm text-sm font-medium text-[#2f4f43]">
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="px-3.5 py-1.5 rounded-full text-[#0e382c] font-semibold flex items-center gap-1 hover:text-[#0e382c] transition"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#73cf4c] inline-block"></span>
            Home
          </button>
          <button 
            onClick={() => onScrollTo('about')}
            className="px-3 py-1.5 rounded-full hover:text-[#0e382c] hover:bg-black/5 transition"
          >
            About
          </button>
          <button 
            onClick={() => onScrollTo('assessments')}
            className="px-3 py-1.5 rounded-full hover:text-[#0e382c] hover:bg-black/5 transition"
          >
            All Features
          </button>
          <button 
            onClick={() => onScrollTo('services')}
            className="px-3 py-1.5 rounded-full hover:text-[#0e382c] hover:bg-black/5 transition"
          >
            Medical Events
          </button>
          <button 
            onClick={() => onScrollTo('specialists')}
            className="px-3 py-1.5 rounded-full hover:text-[#0e382c] hover:bg-black/5 transition"
          >
            Specialists
          </button>
          <button 
            onClick={() => onScrollTo('workouts')}
            className="px-3 py-1.5 rounded-full hover:text-[#0e382c] hover:bg-black/5 transition"
          >
            Articles
          </button>
        </nav>

        {/* Right CTA & Account */}
        <div className="flex items-center gap-2.5">
          <button 
            onClick={onOpenSignIn}
            aria-label="User Account"
            className="w-10 h-10 rounded-full bg-white/90 border border-[#c8d6ce] flex items-center justify-center text-[#0e382c] hover:bg-white hover:shadow-sm transition"
          >
            <User className="w-4 h-4 text-[#0e382c]" />
          </button>

          <button
            onClick={onOpenBooking}
            className="bg-[#0e382c] text-white hover:bg-[#154839] px-5 py-2.5 rounded-full text-sm font-medium flex items-center gap-1.5 shadow-md hover:shadow-lg transition-all"
          >
            <span>Book a Clinic</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#73cf4c]" />
          </button>
        </div>
      </div>
    </header>
  );
};
