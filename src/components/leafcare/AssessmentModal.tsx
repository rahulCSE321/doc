import React, { useState } from 'react';
import { X, CheckCircle, ArrowRight, RotateCcw, AlertCircle, Heart } from 'lucide-react';

interface AssessmentModalProps {
  initialCategory: 'Stress' | 'Anxiety' | 'Depression' | null;
  onClose: () => void;
  onBookSpecialist: () => void;
}

export const AssessmentModal: React.FC<AssessmentModalProps> = ({
  initialCategory,
  onClose,
  onBookSpecialist
}) => {
  const [category, setCategory] = useState<'Stress' | 'Anxiety' | 'Depression'>(initialCategory || 'Stress');
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [isFinished, setIsFinished] = useState(false);

  const questionsMap = {
    Stress: [
      "How often have you felt overwhelmed or unable to control important things in your life?",
      "How often do you feel nervous, physically tense, or on-edge at work or home?",
      "How frequently do you have difficulty relaxing or unwinding in the evening?",
      "How often do you experience fatigue or headaches related to mental workload?"
    ],
    Anxiety: [
      "How often do you feel excessive worry about different upcoming events or tasks?",
      "Do you find it difficult to stop or control worrying once it starts?",
      "Do you experience physical sensations like rapid heartbeat, tightness, or shortness of breath?",
      "Do fears of worst-case scenarios prevent you from enjoying current moments?"
    ],
    Depression: [
      "How often have you had little interest or pleasure in doing things you normally enjoy?",
      "How often have you felt down, depressed, hopeless, or emotionally numb?",
      "Have you noticed disruptions in your sleeping patterns or daily energy levels?",
      "Do you feel exhausted even after resting, or self-critical about your accomplishments?"
    ]
  };

  const currentQuestions = questionsMap[category];

  const handleSelectOption = (value: number) => {
    const nextAnswers = [...answers, value];
    setAnswers(nextAnswers);
    if (currentStep + 1 < currentQuestions.length) {
      setCurrentStep(currentStep + 1);
    } else {
      setIsFinished(true);
    }
  };

  const resetQuiz = () => {
    setCurrentStep(0);
    setAnswers([]);
    setIsFinished(false);
  };

  const scoreTotal = answers.reduce((a, b) => a + b, 0);
  const maxScore = currentQuestions.length * 3;
  const percentage = Math.round((scoreTotal / maxScore) * 100);

  const getScoreSummary = () => {
    if (percentage <= 30) {
      return {
        level: 'Mild / Balanced',
        color: 'text-emerald-700 bg-emerald-50 border-emerald-200',
        advice: 'Your indicators are within a manageable range. Maintaining daily mindfulness and structured recovery is recommended.'
      };
    }
    if (percentage <= 65) {
      return {
        level: 'Moderate Elevation',
        color: 'text-amber-800 bg-amber-50 border-amber-200',
        advice: 'You are showing noticeable symptoms of strain. Speaking with a certified Leafcare therapist can help build healthy coping mechanisms.'
      };
    }
    return {
      level: 'Significant Strain',
      color: 'text-rose-800 bg-rose-50 border-rose-200',
      advice: 'Your responses indicate substantial emotional fatigue. We strongly advise a 1-on-1 consultation with our clinical specialists.'
    };
  };

  const summary = getScoreSummary();

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white rounded-[32px] w-full max-w-lg overflow-hidden shadow-2xl border border-slate-200 animate-scale-up">
        
        {/* Header */}
        <div className="bg-[#0e382c] text-white p-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-[#85e05d] text-[#0e382c] flex items-center justify-center font-bold text-sm">
              <Heart className="w-4 h-4 fill-[#0e382c]" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white">Leafcare Clinical Screen</h3>
              <p className="text-xs text-emerald-200">Confidential Mental Health Assessment</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Category Tabs if not finished */}
        {!isFinished && (
          <div className="flex border-b border-slate-100 bg-[#f4f7f5] p-2 gap-2">
            {(['Stress', 'Anxiety', 'Depression'] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setCategory(cat);
                  resetQuiz();
                }}
                className={`flex-1 py-2 text-xs font-semibold rounded-xl transition ${
                  category === cat
                    ? 'bg-[#0e382c] text-white shadow-sm'
                    : 'text-slate-600 hover:bg-white/60'
                }`}
              >
                {cat} Check
              </button>
            ))}
          </div>
        )}

        <div className="p-6">
          {!isFinished ? (
            <div className="space-y-6">
              {/* Progress bar */}
              <div>
                <div className="flex justify-between text-xs font-semibold text-slate-500 mb-1.5">
                  <span>Question {currentStep + 1} of {currentQuestions.length}</span>
                  <span>{Math.round(((currentStep + 1) / currentQuestions.length) * 100)}%</span>
                </div>
                <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-[#73cf4c] transition-all duration-300"
                    style={{ width: `${((currentStep + 1) / currentQuestions.length) * 100}%` }}
                  />
                </div>
              </div>

              {/* Question */}
              <h4 className="text-lg font-bold text-[#0e382c] leading-snug">
                {currentQuestions[currentStep]}
              </h4>

              {/* Options */}
              <div className="space-y-2.5">
                {[
                  { label: "Not at all (0)", val: 0 },
                  { label: "Several days / Occasionally (1)", val: 1 },
                  { label: "More than half the days (2)", val: 2 },
                  { label: "Nearly every day (3)", val: 3 },
                ].map((opt) => (
                  <button
                    key={opt.val}
                    onClick={() => handleSelectOption(opt.val)}
                    className="w-full text-left p-3.5 rounded-2xl border border-slate-200 hover:border-[#0e382c] hover:bg-[#eaf4ee] text-sm font-medium text-slate-800 transition flex items-center justify-between group"
                  >
                    <span>{opt.label}</span>
                    <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-[#0e382c] transition-colors" />
                  </button>
                ))}
              </div>
            </div>
          ) : (
            /* Result Screen */
            <div className="space-y-5 text-center">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle className="w-8 h-8" />
              </div>

              <div>
                <div className="text-xs uppercase font-bold text-slate-400 tracking-wider">Assessment Complete</div>
                <h4 className="text-2xl font-bold text-[#0e382c] mt-1">{category} Evaluation Score</h4>
              </div>

              <div className={`p-4 rounded-2xl border ${summary.color} text-left space-y-1.5`}>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider">Indicator Level</span>
                  <span className="text-sm font-extrabold">{summary.level} ({percentage}%)</span>
                </div>
                <p className="text-xs leading-relaxed">{summary.advice}</p>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <button
                  onClick={resetQuiz}
                  className="flex-1 py-3 px-4 rounded-full border border-slate-200 hover:bg-slate-50 text-xs font-semibold text-slate-700 flex items-center justify-center gap-1.5 transition"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Retake Test</span>
                </button>
                <button
                  onClick={() => {
                    onClose();
                    onBookSpecialist();
                  }}
                  className="flex-1 py-3 px-5 rounded-full bg-[#0e382c] hover:bg-[#154a3b] text-white text-xs font-bold flex items-center justify-center gap-2 shadow-md transition"
                >
                  <span>Consult Therapist</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#85e05d]" />
                </button>
              </div>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};
