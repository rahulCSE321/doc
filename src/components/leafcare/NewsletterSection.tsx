import React, { useState } from 'react';
import { Mail, CheckCircle, Send } from 'lucide-react';

export const NewsletterSection: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;
    setIsSubscribed(true);
  };

  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 py-8 md:py-12">
      <div className="max-w-[1240px] mx-auto bg-white rounded-[32px] md:rounded-[40px] p-8 sm:p-12 md:p-14 border border-[#cbd8d0] shadow-sm relative overflow-hidden">
        
        {/* Soft Botanical Watercolor Decorative SVGs on corners */}
        <div className="absolute top-0 right-0 w-44 h-44 opacity-25 pointer-events-none">
          <svg viewBox="0 0 200 200" fill="none" className="w-full h-full text-emerald-600">
            <path d="M150 0 C130 40, 160 80, 200 90 L200 0 Z" fill="currentColor" />
            <circle cx="170" cy="40" r="25" fill="#f59e0b" opacity="0.3" />
            <circle cx="140" cy="30" r="15" fill="#10b981" opacity="0.4" />
          </svg>
        </div>
        <div className="absolute bottom-0 left-0 w-40 h-40 opacity-20 pointer-events-none rotate-180">
          <svg viewBox="0 0 200 200" fill="none" className="w-full h-full text-emerald-700">
            <path d="M150 0 C130 40, 160 80, 200 90 L200 0 Z" fill="currentColor" />
            <circle cx="160" cy="35" r="20" fill="#f59e0b" opacity="0.3" />
          </svg>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-xl mx-auto text-center space-y-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0e382c] tracking-tight">
            Stay In Touch
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm md:text-base leading-relaxed">
            Subscribe to our newsletter and get exclusive wellness tips, discounts on therapy sessions, and health updates directly to your inbox.
          </p>

          {isSubscribed ? (
            <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-full py-3.5 px-6 flex items-center justify-center gap-2 max-w-md mx-auto shadow-sm animate-fade-in">
              <CheckCircle className="w-5 h-5 text-emerald-600" />
              <span className="text-sm font-semibold">Thank you! You're subscribed to Leafcare updates.</span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="pt-2 max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row items-center gap-2 p-1.5 rounded-2xl sm:rounded-full bg-[#f4f7f5] border border-[#cbd8d0] shadow-inner">
                <div className="flex items-center gap-2 px-3.5 py-1.5 w-full text-slate-700">
                  <Mail className="w-4 h-4 text-slate-400 shrink-0" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    required
                    className="w-full bg-transparent border-none outline-none text-xs sm:text-sm text-[#0e382c] placeholder:text-slate-400"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full sm:w-auto bg-[#0e382c] hover:bg-[#154a3b] text-white px-6 py-2.5 rounded-xl sm:rounded-full text-xs sm:text-sm font-semibold shrink-0 transition flex items-center justify-center gap-1.5 shadow-sm"
                >
                  <span>Subscribe</span>
                  <Send className="w-3.5 h-3.5 text-[#85e05d]" />
                </button>
              </div>
            </form>
          )}

          <div className="text-[11px] text-slate-400 pt-1">
            We value your privacy. Unsubscribe anytime with 1-click.
          </div>
        </div>

      </div>
    </section>
  );
};
