import React, { useState } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight, Award } from 'lucide-react';

export interface Specialist {
  id: string;
  name: string;
  role: string;
  experience: string;
  image: string;
  rating: string;
  specialty: string;
}

interface SpecialistsSectionProps {
  onSelectDoctor: (doctor: Specialist) => void;
}

export const SpecialistsSection: React.FC<SpecialistsSectionProps> = ({
  onSelectDoctor
}) => {
  const [currentPage, setCurrentPage] = useState(1);

  const specialistsData: Record<number, Specialist[]> = {
    1: [
      {
        id: 'ronald',
        name: 'Dr. Ronald Richards',
        role: 'Physiotherapist',
        experience: 'Experience: 10+ Years',
        image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=700&q=80',
        rating: '4.9',
        specialty: 'Physical Rehabilitation & Spine Alignment',
      },
      {
        id: 'jerome',
        name: 'Dr. Jerome Bell',
        role: 'Senior Therapist',
        experience: 'Experience: 12+ Years',
        image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=700&q=80',
        rating: '5.0',
        specialty: 'Cognitive Behavioral Therapy (CBT) & Anxiety',
      },
      {
        id: 'courtney',
        name: 'Dr. Courtney Henry',
        role: 'Sport Specialist',
        experience: 'Experience: 8+ Years',
        image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&w=700&q=80',
        rating: '4.9',
        specialty: 'Athletic Recovery & Musculoskeletal Health',
      },
    ],
    2: [
      {
        id: 'esther',
        name: 'Dr. Esther Howard',
        role: 'Clinical Psychologist',
        experience: 'Experience: 11+ Years',
        image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=700&q=80',
        rating: '4.9',
        specialty: 'Trauma & Mindfulness-Based Stress Therapy',
      },
      {
        id: 'cameron',
        name: 'Dr. Cameron Williamson',
        role: 'Neurologist Consultant',
        experience: 'Experience: 15+ Years',
        image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=700&q=80',
        rating: '5.0',
        specialty: 'Neuro-Cognitive Wellness & Sleep Health',
      },
      {
        id: 'leslie',
        name: 'Dr. Leslie Alexander',
        role: 'Holistic Psychiatrist',
        experience: 'Experience: 9+ Years',
        image: 'https://images.unsplash.com/photo-1594824813576-928ef23d6a03?auto=format&fit=crop&w=700&q=80',
        rating: '4.8',
        specialty: 'Mood Regulation & Stress De-escalation',
      },
    ],
    3: [
      {
        id: 'guy',
        name: 'Dr. Guy Hawkins',
        role: 'Somatic Specialist',
        experience: 'Experience: 14+ Years',
        image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=700&q=80',
        rating: '4.9',
        specialty: 'Vagus Nerve Regulation & Tension Release',
      },
      {
        id: 'jenny',
        name: 'Dr. Jenny Wilson',
        role: 'Family Counselor',
        experience: 'Experience: 10+ Years',
        image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=700&q=80',
        rating: '5.0',
        specialty: 'Interpersonal Relationships & Youth Therapy',
      },
      {
        id: 'robert',
        name: 'Dr. Robert Fox',
        role: 'Integrative Nutritionist',
        experience: 'Experience: 7+ Years',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=700&q=80',
        rating: '4.8',
        specialty: 'Gut-Brain Axis & Metabolic Health',
      },
    ],
  };

  const currentSpecialists = specialistsData[currentPage] || specialistsData[1];

  return (
    <section id="specialists" className="w-full px-4 sm:px-6 lg:px-8 py-8 md:py-12">
      <div className="max-w-[1240px] mx-auto bg-[#e5eee8] rounded-[32px] md:rounded-[40px] p-6 sm:p-10 md:p-12 border border-[#cbd8d0] shadow-sm">
        
        {/* Title */}
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0e382c] tracking-tight">
            Get Treatment from Our Specialist
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2 max-w-md mx-auto">
            Connect directly with verified, empathetic medical practitioners and certified specialists.
          </p>
        </div>

        {/* 3 Doctor Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {currentSpecialists.map((doc) => (
            <div
              key={doc.id}
              onClick={() => onSelectDoctor(doc)}
              className="group bg-white rounded-2xl md:rounded-3xl p-4 border border-[#d6e3da] shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col justify-between hover:-translate-y-1.5"
            >
              {/* Doctor Photo */}
              <div className="w-full aspect-[4/4.2] rounded-xl md:rounded-2xl overflow-hidden bg-slate-100 relative mb-4">
                <img
                  src={doc.image}
                  alt={doc.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-full text-[11px] font-semibold text-[#0e382c] flex items-center gap-1 shadow-sm">
                  <Award className="w-3 h-3 text-[#73cf4c]" />
                  <span>★ {doc.rating}</span>
                </div>
              </div>

              {/* Information & Arrow */}
              <div className="px-1 space-y-2">
                <div>
                  <h3 className="text-lg font-bold text-[#0e382c] group-hover:text-emerald-700 transition">
                    {doc.name}
                  </h3>
                  <p className="text-xs sm:text-sm font-medium text-emerald-800">
                    {doc.role}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-2 border-t border-slate-100">
                  <span className="text-xs text-slate-500 font-medium">
                    {doc.experience}
                  </span>

                  <div className="w-9 h-9 rounded-full bg-[#0e382c] text-white flex items-center justify-center group-hover:bg-[#73cf4c] group-hover:text-[#0e382c] transition-colors shadow-sm">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Controls */}
        <div className="flex items-center justify-center gap-2">
          <button
            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
            disabled={currentPage === 1}
            aria-label="Previous Page"
            className="w-8 h-8 rounded-full border border-[#cbd8d0] flex items-center justify-center text-[#0e382c] disabled:opacity-30 disabled:cursor-not-allowed hover:bg-white transition"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          {[1, 2, 3].map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`w-8 h-8 rounded-full text-xs font-bold transition ${
                currentPage === page
                  ? 'bg-[#0e382c] text-white shadow-sm'
                  : 'text-[#0e382c] hover:bg-white/60'
              }`}
            >
              {page}
            </button>
          ))}

          <button
            onClick={() => setCurrentPage((p) => Math.min(3, p + 1))}
            disabled={currentPage === 3}
            aria-label="Next Page"
            className="w-8 h-8 rounded-full border border-[#cbd8d0] flex items-center justify-center text-[#0e382c] disabled:opacity-30 disabled:cursor-not-allowed hover:bg-white transition"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
