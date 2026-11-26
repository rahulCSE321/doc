import React from 'react';
import { Apple, Play, Twitter, Instagram, Linkedin, Youtube, ArrowUp } from 'lucide-react';

interface GrandFooterProps {
  onScrollTo: (id: string) => void;
}

export const GrandFooter: React.FC<GrandFooterProps> = ({ onScrollTo }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full px-4 sm:px-6 lg:px-8 pb-8 pt-4">
      <div className="max-w-[1240px] mx-auto bg-[#0e382c] text-white rounded-[32px] md:rounded-[40px] pt-12 md:pt-16 pb-8 px-6 sm:px-10 md:px-14 shadow-2xl relative overflow-hidden">
        
        {/* Top Navigation Row */}
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs sm:text-sm font-medium text-emerald-100/90 border-b border-white/10 pb-8">
          <button 
            onClick={scrollToTop} 
            className="hover:text-[#85e05d] transition"
          >
            Home
          </button>
          <button 
            onClick={() => onScrollTo('about')} 
            className="hover:text-[#85e05d] transition"
          >
            About Us
          </button>
          <button 
            onClick={() => onScrollTo('services')} 
            className="hover:text-[#85e05d] transition"
          >
            Services
          </button>
          <button 
            onClick={() => onScrollTo('specialists')} 
            className="hover:text-[#85e05d] transition"
          >
            Specialists
          </button>
          <button 
            onClick={() => onScrollTo('workouts')} 
            className="hover:text-[#85e05d] transition"
          >
            Articles
          </button>
          <button 
            onClick={() => onScrollTo('about')} 
            className="hover:text-[#85e05d] transition"
          >
            Contact
          </button>
        </div>

        {/* Center: Massive Iconic Brand Typography */}
        <div className="py-10 md:py-16 text-center select-none">
          <h1 
            onClick={scrollToTop}
            className="text-6xl sm:text-8xl md:text-9xl lg:text-[148px] font-bold tracking-tight text-white/95 leading-none cursor-pointer hover:text-[#85e05d] transition-colors duration-500"
          >
            Leafcare
          </h1>
        </div>

        {/* Bottom Metadata Bar */}
        <div className="pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* App Badges */}
          <div className="flex items-center gap-3">
            <button 
              onClick={() => alert('Leafcare App Store download')}
              className="bg-white/10 hover:bg-white/15 px-3 py-1.5 rounded-lg flex items-center gap-2 text-white border border-white/15 transition text-[11px]"
            >
              <Apple className="w-4 h-4 fill-white" />
              <span>App Store</span>
            </button>
            <button 
              onClick={() => alert('Leafcare Google Play download')}
              className="bg-white/10 hover:bg-white/15 px-3 py-1.5 rounded-lg flex items-center gap-2 text-white border border-white/15 transition text-[11px]"
            >
              <Play className="w-3.5 h-3.5 fill-white" />
              <span>Google Play</span>
            </button>
          </div>

          {/* Copyright & Legal */}
          <div className="text-center text-xs text-emerald-100/70 space-y-1">
            <p>© 2026 Leafcare Inc. All rights reserved. • Privacy Policy • Terms of Use</p>
          </div>

          {/* Social Icons & Back to top */}
          <div className="flex items-center gap-4 text-emerald-100/80">
            <a href="#twitter" aria-label="Twitter" className="hover:text-[#85e05d] transition">
              <Twitter className="w-4 h-4" />
            </a>
            <a href="#instagram" aria-label="Instagram" className="hover:text-[#85e05d] transition">
              <Instagram className="w-4 h-4" />
            </a>
            <a href="#linkedin" aria-label="LinkedIn" className="hover:text-[#85e05d] transition">
              <Linkedin className="w-4 h-4" />
            </a>
            <a href="#youtube" aria-label="YouTube" className="hover:text-[#85e05d] transition">
              <Youtube className="w-4 h-4" />
            </a>
            <button
              onClick={scrollToTop}
              aria-label="Back to Top"
              className="ml-2 w-8 h-8 rounded-full bg-white/10 hover:bg-[#85e05d] hover:text-[#0e382c] flex items-center justify-center transition"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

      </div>
    </footer>
  );
};
