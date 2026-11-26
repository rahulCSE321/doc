import React from 'react';
import { Play, Activity, Moon, ShieldCheck } from 'lucide-react';
import workoutImg from '../../assets/images/workout_stretching.jpg';

interface WorkoutSectionProps {
  onOpenVideoModal: () => void;
}

export const WorkoutSection: React.FC<WorkoutSectionProps> = ({
  onOpenVideoModal
}) => {
  return (
    <section id="workouts" className="w-full px-4 sm:px-6 lg:px-8 py-8 md:py-12">
      <div className="max-w-[1240px] mx-auto bg-[#0e382c] rounded-[32px] md:rounded-[40px] p-6 sm:p-10 md:p-14 text-white shadow-2xl relative overflow-hidden">
        
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-8 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white leading-snug">
            Beginner to Advanced Workouts to <br className="hidden sm:inline" />
            boost your fitness journey
          </h2>
        </div>

        {/* Video Preview Card */}
        <div 
          onClick={onOpenVideoModal}
          className="relative w-full aspect-video max-h-[480px] rounded-2xl md:rounded-3xl overflow-hidden cursor-pointer group shadow-xl mb-12 border border-white/10"
        >
          <img 
            src={workoutImg} 
            alt="Athlete stretching outdoors on a park pathway" 
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-black/25 group-hover:bg-black/35 transition-colors" />

          {/* Central Pulsating Play Button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative flex items-center justify-center">
              <span className="absolute w-20 h-20 md:w-24 md:h-24 rounded-full bg-[#85e05d]/40 animate-ping" />
              <button
                aria-label="Play Workout Video"
                className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-[#85e05d] text-[#0e382c] flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300"
              >
                <Play className="w-7 h-7 md:w-8 md:h-8 fill-[#0e382c] ml-1" />
              </button>
            </div>
          </div>

          <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 flex items-center justify-between pointer-events-none">
            <div className="bg-black/60 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-medium text-white flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>15 Min Daily Dynamic Mobility</span>
            </div>
            <span className="bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full text-xs text-white/90">
              HD Preview
            </span>
          </div>
        </div>

        {/* 3 Benefit Feature Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 pt-4 border-t border-white/15">
          
          {/* Feature 1 */}
          <div className="space-y-3">
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-[#85e05d]">
              <Activity className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white">
              Physical Stability
            </h3>
            <p className="text-emerald-100/75 text-xs sm:text-sm leading-relaxed">
              Enhance core strength, postural alignment, and natural range of motion with progressive guidance tailored to your pace.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="space-y-3">
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-[#85e05d]">
              <Moon className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white">
              Better Sleep Quality
            </h3>
            <p className="text-emerald-100/75 text-xs sm:text-sm leading-relaxed">
              Targeted restorative sequences release accumulated physical tension to promote deeper, uninterrupted sleep cycles.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="space-y-3">
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-[#85e05d]">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white">
              Stress Reduction
            </h3>
            <p className="text-emerald-100/75 text-xs sm:text-sm leading-relaxed">
              Mindful breathwork and rhythmic body movement reduce nervous system activation and alleviate chronic mental strain.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
