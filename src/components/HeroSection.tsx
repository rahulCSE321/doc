import React, { useState } from 'react';
import { Lock, MapPin, Sparkles, ArrowRight, Video, Calendar, ShieldCheck, Heart, Star } from 'lucide-react';
import heroBg from '../assets/images/hero_meditation.jpg';
import { Provider } from '../types';

interface HeroSectionProps {
  onSelectProvider: (provider: Provider) => void;
  onOpenMatchmaker: (type: 'therapist' | 'psychiatrist') => void;
  onOpenMoodTracker: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onSelectProvider,
  onOpenMatchmaker,
  onOpenMoodTracker,
}) => {
  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 pt-2 pb-6">
      <div className="max-w-[1240px] mx-auto rounded-[32px] md:rounded-[40px] overflow-hidden bg-[#0e382c] relative shadow-2xl">
        
        {/* Background photo & refined localized gradient overlay */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img 
            src={heroBg || '/hero_meditation.jpg'}
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).src = '/hero_meditation.jpg';
            }}
            alt="Mindful meditation and mental peace in nature" 
            className="w-full h-full object-cover object-right sm:object-center brightness-[1.05] contrast-[1.05]"
          />
          {/* Subtle directional gradient: dark green behind left-side text, completely clear over meditation figure and mountain lake on right */}
          <div 
            className="absolute inset-0 hidden sm:block pointer-events-none"
            style={{
              background: 'linear-gradient(90deg, rgba(14, 56, 44, 0.95) 0%, rgba(14, 56, 44, 0.88) 38%, rgba(14, 56, 44, 0.32) 65%, rgba(14, 56, 44, 0.04) 85%, rgba(14, 56, 44, 0) 100%)'
            }}
          />
          {/* Mobile gradient fallback */}
          <div 
            className="absolute inset-0 sm:hidden pointer-events-none"
            style={{
              background: 'linear-gradient(180deg, rgba(14, 56, 44, 0.92) 0%, rgba(14, 56, 44, 0.82) 55%, rgba(14, 56, 44, 0.3) 100%)'
            }}
          />
        </div>

        {/* Content Container */}
        <div className="relative z-10 p-6 sm:p-10 md:p-12 lg:p-16 flex flex-col justify-between min-h-[580px] md:min-h-[620px]">
          
          {/* Main Hero Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-2">
            
            {/* Left Column: Headlines & CTA Actions */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Badges */}
              <div className="flex flex-wrap items-center gap-3">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-emerald-200 text-xs font-semibold">
                  <Lock className="w-3.5 h-3.5 text-[#85e05d]" />
                  <span>Confidential & Private Sessions via Google Meet</span>
                </div>

                <a
                  href="#cities"
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 hover:bg-white/15 backdrop-blur-md border border-white/15 text-white text-xs font-medium transition"
                >
                  <MapPin className="w-3.5 h-3.5 text-[#85e05d]" />
                  <span>In-Person Appointments</span>
                  <span className="bg-[#85e05d] text-[#0e382c] text-[10px] font-extrabold px-1.5 py-0.2 rounded uppercase tracking-wider">
                    New
                  </span>
                </a>
              </div>

              {/* Main Dominant Headline */}
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.12]">
                Find the best therapists and{' '}
                <span className="font-serif italic font-normal text-[#85e05d]">
                  psychiatrists
                </span>
              </h1>

              {/* Value Proposition Subtitle */}
              <p className="text-emerald-100/90 text-sm sm:text-base md:text-lg max-w-xl font-normal leading-relaxed">
                Confidential, judgment-free mental healthcare tailored to your journey. Connect with India's most trusted, verified practitioners online or in-person.
              </p>

              {/* Action Buttons */}
              <div className="pt-1 flex flex-wrap items-center gap-3 sm:gap-4">
                {/* Choose your Therapist */}
                <button
                  onClick={() => onOpenMatchmaker('therapist')}
                  className="bg-[#85e05d] hover:bg-[#94ee6a] text-[#0e382c] px-6 sm:px-7 py-3 sm:py-3.5 rounded-full font-bold text-xs sm:text-sm flex items-center gap-2 shadow-lg shadow-emerald-950/40 hover:scale-[1.03] active:scale-95 transition-all"
                >
                  <span>Choose your Therapist</span>
                  <div className="w-5 h-5 rounded-full bg-[#0e382c] text-[#85e05d] flex items-center justify-center">
                    <ArrowRight className="w-3 h-3" />
                  </div>
                </button>

                {/* Choose your Psychiatrist */}
                <button
                  onClick={() => onOpenMatchmaker('psychiatrist')}
                  className="bg-white/15 hover:bg-white/25 text-white border border-white/20 px-5 sm:px-6 py-3 sm:py-3.5 rounded-full font-semibold text-xs sm:text-sm flex items-center gap-2 backdrop-blur-sm transition"
                >
                  <span>Choose your Psychiatrist</span>
                </button>

                {/* Track Mood Free */}
                <button
                  onClick={onOpenMoodTracker}
                  className="text-emerald-200 hover:text-white underline underline-offset-4 text-xs sm:text-sm font-semibold transition px-2 py-1"
                >
                  Track Mood Free
                </button>
              </div>

              {/* Social Proof Stack */}
              <div className="pt-2 flex items-center gap-3">
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
                  <div className="text-white text-sm font-bold tracking-tight">
                    100+ Licensed Providers Available
                  </div>
                  <div className="flex items-center text-amber-300 text-xs gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-amber-300" />
                    ))}
                    <span className="text-emerald-200 text-[11px] font-medium ml-1">RCI & Medical Verified</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Column: Floating Glassmorphic Health Cards */}
            <div className="lg:col-span-5 flex flex-col gap-4 items-end justify-center">
              
              {/* Floating Card 1: Vetted Credentials & Next Slot Radial Gauge */}
              <div className="w-full max-w-[290px] bg-white/90 backdrop-blur-md rounded-2xl p-4 shadow-xl border border-white/60 text-slate-800 transition hover:scale-102">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    <span className="text-xs font-bold text-[#0e382c]">RCI & Medical Verified</span>
                  </div>
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                </div>

                <div className="flex items-center gap-4">
                  {/* Circular Progress Gauge */}
                  <div className="relative w-20 h-20 flex items-center justify-center shrink-0">
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
                        strokeDasharray="100, 100"
                        strokeWidth="3.5"
                        strokeLinecap="round"
                        stroke="currentColor"
                        fill="none"
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      />
                    </svg>
                    <div className="absolute flex flex-col items-center justify-center">
                      <span className="text-base font-bold text-[#0e382c]">100%</span>
                    </div>
                  </div>

                  <div className="space-y-0.5">
                    <div className="text-[11px] text-slate-500 font-medium">Vetted Credentials</div>
                    <div className="text-sm font-bold text-[#0e382c]">Next Slot</div>
                    <div className="text-xs text-emerald-700 font-semibold bg-emerald-50 px-2 py-0.5 rounded-full inline-block">
                      Today 5:30 PM
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Card 2: HD Google Meet & Pulse Tracker */}
              <div className="w-full max-w-[290px] bg-white/90 backdrop-blur-md rounded-2xl p-4 shadow-xl border border-white/60 text-slate-800 transition hover:scale-102">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-1.5">
                    <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700">
                      <Video className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-xs font-bold text-[#0e382c]">HD Google Meet</span>
                  </div>
                  <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full">Encrypted</span>
                </div>

                {/* Animated Audio / ECG wave */}
                <div className="h-8 w-full flex items-center justify-center overflow-hidden">
                  <svg className="w-full h-7 text-[#68c48a]" viewBox="0 0 200 40" fill="none">
                    <path
                      d="M0 20 L40 20 L50 20 L60 5 L70 35 L80 15 L90 25 L100 20 L140 20 L150 8 L160 32 L170 20 L200 20"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="flex items-center justify-between text-[11px] text-slate-500 pt-1.5 border-t border-slate-100">
                  <span>Instant booking & reminders</span>
                  <span className="text-emerald-700 font-semibold">Ready</span>
                </div>
              </div>

            </div>

          </div>

          {/* Bottom Popular Searches Ribbon */}
          <div className="mt-10 pt-5 border-t border-white/15">
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs text-white">
              <span className="text-emerald-200/80 font-medium">or explore directly:</span>
              <span className="text-[#85e05d] font-bold">Popular:</span>
              {['Anxiety', 'Depression', 'Bangalore', 'Dr Aana Shah', 'ADHD'].map((tag) => (
                <button
                  key={tag}
                  onClick={() => {
                    const el = document.getElementById('therapists');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="bg-white/10 hover:bg-white/20 border border-white/15 px-3 py-1 rounded-full text-xs text-white transition"
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
