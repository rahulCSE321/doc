import React from 'react';
import { ArrowRight } from 'lucide-react';
import stressImg from '../../assets/images/assessment_stress.jpg';
import anxietyImg from '../../assets/images/assessment_anxiety.jpg';
import depressionImg from '../../assets/images/assessment_depression.jpg';

interface AssessmentSectionProps {
  onSelectCategory: (category: 'Stress' | 'Anxiety' | 'Depression') => void;
}

export const AssessmentSection: React.FC<AssessmentSectionProps> = ({
  onSelectCategory
}) => {
  const assessmentOptions = [
    {
      id: 'Stress',
      title: 'Stress',
      description: 'Assess work burnout, overwhelm & nervous tension',
      image: stressImg,
    },
    {
      id: 'Anxiety',
      title: 'Anxiety',
      description: 'Evaluate social worry, racing thoughts & panic symptoms',
      image: anxietyImg,
    },
    {
      id: 'Depression',
      title: 'Depression',
      description: 'Screen for mood dips, low energy & persistent sadness',
      image: depressionImg,
    },
  ] as const;

  return (
    <section id="assessments" className="w-full px-4 sm:px-6 lg:px-8 py-8 md:py-12">
      <div className="max-w-[1240px] mx-auto bg-[#e5eee8] rounded-[32px] md:rounded-[40px] p-6 sm:p-10 md:p-12 border border-[#cbd8d0] shadow-sm">
        
        {/* Title */}
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0e382c] tracking-tight">
            Choose Self-Assessment
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2 max-w-lg mx-auto">
            Take a certified 2-minute clinical check to understand your current emotional state.
          </p>
        </div>

        {/* 3 Assessment Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {assessmentOptions.map((item) => (
            <div
              key={item.id}
              onClick={() => onSelectCategory(item.id)}
              className="group bg-white rounded-2xl md:rounded-3xl p-3 sm:p-4 border border-[#d6e3da] shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col justify-between hover:-translate-y-1.5"
            >
              {/* Photo */}
              <div className="w-full aspect-square rounded-xl md:rounded-2xl overflow-hidden bg-slate-100 relative mb-4">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              {/* Title & Arrow Button */}
              <div className="flex items-center justify-between px-2 pb-1">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-[#0e382c] group-hover:text-emerald-700 transition">
                    {item.title}
                  </h3>
                  <span className="text-xs text-slate-500 font-medium">Quick 2-min Check</span>
                </div>

                <div className="w-10 h-10 rounded-full bg-[#0e382c] text-white flex items-center justify-center group-hover:bg-[#73cf4c] group-hover:text-[#0e382c] transition-colors shadow-sm">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
