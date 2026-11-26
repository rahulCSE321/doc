import React from 'react';
import { ArrowRight, Star, Activity, Heart, Sparkles } from 'lucide-react';
import heroBg from '../../assets/images/hero_meditation.jpg';

interface HeroSectionProps {
  onOpenBooking: () => void;
  onOpenAssessment: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenBooking,
  onOpenAssessment
}) => {
  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 pt-2 pb-8">
      <div className="max-w-[1240px] mx-auto rounded-[32px] md:rounded-[40px] overflow-hidden bg-[#0e382c] relative shadow-2xl">
        {/* Background photo & refined localized gradient overlay */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img 
            src={heroBg || '/hero_meditation.jpg'}
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).src = '/hero_meditation.jpg';
            }}
            alt="Person meditating in peaceful mountain nature" 
            className="w-full h-full object-cover object-right sm:object-center brightness-[1.05] contrast-[1.05]"
          />
          <div 
            className="absolute inset-0 hidden sm:block pointer-events-none"
            style={{
              background: 'linear-gradient(90deg, rgba(14, 56, 44, 0.95) 0%, rgba(14, 56, 44, 0.88) 38%, rgba(14, 56, 44, 0.32) 65%, rgba(14, 56, 44, 0.04) 85%, rgba(14, 56, 44, 0) 100%)'
            }}
          />
          <div 
            className="absolute inset-0 sm:hidden pointer-events-none"
            style={{
              background: 'linear-gradient(180deg, rgba(14, 56, 44, 0.92) 0%, rgba(14, 56, 44, 0.82) 55%, rgba(14, 56, 44, 0.3) 100%)'
            }}
          />
        </div>

        {/* Content Container */}
        <div className="relative z-10 p-6 sm:p-10 md:p-14 lg:p-16 flex flex-col justify-between min-h-[560px] md:min-h-[620px]">
          {/* Main Top Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-2">
            
            {/* Left Column: Heading & CTAs */}
            <div className="lg:col-span-7 space-y-6">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-emerald-200 text-xs sm:text-sm font-medium tracking-wide">
                <Sparkles className="w-3.5 h-3.5 text-[#73cf4c]" />
                <span>Health Is Wealth</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.12]">
                Health Is Wealth <br />
                Trust in <span className="font-serif italic font-normal text-[#85e05d]">Our Care</span>
              </h1>

              {/* Description */}
              <p className="text-emerald-100/90 text-sm sm:text-base md:text-lg max-w-xl font-normal leading-relaxed">
                Discover your best potential with us. Here you can find experienced therapists, health checkups, and consultations anytime, anywhere.
              </p>

              {/* CTAs */}
              <div className="pt-2 flex flex-wrap items-center gap-5 sm:gap-8">
                {/* Bright Lime Green Button */}
                <button
                  onClick={onOpenBooking}
                  className="bg-[#85e05d] hover:bg-[#92ec69] text-[#0e382c] px-7 py-3.5 rounded-full font-semibold text-sm sm:text-base flex items-center gap-2.5 shadow-lg shadow-emerald-950/40 hover:scale-[1.03] active:scale-95 transition-all"
                >
                  <span>Try Us Now</span>
                  <div className="w-6 h-6 rounded-full bg-[#0e382c] text-[#85e05d] flex items-center justify-center">
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </button>

                {/* Client Trust Avatar Stack */}
                <div 
                  onClick={onOpenAssessment}
                  className="flex items-center gap-3 cursor-pointer group"
                >
                  <div className="flex -space-x-2.5 overflow-hidden">
                    <img 
                      className="inline-block h-10 w-10 rounded-full ring-2 ring-[#0e382c] object-cover" 
                      src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80" 
                      alt="Client" 
                    />
                    <img 
                      className="inline-block h-10 w-10 rounded-full ring-2 ring-[#0e382c] object-cover" 
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80" 
                      alt="Client" 
                    />
                    <img 
                      className="inline-block h-10 w-10 rounded-full ring-2 ring-[#0e382c] object-cover" 
                      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80" 
                      alt="Client" 
                    />
                  </div>
                  <div>
                    <div className="text-white text-sm font-semibold tracking-tight group-hover:text-[#85e05d] transition">
                      30k+ Client Trust
                    </div>
                    <div className="flex items-center text-amber-300 text-xs gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-amber-300" />
                      ))}
                      <span className="text-white/80 text-[11px] ml-1">4.9/5</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Floating Glassmorphic Health Cards */}
            <div className="lg:col-span-5 flex flex-col gap-4 items-end justify-center">
              
              {/* Floating Card 1: Medicine Stock & 75% Radial Score */}
              <div className="w-full max-w-[280px] bg-white/90 backdrop-blur-md rounded-2xl p-4 shadow-xl border border-white/60 text-slate-800 transition hover:scale-102">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold text-slate-600">Medicine Stock (0)</span>
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                </div>

                <div className="flex items-center gap-4">
                  {/* Circular Progress Gauge */}
                  <div className="relative w-20 h-20 flex items-center justify-center">
                    <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                      <path
                        className="text-slate-200"
                        strokeWidth="3.5"
                        stroke="currentColor"
                        fill="none"
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      />
                      <path
                        className="text-[#68c48a]"
                        strokeDasharray="75, 100"
                        strokeWidth="3.5"
                        strokeLinecap="round"
                        stroke="currentColor"
                        fill="none"
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      />
                    </svg>
                    <div className="absolute flex flex-col items-center justify-center">
                      <span className="text-lg font-bold text-[#0e382c]">75%</span>
                    </div>
                  </div>

                  <div className="space-y-0.5">
                    <div className="text-xs text-slate-500">Wellness Index</div>
                    <div className="text-sm font-bold text-[#0e382c]">Healthy Score</div>
                    <div className="text-[11px] text-emerald-600 font-medium">Optimal Status</div>
                  </div>
                </div>
              </div>

              {/* Floating Card 2: Cardiovascular Rate Tracker */}
              <div className="w-full max-w-[280px] bg-white/90 backdrop-blur-md rounded-2xl p-4 shadow-xl border border-white/60 text-slate-800 transition hover:scale-102">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-1.5">
                    <div className="w-6 h-6 rounded-full bg-rose-100 flex items-center justify-center text-rose-500">
                      <Heart className="w-3.5 h-3.5 fill-rose-500" />
                    </div>
                    <span className="text-xs font-semibold text-slate-700">Cardiovascular Rate</span>
                  </div>
                  <span className="text-xs font-bold text-[#0e382c]">120 bpm</span>
                </div>

                {/* Animated ECG Pulse Line */}
                <div className="h-9 w-full flex items-center justify-center overflow-hidden">
                  <svg className="w-full h-8 text-[#68c48a]" viewBox="0 0 200 40" fill="none">
                    <path
                      d="M0 20 L40 20 L50 20 L60 5 L70 35 L80 15 L90 25 L100 20 L140 20 L150 8 L160 32 L170 20 L200 20"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="flex items-center justify-between text-[11px] text-slate-500 pt-1 border-t border-slate-100">
                  <span>Resting Heart Rate</span>
                  <span className="text-emerald-700 font-medium">Normal Range</span>
                </div>
              </div>

            </div>

          </div>

          {/* Bottom Partner Logos Ribbon */}
          <div className="mt-12 pt-6 border-t border-white/15">
            <div className="flex flex-wrap items-center justify-between gap-6 opacity-75 grayscale hover:grayscale-0 transition-all text-white text-xs sm:text-sm font-semibold tracking-widest uppercase">
              <span className="hover:text-[#85e05d] transition">General Electric</span>
              <span className="hover:text-[#85e05d] transition">L'ORÉAL</span>
              <span className="hover:text-[#85e05d] transition font-serif tracking-normal text-base">GAP</span>
              <span className="hover:text-[#85e05d] transition">DELL</span>
              <span className="hover:text-[#85e05d] transition tracking-[0.25em]">PRADA</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
