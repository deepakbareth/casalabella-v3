import React, { useState } from 'react';
import { Mail, Phone, Send, Check, Shield } from 'lucide-react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export default function BookingInquiry() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    checkIn: null,
    checkOut: null,
    guests: '1',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleDateChange = (name, date) => {
    setFormData((prev) => ({ ...prev, [name]: date }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API request
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  const inputClasses = "w-full bg-[#F7F5F0]/60 focus:bg-white border border-[#E3E0D8] focus:border-[#E57A55] rounded-full px-6 py-3.5 text-sm text-[#2D332F] focus:outline-none transition-all placeholder-[#2D332F]/40 font-sans font-medium";
  const selectClasses = "w-full bg-[#F7F5F0]/60 focus:bg-white border border-[#E3E0D8] focus:border-[#E57A55] rounded-full px-6 py-3.5 text-sm text-[#2D332F] focus:outline-none transition-all font-sans font-medium appearance-none cursor-pointer";
  const textareaClasses = "w-full bg-[#F7F5F0]/60 focus:bg-white border border-[#E3E0D8] focus:border-[#E57A55] rounded-2xl px-6 py-4 text-sm text-[#2D332F] focus:outline-none transition-all placeholder-[#2D332F]/40 font-sans font-medium resize-none";

  return (
    <section id="inquire" className="py-14 lg:py-20 bg-[#F7F5F0] text-[#2D332F] border-t border-[#E3E0D8] relative overflow-hidden">
      {/* Decorative background grid line */}
      <div className="absolute top-0 left-0 w-full h-full grid grid-cols-4 pointer-events-none opacity-[0.02] z-0">
        <div className="border-r border-[#2D332F] h-full" />
        <div className="border-r border-[#2D332F] h-full" />
        <div className="border-r border-[#2D332F] h-full" />
        <div className="h-full" />
      </div>

      {/* Decorative gradient blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#24B1B1]/5 rounded-full filter blur-[120px] pointer-events-none z-0"></div>

      <div className="max-w-7xl mx-auto px-6 sm:px-12 relative z-10">

        {/* Title */}
        <div className="mb-20 text-center">
          <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-[#E3E0D8] rounded-full w-max mb-8 transition-transform hover:-translate-y-1 duration-300 cursor-default">
            <span className="w-2.5 h-2.5 rounded-full bg-[#E57A55] animate-pulse"></span>
            <span className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#5A605C]">
              Reservation Inquiry
            </span>
          </div>
          <h2 className="font-sans text-5xl sm:text-6xl lg:text-[80px] font-black uppercase tracking-tighter leading-[0.85] mb-8">
            Reserve your <span className="text-[#E57A55]">experience</span>
          </h2>
        </div>

        {/* Layout Grid */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 max-w-6xl mx-auto items-stretch">

          {/* Left Column: Direct Contact Details (4 columns) */}
          <div className="lg:col-span-4 flex flex-col justify-between p-8 sm:p-10 border border-[#E3E0D8] bg-white rounded-2xl shadow-sm hover:border-[#E57A55] transition-colors duration-500">
            <div>
              <span className="text-[9px] uppercase tracking-[0.3em] text-[#E57A55] font-extrabold block mb-4">Direct Channel</span>
              <h3 className="font-sans text-2xl font-bold uppercase tracking-tight text-[#2D332F] mb-6">
                Guest Concierge
              </h3>
              <p className="font-sans text-sm sm:text-base text-[#5A605C] leading-relaxed mb-10">
                To secure your dates immediately or discuss bespoke options, contact owner Rick Cuny directly via phone or email.
              </p>

              <div className="space-y-4">
                <a
                  href="tel:+19703908874"
                  className="flex items-center gap-4 group p-5 bg-[#E3E0D8]/20 hover:bg-[#E3E0D8]/45 rounded-full border border-[#E3E0D8]/40 hover:border-[#E57A55] transition-all backdrop-blur-md"
                >
                  <div className="w-12 h-12 rounded-full bg-white border border-[#E3E0D8] flex items-center justify-center text-[#E57A55] group-hover:bg-[#E57A55] group-hover:text-white transition-colors duration-300 shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[9px] text-[#8A908C] uppercase tracking-widest block font-extrabold">Call Owner</span>
                    <span className="text-sm font-sans text-[#2D332F] font-bold group-hover:text-[#E57A55] transition-colors">1-970-390-8874</span>
                  </div>
                </a>

                <a
                  href="mailto:vailcuny@gmail.com?subject=Interested in Booking Casa La Bella"
                  className="flex items-center gap-4 group p-5 bg-[#E3E0D8]/20 hover:bg-[#E3E0D8]/45 rounded-full border border-[#E3E0D8]/40 hover:border-[#E57A55] transition-all backdrop-blur-md"
                >
                  <div className="w-12 h-12 rounded-full bg-white border border-[#E3E0D8] flex items-center justify-center text-[#E57A55] group-hover:bg-[#E57A55] group-hover:text-white transition-colors duration-300 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[9px] text-[#8A908C] uppercase tracking-widest block font-extrabold">Email Direct</span>
                    <span className="text-sm font-sans text-[#2D332F] font-bold group-hover:text-[#E57A55] transition-colors truncate block font-medium">vailcuny@gmail.com</span>
                  </div>
                </a>
              </div>
            </div>

            {/* Direct Booking details */}
            <div className="mt-12 pt-8 border-t border-[#E3E0D8]/60 flex items-start gap-3">
              <Shield className="w-5 h-5 text-[#E57A55] shrink-0 mt-0.5" />
              <div>
                <span className="text-[9px] uppercase tracking-widest text-[#E57A55] font-extrabold block mb-1">Secure & Direct</span>
                <p className="text-xs font-sans text-[#5A605C] leading-relaxed">
                  Direct bookings bypass platform fees. Cancellation details, rates, and occupancy are fully protected.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Stripe-style Form Panel (8 columns) */}
          <div className="lg:col-span-8 bg-white border border-[#E3E0D8] shadow-sm rounded-2xl p-8 lg:p-12 flex flex-col justify-center min-h-[480px] hover:border-[#E57A55] transition-colors duration-500">
            {submitted ? (
              <div className="text-center py-10 flex flex-col items-center justify-center animate-scale-up">
                <div className="w-16 h-16 bg-[#007979]/10 border border-[#007979]/30 text-[#007979] rounded-full flex items-center justify-center mb-6 shadow-sm">
                  <Check className="w-7 h-7" />
                </div>
                <h3 className="font-sans text-2xl sm:text-3xl text-[#2D332F] font-bold uppercase tracking-tight mb-4">
                  Inquiry Received
                </h3>
                <p className="font-sans text-sm sm:text-base text-[#5A605C] leading-relaxed mb-8">
                  Thank you, <span className="text-[#2D332F] font-bold">{formData.name}</span>. Owner Rick Cuny will review your travel dates (<span className="text-[#2D332F] font-bold">{formData.checkIn?.toLocaleDateString()}</span> to <span className="text-[#2D332F] font-bold">{formData.checkOut?.toLocaleDateString()}</span>) and respond via <span className="text-[#2D332F] font-bold">{formData.email}</span> shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-8 py-3.5 border border-[#007979] hover:bg-[#007979] text-[#007979] hover:text-white text-xs font-extrabold uppercase tracking-widest rounded-full transition-all duration-300 cursor-pointer"
                >
                  New Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  {/* Name */}
                  <div>
                    <label className="block text-[10px] uppercase tracking-[0.25em] text-[#8A908C] font-extrabold mb-2.5" htmlFor="name">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Stephanie Vance"
                      className={inputClasses}
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-[10px] uppercase tracking-[0.25em] text-[#8A908C] font-extrabold mb-2.5" htmlFor="email">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. stephanie@example.com"
                      className={inputClasses}
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-3 gap-6">
                  {/* Check-in */}
                  <div className="flex flex-col datepicker-rounded-full">
                    <label className="block text-[10px] uppercase tracking-[0.25em] text-[#8A908C] font-extrabold mb-2.5" htmlFor="checkIn">
                      Check-In Date
                    </label>
                    <DatePicker
                      id="checkIn"
                      selected={formData.checkIn}
                      onChange={(date) => handleDateChange('checkIn', date)}
                      dateFormat="MM / dd / yyyy"
                      placeholderText="Select Date"
                      required
                      className={inputClasses}
                    />
                  </div>

                  {/* Check-out */}
                  <div className="flex flex-col datepicker-rounded-full">
                    <label className="block text-[10px] uppercase tracking-[0.25em] text-[#8A908C] font-extrabold mb-2.5" htmlFor="checkOut">
                      Check-Out Date
                    </label>
                    <DatePicker
                      id="checkOut"
                      selected={formData.checkOut}
                      onChange={(date) => handleDateChange('checkOut', date)}
                      dateFormat="MM / dd / yyyy"
                      placeholderText="Select Date"
                      minDate={formData.checkIn}
                      required
                      className={inputClasses}
                    />
                  </div>

                  {/* Guests */}
                  <div className="relative">
                    <label className="block text-[10px] uppercase tracking-[0.25em] text-[#8A908C] font-extrabold mb-2.5" htmlFor="guests">
                      Total Guests
                    </label>
                    <select
                      id="guests"
                      name="guests"
                      value={formData.guests}
                      onChange={handleChange}
                      className={selectClasses}
                    >
                      {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                        <option key={num} value={num}>
                          {num} {num === 1 ? 'Guest' : 'Guests'}
                        </option>
                      ))}
                    </select>
                    {/* Select Arrow Indicator */}
                    <div className="absolute right-6 top-[48px] pointer-events-none text-[#5A605C] flex items-center justify-center">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-[10px] uppercase tracking-[0.25em] text-[#8A908C] font-extrabold mb-2.5" htmlFor="message">
                    Special Requests or Details
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Provide details about your trip, desired check-in/out support, private dining plans..."
                    className={textareaClasses}
                  ></textarea>
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 bg-[#E57A55]/90 hover:bg-[#E57A55] text-white text-xs font-extrabold uppercase tracking-[0.3em] rounded-full transition-all duration-500 shadow-md flex items-center justify-center gap-2.5 cursor-pointer disabled:opacity-75 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                  ) : (
                    <>
                      <Send className="w-3.5 h-3.5" /> Send Booking Inquiry
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

        </div>

      </div>

      <style>{`
        .datepicker-rounded-full .react-datepicker-wrapper {
          width: 100%;
        }
        @keyframes scaleUp {
          from { opacity: 0; transform: scale(0.96); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-scale-up {
          animation: scaleUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>
    </section>
  );
}
