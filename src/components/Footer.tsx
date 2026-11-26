import React from 'react';
import { Mail, MapPin, ArrowUp, Facebook, Instagram, Linkedin, MessageCircle } from 'lucide-react';

interface FooterProps {
  onSelectCityFilter?: (cityName: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectCityFilter }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const keyCities = ['Bangalore', 'Delhi', 'Mumbai', 'Chennai', 'Ahmedabad', 'Hyderabad', 'Kochi'];

  return (
    <footer className="w-full px-4 sm:px-6 lg:px-8 pb-8 pt-4">
      <div className="max-w-[1240px] mx-auto bg-[#0e382c] text-white rounded-[32px] md:rounded-[40px] pt-12 md:pt-16 pb-8 px-6 sm:px-10 md:px-14 shadow-2xl relative overflow-hidden">
        
        {/* Top Navigation Row */}
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 text-xs sm:text-sm font-medium text-emerald-100/90 border-b border-white/10 pb-8">
          <button onClick={scrollToTop} className="hover:text-[#85e05d] transition">
            Home
          </button>
          <a href="#care-team" className="hover:text-[#85e05d] transition">
            Contact Us
          </a>
          <a href="#faqs" className="hover:text-[#85e05d] transition">
            Blog & Resources
          </a>
          <a href="#terms" className="hover:text-[#85e05d] transition">
            Terms of Service
          </a>
          <a href="#privacy" className="hover:text-[#85e05d] transition">
            Privacy Policy
          </a>
          <a href="#refund" className="hover:text-[#85e05d] transition">
            Refund Policy
          </a>
        </div>

        {/* Center: Massive Iconic Brand Typography (Like Reference Image) */}
        <div className="py-10 md:py-14 text-center select-none">
          <h1 
            onClick={scrollToTop}
            className="text-6xl sm:text-8xl md:text-9xl lg:text-[144px] font-bold tracking-tight text-white/95 leading-none cursor-pointer hover:text-[#85e05d] transition-colors duration-500"
          >
            DocMind
          </h1>
          <p className="text-emerald-100/80 text-xs sm:text-sm max-w-xl mx-auto mt-4 font-normal">
            India's compassionate mental health network. Confidential online therapy, psychiatric evaluations, and mood tracking tools.
          </p>
        </div>

        {/* City Directories & Address Section */}
        <div className="py-8 border-t border-b border-white/10 grid grid-cols-1 md:grid-cols-3 gap-8 text-xs text-emerald-100/80">
          
          {/* Therapists in Cities */}
          <div className="space-y-2">
            <h5 className="font-bold text-white uppercase tracking-wider text-[11px]">
              Therapists In
            </h5>
            <ul className="space-y-1.5 text-xs text-emerald-100/70">
              {keyCities.map((city) => (
                <li key={city}>
                  <button
                    onClick={() => {
                      if (onSelectCityFilter) onSelectCityFilter(city);
                      const el = document.getElementById('therapists');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="hover:text-[#85e05d] transition text-left"
                  >
                    Therapists in {city}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Psychiatrists in Cities */}
          <div className="space-y-2">
            <h5 className="font-bold text-white uppercase tracking-wider text-[11px]">
              Psychiatrists In
            </h5>
            <ul className="space-y-1.5 text-xs text-emerald-100/70">
              {keyCities.map((city) => (
                <li key={city}>
                  <button
                    onClick={() => {
                      if (onSelectCityFilter) onSelectCityFilter(city);
                      const el = document.getElementById('psychiatrists');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="hover:text-[#85e05d] transition text-left"
                  >
                    Psychiatrists in {city}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Corporate Office & Inquiries */}
          <div className="space-y-3">
            <h5 className="font-bold text-white uppercase tracking-wider text-[11px]">
              Chota Hospital (P) Ltd
            </h5>
            <p className="text-emerald-100/70 leading-relaxed">
              WeWork, DLF Forum, Cybercity, Phase III, Gurugram, Haryana 122002
            </p>
            <div className="pt-1">
              <a href="mailto:care@docmind.com" className="text-[#85e05d] hover:underline font-semibold">
                Inquiries: care@docmind.com
              </a>
              <p className="text-emerald-100/60 text-[11px] mt-0.5">
                Support hours: 8 AM – 10 PM IST
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Socials & Copyright */}
        <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          
          <div className="text-xs text-emerald-100/70 text-center md:text-left">
            <span>Made within India by Team DocMind • © 2026 DocMind. All rights reserved.</span>
          </div>

          {/* Social Links & Back to Top */}
          <div className="flex items-center gap-4 text-emerald-100/80">
            <span className="text-xs text-emerald-100/60 hidden sm:inline">Connect with our community:</span>
            <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook" className="hover:text-[#85e05d] transition">
              <Facebook className="w-4 h-4" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram" className="hover:text-[#85e05d] transition">
              <Instagram className="w-4 h-4" />
            </a>
            <a href="https://wa.me/919999999999" target="_blank" rel="noreferrer" aria-label="WhatsApp" className="hover:text-[#85e05d] transition">
              <MessageCircle className="w-4 h-4" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:text-[#85e05d] transition">
              <Linkedin className="w-4 h-4" />
            </a>
            <a href="https://x.com" target="_blank" rel="noreferrer" aria-label="X" className="hover:text-[#85e05d] transition">
              <span className="font-bold text-xs">𝕏</span>
            </a>
            <button
              onClick={scrollToTop}
              aria-label="Back to top"
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
