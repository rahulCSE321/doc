import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import consultationImg from '../../assets/images/therapy_consultation.jpg';

interface ConsultationSectionProps {
  onOpenConsultation: () => void;
}

export const ConsultationSection: React.FC<ConsultationSectionProps> = ({
  onOpenConsultation
}) => {
  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 py-12 md:py-16">
      <div className="max-w-[1240px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-14 items-center">
          
          {/* Left Column: Consultation Image */}
          <div className="lg:col-span-6">
            <div className="relative rounded-3xl md:rounded-[36px] overflow-hidden shadow-xl border border-[#cbd8d0] group">
              <img
                src={consultationImg}
                alt="Doctor and patient discussing health therapy documents"
                className="w-full h-[360px] sm:h-[440px] object-cover object-center group-hover:scale-103 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
              
              {/* Floating Badge */}
              <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-md px-4 py-2.5 rounded-2xl shadow-lg border border-white/60 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-[#0e382c]">Licensed Practitioners</div>
                  <div className="text-[11px] text-slate-500">1-on-1 Confidential Sessions</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Copy & Action */}
          <div className="lg:col-span-6 space-y-6">
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#0e382c] tracking-tight leading-[1.2]">
              Discuss the Benefits of{' '}
              <span className="font-serif italic font-normal text-[#1a543e]">
                Therapy for the Body
              </span>{' '}
              with Our Team
            </h2>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Our mission is to help individuals overcome challenges and live happy, fulfilling lives through professional guidance and personalized care plans.
            </p>

            <ul className="space-y-3 pt-2 text-sm text-slate-700">
              <li className="flex items-center gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#73cf4c]"></span>
                <span>Personalized bio-psychological wellness assessment</span>
              </li>
              <li className="flex items-center gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#73cf4c]"></span>
                <span>Evidence-supported therapeutic methodologies</span>
              </li>
              <li className="flex items-center gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#73cf4c]"></span>
                <span>Flexible video consultations or clinic visits</span>
              </li>
            </ul>

            <div className="pt-3">
              <button
                onClick={onOpenConsultation}
                className="bg-[#0e382c] hover:bg-[#154a3a] text-white px-7 py-3.5 rounded-full font-semibold text-sm sm:text-base flex items-center gap-2.5 shadow-lg shadow-emerald-950/20 hover:scale-[1.02] active:scale-98 transition-all"
              >
                <span>Get Free Consultation</span>
                <div className="w-6 h-6 rounded-full bg-white/15 flex items-center justify-center text-[#85e05d]">
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
