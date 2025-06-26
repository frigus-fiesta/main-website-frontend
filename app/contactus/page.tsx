"use client"

import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Send, Star, Sparkles, Clock, Users } from 'lucide-react';

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

export default function ContactUsPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      details: 'info@frigusfiesta.com',
      subtext: 'Get in touch via email',
      color: 'from-amber-400 to-yellow-600',
      type: 'email',
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: '91-91826-84160',
      subtext: '24/7 Customer Support',
      color: 'from-purple-400 to-pink-600',
      type: 'phone',
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      details: 'Jawahar Nagar, Sainikpuri',
      subtext: 'Hyderabad, Telangana, India- 500094',
      color: 'from-blue-400 to-indigo-600',
      type: 'location',
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7609.93065747853!2d78.55794824031105!3d17.50916843359547!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9b5918496265%3A0x4d19b982b705c4df!2sJawahar%20Nagar%2C%20Sainikpuri%2C%20Secunderabad%2C%20Telangana%20500094!5e0!3m2!1sen!2sin!4v1750941309487!5m2!1sen!2sin',
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: 'Mon - Fri: 9AM - 6PM',
      subtext: 'Weekend: 10AM - 4PM',
      color: 'from-green-400 to-teal-600',
      type: 'hours',
    }
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
        <div className={`relative z-10 flex items-center justify-center h-full text-center px-6 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight animate-fade-in-up">
              <span className="text-white inline-block animate-text-shimmer">
                Contact Us
              </span>
            </h1>
            <p className={`text-md md:text-lg text-amber-100 mb-8 leading-relaxed transition-all duration-1000 delay-300 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}>
              Ready to start something amazing? Let's create magic together with a touch of gold.
              We're here to make your dreams a reality.
            </p>
            <div className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 delay-500 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}>
              <button className="px-8 py-4 bg-gradient-to-r from-yellow-400 to-amber-500 text-white font-semibold rounded-full transition-all duration-300 shadow-2xl hover:shadow-amber-400/25 transform ">
                Get In Touch
              </button>
              <button className="px-8 py-4 border-2 border-white text-white font-semibold rounded-full transition-all duration-300 hover:bg-white hover:text-yellow-600">
                Schedule Call
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
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6 animate-fade-in-up">Get In <span className='text-yellow-500'>Touch</span></h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in-up animation-delay-200">
              We are very proud of our client base and the lasting relationships we have forged over many years
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-2xl shadow-xl transition-all duration-500 animate-fade-in-up cursor-pointer  transform bg-white group"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${info.color} opacity-10 transition-opacity duration-300 group-hover:opacity-20`}></div>
                <div className="relative p-8 text-center">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br ${info.color} flex items-center justify-center shadow-lg transition-transform duration-300  group-hover:rotate-6`}>
                    <info.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-amber-900 mb-2 hover:text-amber-700 transition-colors duration-300">
                    {info.title}
                  </h3>
                  <p className="text-gray-800 font-semibold mb-1">
                    {info.details}
                  </p>
                  <p className="text-gray-600 text-sm">
                    {info.subtext}
                  </p>
                  {info.type === 'location' && (
                    <div className="absolute inset-0 flex items-center justify-center bg-white/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                      <iframe
                        src={info.mapUrl}
                        width="100%"
                        height="100%"
                        style={{ border: 0, minHeight: '200px', borderRadius: '1rem' }}
                        allowFullScreen={true}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title={`${info.title} Location`}
                      ></iframe>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="py-20 px-6 bg-gradient-to-br from-amber-50 to-yellow-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6 animate-fade-in-up">Send us a <span className='text-yellow-500'>Message</span></h2>
            <p className="text-xl text-gray-600 animate-fade-in-up animation-delay-200">We'd love to hear from you and discuss your next project</p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-lg p-8 transition-all duration-500 animate-slide-in-up">
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full animate-ping opacity-20" />
                <h3 className="text-2xl font-bold text-amber-900 mb-6 flex items-center gap-3">
                  <Send className="w-6 h-6 text-yellow-500 transition-transform duration-300 hover:rotate-12" />
                  Get Started Today
                </h3>
                <div className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="relative group">
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none transition-all duration-300 hover:border-amber-300 hover:shadow-lg"
                        placeholder="Your Name"
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
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none transition-all duration-300 hover:border-amber-300 hover:shadow-lg"
                      placeholder="Subject"
                      required
                    />
                  </div>
                  <div className="relative group">
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none transition-all duration-300 hover:border-amber-300 resize-none hover:shadow-lg"
                      placeholder="Tell us about your golden ideas..."
                      required
                    />
                  </div>
                  <button
                    onClick={handleSubmit}
                    disabled={isSubmitted}
                    className="w-full bg-gradient-to-r from-amber-400 to-yellow-500 text-white font-semibold py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-amber-400/25 transform  active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3 group"
                  >
                    {isSubmitted ? (
                      <>
                        <Star className="w-5 h-5 animate-spin" />
                        Message Sent! ✨
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 hover:rotate-12 transition-transform duration-300" />
                        <span className="hover:animate-pulse">Send Golden Message</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-2xl p-8 text-white shadow-xl transform  transition-all duration-500 relative overflow-hidden animate-slide-in-up animation-delay-200">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16" />
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12" />

                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <Sparkles className="w-8 h-8 animate-pulse" />
                    <h3 className="text-2xl font-bold">
                      Why Choose Us?
                    </h3>
                  </div>
                  <p className="text-yellow-100 leading-relaxed mb-6">
                    Ready to turn your dreams into golden reality? We're here to make it happen with style, innovation, and unmatched dedication to excellence.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-yellow-300 rounded-full animate-pulse" />
                      <span className="text-yellow-100">24/7 Premium Support</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-yellow-300 rounded-full animate-pulse" />
                      <span className="text-yellow-100">Fast Response Time</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-yellow-300 rounded-full animate-pulse" />
                      <span className="text-yellow-100">Expert Team</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-2xl p-6 border-2 border-yellow-200 transform  transition-all duration-300 hover:shadow-lg animate-slide-in-up animation-delay-400">
                <div className="flex items-center gap-3 mb-4">
                  <Users className="w-6 h-6 text-yellow-500" />
                  <h4 className="font-bold text-amber-900 text-xl">Join Our Community</h4>
                </div>
                <p className="text-gray-600 mb-4">
                  Connect with thousands of satisfied clients who trust us with their most important events and projects.
                </p>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="font-semibold text-amber-900">4.9/5</span>
                  </div>
                  <span className="text-gray-500">|</span>
                  <span className="text-gray-600">2,500+ Happy Clients</span>
                </div>
              </div>
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