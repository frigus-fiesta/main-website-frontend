"use client"

import React, { useState, useEffect } from 'react';
import { Calendar, Clock, MapPin, Users, Star, Search } from 'lucide-react';

import Header from '@/components/Header';
import Footer from '@/components/Footer';

const GoldAnimatedBackground = () => (
  <div className="pointer-events-none absolute left-0 top-0 -z-10 size-full">
    <svg
      className="absolute size-full"
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

const ScheduledEventsPage = () => {
  const [selectedService, setSelectedService] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const events = [
    {
      id: 1,
      title: "Annual Tech Summit 2025",
      type: "corporate",
      date: "2025-07-15",
      time: "09:00 AM",
      location: "Grand Ballroom, Hotel Paradise",
      capacity: 500,
      booked: 350,
      price: "$299",
      image: "/api/placeholder/300/200",
      description: "Join industry leaders for the biggest tech conference of the year."
    },
    {
      id: 2,
      title: "Summer Music Festival",
      type: "concert",
      date: "2025-07-20",
      time: "07:00 PM",
      location: "Central Park Amphitheater",
      capacity: 2000,
      booked: 1800,
      price: "$79",
      image: "/api/placeholder/300/200",
      description: "Live performances by top artists in a magical outdoor setting."
    },
    {
      id: 3,
      title: "Charity Gala Night",
      type: "social",
      date: "2025-08-05",
      time: "06:30 PM",
      location: "Royal Convention Center",
      capacity: 300,
      booked: 200,
      price: "$150",
      image: "/api/placeholder/300/200",
      description: "An elegant evening supporting local charities with dinner and entertainment."
    },
    {
      id: 4,
      title: "Corporate Leadership Workshop",
      type: "corporate",
      date: "2025-08-12",
      time: "10:00 AM",
      location: "Business Hub Conference Room",
      capacity: 100,
      booked: 85,
      price: "$199",
      image: "/api/placeholder/300/200",
      description: "Intensive workshop for developing leadership skills and team management."
    },
    {
      id: 5,
      title: "Jazz Night Under Stars",
      type: "concert",
      date: "2025-08-18",
      time: "08:00 PM",
      location: "Riverside Terrace",
      capacity: 150,
      booked: 120,
      price: "$45",
      image: "/api/placeholder/300/200",
      description: "Intimate jazz performance with dinner and cocktails."
    },
    {
      id: 6,
      title: "Wedding Celebration",
      type: "social",
      date: "2025-08-25",
      time: "04:00 PM",
      location: "Garden Villa Resort",
      capacity: 200,
      booked: 180,
      price: "$89",
      image: "/api/placeholder/300/200",
      description: "Celebrate love in a beautiful garden setting with live music and dining."
    }
  ];

  const services = [
    { id: 'corporate', name: 'Corporate', icon: '🏢', color: 'from-amber-400 to-yellow-600' },
    { id: 'concert', name: 'Live', icon: '🎵', color: 'from-purple-400 to-pink-600' },
    { id: 'social', name: 'Social', icon: '🎉', color: 'from-blue-400 to-indigo-600' }
  ];

  const filteredEvents = events.filter(event => {
    const matchesService = selectedService === 'all' || event.type === selectedService;
    const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         event.location.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesService && matchesSearch;
  });

  const formatDate = (dateString: string | number | Date) => {
    const date = new Date(dateString);

    return date.toLocaleDateString('en-US', { 
      weekday: 'short', 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    });
  };

  const getAvailabilityColor = (booked: number, capacity: number) => {
    const percentage = (booked / capacity) * 100;
    if (percentage >= 90) return 'text-red-500';
    if (percentage >= 70) return 'text-amber-500';

    return 'text-green-500';
  };

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <GoldAnimatedBackground />
      <Header/>
      <div className="relative h-[90vh] overflow-hidden pt-10 md:h-[70vh]">
        <div className="absolute inset-0 bg-gradient-to-t from-yellow-500 to-yellow-600"></div>
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute size-2 rounded-full bg-yellow-300 opacity-20"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 2}s`
              }}
            ></div>
          ))}
        </div>
        <div className={`relative z-10 flex h-full items-center justify-center px-6 text-center transition-all duration-1000 ease-out ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <div className="max-w-4xl">
            <h1 className="animate-fade-in-up mb-6 text-4xl font-bold tracking-tight text-white md:text-6xl">
              <span className="animate-text-shimmer inline-block text-white">
                Scheduled Events
              </span>
            </h1>
            <p className={`text-md mb-8 leading-relaxed text-amber-100 transition-all delay-300 duration-1000 ease-out md:text-lg ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}>
              Discover extraordinary experiences crafted for corporate excellence, 
              live entertainment, and unforgettable social celebrations
            </p>
            <div className={`flex flex-col justify-center gap-4 transition-all delay-500 duration-1000 ease-out sm:flex-row ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}>
              <button className="rounded-full bg-gradient-to-r from-yellow-400 to-amber-500 px-8 py-4 font-semibold text-white shadow-2xl transition-all duration-300">
                Explore Events
              </button>
              <button className="rounded-full border-2 border-white px-8 py-4 font-semibold text-white transition-all duration-300">
                View Calendar
              </button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <div className="flex h-10 w-6 animate-bounce justify-center rounded-full border-2 border-white">
            <div className="mt-2 h-3 w-1 animate-pulse rounded-full bg-white"></div>
          </div>
        </div>
      </div>
      <div className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <h2 className="animate-fade-in-up mb-6 text-4xl font-bold text-black md:text-5xl">Our <span className='text-yellow-500'>Services</span></h2>
            <p className="animate-fade-in-up animation-delay-200 mx-auto max-w-3xl text-xl text-gray-600">
              We are very proud of our client base and the lasting relationships we have forged over many years
            </p>
          </div>
          <div className="mb-20 grid grid-cols-1 gap-8 md:grid-cols-3">
            {services.map((service, index) => (
              <div 
                key={service.id} 
                className="animate-fade-in-up relative cursor-pointer overflow-hidden rounded-2xl shadow-xl transition-all duration-500"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-10 transition-opacity duration-300`}></div>
                <div className="relative p-8 text-center">
                  <div className="mb-4 text-6xl">
                    {service.icon}
                  </div>
                  <h3 className="mb-4 text-2xl font-bold text-amber-900">
                    {service.name}
                  </h3>
                  <p className="leading-relaxed text-gray-600">
                    Professional {service.name.toLowerCase()} services tailored to create memorable experiences
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <h2 className="animate-fade-in-up mb-6 text-4xl font-bold text-black md:text-5xl">Upcoming <span className='text-yellow-500'>Events</span></h2>
            <p className="animate-fade-in-up animation-delay-200 text-xl text-gray-600">Browse and book your next unforgettable experience</p>
          </div>
          <div className="animate-slide-in-up mb-12 rounded-2xl p-6 shadow-lg">
            <div className="flex flex-col gap-4 sm:flex-col sm:gap-6 lg:flex-row lg:items-center">
              <div className="w-full lg:flex-1">
                <div className="group relative">
                  <Search className="absolute left-3 top-1/2 size-5 -translate-y-1/2 text-gray-400 transition-colors duration-300 group-focus-within:text-amber-500" />
                  <input
                    type="text"
                    placeholder="Search events or locations..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full rounded-xl border border-gray-200 py-3 pl-10 pr-4 transition-all duration-300 hover:border-amber-300 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-amber-400"
                  />
                </div>
              </div>
              <div className="w-full overflow-x-auto lg:w-auto">
                <div className="flex min-w-[300px] flex-wrap gap-2 sm:flex-nowrap sm:gap-3">
                  <button
                    onClick={() => setSelectedService('all')}
                    className={`min-w-[120px] flex-1 rounded-xl px-4 py-3 text-sm font-semibold transition-all duration-300 sm:text-base ${
                      selectedService === 'all' 
                        ? 'bg-gradient-to-r from-amber-400 to-yellow-500 text-white shadow-lg shadow-amber-400/25' 
                        : 'bg-gray-100 text-gray-600'
                    }`}
                  >
                    All Events
                  </button>
                  {services.map((service) => (
                    <button
                      key={service.id}
                      onClick={() => setSelectedService(service.id)}
                      className={`min-w-[120px] flex-1 rounded-xl px-4 py-3 text-sm font-semibold transition-all duration-300 sm:text-base ${
                        selectedService === service.id 
                          ? 'bg-gradient-to-r from-amber-400 to-yellow-500 text-white shadow-lg shadow-amber-400/25' 
                          : 'bg-gray-100 text-gray-600'
                      }`}
                    >
                      <span className="mr-1">{service.icon}</span> 
                      {service.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredEvents.map((event, index) => (
              <div 
                key={event.id} 
                className="animate-fade-in-up group cursor-pointer overflow-hidden rounded-2xl bg-white shadow-lg  transition-all duration-500 hover:shadow-2xl"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative flex h-48 items-center justify-center overflow-hidden bg-gradient-to-br from-amber-400 to-yellow-600">
                  <div className="text-6xl text-white opacity-80 transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110">
                    {event.type === 'corporate' ? '🏢' : event.type === 'concert' ? '🎵' : '🎉'}
                  </div>
                  <div className="absolute right-4 top-4 rounded-full bg-white/20 px-3 py-1 backdrop-blur-sm transition-all duration-300 group-hover:bg-white/30">
                    <span className="text-sm font-semibold text-white">{event.price}</span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                </div>
                <div className="p-6">
                  <h3 className="mb-3 line-clamp-2 text-xl font-bold text-amber-900 transition-colors duration-300 group-hover:text-amber-700">
                    {event.title}
                  </h3>
                  <p className="mb-4 text-sm leading-relaxed text-gray-600">{event.description}</p>
                  <div className="mb-4 space-y-2">
                    <div className="flex items-center text-gray-500 transition-colors duration-300 group-hover:text-gray-600">
                      <Calendar className="mr-2 size-4 transition-transform duration-300 group-hover:scale-110" />
                      <span className="text-sm">{formatDate(event.date)}</span>
                    </div>
                    <div className="flex items-center text-gray-500 transition-colors duration-300 group-hover:text-gray-600">
                      <Clock className="mr-2 size-4 transition-transform duration-300 group-hover:scale-110" />
                      <span className="text-sm">{event.time}</span>
                    </div>
                    <div className="flex items-center text-gray-500 transition-colors duration-300 group-hover:text-gray-600">
                      <MapPin className="mr-2 size-4 transition-transform duration-300 group-hover:scale-110" />
                      <span className="text-sm">{event.location}</span>
                    </div>
                  </div>
                  <div className="mb-4 flex items-center justify-between">
                    <div className="flex items-center">
                      <Users className="mr-2 size-4 text-gray-400 transition-transform duration-300 group-hover:scale-110" />
                      <span className={`text-sm font-semibold ${getAvailabilityColor(event.booked, event.capacity)} transition-colors duration-300`}>
                        {event.booked}/{event.capacity} booked
                      </span>
                    </div>
                    <div className="flex items-center">
                      <Star className="size-4 fill-current text-yellow-400 transition-transform duration-300 group-hover:scale-110 group-hover:animate-pulse" />
                      <span className="ml-1 text-sm text-gray-600">4.8</span>
                    </div>
                  </div>
                  <button className="w-full rounded-xl bg-gradient-to-r from-amber-400 to-yellow-500 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:shadow-amber-400/25 active:scale-95  group-hover:from-amber-500 group-hover:to-yellow-600">
                    <span className="group-hover:animate-pulse">Book Now</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
          {filteredEvents.length === 0 && (
            <div className="animate-fade-in py-12 text-center">
              <div className="mb-4 text-6xl opacity-50">😔</div>
              <p className="text-lg text-gray-500">No events found matching your criteria.</p>
            </div>
          )}
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

        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
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

        .animate-fade-in {
          animation: fade-in 0.5s ease-out;
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
      <Footer/>
    </div>
  );
};

export default ScheduledEventsPage;