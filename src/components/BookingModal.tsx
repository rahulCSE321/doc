import React, { useState } from 'react';
import { X, Calendar, Clock, Video, MapPin, ShieldCheck, CheckCircle2, MessageSquare, AlertCircle } from 'lucide-react';
import { Provider } from '../types';

interface BookingModalProps {
  provider: Provider | null;
  onClose: () => void;
}

const TIME_SLOTS = ['10:00 AM', '11:30 AM', '2:00 PM', '4:00 PM', '5:30 PM', '7:00 PM'];
const DATES = [
  { label: 'Today', date: 'Oct 8' },
  { label: 'Tomorrow', date: 'Oct 9' },
  { label: 'Friday', date: 'Oct 10' },
  { label: 'Saturday', date: 'Oct 11' },
];

export const BookingModal: React.FC<BookingModalProps> = ({ provider, onClose }) => {
  if (!provider) return null;

  const [consultMode, setConsultMode] = useState<'video' | 'in-person'>('video');
  const [selectedDate, setSelectedDate] = useState(DATES[0].label);
  const [selectedSlot, setSelectedSlot] = useState(TIME_SLOTS[2]);
  const [patientName, setPatientName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [concern, setConcern] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const [formError, setFormError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!patientName.trim()) {
      setFormError('Please enter your full name');
      return;
    }
    if (!phone.trim() || phone.length < 10) {
      setFormError('Please enter a valid 10-digit mobile number for WhatsApp updates');
      return;
    }
    setFormError('');
    setIsSuccess(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-100 p-6 sm:p-8 relative">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-slate-400 hover:text-slate-700 p-1 rounded-full hover:bg-slate-100 transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {isSuccess ? (
          <div className="text-center py-6 space-y-4 animate-in zoom-in-95 duration-200">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <h3 className="text-2xl font-bold text-slate-900">
              Session Booked Successfully!
            </h3>

            <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
              Your appointment with <strong>{provider.name}</strong> is confirmed for{' '}
              <strong>{selectedDate} at {selectedSlot}</strong>.
            </p>

            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 text-left text-xs space-y-2.5 max-w-md mx-auto">
              <div className="flex items-center justify-between">
                <span className="text-slate-500">Consultation Format:</span>
                <span className="font-semibold text-slate-800 capitalize flex items-center gap-1">
                  {consultMode === 'video' ? <Video className="w-3.5 h-3.5 text-blue-600" /> : <MapPin className="w-3.5 h-3.5 text-emerald-600" />}
                  {consultMode === 'video' ? 'Google Meet Video Call' : `In-Person Clinic (${provider.cities[0]})`}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-500">Duration & Fee:</span>
                <span className="font-semibold text-slate-800">{provider.sessionDurationMins} Mins · ₹{provider.sessionFee.toLocaleString()}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-500">Patient:</span>
                <span className="font-semibold text-slate-800">{patientName} ({phone})</span>
              </div>
              <div className="pt-2 border-t border-slate-200 text-slate-600 flex items-start gap-1.5">
                <MessageSquare className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                <span>Your dedicated care manager will send your Google Meet link and appointment confirmation directly on WhatsApp.</span>
              </div>
            </div>

            <div className="pt-4">
              <button
                type="button"
                onClick={onClose}
                className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-sm font-semibold cursor-pointer"
              >
                Back to DocMind Home
              </button>
            </div>
          </div>
        ) : (
          <div>
            {/* Modal Header */}
            <div className="flex items-center gap-4 pb-5 border-b border-slate-100">
              <img
                src={provider.image}
                alt={provider.name}
                className="w-14 h-14 rounded-2xl object-cover border border-slate-200"
              />
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-blue-600">
                  Book Consultation
                </span>
                <h3 className="text-lg font-bold text-slate-900">{provider.name}</h3>
                <div className="text-xs text-slate-500">
                  {provider.title} · {provider.experienceYears}y exp · ₹{provider.sessionFee.toLocaleString()}
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="mt-5 space-y-4">
              
              {/* Mode Selector: Google Meet vs In-Person */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  Choose Mode:
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setConsultMode('video')}
                    className={`py-2 px-3 rounded-xl text-xs font-semibold border flex items-center justify-center gap-1.5 cursor-pointer transition-all ${
                      consultMode === 'video'
                        ? 'border-blue-600 bg-blue-50 text-blue-700'
                        : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    <Video className="w-3.5 h-3.5 text-blue-600" />
                    <span>Google Meet (Online)</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setConsultMode('in-person')}
                    className={`py-2 px-3 rounded-xl text-xs font-semibold border flex items-center justify-center gap-1.5 cursor-pointer transition-all ${
                      consultMode === 'in-person'
                        ? 'border-blue-600 bg-blue-50 text-blue-700'
                        : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    <MapPin className="w-3.5 h-3.5 text-emerald-600" />
                    <span>In-Person ({provider.cities[0]})</span>
                  </button>
                </div>
              </div>

              {/* Date Selector */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5 flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-slate-500" />
                  <span>Select Date:</span>
                </label>
                <div className="grid grid-cols-4 gap-1.5">
                  {DATES.map((d) => (
                    <button
                      key={d.label}
                      type="button"
                      onClick={() => setSelectedDate(d.label)}
                      className={`p-2 rounded-xl text-center border cursor-pointer transition-all ${
                        selectedDate === d.label
                          ? 'border-blue-600 bg-blue-50 text-blue-700 font-bold'
                          : 'border-slate-200 text-slate-600 hover:bg-slate-50 text-xs'
                      }`}
                    >
                      <div className="text-[11px] font-bold">{d.label}</div>
                      <div className="text-[10px] text-slate-500">{d.date}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Time Slots */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5 flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-slate-500" />
                  <span>Available Time Slots:</span>
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {TIME_SLOTS.map((slot) => (
                    <button
                      key={slot}
                      type="button"
                      onClick={() => setSelectedSlot(slot)}
                      className={`py-2 text-xs rounded-lg border text-center transition-all cursor-pointer ${
                        selectedSlot === slot
                          ? 'bg-slate-900 text-white font-semibold border-slate-900'
                          : 'border-slate-200 text-slate-700 hover:bg-slate-50'
                      }`}
                    >
                      {slot}
                    </button>
                  ))}
                </div>
              </div>

              {/* Patient Details */}
              <div className="pt-2 border-t border-slate-100 space-y-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={patientName}
                      onChange={(e) => setPatientName(e.target.value)}
                      placeholder="e.g. Rahul Sharma"
                      className="w-full px-3 py-2 text-xs border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1">
                      WhatsApp Phone *
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="e.g. 9876543210"
                      className="w-full px-3 py-2 text-xs border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    Email Address (Optional)
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@example.com"
                    className="w-full px-3 py-2 text-xs border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    What would you like to discuss in this session? (Optional)
                  </label>
                  <textarea
                    rows={2}
                    value={concern}
                    onChange={(e) => setConcern(e.target.value)}
                    placeholder="e.g. Feeling overwhelmed with work deadlines and frequent panic attacks..."
                    className="w-full px-3 py-2 text-xs border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                </div>
              </div>

              {formError && (
                <div className="p-2.5 bg-rose-50 border border-rose-200 rounded-lg text-xs text-rose-700 flex items-center gap-1.5">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{formError}</span>
                </div>
              )}

              {/* Security trust badge */}
              <div className="flex items-center gap-1.5 text-[11px] text-slate-500 pt-1">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>100% Confidential. Free cancellation up to 6 hours before session.</span>
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-xl shadow-md shadow-blue-500/25 transition-all cursor-pointer"
                >
                  Confirm & Reserve Appointment
                </button>
              </div>

            </form>
          </div>
        )}

      </div>
    </div>
  );
};
