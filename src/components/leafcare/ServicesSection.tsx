import React from 'react';
import { ArrowRight, Sparkles, HeartPulse, Apple, Dumbbell, Baby, Salad } from 'lucide-react';

interface ServicesSectionProps {
  onOpenBooking: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onOpenBooking
}) => {
  return (
    <section id="services" className="w-full px-4 sm:px-6 lg:px-8 py-12 md:py-16">
      <div className="max-w-[1240px] mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs sm:text-sm font-semibold tracking-wider text-[#2e5c4a] uppercase bg-[#e3ece6] px-3.5 py-1 rounded-full border border-[#cbd8d0]">
            Medical Events
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0e382c] tracking-tight mt-3 mb-3 leading-snug">
            We Offer Online Counseling <br className="hidden sm:inline" />
            Services For These People
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Our passion is to offer the best care to people in need of wellness services.
          </p>
        </div>

        {/* 6-Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          
          {/* Card 1: Gynecologist */}
          <div className="bg-white rounded-2xl md:rounded-3xl p-6 sm:p-7 border border-[#d6e3da] shadow-sm hover:shadow-md transition flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-full bg-[#eaf4ee] text-[#1e5842] flex items-center justify-center mb-5 group-hover:bg-[#73cf4c] group-hover:text-[#0e382c] transition-colors">
                <HeartPulse className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-[#0e382c] mb-2">
                Gynecologist
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Reproductive health counseling, hormonal balance management, and confidential specialized care for women of all stages.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-100 flex items-center text-xs font-semibold text-emerald-800">
              <span>Online Consultation Available</span>
            </div>
          </div>

          {/* Card 2: Clinical Nutrition */}
          <div className="bg-white rounded-2xl md:rounded-3xl p-6 sm:p-7 border border-[#d6e3da] shadow-sm hover:shadow-md transition flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-full bg-[#eaf4ee] text-[#1e5842] flex items-center justify-center mb-5 group-hover:bg-[#73cf4c] group-hover:text-[#0e382c] transition-colors">
                <Apple className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-[#0e382c] mb-2">
                Clinical Nutrition
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Evidence-based nutritional support crafted to manage chronic illnesses, gut microbiome health, and metabolic wellness.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-100 flex items-center text-xs font-semibold text-emerald-800">
              <span>Custom Diet Plans</span>
            </div>
          </div>

          {/* Card 3: Sport Nutrition */}
          <div className="bg-white rounded-2xl md:rounded-3xl p-6 sm:p-7 border border-[#d6e3da] shadow-sm hover:shadow-md transition flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-full bg-[#eaf4ee] text-[#1e5842] flex items-center justify-center mb-5 group-hover:bg-[#73cf4c] group-hover:text-[#0e382c] transition-colors">
                <Dumbbell className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-[#0e382c] mb-2">
                Sport Nutrition
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                High-performance fueling regimens, rapid post-workout recovery diets, and muscle preservation plans for athletes.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-100 flex items-center text-xs font-semibold text-emerald-800">
              <span>Performance Boost</span>
            </div>
          </div>

          {/* Card 4: Child Nutrition */}
          <div className="bg-white rounded-2xl md:rounded-3xl p-6 sm:p-7 border border-[#d6e3da] shadow-sm hover:shadow-md transition flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-full bg-[#eaf4ee] text-[#1e5842] flex items-center justify-center mb-5 group-hover:bg-[#73cf4c] group-hover:text-[#0e382c] transition-colors">
                <Baby className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-[#0e382c] mb-2">
                Child Nutrition
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Pediatric growth guidance, picky eater solutions, and wholesome macro-nutrient mapping for healthy child development.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-100 flex items-center text-xs font-semibold text-emerald-800">
              <span>Pediatric Certified</span>
            </div>
          </div>

          {/* Card 5: Standout Dark Forest Green Appointment Card */}
          <div className="bg-[#0e382c] text-white rounded-2xl md:rounded-3xl p-7 sm:p-8 shadow-xl flex flex-col justify-between relative overflow-hidden group">
            {/* Soft decorative glow */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#73cf4c]/10 rounded-full blur-2xl pointer-events-none" />
            
            <div className="relative z-10">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-emerald-200 text-xs font-medium mb-4">
                <Sparkles className="w-3.5 h-3.5 text-[#85e05d]" />
                <span>Instant Booking</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">
                Make an Appointment
              </h3>
              <p className="text-emerald-100/85 text-sm leading-relaxed mb-6">
                Book appointment easily and quickly with our verified medical specialists.
              </p>
            </div>

            <div className="relative z-10 pt-2">
              <button
                onClick={onOpenBooking}
                className="w-full bg-[#85e05d] hover:bg-[#94ee6a] text-[#0e382c] py-3.5 px-6 rounded-full font-semibold text-sm flex items-center justify-center gap-2 shadow-md hover:scale-[1.02] active:scale-98 transition-all"
              >
                <span>Try Us Now</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Card 6: Vegetarian Food */}
          <div className="bg-white rounded-2xl md:rounded-3xl p-6 sm:p-7 border border-[#d6e3da] shadow-sm hover:shadow-md transition flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-full bg-[#eaf4ee] text-[#1e5842] flex items-center justify-center mb-5 group-hover:bg-[#73cf4c] group-hover:text-[#0e382c] transition-colors">
                <Salad className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-[#0e382c] mb-2">
                Vegetarian Food
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Plant-focused nutritional balancing, plant protein optimization, and wholesome micronutrient mineral replenishment.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-100 flex items-center text-xs font-semibold text-emerald-800">
              <span>Wholesome Balance</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
