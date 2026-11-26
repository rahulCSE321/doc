import React from 'react';
import { ArrowRight, ShieldCheck, Stethoscope, HeartPulse, CheckCircle2 } from 'lucide-react';

interface NetworkOverviewProps {
  onScrollToTherapists: () => void;
  onScrollToPsychiatrists: () => void;
}

export const NetworkOverview: React.FC<NetworkOverviewProps> = ({
  onScrollToTherapists,
  onScrollToPsychiatrists,
}) => {
  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 py-10 md:py-14">
      <div className="max-w-[1240px] mx-auto bg-[#0e382c] rounded-[32px] md:rounded-[40px] p-6 sm:p-10 md:p-14 text-white shadow-2xl relative overflow-hidden">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-12">
          <span className="text-xs sm:text-sm font-semibold tracking-wider text-emerald-200 uppercase bg-white/10 px-3.5 py-1 rounded-full border border-white/15">
            Verified Healthcare Specialists
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white mt-3 mb-2 leading-snug">
            Explore our network of caring & friendly <br className="hidden sm:inline" />
            mental health professionals
          </h2>
          <p className="text-emerald-100/80 text-xs sm:text-sm md:text-base">
            All providers at DocMind complete a rigorous vetting process and are highly qualified and experienced.
          </p>
        </div>

        {/* 2 Network Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          
          {/* Therapists Card */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl md:rounded-3xl p-7 md:p-8 border border-white/15 flex flex-col justify-between space-y-6 hover:bg-white/15 transition group">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-[#85e05d] uppercase tracking-wider">
                  100+ Verified Experts
                </span>
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-[#85e05d]">
                  <HeartPulse className="w-5 h-5" />
                </div>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-white">
                Therapists
              </h3>

              <p className="text-emerald-100/85 text-xs sm:text-sm leading-relaxed">
                100+ experts with years of expertise, committed to helping individuals enhance their mental health and emotional wellness.
              </p>

              <div className="pt-2 flex flex-wrap gap-2 text-xs text-white">
                <span className="bg-black/30 px-3 py-1 rounded-full border border-white/10">RCI Licensed</span>
                <span className="bg-black/30 px-3 py-1 rounded-full border border-white/10">CBT & Psychotherapy</span>
                <span className="bg-black/30 px-3 py-1 rounded-full border border-white/10">50-min Sessions</span>
              </div>
            </div>

            <button
              onClick={onScrollToTherapists}
              className="w-full py-3.5 bg-[#85e05d] hover:bg-[#92ec69] text-[#0e382c] rounded-full text-xs sm:text-sm font-bold flex items-center justify-center gap-2 shadow-md hover:scale-102 transition"
            >
              <span>View All Therapists</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Psychiatrists Card */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl md:rounded-3xl p-7 md:p-8 border border-white/15 flex flex-col justify-between space-y-6 hover:bg-white/15 transition group">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-[#85e05d] uppercase tracking-wider">
                  MD / DNB Specialists
                </span>
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-[#85e05d]">
                  <Stethoscope className="w-5 h-5" />
                </div>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-white">
                Psychiatrists
              </h3>

              <p className="text-emerald-100/85 text-xs sm:text-sm leading-relaxed">
                Experienced psychiatrists offering dedicated 30-minutes consultation to help get the support you need and to improve your quality of life.
              </p>

              <div className="pt-2 flex flex-wrap gap-2 text-xs text-white">
                <span className="bg-black/30 px-3 py-1 rounded-full border border-white/10">Medical Evaluation</span>
                <span className="bg-black/30 px-3 py-1 rounded-full border border-white/10">Medication Management</span>
                <span className="bg-black/30 px-3 py-1 rounded-full border border-white/10">30-min Clinical Visits</span>
              </div>
            </div>

            <button
              onClick={onScrollToPsychiatrists}
              className="w-full py-3.5 bg-white text-[#0e382c] hover:bg-slate-100 rounded-full text-xs sm:text-sm font-bold flex items-center justify-center gap-2 shadow-md hover:scale-102 transition"
            >
              <span>View All Psychiatrists</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
