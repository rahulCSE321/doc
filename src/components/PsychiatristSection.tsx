import React from 'react';
import { Star, ShieldCheck, Clock, Globe, ArrowRight, CheckCircle2, FileText, Video } from 'lucide-react';
import consultationImg from '../assets/images/therapy_consultation.jpg';
import { PSYCHIATRISTS_DATA } from '../data/mockData';
import { Provider } from '../types';

interface PsychiatristSectionProps {
  onSelectProvider: (provider: Provider) => void;
  onOpenMatchmaker: (type: 'therapist' | 'psychiatrist') => void;
}

export const PsychiatristSection: React.FC<PsychiatristSectionProps> = ({
  onSelectProvider,
  onOpenMatchmaker,
}) => {
  const psychiatrists = PSYCHIATRISTS_DATA.slice(0, 2);

  return (
    <section id="psychiatrists" className="w-full px-4 sm:px-6 lg:px-8 py-10 md:py-16">
      <div className="max-w-[1240px] mx-auto">
        
        {/* Top Header & Context */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-12">
          
          <div className="lg:col-span-6 space-y-4">
            <span className="text-xs sm:text-sm font-semibold tracking-wider text-[#2e5c4a] uppercase bg-[#e3ece6] px-3.5 py-1 rounded-full border border-[#cbd8d0]">
              Medical Evaluations
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0e382c] tracking-tight leading-snug">
              Get a thorough assessment from a{' '}
              <span className="font-serif italic font-normal text-[#1a543e]">
                psychiatrist
              </span>
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm md:text-base leading-relaxed">
              Book an appointment online and see them on a video visit. If necessary, develop a medication plan and check in regularly to track progress and ask questions.
            </p>

            {/* Checklist of what to expect */}
            <div className="pt-2 space-y-2.5">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#0e382c]">
                What to expect during your psychiatric visit:
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#73cf4c] shrink-0" />
                  <span>30-minute thorough diagnostic mental assessment</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#73cf4c] shrink-0" />
                  <span>Digital prescription valid across all verified Indian pharmacies</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#73cf4c] shrink-0" />
                  <span>Care manager assistance for regular follow-ups & symptom tracking</span>
                </li>
              </ul>
            </div>

            <div className="pt-3">
              <button
                onClick={() => onOpenMatchmaker('psychiatrist')}
                className="bg-[#0e382c] hover:bg-[#154a3b] text-white px-7 py-3 rounded-full text-xs sm:text-sm font-bold flex items-center gap-2 shadow-md transition"
              >
                <span>Choose your Psychiatrist</span>
                <ArrowRight className="w-4 h-4 text-[#85e05d]" />
              </button>
            </div>
          </div>

          {/* Left Consultation Photo Banner */}
          <div className="lg:col-span-6">
            <div className="relative rounded-3xl overflow-hidden shadow-lg border border-[#cbd8d0] group">
              <img
                src={consultationImg}
                alt="Psychiatric consultation and mental wellness guidance"
                className="w-full h-[320px] sm:h-[380px] object-cover object-center group-hover:scale-103 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-5 left-5 right-5 bg-white/95 backdrop-blur-md p-3.5 rounded-2xl flex items-center justify-between border border-white/60">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-[#0e382c]">
                    <Video className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[#0e382c]">Video Visits on Google Meet</div>
                    <div className="text-[11px] text-slate-500">End-to-End Encrypted & Private</div>
                  </div>
                </div>
                <span className="text-[10px] font-bold text-emerald-800 bg-emerald-50 px-2 py-1 rounded-full">
                  100% Vetted
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* 2 Doctor Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          {psychiatrists.map((doctor) => (
            <div
              key={doctor.id}
              className="bg-white rounded-2xl md:rounded-3xl p-6 border border-[#cbd8d0] shadow-sm hover:shadow-xl transition-all flex flex-col justify-between group hover:-translate-y-1"
            >
              <div className="space-y-4">
                
                {/* Photo & Identity */}
                <div className="flex items-start gap-4">
                  <div className="w-18 h-18 sm:w-20 sm:h-20 rounded-2xl overflow-hidden bg-slate-100 shrink-0 border border-slate-200">
                    <img
                      src={doctor.image}
                      alt={doctor.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="space-y-1">
                    <div className="flex flex-wrap items-center gap-1.5">
                      <span className="text-[10px] font-bold bg-[#eaf4ee] text-emerald-800 px-2 py-0.5 rounded-full border border-emerald-200">
                        MD
                      </span>
                      <span className="text-[10px] font-bold bg-amber-50 text-amber-800 px-2 py-0.5 rounded-full border border-amber-200 flex items-center gap-1">
                        <Star className="w-2.5 h-2.5 fill-amber-400" />
                        <span>Top-rated</span>
                      </span>
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-[#0e382c]">
                      {doctor.name}
                    </h3>
                    <p className="text-xs font-semibold text-emerald-800">
                      {doctor.title}
                    </p>
                    <p className="text-[11px] text-slate-500">
                      {doctor.experienceYears} years of experience
                    </p>
                  </div>
                </div>

                {/* Languages */}
                <div className="flex items-center gap-1.5 text-xs text-slate-600 bg-[#f4f7f5] px-3 py-1.5 rounded-xl">
                  <Globe className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
                  <span>Fluent in {doctor.languages.join(', ')}</span>
                </div>

                {/* Bio */}
                <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                  "{doctor.bio}"
                </p>

                {/* Focus Specialties Chips */}
                <div className="flex flex-wrap gap-1.5">
                  {doctor.specialties.slice(0, 3).map((tag) => (
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
                    <span className="text-sm font-bold text-[#0e382c]">₹{doctor.sessionFee.toLocaleString('en-IN')}</span>
                    <span className="text-slate-400"> / {doctor.sessionDurationMins}m</span>
                  </div>
                  <div className="flex items-center gap-1 text-emerald-700 font-semibold bg-emerald-50 px-2 py-0.5 rounded-full text-[11px]">
                    <Clock className="w-3 h-3" />
                    <span>{doctor.availableSlot}</span>
                  </div>
                </div>

                <button
                  onClick={() => onSelectProvider(doctor)}
                  className="w-full py-2.5 bg-[#0e382c] hover:bg-[#154a3b] text-white rounded-full text-xs font-bold transition flex items-center justify-center gap-1.5 shadow-sm"
                >
                  <span>Book an appointment</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#85e05d]" />
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Counter */}
        <div className="text-center text-xs text-slate-500 font-medium mt-6">
          Showing 1–2 of 3 verified psychiatrists
        </div>

      </div>
    </section>
  );
};
