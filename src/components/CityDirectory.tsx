import React from 'react';
import { MapPin, PhoneCall, AlertTriangle, ArrowUpRight } from 'lucide-react';
import { CITY_DATA } from '../data/mockData';

interface CityDirectoryProps {
  onSelectCityFilter: (cityName: string) => void;
}

export const CityDirectory: React.FC<CityDirectoryProps> = ({
  onSelectCityFilter,
}) => {
  return (
    <section id="cities" className="w-full px-4 sm:px-6 lg:px-8 py-10 md:py-16">
      <div className="max-w-[1240px] mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 md:mb-12">
          <span className="text-xs sm:text-sm font-semibold tracking-wider text-[#2e5c4a] uppercase bg-[#e3ece6] px-3.5 py-1 rounded-full border border-[#cbd8d0]">
            25+ Cities Across India
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0e382c] tracking-tight mt-3 mb-2">
            Therapists and Psychiatrists by the city
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm md:text-base">
            Find vetted mental healthcare professionals offering both in-person clinic visits and private Google Meet sessions in your city.
          </p>
        </div>

        {/* 25 Cities Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 mb-10">
          {CITY_DATA.map((city) => (
            <button
              key={city.name}
              type="button"
              onClick={() => onSelectCityFilter(city.name)}
              className="bg-white hover:bg-[#eaf4ee] border border-[#cbd8d0] hover:border-emerald-400 p-3.5 rounded-2xl text-left transition-all group flex items-center justify-between cursor-pointer shadow-2xs hover:-translate-y-0.5"
            >
              <div>
                <div className="text-xs sm:text-sm font-bold text-[#0e382c] group-hover:text-emerald-800 transition">
                  {city.name}
                </div>
                <div className="text-[11px] text-slate-500 font-medium">
                  ({city.providerCount} pros)
                </div>
              </div>
              <ArrowUpRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-emerald-600 transition" />
            </button>
          ))}
        </div>

        {/* Emergency & Crisis Support Banner (Requested Content) */}
        <div className="bg-[#0e382c] text-white rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 border border-emerald-800">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-rose-500/20 text-rose-300 flex items-center justify-center shrink-0">
              <PhoneCall className="w-5 h-5 text-rose-300" />
            </div>
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <h4 className="text-sm font-bold text-white">Emergency & Crisis Support</h4>
                <span className="text-[10px] font-bold bg-[#85e05d] text-[#0e382c] px-2 py-0.5 rounded-full uppercase">
                  Free & Confidential 24/7
                </span>
              </div>
              <p className="text-xs sm:text-sm text-emerald-100/80 leading-relaxed max-w-2xl">
                If you or someone you know is undergoing an acute psychological crisis, please contact India's National Tele-MANAS 24/7 Helpline at <strong>14416</strong> or call <strong>112</strong> immediately.
              </p>
            </div>
          </div>

          <a
            href="tel:14416"
            className="bg-[#85e05d] hover:bg-[#92ec69] text-[#0e382c] px-6 py-3 rounded-full text-xs font-bold shrink-0 transition flex items-center gap-2 shadow-md"
          >
            <PhoneCall className="w-3.5 h-3.5" />
            <span>Call 14416 (Tele-MANAS)</span>
          </a>
        </div>

      </div>
    </section>
  );
};
