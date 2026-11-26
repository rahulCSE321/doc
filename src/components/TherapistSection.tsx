import React, { useState, useMemo } from 'react';
import { ShieldCheck, Star, Calendar, Clock, Globe, ArrowRight, Sparkles } from 'lucide-react';
import { THERAPISTS_DATA } from '../data/mockData';
import { Provider } from '../types';

interface TherapistSectionProps {
  onSelectProvider: (provider: Provider) => void;
  onOpenMatchmaker: (type: 'therapist' | 'psychiatrist') => void;
}

export const TherapistSection: React.FC<TherapistSectionProps> = ({
  onSelectProvider,
  onOpenMatchmaker,
}) => {
  const [selectedFocus, setSelectedFocus] = useState<string>('All Therapists');

  const focusFilters = ['All Therapists', 'Anxiety & CBT', 'Trauma & Grief', 'Relationships'];

  const filteredTherapists = useMemo(() => {
    if (selectedFocus === 'All Therapists') return THERAPISTS_DATA.slice(0, 2);
    if (selectedFocus === 'Anxiety & CBT') {
      return THERAPISTS_DATA.filter((t) => t.specialties.some((s) => s.includes('Anxiety') || s.includes('CBT'))).slice(0, 2);
    }
    if (selectedFocus === 'Trauma & Grief') {
      return THERAPISTS_DATA.filter((t) => t.specialties.some((s) => s.includes('Trauma') || s.includes('Depression'))).slice(0, 2);
    }
    return THERAPISTS_DATA.filter((t) => t.specialties.some((s) => s.includes('Relationship') || s.includes('Family'))).slice(0, 2);
  }, [selectedFocus]);

  return (
    <section id="therapists" className="w-full px-4 sm:px-6 lg:px-8 py-10 md:py-14">
      <div className="max-w-[1240px] mx-auto">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div className="max-w-2xl space-y-2">
            <span className="text-xs sm:text-sm font-semibold tracking-wider text-[#2e5c4a] uppercase bg-[#e3ece6] px-3.5 py-1 rounded-full border border-[#cbd8d0]">
              Certified Therapists
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0e382c] tracking-tight leading-snug">
              Thrive in your personal growth with India's top-rated therapists
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm md:text-base">
              At DocMind, it's easy to find a therapist that's right for you. Answer a few questions, and we'll match you with a therapist who fits your needs.
            </p>
          </div>

          <button
            onClick={() => onOpenMatchmaker('therapist')}
            className="bg-[#0e382c] hover:bg-[#154a3b] text-white px-6 py-3 rounded-full text-xs sm:text-sm font-bold flex items-center gap-2 self-start md:self-auto shadow-md transition shrink-0"
          >
            <span>Start Therapy</span>
            <ArrowRight className="w-4 h-4 text-[#85e05d]" />
          </button>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-6">
          <span className="text-xs font-bold text-slate-500 mr-2 shrink-0">Filter by focus area:</span>
          {focusFilters.map((tab) => (
            <button
              key={tab}
              onClick={() => setSelectedFocus(tab)}
              className={`px-4 py-2 rounded-full text-xs font-bold shrink-0 transition ${
                selectedFocus === tab
                  ? 'bg-[#0e382c] text-white shadow-sm'
                  : 'bg-white hover:bg-slate-50 text-slate-700 border border-[#cbd8d0]'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* 3-Card Grid (Therapist 1, Therapist 2, and Highlighted Dark Matchmaker Card) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          
          {filteredTherapists.map((therapist) => (
            <div
              key={therapist.id}
              className="bg-white rounded-2xl md:rounded-3xl p-6 border border-[#cbd8d0] shadow-sm hover:shadow-xl transition-all flex flex-col justify-between group hover:-translate-y-1"
            >
              <div className="space-y-4">
                
                {/* Photo & Badges */}
                <div className="flex items-start gap-4">
                  <div className="w-18 h-18 sm:w-20 sm:h-20 rounded-2xl overflow-hidden bg-slate-100 shrink-0 border border-slate-200">
                    <img
                      src={therapist.image}
                      alt={therapist.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="space-y-1">
                    <div className="flex flex-wrap items-center gap-1.5">
                      <span className="text-[10px] font-bold bg-[#eaf4ee] text-emerald-800 px-2 py-0.5 rounded-full border border-emerald-200">
                        RCI
                      </span>
                      <span className="text-[10px] font-bold bg-amber-50 text-amber-800 px-2 py-0.5 rounded-full border border-amber-200 flex items-center gap-1">
                        <Star className="w-2.5 h-2.5 fill-amber-400" />
                        <span>Top-rated</span>
                      </span>
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-[#0e382c]">
                      {therapist.name}
                    </h3>
                    <p className="text-xs font-semibold text-emerald-800">
                      {therapist.title}
                    </p>
                    <p className="text-[11px] text-slate-500">
                      {therapist.experienceYears} years of experience
                    </p>
                  </div>
                </div>

                {/* Languages */}
                <div className="flex items-center gap-1.5 text-xs text-slate-600 bg-[#f4f7f5] px-3 py-1.5 rounded-xl">
                  <Globe className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
                  <span>Fluent in {therapist.languages.join(', ')}</span>
                </div>

                {/* Bio */}
                <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                  "{therapist.bio}"
                </p>

                {/* Focus Specialties Chips */}
                <div className="flex flex-wrap gap-1.5">
                  {therapist.specialties.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-semibold bg-[#eaf4ee] text-[#0e382c] px-2.5 py-1 rounded-full border border-emerald-100"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

              </div>

              {/* Pricing & CTA */}
              <div className="pt-4 mt-4 border-t border-slate-100 space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <div>
                    <span className="text-sm font-bold text-[#0e382c]">₹{therapist.sessionFee.toLocaleString('en-IN')}</span>
                    <span className="text-slate-400"> / {therapist.sessionDurationMins}m</span>
                  </div>
                  <div className="flex items-center gap-1 text-emerald-700 font-semibold bg-emerald-50 px-2 py-0.5 rounded-full text-[11px]">
                    <Clock className="w-3 h-3" />
                    <span>{therapist.availableSlot}</span>
                  </div>
                </div>

                <button
                  onClick={() => onSelectProvider(therapist)}
                  className="w-full py-2.5 bg-[#0e382c] hover:bg-[#154a3b] text-white rounded-full text-xs font-bold transition flex items-center justify-center gap-1.5 shadow-sm"
                >
                  <span>Book an appointment</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#85e05d]" />
                </button>
              </div>

            </div>
          ))}

          {/* Standout Dark Emerald Card (Matching Reference Image Standout Card) */}
          <div className="bg-[#0e382c] text-white rounded-2xl md:rounded-3xl p-7 shadow-xl flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-36 h-36 bg-[#85e05d]/10 rounded-full blur-2xl pointer-events-none" />

            <div className="relative z-10 space-y-3">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-emerald-200 text-xs font-semibold">
                <Sparkles className="w-3.5 h-3.5 text-[#85e05d]" />
                <span>Personalized Matchmaker</span>
              </div>
              <h3 className="text-2xl font-bold text-white">
                Find Your Ideal Therapist
              </h3>
              <p className="text-emerald-100/85 text-xs sm:text-sm leading-relaxed">
                Not sure who to pick? Take our 60-second questionnaire. We'll match you with verified experts aligned with your exact concerns and language preference.
              </p>
            </div>

            <div className="relative z-10 pt-4">
              <button
                onClick={() => onOpenMatchmaker('therapist')}
                className="w-full bg-[#85e05d] hover:bg-[#92ec69] text-[#0e382c] py-3.5 px-6 rounded-full font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md hover:scale-102 transition"
              >
                <span>Start Therapy Match</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

        {/* Counter */}
        <div className="text-center text-xs text-slate-500 font-medium mt-6">
          Showing 1–2 of 4 available therapists
        </div>

      </div>
    </section>
  );
};
