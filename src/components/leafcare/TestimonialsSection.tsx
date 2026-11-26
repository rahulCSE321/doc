import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';

interface Review {
  id: number;
  name: string;
  role: string;
  quote: string;
  avatar: string;
  rating: number;
}

export const TestimonialsSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(2); // Center card active

  const reviews: Review[] = [
    {
      id: 1,
      name: 'Eleanor Pena',
      role: 'Software Architect',
      quote: 'The therapy sessions gave me mental clarity and healthy boundaries when work burnout peaked. Highly recommend the specialists!',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80',
      rating: 5,
    },
    {
      id: 2,
      name: 'Wade Warren',
      role: 'Operations Director',
      quote: 'Finding Dr. Ronald for physical therapy changed everything. My chronic back discomfort reduced significantly in only 3 weeks.',
      avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=80',
      rating: 5,
    },
    {
      id: 3,
      name: 'Kathryn Murphy',
      role: 'Creative Director',
      quote: 'Leafcare transformed how I approach my mental and physical well-being. Finding the right specialist was effortless, and the daily exercises improved my sleep within weeks.',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
      rating: 5,
    },
    {
      id: 4,
      name: 'Jacob Jones',
      role: 'Product Lead',
      quote: 'The holistic focus between mental check-ins and nutrition advice is unmatched. The platform feels calm, respectful, and clinically reliable.',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
      rating: 5,
    },
    {
      id: 5,
      name: 'Bessie Cooper',
      role: 'Educator & Writer',
      quote: 'Having discrete confidential sessions on my schedule made seeking guidance completely stress-free. Leafcare has truly been a blessing.',
      avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80',
      rating: 5,
    },
  ];

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 py-12 md:py-16">
      <div className="max-w-[1240px] mx-auto">
        
        {/* Title & Badge */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs sm:text-sm font-semibold tracking-wider text-[#2e5c4a] uppercase bg-[#e3ece6] px-3.5 py-1 rounded-full border border-[#cbd8d0]">
            Customer Stories
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0e382c] tracking-tight mt-3 mb-3 leading-snug">
            Our Most Important Measure of Success <br className="hidden sm:inline" />
            is a <span className="font-serif italic font-normal text-[#1d5740]">Satisfied Happy Users</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Real stories of healing, recovery, and life-changing health breakthroughs.
          </p>
        </div>

        {/* Testimonials Deck / Row */}
        <div className="relative py-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            
            {/* Left Card (Previous) */}
            {(() => {
              const prevIdx = (activeIndex - 1 + reviews.length) % reviews.length;
              const review = reviews[prevIdx];
              return (
                <div 
                  onClick={() => setActiveIndex(prevIdx)}
                  className="hidden md:block bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-[#cbd8d0] shadow-sm hover:shadow-md transition cursor-pointer scale-95 opacity-80 hover:opacity-100"
                >
                  <Quote className="w-6 h-6 text-[#73cf4c] mb-3 opacity-60" />
                  <p className="text-slate-600 text-xs sm:text-sm line-clamp-4 leading-relaxed mb-4">
                    "{review.quote}"
                  </p>
                  <div className="flex items-center gap-3 pt-2 border-t border-slate-100">
                    <img 
                      src={review.avatar} 
                      alt={review.name} 
                      className="w-9 h-9 rounded-full object-cover"
                    />
                    <div>
                      <div className="text-xs font-bold text-[#0e382c]">{review.name}</div>
                      <div className="text-[11px] text-slate-500">{review.role}</div>
                    </div>
                  </div>
                </div>
              );
            })()}

            {/* Center Highlighted Card (Deep Emerald Forest Card) */}
            {(() => {
              const review = reviews[activeIndex];
              return (
                <div className="bg-[#0e382c] text-white rounded-2xl md:rounded-3xl p-7 md:p-8 shadow-2xl relative border border-emerald-800/40 transform scale-100 md:scale-105 z-10">
                  <div className="flex justify-between items-start mb-4">
                    <Quote className="w-8 h-8 text-[#85e05d]" />
                    <div className="flex items-center gap-1 text-amber-300">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-amber-300" />
                      ))}
                    </div>
                  </div>

                  <p className="text-emerald-100/95 text-sm sm:text-base leading-relaxed mb-6 font-normal">
                    "{review.quote}"
                  </p>

                  <div className="flex items-center gap-3.5 pt-4 border-t border-white/15">
                    <img 
                      src={review.avatar} 
                      alt={review.name} 
                      className="w-12 h-12 rounded-full object-cover ring-2 ring-[#85e05d]"
                    />
                    <div>
                      <div className="text-sm font-bold text-white">{review.name}</div>
                      <div className="text-xs text-[#85e05d]">{review.role}</div>
                    </div>
                  </div>
                </div>
              );
            })()}

            {/* Right Card (Next) */}
            {(() => {
              const nextIdx = (activeIndex + 1) % reviews.length;
              const review = reviews[nextIdx];
              return (
                <div 
                  onClick={() => setActiveIndex(nextIdx)}
                  className="hidden md:block bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-[#cbd8d0] shadow-sm hover:shadow-md transition cursor-pointer scale-95 opacity-80 hover:opacity-100"
                >
                  <Quote className="w-6 h-6 text-[#73cf4c] mb-3 opacity-60" />
                  <p className="text-slate-600 text-xs sm:text-sm line-clamp-4 leading-relaxed mb-4">
                    "{review.quote}"
                  </p>
                  <div className="flex items-center gap-3 pt-2 border-t border-slate-100">
                    <img 
                      src={review.avatar} 
                      alt={review.name} 
                      className="w-9 h-9 rounded-full object-cover"
                    />
                    <div>
                      <div className="text-xs font-bold text-[#0e382c]">{review.name}</div>
                      <div className="text-[11px] text-slate-500">{review.role}</div>
                    </div>
                  </div>
                </div>
              );
            })()}

          </div>
        </div>

        {/* Carousel Indicator & Controls */}
        <div className="flex items-center justify-center gap-3 mt-8">
          <button
            onClick={handlePrev}
            aria-label="Previous Review"
            className="w-9 h-9 rounded-full border border-[#cbd8d0] flex items-center justify-center text-[#0e382c] hover:bg-white transition"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          <span className="text-xs font-semibold text-[#0e382c] tracking-wider px-2">
            0{activeIndex + 1} / 0{reviews.length}
          </span>

          <button
            onClick={handleNext}
            aria-label="Next Review"
            className="w-9 h-9 rounded-full border border-[#cbd8d0] flex items-center justify-center text-[#0e382c] hover:bg-white transition"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
