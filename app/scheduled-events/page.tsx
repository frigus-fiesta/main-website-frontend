"use client"

import React, { useState, useEffect } from 'react';
import { Calendar, Clock, MapPin, Users, Star, ChevronLeft, ChevronRight, Filter, Search } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const ScheduledEventsPage = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedService, setSelectedService] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

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
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-yellow-50">
      <Header/>
      <div className="relative h-screen md:h-[70vh] pt-10 bg-gradient-to-br from-yellow-500 to-yellow-400 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-amber-900/50 to-transparent"></div>
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
              <span className="text-yellow-300 inline-block animate-text-shimmer">
                Scheduled Events
              </span>
            </h1>
            <p className={`text-md md:text-lg text-amber-100 mb-8 leading-relaxed transition-all duration-1000 delay-300 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}>
              Discover extraordinary experiences crafted for corporate excellence, 
              live entertainment, and unforgettable social celebrations
            </p>
            <div className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 delay-500 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}>
              <button className="px-8 py-4 bg-gradient-to-r from-yellow-400 to-amber-500 text-white font-semibold rounded-full transition-all duration-300 shadow-2xl">
                Explore Events
              </button>
              <button className="px-8 py-4 border-2 border-white text-white font-semibold rounded-full transition-all duration-300">
                View Calendar
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
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6 animate-fade-in-up">Our <span className='text-yellow-500'>Services</span></h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in-up animation-delay-200">
              We are very proud of our client base and the lasting relationships we have forged over many years
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {services.map((service, index) => (
              <div 
                key={service.id} 
                className="relative overflow-hidden rounded-2xl bg-white shadow-xl transition-all duration-500 animate-fade-in-up cursor-pointer"
                style={{ animationDelay: `${index * 200}ms` }}
                onMouseEnter={() => setHoveredCard(service.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-10 transition-opacity duration-300`}></div>
                <div className="relative p-8 text-center">
                  <div className="text-6xl mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-amber-900 mb-4">
                    {service.name}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Professional {service.name.toLowerCase()} services tailored to create memorable experiences
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="py-20 px-6 bg-gradient-to-r from-amber-50 to-yellow-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6 animate-fade-in-up">Upcoming <span className='text-yellow-500'>Events</span></h2>
            <p className="text-xl text-gray-600 animate-fade-in-up animation-delay-200">Browse and book your next unforgettable experience</p>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-6 mb-12 animate-slide-in-up">
            <div className="flex flex-col gap-4 sm:gap-6 sm:flex-col lg:flex-row lg:items-center">
              <div className="w-full lg:flex-1">
                <div className="relative group">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 transition-colors duration-300 group-focus-within:text-amber-500" />
                  <input
                    type="text"
                    placeholder="Search events or locations..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all duration-300 hover:border-amber-300"
                  />
                </div>
              </div>
              <div className="w-full lg:w-auto overflow-x-auto">
                <div className="flex flex-wrap sm:flex-nowrap gap-2 sm:gap-3 min-w-[300px]">
                  <button
                    onClick={() => setSelectedService('all')}
                    className={`flex-1 min-w-[120px] px-4 py-3 rounded-xl font-semibold transition-all duration-300 text-sm sm:text-base ${
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
                      className={`flex-1 min-w-[120px] px-4 py-3 rounded-xl font-semibold transition-all duration-300 text-sm sm:text-base ${
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredEvents.map((event, index) => (
              <div 
                key={event.id} 
                className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-500 transform  hover:shadow-2xl animate-fade-in-up group cursor-pointer"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative h-48 bg-gradient-to-br from-amber-400 to-yellow-600 flex items-center justify-center overflow-hidden">
                  <div className="text-6xl text-white opacity-80 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                    {event.type === 'corporate' ? '🏢' : event.type === 'concert' ? '🎵' : '🎉'}
                  </div>
                  <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 transition-all duration-300 group-hover:bg-white/30">
                    <span className="text-white font-semibold text-sm">{event.price}</span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-amber-900 mb-3 line-clamp-2 group-hover:text-amber-700 transition-colors duration-300">
                    {event.title}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">{event.description}</p>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-gray-500 group-hover:text-gray-600 transition-colors duration-300">
                      <Calendar className="w-4 h-4 mr-2 transition-transform duration-300 group-hover:scale-110" />
                      <span className="text-sm">{formatDate(event.date)}</span>
                    </div>
                    <div className="flex items-center text-gray-500 group-hover:text-gray-600 transition-colors duration-300">
                      <Clock className="w-4 h-4 mr-2 transition-transform duration-300 group-hover:scale-110" />
                      <span className="text-sm">{event.time}</span>
                    </div>
                    <div className="flex items-center text-gray-500 group-hover:text-gray-600 transition-colors duration-300">
                      <MapPin className="w-4 h-4 mr-2 transition-transform duration-300 group-hover:scale-110" />
                      <span className="text-sm">{event.location}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-2 text-gray-400 transition-transform duration-300 group-hover:scale-110" />
                      <span className={`text-sm font-semibold ${getAvailabilityColor(event.booked, event.capacity)} transition-colors duration-300`}>
                        {event.booked}/{event.capacity} booked
                      </span>
                    </div>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-400 fill-current transition-transform duration-300 group-hover:scale-110 group-hover:animate-pulse" />
                      <span className="text-sm text-gray-600 ml-1">4.8</span>
                    </div>
                  </div>
                  <button className="w-full bg-gradient-to-r from-amber-400 to-yellow-500 text-white font-semibold py-3 rounded-xl transition-all duration-300 shadow-lg hover:shadow-amber-400/25 transform  active:scale-95 group-hover:from-amber-500 group-hover:to-yellow-600">
                    <span className="group-hover:animate-pulse">Book Now</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
          {filteredEvents.length === 0 && (
            <div className="text-center py-12 animate-fade-in">
              <div className="text-6xl mb-4 opacity-50">😔</div>
              <p className="text-gray-500 text-lg">No events found matching your criteria.</p>
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