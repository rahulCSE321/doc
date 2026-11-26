import React, { useState } from 'react';
import { X, Calendar, Clock, User, Phone, CheckCircle, Sparkles } from 'lucide-react';
import { Specialist } from './SpecialistsSection';

interface AppointmentModalProps {
  doctor: Specialist | null;
  onClose: () => void;
}

export const AppointmentModal: React.FC<AppointmentModalProps> = ({
  doctor,
  onClose
}) => {
  const [selectedDate, setSelectedDate] = useState('Tomorrow, 10:00 AM');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState(doctor ? doctor.role : 'Clinical Nutrition & Therapy');
  const [isSuccess, setIsSuccess] = useState(false);

  const dates = [
    'Today, 4:30 PM',
    'Tomorrow, 10:00 AM',
    'Tomorrow, 2:00 PM',
    'Friday, 11:30 AM',
    'Saturday, 1:00 PM'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;
    setIsSuccess(true);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white rounded-[32px] w-full max-w-lg overflow-hidden shadow-2xl border border-slate-200">
        
        {/* Header */}
        <div className="bg-[#0e382c] text-white p-6 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-[#85e05d] text-[#0e382c] flex items-center justify-center font-bold text-sm">
              <Calendar className="w-4 h-4 text-[#0e382c]" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white">Book an Appointment</h3>
              <p className="text-xs text-emerald-200">Leafcare Verified Healthcare Network</p>
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
              <div>
                <h4 className="text-2xl font-bold text-[#0e382c]">Appointment Confirmed!</h4>
                <p className="text-xs text-slate-500 mt-1">Booking reference: #LC-94821</p>
              </div>
              <div className="bg-[#f4f7f5] rounded-2xl p-4 text-left border border-[#cbd8d0] space-y-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-slate-500">Patient:</span>
                  <span className="font-bold text-[#0e382c]">{name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Service/Specialist:</span>
                  <span className="font-bold text-[#0e382c]">{doctor ? doctor.name : service}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Scheduled Time:</span>
                  <span className="font-bold text-emerald-700">{selectedDate}</span>
                </div>
              </div>
              <p className="text-xs text-slate-600">
                A confirmation SMS with video consultation instructions has been sent to <strong>{phone}</strong>.
              </p>
              <button
                onClick={onClose}
                className="w-full py-3 bg-[#0e382c] text-white rounded-full font-bold text-sm hover:bg-[#154a3b] transition"
              >
                Done
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {doctor && (
                <div className="flex items-center gap-3 p-3 bg-[#f4f7f5] rounded-2xl border border-[#cbd8d0]">
                  <img src={doctor.image} alt={doctor.name} className="w-12 h-12 rounded-full object-cover" />
                  <div>
                    <div className="text-sm font-bold text-[#0e382c]">{doctor.name}</div>
                    <div className="text-xs text-emerald-700 font-medium">{doctor.role} • {doctor.experience}</div>
                  </div>
                </div>
              )}

              {!doctor && (
                <div>
                  <label className="block text-xs font-bold text-[#0e382c] uppercase tracking-wider mb-1">
                    Select Service
                  </label>
                  <select
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className="w-full p-3 rounded-xl border border-slate-200 text-sm bg-white text-[#0e382c] outline-none focus:border-[#0e382c]"
                  >
                    <option>General Therapy Consultation</option>
                    <option>Clinical Nutrition Counseling</option>
                    <option>Physical Therapy & Recovery</option>
                    <option>Stress & Burnout Assessment</option>
                    <option>Child & Adolescent Wellness</option>
                  </select>
                </div>
              )}

              <div>
                <label className="block text-xs font-bold text-[#0e382c] uppercase tracking-wider mb-1">
                  Choose Available Slot
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {dates.map((d) => (
                    <button
                      type="button"
                      key={d}
                      onClick={() => setSelectedDate(d)}
                      className={`p-2.5 rounded-xl text-xs font-semibold border transition text-center ${
                        selectedDate === d
                          ? 'bg-[#0e382c] text-white border-[#0e382c]'
                          : 'border-slate-200 text-slate-700 hover:bg-slate-50'
                      }`}
                    >
                      {d}
                    </button>
                  ))}
                </div>
              </div>

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
                    placeholder="e.g. John Miller"
                    className="w-full text-sm outline-none text-[#0e382c]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#0e382c] uppercase tracking-wider mb-1">
                  Phone Number
                </label>
                <div className="flex items-center gap-2 p-3 rounded-xl border border-slate-200">
                  <Phone className="w-4 h-4 text-slate-400" />
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+1 (555) 000-0000"
                    className="w-full text-sm outline-none text-[#0e382c]"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 bg-[#85e05d] hover:bg-[#92ec69] text-[#0e382c] rounded-full font-bold text-sm shadow-md transition flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4" />
                <span>Confirm Appointment</span>
              </button>
            </form>
          )}
        </div>

      </div>
    </div>
  );
};
