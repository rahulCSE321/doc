import React, { useState } from 'react';
import { X, Sparkles, Check, ArrowRight, ShieldCheck } from 'lucide-react';
import { Provider } from '../types';
import { THERAPISTS_DATA, PSYCHIATRISTS_DATA } from '../data/mockData';

interface MatchmakerModalProps {
  initialType: 'therapist' | 'psychiatrist';
  onClose: () => void;
  onSelectProvider: (provider: Provider) => void;
}

const CONCERNS = [
  'Anxiety, Panic & Overthinking',
  'Depression & Low Energy',
  'Relationship or Marriage Friction',
  'Trauma, Grief & Past Pain',
  'ADHD, Focus & Procrastination',
  'Workplace Burnout & Stress',
];

const LANGUAGES = ['English', 'Hindi', 'Kannada', 'Malayalam', 'Gujarati', 'Telugu', 'Tamil'];

export const MatchmakerModal: React.FC<MatchmakerModalProps> = ({
  initialType,
  onClose,
  onSelectProvider,
}) => {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [selectedConcern, setSelectedConcern] = useState(CONCERNS[0]);
  const [selectedLanguage, setSelectedLanguage] = useState('English');
  const [selectedMode, setSelectedMode] = useState<'video' | 'in-person'>('video');

  const candidates = initialType === 'therapist' ? THERAPISTS_DATA : PSYCHIATRISTS_DATA;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-lg w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-100 p-6 sm:p-8 relative">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-slate-400 hover:text-slate-700 p-1 rounded-full hover:bg-slate-100 transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header Indicator */}
        <div className="flex items-center gap-2 mb-4">
          <div className="w-7 h-7 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
            <Sparkles className="w-4 h-4" />
          </div>
          <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">
            60-Second Matchmaker · Step {step} of 3
          </span>
        </div>

        {/* Step 1: Concern */}
        {step === 1 && (
          <div className="space-y-5 animate-in fade-in duration-200">
            <h3 className="text-xl font-bold text-slate-900 leading-snug">
              What has been weighing on your mind the most lately?
            </h3>
            <p className="text-xs text-slate-500">
              This helps us pair you with a clinician specialized in your exact lived experience.
            </p>

            <div className="space-y-2">
              {CONCERNS.map((concern) => (
                <button
                  key={concern}
                  type="button"
                  onClick={() => setSelectedConcern(concern)}
                  className={`w-full p-3 rounded-xl border text-left text-xs font-medium transition-all flex items-center justify-between cursor-pointer ${
                    selectedConcern === concern
                      ? 'border-blue-600 bg-blue-50/70 text-blue-900 font-bold shadow-xs'
                      : 'border-slate-200 hover:bg-slate-50 text-slate-700'
                  }`}
                >
                  <span>{concern}</span>
                  {selectedConcern === concern && <Check className="w-4 h-4 text-blue-600" />}
                </button>
              ))}
            </div>

            <div className="pt-2">
              <button
                type="button"
                onClick={() => setStep(2)}
                className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-sm font-semibold flex items-center justify-center gap-2 cursor-pointer transition-colors"
              >
                <span>Continue</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* Step 2: Language & Format */}
        {step === 2 && (
          <div className="space-y-5 animate-in fade-in duration-200">
            <h3 className="text-xl font-bold text-slate-900 leading-snug">
              Your preferences for language and session format
            </h3>
            <p className="text-xs text-slate-500">
              Therapy is deepest in the language you think and feel in.
            </p>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-2">
                Preferred Consultation Language:
              </label>
              <div className="flex flex-wrap gap-2">
                {LANGUAGES.map((lang) => (
                  <button
                    key={lang}
                    type="button"
                    onClick={() => setSelectedLanguage(lang)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium cursor-pointer transition-colors ${
                      selectedLanguage === lang
                        ? 'bg-blue-600 text-white shadow-xs'
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                    }`}
                  >
                    {lang}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-2">
                Consultation Format:
              </label>
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => setSelectedMode('video')}
                  className={`p-3 rounded-xl border text-left text-xs transition-all cursor-pointer ${
                    selectedMode === 'video'
                      ? 'border-blue-600 bg-blue-50 text-blue-900 font-bold'
                      : 'border-slate-200 text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  <div className="font-bold">Google Meet (Online)</div>
                  <div className="text-[10px] text-slate-500 mt-0.5">From anywhere with comfort</div>
                </button>

                <button
                  type="button"
                  onClick={() => setSelectedMode('in-person')}
                  className={`p-3 rounded-xl border text-left text-xs transition-all cursor-pointer ${
                    selectedMode === 'in-person'
                      ? 'border-blue-600 bg-blue-50 text-blue-900 font-bold'
                      : 'border-slate-200 text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  <div className="font-bold">In-Person Clinic</div>
                  <div className="text-[10px] text-slate-500 mt-0.5">Clinic visits across 25 cities</div>
                </button>
              </div>
            </div>

            <div className="flex items-center gap-3 pt-2">
              <button
                type="button"
                onClick={() => setStep(1)}
                className="w-1/3 py-3 border border-slate-200 text-slate-700 rounded-xl text-xs font-semibold hover:bg-slate-50 cursor-pointer"
              >
                Back
              </button>
              <button
                type="button"
                onClick={() => setStep(3)}
                className="w-2/3 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-sm font-semibold flex items-center justify-center gap-2 cursor-pointer transition-colors"
              >
                <span>Find Matched Clinicians</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* Step 3: Top Matches */}
        {step === 3 && (
          <div className="space-y-4 animate-in fade-in duration-200">
            <div>
              <h3 className="text-xl font-bold text-slate-900">
                Your Recommended Matches
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                Matched based on {selectedConcern.split(',')[0]} · Speaks {selectedLanguage}
              </p>
            </div>

            <div className="space-y-3">
              {candidates.slice(0, 2).map((provider, i) => (
                <div
                  key={provider.id}
                  className="p-4 rounded-2xl border border-slate-200 bg-white hover:border-blue-400 transition-all flex items-start gap-3.5 group"
                >
                  <img
                    src={provider.image}
                    alt={provider.name}
                    className="w-14 h-14 rounded-xl object-cover shrink-0 border border-slate-100"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <div className="font-bold text-sm text-slate-900 group-hover:text-blue-600 transition-colors">
                        {provider.name}
                      </div>
                      <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded">
                        {i === 0 ? '98% Match' : '95% Match'}
                      </span>
                    </div>

                    <div className="text-xs text-slate-500">
                      {provider.title} · {provider.experienceYears}y exp
                    </div>

                    <div className="text-xs text-slate-600 line-clamp-1 mt-1">
                      {provider.specialties.join(' · ')}
                    </div>

                    <div className="mt-2.5 flex items-center justify-between pt-2 border-t border-slate-100">
                      <span className="text-xs font-bold text-slate-900">
                        ₹{provider.sessionFee.toLocaleString()} / {provider.sessionDurationMins}m
                      </span>

                      <button
                        type="button"
                        onClick={() => {
                          onClose();
                          onSelectProvider(provider);
                        }}
                        className="px-3 py-1 text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-lg cursor-pointer transition-colors"
                      >
                        Book Appointment
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-2 text-center text-xs text-slate-500 flex items-center justify-center gap-1">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Full Right-Fit Guarantee. Change therapist anytime for free.</span>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
