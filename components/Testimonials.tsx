"use client"

import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Apoorwa Devappa',
    text: `I choose them for my two day wedding, they indeed made it the most memorable one. Every work was delivered as promised. Very cooperative and highly charming team. Will surely opt them in future too!`,
    rating: 5,
    role: 'Bride',
    image: 'AD'
  },
  {
    name: 'Nagaraju Badri',
    text: `Amazing service and people also very respective response and good profession. Highly recommend their services!`,
    rating: 5,
    role: 'Corporate Client',
    image: 'NB'
  },
  {
    name: 'Tejaswini Ikkurthi',
    text: `Excellent quality work. All corporates can go ahead with them for all your business meetings without second thought.`,
    rating: 5,
    role: 'Business Executive',
    image: 'TI'
  },
  {
    name: 'Rohit Sharma',
    text: `We loved having you onboard for one of the events and must say everyone loved the way the event was planned and implemented. Our decision to engage you turned out to be a good one.`,
    rating: 5,
    role: 'Event Organizer',
    image: 'RS'
  },
  {
    name: 'Priya Menon',
    text: `They are quite flexible and cater to people's dynamic needs. The team is very professional and friendly.`,
    rating: 4,
    role: 'Marketing Manager',
    image: 'PM'
  },
  {
    name: 'Siddharth Rao',
    text: `Great experience! The event was a huge success thanks to their dedication and attention to detail.`,
    rating: 5,
    role: 'Product Manager',
    image: 'SR'
  },
];

const GoldAnimatedBackground = () => (
  <div className="absolute top-0 left-0 w-full h-full -z-10 pointer-events-none">
    <svg
      className="absolute w-full h-full"
      preserveAspectRatio="xMidYMid slice"
      viewBox="0 0 1920 1080"
    >
      <path
        d="M -100 500 C 400 1000, 800 100, 1100 450 S 1600 1000, 2020 600"
        stroke="#FFD700"
        strokeWidth="2.5"
        fill="none"
        opacity="0.18"
      />
      <path
        d="M 0 200 C 300 400, 600 100, 900 300 S 1200 500, 1500 200"
        stroke="#FFB300"
        strokeWidth="1.5"
        fill="none"
        opacity="0.13"
      />
      <path
        d="M 200 800 C 500 600, 800 900, 1100 700 S 1400 500, 1700 800"
        stroke="#FFD700"
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

const floatingCircles = [
  { size: '120px', top: '10%', left: '5%', delay: 0 },
  { size: '80px', top: '60%', left: '10%', delay: 0.5 },
  { size: '100px', top: '20%', left: '80%', delay: 1 },
  { size: '60px', top: '75%', left: '70%', delay: 1.5 },
  { size: '90px', top: '40%', left: '50%', delay: 0.8 },
];

const TestimonialsPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  useEffect(() => {
    if (!isAutoPlay) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlay]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToSlide = (index: React.SetStateAction<number>) => {
    setCurrentIndex(index);
  };

  return (
    <div className="min-h-screen bg-transparent overflow-hidden relative">
      <GoldAnimatedBackground />
      {floatingCircles.map((circle, i) => (
        <div
          key={i}
          className="pointer-events-none absolute z-0 blur-2xl opacity-40 animate-float"
          style={{
            width: circle.size,
            height: circle.size,
            top: circle.top,
            left: circle.left,
            background: 'radial-gradient(circle at 60% 40%, #fde047 60%, #fbbf24 100%)',
            borderRadius: '50%',
            animationDelay: `${circle.delay}s`,
            animationDuration: `${2.5 + i}s`,
          }}
        />
      ))}
      <div className="relative z-10 container mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold text-black mb-6">
            Our <span className='text-yellow-500'>Testimonials</span>
          </h1>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
            Discover what our amazing clients have to say about their experiences with us
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-500 to-amber-500 mx-auto mt-8 rounded-full"></div>
        </div>
        <div className="max-w-5xl mx-auto">
          <div 
            className="relative bg-white/80 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-yellow-200 shadow-2xl transition-all duration-700 ease-out hover:shadow-yellow-500/20"
            onMouseEnter={() => setIsAutoPlay(false)}
            onMouseLeave={() => setIsAutoPlay(true)}
          >
            {/* Quote Icon */}
            <div className="absolute -top-6 left-8">
              <div className="bg-gradient-to-r from-yellow-500 to-amber-500 p-4 rounded-full shadow-lg">
                <Quote className="w-6 h-6 text-white" />
              </div>
            </div>
            {/* Testimonial Content */}
            <div className="grid md:grid-cols-3 gap-8 items-center">
              <div className="flex flex-col items-center space-y-4">
                <div className="relative">
                  <div className="w-32 h-32 bg-yellow-500 rounded-full flex items-center justify-center text-white text-3xl font-bold shadow-2xl transform transition-transform duration-300">
                    {testimonials[currentIndex].image}
                  </div>
                  <div className="absolute -bottom-2 -right-2 bg-green-500 w-8 h-8 rounded-full border-4 border-white flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full animate-ping"></div>
                  </div>
                </div>
                
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-800 mb-1">
                    {testimonials[currentIndex].name}
                  </h3>
                  <p className="text-yellow-600 font-medium">
                    {testimonials[currentIndex].role}
                  </p>
                </div>
                {/* Star Rating */}
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < testimonials[currentIndex].rating
                          ? 'text-yellow-500 fill-current'
                          : 'text-gray-300'
                      } transition-colors duration-300`}
                    />
                  ))}
                </div>
              </div>
              <div className="md:col-span-2">
                <blockquote className="text-md md:text-xl text-gray-800 leading-relaxed font-light">
                  "{testimonials[currentIndex].text}"
                </blockquote>
              </div>
            </div>
            {/* Navigation Arrows */}
            <button
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-yellow-500/20 hover:bg-yellow-500/30 backdrop-blur-sm rounded-full p-3 transition-all duration-300 hover:scale-110"
            >
              <ChevronLeft className="w-6 h-6 text-gray-700" />
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-yellow-500/20 hover:bg-yellow-500/30 backdrop-blur-sm rounded-full p-3 transition-all duration-300 hover:scale-110"
            >
              <ChevronRight className="w-6 h-6 text-gray-700" />
            </button>
          </div>
          {/* Dots Navigation */}
          <div className="flex justify-center space-x-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-yellow-500 scale-125'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
          {/* Testimonial Grid Preview */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mt-12">
            {testimonials.map((testimonial, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`group relative overflow-hidden rounded-xl p-4 transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-gradient-to-br from-yellow-500/20 to-yellow-400/20 border-2 border-yellow-500'
                    : 'bg-white/60 hover:bg-white/80 border border-gray-200'
                }`}
              >
                <div className="flex flex-col items-center space-y-2">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white text-sm font-bold transition-all duration-300 ${
                    index === currentIndex
                      ? 'bg-gradient-to-br from-yellow-500 to-yellow-600 scale-110'
                      : 'bg-gray-400 group-hover:bg-gray-500'
                  }`}>
                    {testimonial.image}
                  </div>
                  <div className="text-center">
                    <p className="text-gray-800 text-xs font-medium truncate w-full">
                      {testimonial.name}
                    </p>
                    <div className="flex justify-center space-x-1 mt-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-2 h-2 text-yellow-500 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes spin-slow {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to { transform: translate(-50%, -50%) rotate(360deg); }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
        
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default TestimonialsPage;