"use client"

  import React, { useState, useEffect } from 'react';
  // eslint-disable-next-line import/no-unresolved
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
    <div className="pointer-events-none absolute left-0 top-0 -z-10 size-full">
      <svg
        className="absolute size-full"
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
      <div className="relative min-h-screen overflow-hidden bg-transparent">
        <GoldAnimatedBackground />
        {floatingCircles.map((circle, i) => (
          <div
            key={i}
            className="animate-float pointer-events-none absolute z-0 opacity-40 blur-2xl"
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
        <div className="container relative z-10 mx-auto px-6 py-16">
          <div className="mb-16 text-center">
            <h1 className="mb-6 text-3xl md:text-5xl font-bold text-black">
              Our <span className='text-yellow-500'>Testimonials</span>
            </h1>
            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-gray-700">
              Discover what our amazing clients have to say about their experiences with us
            </p>
            <div className="mx-auto mt-8 h-1 w-24 rounded-full bg-gradient-to-r from-yellow-500 to-amber-500"></div>
          </div>
          <div className="mx-auto max-w-5xl">
            <div 
              className="relative rounded-3xl border border-yellow-200 bg-white/80 p-8 shadow-2xl backdrop-blur-lg transition-all duration-700 ease-out hover:shadow-yellow-500/20 md:p-12"
              onMouseEnter={() => setIsAutoPlay(false)}
              onMouseLeave={() => setIsAutoPlay(true)}
            >
              {/* Quote Icon */}
              <div className="absolute -top-6 left-8">
                <div className="rounded-full bg-gradient-to-r from-yellow-500 to-amber-500 p-4 shadow-lg">
                  <Quote className="size-6 text-white" />
                </div>
              </div>
              {/* Testimonial Content */}
              <div className="grid items-center gap-8 md:grid-cols-3">
                <div className="flex flex-col items-center space-y-4">
                  <div className="relative">
                    <div className="flex size-32 items-center justify-center rounded-full bg-yellow-500 text-3xl font-bold text-white shadow-2xl transition-transform duration-300">
                      {testimonials[currentIndex].image}
                    </div>
                    <div className="absolute -bottom-2 -right-2 flex size-8 items-center justify-center rounded-full border-4 border-white bg-green-500">
                      <div className="size-2 animate-ping rounded-full bg-white"></div>
                    </div>
                  </div>
                  <div className="text-center">
                    <h3 className="mb-1 text-2xl font-bold text-gray-800">
                      {testimonials[currentIndex].name}
                    </h3>
                    <p className="font-medium text-yellow-600">
                      {testimonials[currentIndex].role}
                    </p>
                  </div>
                  {/* Star Rating */}
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`size-5 ${
                          i < testimonials[currentIndex].rating
                            ? 'fill-current text-yellow-500'
                            : 'text-gray-300'
                        } transition-colors duration-300`}
                      />
                    ))}
                  </div>
                </div>
                <div className="md:col-span-2">
                  <blockquote className="text-md font-light leading-relaxed text-gray-800 md:text-xl">
                    "{testimonials[currentIndex].text}"
                  </blockquote>
                </div>
              </div>
              {/* Navigation Arrows */}
              <button
                onClick={prevTestimonial}
                className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-yellow-500/20 p-3 backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:bg-yellow-500/30"
              >
                <ChevronLeft className="size-6 text-gray-700" />
              </button>
              <button
                onClick={nextTestimonial}
                className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-yellow-500/20 p-3 backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:bg-yellow-500/30"
              >
                <ChevronRight className="size-6 text-gray-700" />
              </button>
            </div>
            {/* Dots Navigation */}
            <div className="mt-8 flex justify-center space-x-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`size-3 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'scale-125 bg-yellow-500'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
            {/* Testimonial Grid Preview */}
            <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
              {testimonials.map((testimonial, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`group relative overflow-hidden rounded-xl p-4 transition-all duration-300 ${
                    index === currentIndex
                      ? 'border-2 border-yellow-500 bg-gradient-to-br from-yellow-500/20 to-yellow-400/20'
                      : 'border border-gray-200 bg-white/60 hover:bg-white/80'
                  }`}
                >
                  <div className="flex flex-col items-center space-y-2">
                    <div className={`flex size-12 items-center justify-center rounded-full text-sm font-bold text-white transition-all duration-300 ${
                      index === currentIndex
                        ? 'scale-110 bg-gradient-to-br from-yellow-500 to-yellow-600'
                        : 'bg-gray-400 group-hover:bg-gray-500'
                    }`}>
                      {testimonial.image}
                    </div>
                    <div className="text-center">
                      <p className="w-full truncate text-xs font-medium text-gray-800">
                        {testimonial.name}
                      </p>
                      <div className="mt-1 flex justify-center space-x-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="size-2 fill-current text-yellow-500" />
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