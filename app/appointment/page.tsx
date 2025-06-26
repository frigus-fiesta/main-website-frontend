"use client"

import React, { useState, useEffect } from 'react';
import { Calendar, Clock, User, Phone, Mail, MapPin, CheckCircle, Star, Sparkles, Coffee, Gift } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const GoldAnimatedBackground = () => (
  <div className="absolute top-0 left-0 w-full h-full -z-10 pointer-events-none">
    <svg
      className="absolute w-full h-full"
      preserveAspectRatio="xMidYMid slice"
      viewBox="0 0 1920 1080"
    >
      <path
        d="M 0 200 C 300 400, 600 100, 900 300 S 1200 500, 1500 200"
        stroke="#FFD700"
        strokeWidth="2.5"
        fill="none"
        opacity="0.13"
      />
      <path
        d="M 200 800 C 500 600, 800 900, 1100 700 S 1400 500, 1700 800"
        stroke="#FFB300"
        strokeWidth="1.5"
        fill="none"
        opacity="0.13"
      />
      <path
        d="M 400 100 C 700 300, 1000 50, 1300 250 S 1600 400, 1900 150"
        stroke="#FFECB3"
        strokeWidth="1.5"
        fill="none"
        opacity="0.13"
      />
      <path
        d="M 100 900 C 400 700, 700 950, 1000 750 S 1300 550, 1600 900"
        stroke="#FFC107"
        strokeWidth="1.5"
        fill="none"
        opacity="0.13"
      />
    </svg>
  </div>
);

export default function BookAppointmentPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    time: '',
    message: ''
  });
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
    setFormData({ name: '', email: '', phone: '', service: '', date: '', time: '', message: '' });
    setCurrentStep(1);
  };

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const nextStep = () => {
    if (currentStep < 3) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const services = [
    { id: 'event-planning', name: 'Event Planning', icon: Gift, price: 'From ₹15,000' },
    { id: 'wedding', name: 'Wedding Services', icon: Star, price: 'From ₹50,000' },
    { id: 'corporate', name: 'Corporate Events', icon: Coffee, price: 'From ₹25,000' },
    { id: 'consultation', name: 'Consultation', icon: User, price: 'From ₹2,000' }
  ];

  const timeSlots = [
    '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
    '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM'
  ];

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <GoldAnimatedBackground />
      <Header />
      <div className="relative h-[90vh] md:h-[70vh] pt-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-yellow-500 to-yellow-600"></div>
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-yellow-300 rounded-full opacity-20"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 2}s`
              }}
            ></div>
          ))}
        </div>
        <div className={`relative z-10 flex items-center justify-center h-full text-center px-6 transition-all duration-1000 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight animate-fade-in-up">
              <span className="text-white inline-block animate-text-shimmer">
                Book Your Appointment
              </span>
            </h1>
            <p className={`text-md md:text-lg text-amber-100 mb-8 leading-relaxed transition-all duration-1000 delay-300 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}>
              Ready to create something extraordinary? Schedule your golden consultation today 
              and let's bring your vision to life with our premium services.
            </p>
            <div className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 delay-500 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}>
              <button 
                onClick={() => {
                  const el = document.getElementById('booking-form');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-8 py-4 bg-gradient-to-r from-yellow-400 to-amber-500 text-white font-semibold rounded-full transition-all duration-300 shadow-2xl hover:shadow-amber-400/25 transform "
              >
                Book Now
              </button>
              <button className="px-8 py-4 border-2 border-white text-white font-semibold rounded-full transition-all duration-300 hover:bg-white hover:text-yellow-600">
                View Services
              </button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center animate-bounce">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
      <div className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6 animate-fade-in-up">
              Our <span className='text-yellow-500'>Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in-up animation-delay-200">
              Choose from our premium range of services designed to make your special moments unforgettable
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {services.map((service, index) => (
              <div 
                key={service.id} 
                className="relative overflow-hidden rounded-2xl shadow-xl transition-all duration-500 animate-fade-in-up cursor-pointer transform  bg-white group"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-amber-400 to-yellow-600 opacity-10 transition-opacity duration-300 group-hover:opacity-20"></div>
                <div className="relative p-8 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-amber-400 to-yellow-600 flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:rotate-6">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-amber-900 mb-2 hover:text-amber-700 transition-colors duration-300">
                    {service.name}
                  </h3>
                  <p className="text-gray-800 font-semibold mb-1">
                    {service.price}
                  </p>
                  <p className="text-gray-600 text-sm">
                    Premium quality service
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Booking Form */}
      <div id="booking-form" className="py-20 px-6 bg-gradient-to-br from-amber-50 to-yellow-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6 animate-fade-in-up">
              Book Your <span className='text-yellow-500'>Appointment</span>
            </h2>
            <p className="text-xl text-gray-600 animate-fade-in-up animation-delay-200">
              Let's schedule your golden moment - just a few simple steps
            </p>
          </div>

          {/* Progress Steps */}
          <div className="flex justify-center mb-12">
            <div className="flex items-center space-x-4">
              {[1, 2, 3].map((step) => (
                <div key={step} className="flex items-center">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all duration-300 ${
                    currentStep >= step 
                      ? 'bg-gradient-to-r from-yellow-400 to-amber-500 text-white' 
                      : 'bg-gray-200 text-gray-500'
                  }`}>
                    {step}
                  </div>
                  {step < 3 && (
                    <div className={`w-16 h-1 mx-2 transition-all duration-300 ${
                      currentStep > step ? 'bg-yellow-400' : 'bg-gray-200'
                    }`} />
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 transition-all duration-500 animate-slide-in-up">
            <div>
              {/* Step 1: Personal Information */}
              {currentStep === 1 && (
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-amber-900 mb-6 flex items-center gap-3">
                    <User className="w-6 h-6 text-yellow-500" />
                    Personal Information
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="relative group">
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none transition-all duration-300 hover:border-amber-300 hover:shadow-lg"
                        placeholder="Your Full Name"
                        required
                      />
                    </div>
                    <div className="relative group">
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none transition-all duration-300 hover:border-amber-300 hover:shadow-lg"
                        placeholder="Your Email"
                        required
                      />
                    </div>
                  </div>
                  <div className="relative group">
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none transition-all duration-300 hover:border-amber-300 hover:shadow-lg"
                      placeholder="Your Phone Number"
                      required
                    />
                  </div>
                </div>
              )}

              {/* Step 2: Service & Date Selection */}
              {currentStep === 2 && (
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-amber-900 mb-6 flex items-center gap-3">
                    <Calendar className="w-6 h-6 text-yellow-500" />
                    Service & Schedule
                  </h3>
                  <div className="relative group">
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none transition-all duration-300 hover:border-amber-300 hover:shadow-lg"
                      required
                    >
                      <option value="">Select a Service</option>
                      {services.map((service) => (
                        <option key={service.id} value={service.id}>
                          {service.name} - {service.price}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="relative group">
                      <input
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none transition-all duration-300 hover:border-amber-300 hover:shadow-lg"
                        min={new Date().toISOString().split('T')[0]}
                        required
                      />
                    </div>
                    <div className="relative group">
                      <select
                        name="time"
                        value={formData.time}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none transition-all duration-300 hover:border-amber-300 hover:shadow-lg"
                        required
                      >
                        <option value="">Select Time</option>
                        {timeSlots.map((time) => (
                          <option key={time} value={time}>
                            {time}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 3: Additional Details */}
              {currentStep === 3 && (
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-amber-900 mb-6 flex items-center gap-3">
                    <Sparkles className="w-6 h-6 text-yellow-500" />
                    Additional Details
                  </h3>
                  <div className="relative group">
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none transition-all duration-300 hover:border-amber-300 resize-none hover:shadow-lg"
                      placeholder="Tell us more about your requirements, special requests, or any questions you have..."
                    />
                  </div>
                  
                  {/* Booking Summary */}
                  <div className="bg-gradient-to-r from-yellow-50 to-amber-50 rounded-xl p-6 border border-yellow-200">
                    <h4 className="font-bold text-amber-900 mb-4">Booking Summary</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Name:</span>
                        <span className="font-semibold">{formData.name || 'Not specified'}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Service:</span>
                        <span className="font-semibold">
                          {services.find(s => s.id === formData.service)?.name || 'Not selected'}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Date:</span>
                        <span className="font-semibold">{formData.date || 'Not selected'}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Time:</span>
                        <span className="font-semibold">{formData.time || 'Not selected'}</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex justify-between items-center mt-8">
                <button
                  type="button"
                  onClick={prevStep}
                  className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                    currentStep === 1 
                      ? 'bg-gray-200 text-gray-400 cursor-not-allowed' 
                      : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
                  }`}
                  disabled={currentStep === 1}
                >
                  Previous
                </button>
                
                {currentStep < 3 ? (
                  <button
                    type="button"
                    onClick={nextStep}
                    className="px-8 py-3 bg-gradient-to-r from-amber-400 to-yellow-500 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-amber-400/25 transform  active:scale-95"
                  >
                    Next Step
                  </button>
                ) : (
                  <button
                    onClick={handleSubmit}
                    disabled={isSubmitted}
                    className="px-8 py-3 bg-gradient-to-r from-amber-400 to-yellow-500 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-amber-400/25 transform  active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-3 group"
                  >
                    {isSubmitted ? (
                      <>
                        <CheckCircle className="w-5 h-5 animate-spin" />
                        Appointment Booked! ✨
                      </>
                    ) : (
                      <>
                        <Calendar className="w-5 h-5 transition-transform duration-300 group-hover:rotate-12" />
                        <span className="hover:animate-pulse">Book Appointment</span>
                      </>
                    )}
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="py-20 px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
          <div className="bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-2xl p-8 text-white shadow-xl transform  transition-all duration-500 relative overflow-hidden animate-slide-in-up">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16" />
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12" />
            
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <Star className="w-8 h-8 animate-pulse" />
                <h3 className="text-2xl font-bold">Premium Experience</h3>
              </div>
              <p className="text-yellow-100 leading-relaxed mb-6">
                Experience the golden standard of service with our expert team, premium facilities, and personalized approach to every appointment.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-yellow-300 rounded-full animate-pulse" />
                  <span className="text-yellow-100">Expert Consultation</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-yellow-300 rounded-full animate-pulse" />
                  <span className="text-yellow-100">Flexible Scheduling</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-yellow-300 rounded-full animate-pulse" />
                  <span className="text-yellow-100">Premium Quality Service</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-8 border-2 border-yellow-200 transform  transition-all duration-300 hover:shadow-lg animate-slide-in-up animation-delay-200">
              <div className="flex items-center gap-3 mb-4">
                <Clock className="w-6 h-6 text-yellow-500" />
                <h4 className="font-bold text-amber-900 text-xl">Quick & Easy Booking</h4>
              </div>
              <p className="text-gray-600">
                Book your appointment in just 3 simple steps. Our streamlined process makes scheduling effortless and convenient.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 border-2 border-yellow-200 transform  transition-all duration-300 hover:shadow-lg animate-slide-in-up animation-delay-400">
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="w-6 h-6 text-yellow-500" />
                <h4 className="font-bold text-amber-900 text-xl">Convenient Location</h4>
              </div>
              <p className="text-gray-600 mb-3">
                Located in the heart of Hyderabad, easily accessible with ample parking and premium facilities.
              </p>
              <p className="text-sm text-gray-500">Jawahar Nagar, Sainikpuri, Hyderabad</p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { 
            transform: translateY(0) rotate(0deg); 
            opacity: 0.2;
          }
          50% { 
            transform: translateY(-20px) rotate(180deg); 
            opacity: 0.6;
          }
        }

        @keyframes text-shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-in-up {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-text-shimmer {
          background: linear-gradient(90deg, #fbbf24, #ffffff, #fbbf24);
          background-size: 200% 100%;
          -webkit-background-clip: text;
          background-clip: text;
          animation: text-shimmer 3s ease-in-out infinite;
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out;
        }

        .animate-slide-in-up {
          animation: slide-in-up 0.6s ease-out;
        }

        .animation-delay-200 {
          animation-delay: 200ms;
        }

        .animation-delay-300 {
          animation-delay: 300ms;
        }

        .animation-delay-400 {
          animation-delay: 400ms;
        }

        .animation-delay-500 {
          animation-delay: 500ms;
        }
      `}</style>
      
      <Footer />
    </div>
  );
}