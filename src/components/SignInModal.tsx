import React, { useState } from 'react';
import { X, Phone, Mail, CheckCircle2, ShieldCheck, ArrowRight, User } from 'lucide-react';

interface SignInModalProps {
  onClose: () => void;
  onLoginSuccess: (user: { name: string; phone: string }) => void;
}

export const SignInModal: React.FC<SignInModalProps> = ({ onClose, onLoginSuccess }) => {
  const [method, setMethod] = useState<'phone' | 'email'>('phone');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState('');

  const handleSendOtp = (e: React.FormEvent) => {
    e.preventDefault();
    if (method === 'phone' && (!phone.trim() || phone.length < 10)) {
      return;
    }
    if (method === 'email' && !email.includes('@')) {
      return;
    }
    setOtpSent(true);
  };

  const handleVerifyOtp = (e: React.FormEvent) => {
    e.preventDefault();
    const mockUser = {
      name: method === 'phone' ? `Patient (${phone.slice(-4)})` : email.split('@')[0],
      phone: phone || '+91 9876543210',
    };
    onLoginSuccess(mockUser);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-md w-full shadow-2xl border border-slate-100 p-6 sm:p-8 relative">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-slate-400 hover:text-slate-700 p-1 rounded-full hover:bg-slate-100 transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-center mb-6">
          <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mx-auto mb-3">
            <User className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold text-slate-900">
            Welcome to DocMind
          </h3>
          <p className="text-xs text-slate-500 mt-1">
            Access your booked sessions, prescriptions & mood journal
          </p>
        </div>

        {!otpSent ? (
          <form onSubmit={handleSendOtp} className="space-y-4">
            <div className="flex border border-slate-200 rounded-xl p-1 bg-slate-50 text-xs font-semibold">
              <button
                type="button"
                onClick={() => setMethod('phone')}
                className={`flex-1 py-1.5 rounded-lg transition-all ${
                  method === 'phone' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-500'
                }`}
              >
                Mobile OTP
              </button>
              <button
                type="button"
                onClick={() => setMethod('email')}
                className={`flex-1 py-1.5 rounded-lg transition-all ${
                  method === 'email' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-500'
                }`}
              >
                Email Address
              </button>
            </div>

            {method === 'phone' ? (
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  10-Digit Mobile Number
                </label>
                <div className="flex items-center">
                  <span className="px-3 py-2.5 bg-slate-100 border border-r-0 border-slate-200 rounded-l-xl text-xs font-semibold text-slate-600">
                    +91
                  </span>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="98765 43210"
                    className="w-full px-3 py-2.5 text-xs border border-slate-200 rounded-r-xl focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                </div>
              </div>
            ) : (
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="rahul@example.com"
                  className="w-full px-3 py-2.5 text-xs border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>
            )}

            <button
              type="submit"
              className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5 cursor-pointer shadow-md shadow-blue-500/25 transition-all"
            >
              <span>Get OTP & Sign In</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <div className="pt-2 text-center text-[11px] text-slate-400 flex items-center justify-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              <span>We never share your contact or data with third parties</span>
            </div>
          </form>
        ) : (
          <form onSubmit={handleVerifyOtp} className="space-y-4">
            <div className="p-3 bg-blue-50 border border-blue-100 rounded-xl text-xs text-blue-800">
              An OTP has been simulated and sent to <strong>{method === 'phone' ? `+91 ${phone}` : email}</strong>.
              <span className="block text-[11px] text-blue-600 mt-0.5">Use any 4 digits (e.g. 1234) to sign in.</span>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Enter 4-Digit OTP
              </label>
              <input
                type="text"
                maxLength={4}
                required
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                placeholder="1 2 3 4"
                className="w-full px-4 py-2.5 text-center tracking-widest text-base font-bold border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-semibold cursor-pointer shadow-md shadow-blue-500/25 transition-all"
            >
              Verify OTP & Continue
            </button>

            <button
              type="button"
              onClick={() => setOtpSent(false)}
              className="w-full text-center text-xs text-slate-500 hover:text-slate-800"
            >
              Edit number or method
            </button>
          </form>
        )}

      </div>
    </div>
  );
};
