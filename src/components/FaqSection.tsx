import React, { useState } from 'react';
import { ChevronDown, MessageCircle, HelpCircle } from 'lucide-react';
import { FAQ_DATA } from '../data/mockData';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First item open by default

  const toggleFaq = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section id="faqs" className="w-full px-4 sm:px-6 lg:px-8 py-10 md:py-16">
      <div className="max-w-[1240px] mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 md:mb-12">
          <span className="text-xs sm:text-sm font-semibold tracking-wider text-[#2e5c4a] uppercase bg-[#e3ece6] px-3.5 py-1 rounded-full border border-[#cbd8d0]">
            Got Questions?
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0e382c] tracking-tight mt-3 mb-2">
            FAQs
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm md:text-base">
            Find immediate answers regarding sessions, confidentiality, pricing, and care managers.
          </p>
        </div>

        {/* 10 FAQ Accordion Items */}
        <div className="max-w-3xl mx-auto space-y-3 mb-10">
          {FAQ_DATA.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.id}
                className="bg-white rounded-2xl border border-[#cbd8d0] overflow-hidden transition-all shadow-xs"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className="w-full text-left p-5 flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-[#0e382c] hover:bg-[#f4f7f5] transition cursor-pointer"
                >
                  <span>{faq.question}</span>
                  <div className={`w-8 h-8 rounded-full bg-[#f4f7f5] flex items-center justify-center shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180 bg-[#0e382c] text-white' : 'text-slate-500'}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom WhatsApp Help Banner */}
        <div className="max-w-2xl mx-auto bg-white rounded-2xl md:rounded-3xl p-6 sm:p-7 border border-[#cbd8d0] shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="text-sm font-bold text-[#0e382c]">
              Have a question not listed here?
            </h4>
            <p className="text-xs text-slate-500 mt-0.5">
              Our care management team is available on WhatsApp daily.
            </p>
          </div>

          <a
            href="https://wa.me/919999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#25D366] hover:bg-[#20ba59] text-white px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold flex items-center gap-2 shadow-sm transition shrink-0"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>Chat with Care Manager</span>
          </a>
        </div>

      </div>
    </section>
  );
};
