import React from 'react';
import { MessageCircle, ShieldCheck, HeartHandshake, RefreshCw, Quote, ArrowRight, Sparkles } from 'lucide-react';

interface CareTeamSectionProps {
  onOpenProviderApply: () => void;
}

export const CareTeamSection: React.FC<CareTeamSectionProps> = ({
  onOpenProviderApply,
}) => {
  return (
    <section id="care-team" className="w-full px-4 sm:px-6 lg:px-8 py-10 md:py-16">
      <div className="max-w-[1240px] mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs sm:text-sm font-semibold tracking-wider text-[#2e5c4a] uppercase bg-[#e3ece6] px-3.5 py-1 rounded-full border border-[#cbd8d0]">
            Real Humans On WhatsApp
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0e382c] tracking-tight mt-3 mb-3 leading-snug">
            A dedicated team you can count on
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm md:text-base leading-relaxed">
            With DocMind, you'll have a team of dedicated care managers by your side, connected on WhatsApp and ready to help you every step of the way. They're here to offer personalized support starting from helping you find the right expert to scheduling your appointments, and more.
          </p>
        </div>

        {/* 3 Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          
          <div className="bg-white rounded-2xl md:rounded-3xl p-6 border border-[#cbd8d0] shadow-sm space-y-3">
            <div className="w-12 h-12 rounded-full bg-[#eaf4ee] text-[#1e5842] flex items-center justify-center">
              <MessageCircle className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-[#0e382c]">
              1-on-1 Care Manager
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Available 8am to 10pm daily on WhatsApp to help with bookings, technical setup, and quick questions.
            </p>
          </div>

          <div className="bg-white rounded-2xl md:rounded-3xl p-6 border border-[#cbd8d0] shadow-sm space-y-3">
            <div className="w-12 h-12 rounded-full bg-[#eaf4ee] text-[#1e5842] flex items-center justify-center">
              <RefreshCw className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-[#0e382c]">
              Hassle-Free Rescheduling
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              No awkward friction or delays. Need to move your session? Simply message your care manager with one tap.
            </p>
          </div>

          <div className="bg-white rounded-2xl md:rounded-3xl p-6 border border-[#cbd8d0] shadow-sm space-y-3">
            <div className="w-12 h-12 rounded-full bg-[#eaf4ee] text-[#1e5842] flex items-center justify-center">
              <HeartHandshake className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-[#0e382c]">
              Right-Fit Guarantee
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Switch providers smoothly anytime. If a provider's therapeutic approach doesn't resonate, we rematch you at no extra friction.
            </p>
          </div>

        </div>

        {/* Practitioner Quote & Provider Apply (Matching Reference Image Standout Styling) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Left Quote Card: Ms Kanika */}
          <div className="lg:col-span-8 bg-[#0e382c] text-white rounded-2xl md:rounded-3xl p-7 md:p-8 shadow-xl relative overflow-hidden flex flex-col justify-between">
            <div className="space-y-4">
              <Quote className="w-8 h-8 text-[#85e05d]" />
              <p className="text-emerald-100/95 text-sm sm:text-base md:text-lg leading-relaxed font-normal">
                "My journey with DocMind has been very exciting. The team's compassion and support extend far beyond work. With the empathy and support of the care team led by Mizba, I can focus on sessions without any worry."
              </p>
            </div>

            <div className="pt-6 flex items-center gap-3 border-t border-white/15 mt-4">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80"
                alt="Ms Kanika"
                className="w-12 h-12 rounded-full object-cover ring-2 ring-[#85e05d]"
              />
              <div>
                <div className="text-sm font-bold text-white">Ms Kanika</div>
                <div className="text-xs text-[#85e05d]">Clinical Psychologist • RCI-Licensed</div>
              </div>
            </div>
          </div>

          {/* Right CTA Card: Join DocMind Provider Team */}
          <div className="lg:col-span-4 bg-white rounded-2xl md:rounded-3xl p-7 border border-[#cbd8d0] shadow-sm flex flex-col justify-between space-y-4">
            <div className="space-y-2">
              <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider">
                For Mental Health Practitioners
              </span>
              <h3 className="text-xl font-bold text-[#0e382c]">
                Join Our Provider Network
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                If you're a therapist or psychiatrist looking to make a difference in people's lives, we'd love to meet you.
              </p>
            </div>

            <button
              onClick={onOpenProviderApply}
              className="w-full py-3 bg-[#0e382c] hover:bg-[#154a3b] text-white rounded-full text-xs sm:text-sm font-bold transition flex items-center justify-center gap-2 shadow-sm"
            >
              <span>Apply to join</span>
              <ArrowRight className="w-4 h-4 text-[#85e05d]" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
