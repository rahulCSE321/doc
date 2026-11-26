import React from 'react';
import { Apple, Play, Sparkles, Smile, Sun, Moon, Bell, Shield, Heart } from 'lucide-react';

export const MobileAppSection: React.FC = () => {
  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 py-8 md:py-12">
      <div className="max-w-[1240px] mx-auto rounded-[32px] md:rounded-[40px] bg-gradient-to-r from-[#0e382c] via-[#0b2f25] to-[#07241c] p-8 sm:p-12 md:p-16 text-white relative overflow-hidden shadow-2xl border border-white/10">
        
        {/* Ambient Emerald Lighting Glow */}
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-[#73cf4c]/15 rounded-full blur-3xl pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
          
          {/* Left Column: Text & Download Badges */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-emerald-200 text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5 text-[#85e05d]" />
              <span>Now Available On iOS & Android</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.18]">
              Leafcare, your partner in <br className="hidden sm:inline" />
              mental health wellness
            </h2>

            <p className="text-emerald-100/80 text-sm sm:text-base leading-relaxed max-w-xl">
              Download our mobile app to track your mood, connect with therapists on the go, and access daily wellness exercises wherever life takes you.
            </p>

            {/* App Store / Google Play Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              {/* App Store */}
              <button 
                onClick={() => alert('Leafcare iOS App downloading...')}
                className="bg-black/90 hover:bg-black text-white px-5 py-2.5 rounded-xl border border-white/20 flex items-center gap-3 transition hover:scale-102 shadow-lg"
              >
                <Apple className="w-7 h-7 fill-white" />
                <div className="text-left leading-tight">
                  <div className="text-[10px] text-slate-300 uppercase font-medium">Download on the</div>
                  <div className="text-sm font-bold tracking-tight">App Store</div>
                </div>
              </button>

              {/* Google Play */}
              <button 
                onClick={() => alert('Leafcare Android App downloading...')}
                className="bg-black/90 hover:bg-black text-white px-5 py-2.5 rounded-xl border border-white/20 flex items-center gap-3 transition hover:scale-102 shadow-lg"
              >
                <div className="w-7 h-7 flex items-center justify-center">
                  <Play className="w-6 h-6 fill-white text-white" />
                </div>
                <div className="text-left leading-tight">
                  <div className="text-[10px] text-slate-300 uppercase font-medium">GET IT ON</div>
                  <div className="text-sm font-bold tracking-tight">Google Play</div>
                </div>
              </button>
            </div>
          </div>

          {/* Right Column: Realistic Phone Mockup */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="w-[280px] sm:w-[310px] bg-slate-950 rounded-[44px] p-3 shadow-2xl border-[5px] border-slate-700/60 ring-1 ring-white/20 relative">
              
              {/* Dynamic Island Notch */}
              <div className="absolute top-4 left-1/2 -translate-x-1/2 w-24 h-5 bg-black rounded-full z-20 flex items-center justify-end pr-2">
                <span className="w-2.5 h-2.5 rounded-full bg-slate-900 border border-slate-800"></span>
              </div>

              {/* Phone Screen */}
              <div className="w-full bg-[#0b1713] rounded-[36px] overflow-hidden p-4 pt-7 text-white font-sans flex flex-col justify-between min-h-[500px]">
                
                {/* Status bar */}
                <div className="flex justify-between items-center text-[11px] text-slate-400 px-2 mb-4">
                  <span>9:41</span>
                  <div className="flex items-center gap-1.5">
                    <span>5G</span>
                    <div className="w-4 h-2 border border-slate-400 rounded-sm p-0.5">
                      <div className="h-full w-full bg-emerald-400 rounded-2xs"></div>
                    </div>
                  </div>
                </div>

                {/* Greeting & Header */}
                <div className="space-y-1 mb-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5 text-xs font-semibold text-[#85e05d]">
                      <span className="w-2 h-2 rounded-full bg-[#85e05d]"></span>
                      <span>Leafcare</span>
                    </div>
                    <Bell className="w-3.5 h-3.5 text-slate-400" />
                  </div>
                  <h4 className="text-xl font-bold text-white pt-1">
                    Good evening
                  </h4>
                  <p className="text-[11px] text-emerald-200/70">
                    How is your mind feeling right now?
                  </p>
                </div>

                {/* Mood Pills */}
                <div className="grid grid-cols-3 gap-2 mb-4">
                  <div className="bg-[#132c23] border border-emerald-500/30 rounded-xl p-2.5 text-center flex flex-col items-center gap-1">
                    <Smile className="w-4 h-4 text-[#85e05d]" />
                    <span className="text-[10px] font-medium text-emerald-100">Peaceful</span>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-xl p-2.5 text-center flex flex-col items-center gap-1">
                    <Sun className="w-4 h-4 text-amber-300" />
                    <span className="text-[10px] font-medium text-slate-300">Focused</span>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-xl p-2.5 text-center flex flex-col items-center gap-1">
                    <Moon className="w-4 h-4 text-indigo-300" />
                    <span className="text-[10px] font-medium text-slate-300">Tired</span>
                  </div>
                </div>

                {/* Daily Plan Card */}
                <div className="bg-[#132c23]/80 border border-emerald-500/20 rounded-2xl p-3.5 space-y-2 mb-3">
                  <div className="flex justify-between items-center">
                    <span className="text-[11px] font-semibold text-white">Daily Wellness Routine</span>
                    <span className="text-[10px] text-[#85e05d] font-bold">2/3 Done</span>
                  </div>
                  
                  <div className="space-y-1.5 text-[11px]">
                    <div className="flex items-center gap-2 text-slate-300">
                      <span className="w-3.5 h-3.5 rounded-full bg-emerald-500 flex items-center justify-center text-[9px] text-[#0e382c] font-bold">✓</span>
                      <span className="line-through text-slate-400">10m Morning Breathwork</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-300">
                      <span className="w-3.5 h-3.5 rounded-full bg-emerald-500 flex items-center justify-center text-[9px] text-[#0e382c] font-bold">✓</span>
                      <span className="line-through text-slate-400">Cardiovascular Walk 3.2km</span>
                    </div>
                    <div className="flex items-center gap-2 text-emerald-200 font-medium">
                      <span className="w-3.5 h-3.5 rounded-full border border-emerald-400 flex items-center justify-center text-[9px]"></span>
                      <span>Evening Somatic Stretch</span>
                    </div>
                  </div>
                </div>

                {/* Quick Chat with Therapist Banner */}
                <div className="bg-white/10 rounded-xl p-2.5 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-full bg-[#85e05d] text-[#0e382c] flex items-center justify-center text-xs font-bold">
                      DR
                    </div>
                    <div>
                      <div className="text-[11px] font-bold">Dr. Jerome Bell</div>
                      <div className="text-[9px] text-emerald-300">Active now</div>
                    </div>
                  </div>
                  <span className="text-[10px] bg-[#85e05d] text-[#0e382c] font-bold px-2 py-0.5 rounded-full">
                    Chat
                  </span>
                </div>

              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
