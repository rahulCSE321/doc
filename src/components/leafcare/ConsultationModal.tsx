import React, { useState } from 'react';
import { X, CheckCircle, Send, Sparkles, User, Mail, MessageSquare } from 'lucide-react';

interface ConsultationModalProps {
  onClose: () => void;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({ onClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) return;
    setIsSuccess(true);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white rounded-[32px] w-full max-w-lg overflow-hidden shadow-2xl border border-slate-200">
        
        {/* Header */}
        <div className="bg-[#0e382c] text-white p-6 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-[#85e05d] text-[#0e382c] flex items-center justify-center font-bold text-sm">
              <Sparkles className="w-4 h-4 text-[#0e382c]" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white">Free Consultation</h3>
              <p className="text-xs text-emerald-200">15-Minute Dedicated Health Discovery</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="p-6">
          {isSuccess ? (
            <div className="text-center py-6 space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle className="w-8 h-8" />
              </div>
              <h4 className="text-2xl font-bold text-[#0e382c]">Consultation Requested!</h4>
              <p className="text-sm text-slate-600">
                Thank you, <strong>{name}</strong>! One of our senior clinical care coordinators will reach out to <strong>{email}</strong> within 2 hours.
              </p>
              <button
                onClick={onClose}
                className="w-full py-3 bg-[#0e382c] text-white rounded-full font-bold text-sm hover:bg-[#154a3b] transition"
              >
                Close
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <p className="text-xs text-slate-600">
                Have questions regarding whether physical therapy, nutrition, or cognitive counseling is right for you? Talk with our care team for free.
              </p>

              <div>
                <label className="block text-xs font-bold text-[#0e382c] uppercase tracking-wider mb-1">
                  Your Full Name
                </label>
                <div className="flex items-center gap-2 p-3 rounded-xl border border-slate-200">
                  <User className="w-4 h-4 text-slate-400" />
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter full name"
                    className="w-full text-sm outline-none text-[#0e382c]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#0e382c] uppercase tracking-wider mb-1">
                  Email Address
                </label>
                <div className="flex items-center gap-2 p-3 rounded-xl border border-slate-200">
                  <Mail className="w-4 h-4 text-slate-400" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@example.com"
                    className="w-full text-sm outline-none text-[#0e382c]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#0e382c] uppercase tracking-wider mb-1">
                  What health or wellness goal can we help with?
                </label>
                <div className="flex items-start gap-2 p-3 rounded-xl border border-slate-200">
                  <MessageSquare className="w-4 h-4 text-slate-400 mt-0.5" />
                  <textarea
                    rows={3}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="e.g. chronic stress, posture rehabilitation, sleep issues..."
                    className="w-full text-sm outline-none text-[#0e382c] resize-none"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 bg-[#0e382c] hover:bg-[#154a3b] text-white rounded-full font-bold text-sm shadow-md transition flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4 text-[#85e05d]" />
                <span>Submit Consultation Request</span>
              </button>
            </form>
          )}
        </div>

      </div>
    </div>
  );
};
