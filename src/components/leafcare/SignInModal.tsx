import React, { useState } from 'react';
import { X, Lock, Mail, User, CheckCircle } from 'lucide-react';

interface SignInModalProps {
  onClose: () => void;
  onSuccess: (user: { name: string; email: string }) => void;
}

export const SignInModal: React.FC<SignInModalProps> = ({ onClose, onSuccess }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('Rahul');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSuccess({ name: name || 'Rahul', email: email || 'user@example.com' });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white rounded-[32px] w-full max-w-md overflow-hidden shadow-2xl border border-slate-200">
        
        {/* Header */}
        <div className="bg-[#0e382c] text-white p-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-[#85e05d] text-[#0e382c] flex items-center justify-center font-bold text-sm">
              <User className="w-4 h-4 text-[#0e382c]" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white">Patient Portal</h3>
              <p className="text-xs text-emerald-200">Sign in to your Leafcare dashboard</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div>
            <label className="block text-xs font-bold text-[#0e382c] uppercase tracking-wider mb-1">
              Your Name
            </label>
            <div className="flex items-center gap-2 p-3 rounded-xl border border-slate-200">
              <User className="w-4 h-4 text-slate-400" />
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Rahul"
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
                placeholder="rahul@example.com"
                className="w-full text-sm outline-none text-[#0e382c]"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-[#0e382c] uppercase tracking-wider mb-1">
              Password
            </label>
            <div className="flex items-center gap-2 p-3 rounded-xl border border-slate-200">
              <Lock className="w-4 h-4 text-slate-400" />
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full text-sm outline-none text-[#0e382c]"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-3.5 bg-[#0e382c] hover:bg-[#154a3b] text-white rounded-full font-bold text-sm shadow-md transition"
          >
            Sign In to Leafcare
          </button>
        </form>

      </div>
    </div>
  );
};
