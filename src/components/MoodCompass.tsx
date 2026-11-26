import React, { useState, useEffect } from 'react';
import { Sparkles, Heart, Activity, CheckCircle2, RotateCcw, ArrowRight } from 'lucide-react';
import { MoodType, MoodLog, Provider } from '../types';
import { THERAPISTS_DATA } from '../data/mockData';

interface MoodCompassProps {
  onSelectProvider: (provider: Provider) => void;
  onOpenMatchmaker: (type: 'therapist' | 'psychiatrist') => void;
  onOpenAssessment?: () => void;
}

const MOOD_OPTIONS: { type: MoodType; label: string; icon: string; color: string; desc: string }[] = [
  { type: 'calm', label: 'Calm & Grounded', icon: '🌿', color: 'border-emerald-300 bg-white text-emerald-900', desc: 'At peace, centered and steady' },
  { type: 'energized', label: 'Energized & Focused', icon: '⚡', color: 'border-amber-300 bg-white text-amber-900', desc: 'Motivated, creative, and active' },
  { type: 'anxious', label: 'Anxious or Restless', icon: '🌀', color: 'border-emerald-400 bg-white text-emerald-900', desc: 'Racing thoughts, heart palpitations' },
  { type: 'overwhelmed', label: 'Overwhelmed', icon: '⛈️', color: 'border-purple-300 bg-white text-purple-900', desc: 'Too much on your plate, strained' },
  { type: 'low', label: 'Low or Drained', icon: '🌧️', color: 'border-slate-300 bg-white text-slate-800', desc: 'Sad, tired, or emotionally fatigued' },
  { type: 'hopeful', label: 'Hopeful & Warm', icon: '🌅', color: 'border-sky-300 bg-white text-sky-900', desc: 'Looking forward to healing' },
];

const COMMON_TAGS = ['Work Pressure', 'Sleep Quality', 'Relationships', 'Physical Health', 'Family', 'Finances'];

export const MoodCompass: React.FC<MoodCompassProps> = ({
  onSelectProvider,
  onOpenMatchmaker,
  onOpenAssessment,
}) => {
  const [selectedMood, setSelectedMood] = useState<MoodType>('anxious');
  const [intensity, setIntensity] = useState<number>(6);
  const [selectedTags, setSelectedTags] = useState<string[]>(['Work Pressure', 'Sleep Quality']);
  const [moodLogs, setMoodLogs] = useState<MoodLog[]>([]);
  const [justLogged, setJustLogged] = useState(false);

  // Breathing pacer state
  const [isBreathingActive, setIsBreathingActive] = useState(false);
  const [breathPhase, setBreathPhase] = useState<'Inhale' | 'Hold' | 'Exhale'>('Inhale');
  const [breathTimer, setBreathTimer] = useState<number>(4);

  // Initial load
  useEffect(() => {
    const saved = localStorage.getItem('docmind_mood_logs');
    if (saved) {
      try {
        setMoodLogs(JSON.parse(saved));
      } catch {
        // fallback
      }
    } else {
      const demoLogs: MoodLog[] = [
        { id: '1', date: 'Oct 4', mood: 'calm', intensity: 7, tags: ['Sleep Quality'] },
        { id: '2', date: 'Oct 5', mood: 'energized', intensity: 8, tags: ['Work Pressure'] },
        { id: '3', date: 'Oct 6', mood: 'overwhelmed', intensity: 8, tags: ['Work Pressure'] },
        { id: '4', date: 'Oct 7', mood: 'anxious', intensity: 6, tags: ['Work Pressure'] },
      ];
      setMoodLogs(demoLogs);
      localStorage.setItem('docmind_mood_logs', JSON.stringify(demoLogs));
    }
  }, []);

  // Breathing pacer animation cycle
  useEffect(() => {
    if (!isBreathingActive) return;

    const interval = setInterval(() => {
      setBreathTimer((prev) => {
        if (prev > 1) return prev - 1;

        if (breathPhase === 'Inhale') {
          setBreathPhase('Hold');
          return 7;
        } else if (breathPhase === 'Hold') {
          setBreathPhase('Exhale');
          return 8;
        } else {
          setBreathPhase('Inhale');
          return 4;
        }
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isBreathingActive, breathPhase]);

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const handleLogMood = () => {
    const newLog: MoodLog = {
      id: Date.now().toString(),
      date: 'Today',
      mood: selectedMood,
      intensity,
      tags: selectedTags,
    };
    const updated = [newLog, ...moodLogs.slice(0, 5)];
    setMoodLogs(updated);
    localStorage.setItem('docmind_mood_logs', JSON.stringify(updated));
    setJustLogged(true);
    setTimeout(() => setJustLogged(false), 2500);
  };

  const matchedTherapist = THERAPISTS_DATA[0]; // Ms Neha Kumar

  return (
    <section id="mood-compass" className="w-full px-4 sm:px-6 lg:px-8 py-8 md:py-12">
      <div className="max-w-[1240px] mx-auto bg-[#e5eee8] rounded-[32px] md:rounded-[40px] p-6 sm:p-10 md:p-12 border border-[#cbd8d0] shadow-sm">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs sm:text-sm font-semibold tracking-wider text-[#2e5c4a] uppercase bg-white px-3.5 py-1 rounded-full border border-[#cbd8d0]">
            Interactive Daily Tool
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0e382c] tracking-tight mt-3 mb-2">
            Daily Mood & Wellness Compass
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm md:text-base">
            Check in with your feelings in seconds. Track emotional trends, release tension, and receive tailored therapy resources.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Interactive Check-in */}
          <div className="lg:col-span-7 bg-white rounded-2xl md:rounded-3xl p-6 sm:p-8 border border-[#cbd8d0] shadow-sm space-y-6">
            
            {/* Step 1: Mood options */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#0e382c] mb-3">
                1. How are you feeling right now?
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {MOOD_OPTIONS.map((item) => {
                  const isSelected = selectedMood === item.type;
                  return (
                    <button
                      key={item.type}
                      type="button"
                      onClick={() => setSelectedMood(item.type)}
                      className={`p-3 rounded-2xl border text-left transition-all cursor-pointer ${
                        isSelected
                          ? 'border-[#0e382c] bg-[#eaf4ee] ring-2 ring-[#0e382c] shadow-sm'
                          : 'border-slate-200 hover:border-emerald-300 hover:bg-slate-50'
                      }`}
                    >
                      <div className="text-2xl mb-1">{item.icon}</div>
                      <div className="text-xs font-bold text-[#0e382c]">{item.label}</div>
                      <div className="text-[10px] text-slate-500 line-clamp-1 mt-0.5">{item.desc}</div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Intensity Slider */}
            <div>
              <div className="flex justify-between items-center text-xs font-bold text-[#0e382c] mb-2">
                <span>2. Intensity level ({intensity}/10)</span>
                <span className="text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full font-semibold">
                  {intensity <= 3 ? 'Mild' : intensity <= 7 ? 'Moderate' : 'Intense'}
                </span>
              </div>
              <input
                type="range"
                min="1"
                max="10"
                value={intensity}
                onChange={(e) => setIntensity(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#0e382c]"
              />
              <div className="flex justify-between text-[11px] text-slate-400 mt-1">
                <span>1 - Barely noticeable</span>
                <span>5 - Noticeable</span>
                <span>10 - Overwhelming</span>
              </div>
            </div>

            {/* Step 3: Influencing factors */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#0e382c] mb-2">
                3. What may be influencing this mood? (Optional)
              </label>
              <div className="flex flex-wrap gap-2">
                {COMMON_TAGS.map((tag) => {
                  const active = selectedTags.includes(tag);
                  return (
                    <button
                      key={tag}
                      type="button"
                      onClick={() => toggleTag(tag)}
                      className={`px-3 py-1.5 rounded-full text-xs font-semibold transition cursor-pointer ${
                        active
                          ? 'bg-[#0e382c] text-white shadow-xs'
                          : 'bg-[#f4f7f5] hover:bg-slate-200 text-slate-700 border border-slate-200'
                      }`}
                    >
                      {tag}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Save Button */}
            <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <button
                type="button"
                onClick={handleLogMood}
                className="px-6 py-3 text-xs sm:text-sm font-bold text-white bg-[#0e382c] hover:bg-[#154839] rounded-full transition-all cursor-pointer flex items-center justify-center gap-2 shadow-md hover:scale-102"
              >
                {justLogged ? (
                  <>
                    <CheckCircle2 className="w-4 h-4 text-[#85e05d]" />
                    <span>Logged to Mood History!</span>
                  </>
                ) : (
                  <>
                    <Heart className="w-4 h-4 text-[#85e05d]" />
                    <span>Save Today's Check-In</span>
                  </>
                )}
              </button>

              <span className="text-xs text-slate-500">
                100% Private & stored on your device
              </span>
            </div>

          </div>

          {/* Right Column: Tailored Insights, Somatic Pacer & Recent Mood Trail */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Real-time Recommendation Box */}
            <div className="bg-white rounded-2xl md:rounded-3xl border border-[#cbd8d0] p-6 shadow-sm space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <Activity className="w-4 h-4 text-emerald-700" />
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-600">
                    Real-time Recommendation
                  </span>
                </div>
                <span className="text-xs font-bold text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded-full">
                  Active
                </span>
              </div>

              {/* Somatic Calming Card */}
              <div className="space-y-3">
                <h4 className="text-sm font-bold text-[#0e382c]">
                  Somatic Calming: 4-7-8 Deep Breathing
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  When anxiety surges, grounding your nervous system signals safety to the amygdala. Try 60 seconds with our breath pacer below.
                </p>

                {/* Breathing Pacer Sandbox */}
                <div className="p-4 bg-[#f4f7f5] rounded-2xl border border-slate-200 flex flex-col items-center justify-center space-y-3">
                  <div
                    className={`w-24 h-24 rounded-full flex flex-col items-center justify-center transition-all duration-1000 ${
                      isBreathingActive
                        ? breathPhase === 'Inhale'
                          ? 'bg-emerald-100 scale-110 ring-4 ring-[#73cf4c]'
                          : breathPhase === 'Hold'
                          ? 'bg-amber-100 scale-110 ring-4 ring-amber-400'
                          : 'bg-blue-100 scale-95 ring-4 ring-blue-400'
                        : 'bg-white border-2 border-slate-200'
                    }`}
                  >
                    <span className="text-xs font-bold text-[#0e382c]">
                      {isBreathingActive ? breathPhase : 'Ready'}
                    </span>
                    <span className="text-xl font-bold font-mono text-[#0e382c]">
                      {isBreathingActive ? `${breathTimer}s` : '4-7-8'}
                    </span>
                  </div>

                  <button
                    type="button"
                    onClick={() => setIsBreathingActive(!isBreathingActive)}
                    className="px-4 py-1.5 rounded-full bg-[#0e382c] text-white text-xs font-semibold hover:bg-[#154a3b] transition"
                  >
                    {isBreathingActive ? 'Stop Breath Pacer' : 'Start 4-7-8 Breath Pacer'}
                  </button>
                </div>
              </div>

              {/* Recommended Clinical Match */}
              <div className="pt-3 border-t border-slate-100">
                <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-2">
                  Recommended Clinical Match for this state:
                </div>
                <div className="flex items-center justify-between p-3 bg-[#eaf4ee] rounded-xl border border-emerald-200">
                  <div className="flex items-center gap-2.5">
                    <img
                      src={matchedTherapist.image}
                      alt={matchedTherapist.name}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                      <div className="text-xs font-bold text-[#0e382c]">{matchedTherapist.name}</div>
                      <div className="text-[11px] text-emerald-800">Anxiety & Panic · ₹1,500</div>
                    </div>
                  </div>
                  <button
                    onClick={() => onSelectProvider(matchedTherapist)}
                    className="px-3.5 py-1.5 rounded-full bg-[#0e382c] text-white text-xs font-bold hover:bg-[#154839] transition"
                  >
                    Book
                  </button>
                </div>
              </div>
            </div>

            {/* Recent Mood Trail */}
            <div className="bg-white rounded-2xl md:rounded-3xl border border-[#cbd8d0] p-5 shadow-sm space-y-3">
              <div className="flex justify-between items-center text-xs font-bold text-[#0e382c]">
                <span>Recent Mood Trail</span>
                <span className="text-slate-400 font-normal">4 entries recorded</span>
              </div>
              <div className="grid grid-cols-4 gap-2 text-center text-xs">
                {moodLogs.slice(0, 4).map((log, i) => (
                  <div key={i} className="p-2.5 bg-[#f4f7f5] rounded-xl border border-slate-200 space-y-1">
                    <div className="font-bold text-[#0e382c] capitalize truncate text-[11px]">{log.mood} · {log.intensity}/10</div>
                    <div className="text-[9px] text-slate-500 truncate">{log.tags[0] || 'General'}</div>
                    <div className="text-[9px] font-bold text-emerald-700">{log.date}</div>
                  </div>
                ))}
              </div>

              {/* CTA link to clinical assessment */}
              <div className="pt-2 text-center">
                <button
                  onClick={() => onOpenAssessment ? onOpenAssessment() : onOpenMatchmaker('therapist')}
                  className="text-xs font-bold text-[#0e382c] hover:text-emerald-700 inline-flex items-center gap-1 transition"
                >
                  <span>Take 60-Second Clinical Assessment</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
