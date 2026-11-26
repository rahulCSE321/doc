import React, { useState, useEffect } from 'react';
import { X, Play, Pause, RotateCcw, CheckCircle2, Flame, Heart } from 'lucide-react';
import workoutImg from '../../assets/images/workout_stretching.jpg';

interface VideoWorkoutModalProps {
  onClose: () => void;
}

export const VideoWorkoutModal: React.FC<VideoWorkoutModalProps> = ({ onClose }) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [seconds, setSeconds] = useState(45);
  const [currentPose, setCurrentPose] = useState(0);

  const poses = [
    { name: 'Low Lunge Hip Flexor Stretch', target: 'Hips & Quads', hold: 45 },
    { name: 'Thoracic Spine Openers', target: 'Upper Back & Chest', hold: 40 },
    { name: 'Calf & Hamstring Decompression', target: 'Legs & Lower Back', hold: 50 },
    { name: 'Diaphragmatic Parasympathetic Breath', target: 'Nervous System', hold: 60 },
  ];

  useEffect(() => {
    let timer: any;
    if (isPlaying && seconds > 0) {
      timer = setInterval(() => {
        setSeconds((prev) => prev - 1);
      }, 1000);
    } else if (seconds === 0 && currentPose < poses.length - 1) {
      setCurrentPose((p) => p + 1);
      setSeconds(poses[currentPose + 1].hold);
    }
    return () => clearInterval(timer);
  }, [isPlaying, seconds, currentPose]);

  return (
    <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-md flex items-center justify-center p-4">
      <div className="bg-[#0e382c] text-white rounded-[32px] w-full max-w-2xl overflow-hidden shadow-2xl border border-emerald-800">
        
        {/* Top Header */}
        <div className="p-4 sm:p-5 flex items-center justify-between border-b border-white/10">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#85e05d] animate-pulse"></span>
            <span className="text-sm font-bold">Guided Mobility Routine • Level: All Levels</span>
          </div>
          <button 
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Video / Visual Display */}
        <div className="relative aspect-video w-full bg-black">
          <img 
            src={workoutImg} 
            alt="Workout routine demonstration" 
            className="w-full h-full object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />

          {/* Active Timer Floating Overlay */}
          <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
            <div>
              <div className="text-xs text-[#85e05d] font-semibold tracking-wider uppercase">Current Movement</div>
              <div className="text-lg sm:text-xl font-bold">{poses[currentPose].name}</div>
              <div className="text-xs text-slate-300">Focus: {poses[currentPose].target}</div>
            </div>

            <div className="bg-black/60 backdrop-blur-md border border-white/20 px-4 py-2 rounded-2xl flex items-center gap-2">
              <span className="text-2xl font-mono font-bold text-[#85e05d]">{seconds}s</span>
            </div>
          </div>
        </div>

        {/* Controls Bar */}
        <div className="p-5 sm:p-6 bg-[#09281f] space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4 text-xs text-emerald-200">
              <div className="flex items-center gap-1.5">
                <Flame className="w-4 h-4 text-orange-400" />
                <span>Est. Cal: 95 kcal</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Heart className="w-4 h-4 text-rose-400" />
                <span>Heart Rate: 108 bpm</span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="w-10 h-10 rounded-full bg-[#85e05d] text-[#0e382c] flex items-center justify-center font-bold hover:scale-105 transition"
              >
                {isPlaying ? <Pause className="w-4 h-4 fill-[#0e382c]" /> : <Play className="w-4 h-4 fill-[#0e382c] ml-0.5" />}
              </button>
              <button
                onClick={() => {
                  setSeconds(poses[currentPose].hold);
                  setIsPlaying(true);
                }}
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Sequence Progress */}
          <div className="grid grid-cols-4 gap-2 pt-2 border-t border-white/10">
            {poses.map((p, idx) => (
              <div
                key={idx}
                onClick={() => {
                  setCurrentPose(idx);
                  setSeconds(p.hold);
                }}
                className={`p-2 rounded-xl text-left cursor-pointer transition ${
                  currentPose === idx
                    ? 'bg-[#85e05d] text-[#0e382c] font-bold'
                    : currentPose > idx
                    ? 'bg-white/10 text-emerald-200 opacity-60'
                    : 'bg-white/5 text-slate-400'
                }`}
              >
                <div className="text-[10px] uppercase font-bold">Step {idx + 1}</div>
                <div className="text-xs truncate">{p.name}</div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
