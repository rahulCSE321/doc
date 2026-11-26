import React, { useState } from 'react';
import { Sparkles, User, MapPin, ArrowRight, Menu, X } from 'lucide-react';

interface NavbarProps {
  onOpenSignIn: () => void;
  onOpenMatchmaker: (type: 'therapist' | 'psychiatrist') => void;
  onOpenMoodTracker: () => void;
  onScrollTo: (id: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenSignIn,
  onOpenMatchmaker,
  onOpenMoodTracker,
  onScrollTo,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full py-3.5 px-4 sm:px-6 lg:px-8 transition-all">
      <div className="max-w-[1240px] mx-auto flex items-center justify-between">
        
        {/* Brand Logo */}
        <div 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-2.5 cursor-pointer group"
        >
          <div className="w-9 h-9 rounded-full bg-[#73cf4c] flex items-center justify-center text-[#0e382c] shadow-sm group-hover:scale-105 transition-transform">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c2.42 0 4.65-.87 6.4-2.32L9.2 10.48a1 1 0 0 1 1.41-1.41l9.2 9.2C21.13 16.53 22 14.36 22 12c0-5.52-4.48-10-10-10zm-1.5 5.5c2.48 0 4.5 2.02 4.5 4.5 0 .41-.06.81-.16 1.19l-5.53-5.53c.38-.1.78-.16 1.19-.16z" />
            </svg>
          </div>
          <div className="flex flex-col">
            <span className="text-2xl font-bold tracking-tight text-[#0e382c] leading-tight">
              DocMind
            </span>
            <span className="text-[10px] font-semibold text-emerald-800 uppercase tracking-wider -mt-1 hidden sm:block">
              Mental Healthcare
            </span>
          </div>
        </div>

        {/* Center Pill Menu (Matching Reference Image) */}
        <nav className="hidden lg:flex items-center gap-1 bg-white/85 backdrop-blur-md px-5 py-2 rounded-full border border-[#cbd8d0] shadow-sm text-sm font-medium text-[#2d4d40]">
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="px-3 py-1.5 rounded-full text-[#0e382c] font-semibold flex items-center gap-1.5 hover:text-[#0e382c] transition"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#73cf4c] inline-block"></span>
            Home
          </button>
          <button 
            onClick={() => onScrollTo('therapists')}
            className="px-3 py-1.5 rounded-full hover:text-[#0e382c] hover:bg-black/5 transition"
          >
            Therapists
          </button>
          <button 
            onClick={() => onScrollTo('psychiatrists')}
            className="px-3 py-1.5 rounded-full hover:text-[#0e382c] hover:bg-black/5 transition"
          >
            Psychiatrists
          </button>
          <button 
            onClick={() => onScrollTo('mood-compass')}
            className="px-3 py-1.5 rounded-full hover:text-[#0e382c] hover:bg-black/5 transition"
          >
            Mood Compass
          </button>
          <button 
            onClick={() => onScrollTo('care-team')}
            className="px-3 py-1.5 rounded-full hover:text-[#0e382c] hover:bg-black/5 transition"
          >
            Care Team
          </button>
          <button 
            onClick={() => onScrollTo('cities')}
            className="px-3 py-1.5 rounded-full hover:text-[#0e382c] hover:bg-black/5 transition"
          >
            Cities
          </button>
          <button 
            onClick={() => onScrollTo('faqs')}
            className="px-3 py-1.5 rounded-full hover:text-[#0e382c] hover:bg-black/5 transition"
          >
            FAQs
          </button>
        </nav>

        {/* Right CTA Actions */}
        <div className="flex items-center gap-2.5">
          <button 
            onClick={onOpenSignIn}
            aria-label="User Account"
            className="w-10 h-10 rounded-full bg-white/90 border border-[#cbd8d0] flex items-center justify-center text-[#0e382c] hover:bg-white hover:shadow-sm transition"
          >
            <User className="w-4 h-4 text-[#0e382c]" />
          </button>

          <button
            onClick={() => onOpenMatchmaker('therapist')}
            className="bg-[#0e382c] text-white hover:bg-[#154839] px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold flex items-center gap-2 shadow-md hover:shadow-lg transition-all"
          >
            <span className="hidden sm:inline">Book Appointment</span>
            <span className="sm:hidden">Book</span>
            <div className="w-5 h-5 rounded-full bg-white/15 flex items-center justify-center text-[#85e05d]">
              <ArrowRight className="w-3 h-3" />
            </div>
          </button>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden w-10 h-10 rounded-full bg-white/90 border border-[#cbd8d0] flex items-center justify-center text-[#0e382c]"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-3 max-w-[1240px] mx-auto bg-white rounded-3xl p-5 border border-[#cbd8d0] shadow-xl space-y-2 text-sm font-medium text-[#0e382c] animate-fade-in">
          <button 
            onClick={() => { onScrollTo('therapists'); setMobileMenuOpen(false); }}
            className="w-full text-left p-2.5 rounded-xl hover:bg-[#f4f7f5]"
          >
            Therapists
          </button>
          <button 
            onClick={() => { onScrollTo('psychiatrists'); setMobileMenuOpen(false); }}
            className="w-full text-left p-2.5 rounded-xl hover:bg-[#f4f7f5]"
          >
            Psychiatrists
          </button>
          <button 
            onClick={() => { onScrollTo('mood-compass'); setMobileMenuOpen(false); }}
            className="w-full text-left p-2.5 rounded-xl hover:bg-[#f4f7f5]"
          >
            Mood Compass
          </button>
          <button 
            onClick={() => { onScrollTo('care-team'); setMobileMenuOpen(false); }}
            className="w-full text-left p-2.5 rounded-xl hover:bg-[#f4f7f5]"
          >
            Care Team
          </button>
          <button 
            onClick={() => { onScrollTo('cities'); setMobileMenuOpen(false); }}
            className="w-full text-left p-2.5 rounded-xl hover:bg-[#f4f7f5]"
          >
            Cities
          </button>
          <button 
            onClick={() => { onScrollTo('faqs'); setMobileMenuOpen(false); }}
            className="w-full text-left p-2.5 rounded-xl hover:bg-[#f4f7f5]"
          >
            FAQs
          </button>
        </div>
      )}
    </header>
  );
};
