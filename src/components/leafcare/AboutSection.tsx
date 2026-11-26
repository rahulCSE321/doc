import React from 'react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="w-full px-4 sm:px-6 lg:px-8 py-12 md:py-16">
      <div className="max-w-[1240px] mx-auto">
        
        {/* Top Tag */}
        <div className="mb-4">
          <span className="text-xs sm:text-sm font-semibold tracking-wide text-[#2e5c4a] uppercase bg-[#e3ece6] px-3.5 py-1 rounded-full border border-[#cbd8d0]">
            About Leaf Care
          </span>
        </div>

        {/* Main Section Headline */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-bold text-[#0e382c] tracking-tight leading-[1.25] max-w-4xl mb-10">
          Leaf Care, Aims To Empower Individuals like you to Take Care of your Health and Make{' '}
          <span className="font-serif italic font-normal text-[#1e5842]">
            Positive Changes in your life.
          </span>
        </h2>

        {/* 2-Column Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-14 items-start">
          
          {/* Left Column: Descriptive Mission */}
          <div className="lg:col-span-6 space-y-4">
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Our purpose is to create a supportive and inclusive platform where you can connect with healthcare professionals and resources. We believe that with the right guidance and tools, everyone can achieve optimal health and well-being.
            </p>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              From personalized therapy matching to routine physical health checkups, we bridge the gap between clinical excellence and daily habit transformation.
            </p>
          </div>

          {/* Right Column: 3 Health Indicator Progress Bars */}
          <div className="lg:col-span-6 space-y-6 bg-white/70 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-[#cbd8d0] shadow-sm">
            
            {/* 1. Allergies: 75% */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-sm font-semibold text-[#0e382c]">
                <span>Allergies</span>
                <span className="text-[#0e382c] font-bold">75%</span>
              </div>
              <div className="h-3 w-full bg-[#e3ece6] rounded-full overflow-hidden p-0.5">
                <div 
                  className="h-full bg-gradient-to-r from-[#0e382c] via-[#2d6a4f] to-[#73cf4c] rounded-full transition-all duration-1000"
                  style={{ width: '75%' }}
                />
              </div>
            </div>

            {/* 2. Nursing: 60% */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-sm font-semibold text-[#0e382c]">
                <span>Nursing</span>
                <span className="text-[#0e382c] font-bold">60%</span>
              </div>
              <div className="h-3 w-full bg-[#e3ece6] rounded-full overflow-hidden p-0.5">
                <div 
                  className="h-full bg-gradient-to-r from-[#0e382c] via-[#2d6a4f] to-[#73cf4c] rounded-full transition-all duration-1000"
                  style={{ width: '60%' }}
                />
              </div>
            </div>

            {/* 3. Physiotherapy: 85% */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-sm font-semibold text-[#0e382c]">
                <span>Physiotherapy</span>
                <span className="text-[#0e382c] font-bold">85%</span>
              </div>
              <div className="h-3 w-full bg-[#e3ece6] rounded-full overflow-hidden p-0.5">
                <div 
                  className="h-full bg-gradient-to-r from-[#0e382c] via-[#2d6a4f] to-[#85e05d] rounded-full transition-all duration-1000"
                  style={{ width: '85%' }}
                />
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
