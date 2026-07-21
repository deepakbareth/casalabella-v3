import React, { useState } from 'react';
import { Send, Check } from 'lucide-react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export default function InquireForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
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
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  const inputClasses = "w-full bg-[#F7F5F0]/60 focus:bg-white border border-[#E3E0D8] focus:border-[#ff6e00] rounded-full px-6 py-3.5 text-sm text-[#2D332F] focus:outline-none transition-all placeholder-[#2D332F]/40 font-sans font-medium";
  const selectClasses = "w-full bg-[#F7F5F0]/60 focus:bg-white border border-[#E3E0D8] focus:border-[#ff6e00] rounded-full px-6 py-3.5 text-sm text-[#2D332F] focus:outline-none transition-all font-sans font-medium appearance-none cursor-pointer";
  const textareaClasses = "w-full bg-[#F7F5F0]/60 focus:bg-white border border-[#E3E0D8] focus:border-[#ff6e00] rounded-2xl px-6 py-4 text-sm text-[#2D332F] focus:outline-none transition-all placeholder-[#2D332F]/40 font-sans font-medium resize-none";

  return (
    <div className="lg:col-span-7 bg-white border border-[#E3E0D8] shadow-sm rounded-3xl p-8 sm:p-12 flex flex-col justify-center min-h-[480px]">
      {submitted ? (
        <div className="text-center py-10 flex flex-col items-center justify-center">
          <div className="w-16 h-16 bg-[#007979]/10 border border-[#007979]/30 text-[#007979] rounded-full flex items-center justify-center mb-6">
            <Check className="w-7 h-7" />
          </div>
          <h3 className="font-sans text-2xl text-[#2D332F] font-bold uppercase tracking-tight mb-4">
            Inquiry Received
          </h3>
          <p className="font-sans text-sm text-[#5A605C] leading-relaxed mb-8 max-w-md mx-auto">
            Thank you, <span className="text-[#2D332F] font-bold">{formData.name}</span>. Owner Rick Cuny will review your travel dates (<span className="text-[#2D332F] font-bold">{formData.checkIn?.toLocaleDateString()}</span> to <span className="text-[#2D332F] font-bold">{formData.checkOut?.toLocaleDateString()}</span>) and respond via <span className="text-[#2D332F] font-bold">{formData.email}</span> shortly.
          </p>
          <button
            onClick={() => {
              setFormData({ name: '', email: '', phone: '', checkIn: null, checkOut: null, guests: '1', message: '' });
              setSubmitted(false);
            }}
            className="px-8 py-3.5 border border-[#ff6e00] hover:bg-[#ff6e00] text-[#ff6e00] hover:text-white text-xs font-extrabold uppercase tracking-widest rounded-full transition-all duration-300 cursor-pointer"
          >
            Submit Another Request
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">

          {/* Form Heading */}
          <div>
            <h3 className="font-sans text-xl font-bold uppercase text-[#2D332F] tracking-tight">
              Book Now
            </h3>
            <p className="text-xs text-[#5A605C]">Please provide details of your potential trip below.</p>
          </div>

          {/* Row 1: Full Name */}
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

          {/* Row 2: Email & Phone */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
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

            {/* Phone */}
            <div>
              <label className="block text-[10px] uppercase tracking-[0.25em] text-[#8A908C] font-extrabold mb-2.5" htmlFor="phone">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                placeholder="e.g. +1 970-390-8874"
                className={inputClasses}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
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
              placeholder="Tell us about chef plans, airport shuttles, or golf cart rentals..."
              className={textareaClasses}
            ></textarea>
          </div>

          {/* Submit button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-4 bg-[#ff6e00]/95 hover:bg-[#ff6e00] text-white text-xs font-extrabold uppercase tracking-[0.3em] rounded-full transition-all duration-500 shadow-md flex items-center justify-center gap-2.5 cursor-pointer disabled:opacity-75 disabled:cursor-not-allowed"
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

      <style>{`
        .datepicker-rounded-full .react-datepicker-wrapper {
          width: 100%;
        }
      `}</style>
    </div>
  );
}
