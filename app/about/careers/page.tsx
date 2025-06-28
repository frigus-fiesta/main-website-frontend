"use client";

import React, { useEffect, useState } from "react";
import { Send, Star } from 'lucide-react';

import Header from "@/components/Header";
import Footer from "@/components/Footer";

// GoldAnimatedBackground from team page
const GoldAnimatedBackground = () => (
  <div className="pointer-events-none absolute left-0 top-0 -z-10 size-full">
    <svg
      className="absolute size-full"
      preserveAspectRatio="xMidYMid slice"
      viewBox="0 0 1920 1080"
    >
      <path d="M 0 200 C 300 400, 600 100, 900 300 S 1200 500, 1500 200" stroke="#FFD700" strokeWidth="2.5" fill="none" opacity="0.13" />
      <path d="M 200 800 C 500 600, 800 900, 1100 700 S 1400 500, 1700 800" stroke="#FFB300" strokeWidth="1.5" fill="none" opacity="0.13" />
      <path d="M 400 100 C 700 300, 1000 50, 1300 250 S 1600 400, 1900 150" stroke="#FFECB3" strokeWidth="1.5" fill="none" opacity="0.13" />
      <path d="M 100 900 C 400 700, 700 950, 1000 750 S 1300 550, 1600 900" stroke="#FFC107" strokeWidth="1.5" fill="none" opacity="0.13" />
    </svg>
  </div>
);

// Social Icons
const LinkedInIcon = () => (
  <svg className="size-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const InternshalaIcon = () => (
  <svg className="size-6" fill="currentColor" viewBox="0 0 32 32">
    <rect width="32" height="32" rx="6" fill="#00A5EC" />
    <text x="16" y="21" textAnchor="middle" fontSize="12" fill="#fff" fontFamily="Arial, Helvetica, sans-serif">IN</text>
  </svg>
);

interface Dot {
  baseX: number;
  baseY: number;
  duration: number;
  delay: number;
}

export default function CareersPage() {
  const [isHeroVisible, setIsHeroVisible] = useState(false);
  const [dots] = useState<Dot[]>(() =>
    Array.from({ length: 20 }, () => ({
      baseX: Math.random() * 100,
      baseY: Math.random() * 100,
      duration: 3 + Math.random() * 4,
      delay: Math.random() * 2,
    }))
  );
  // Form state and handlers (copied from Contact Us)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  useEffect(() => {
    setIsHeroVisible(true);
  }, []);

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <GoldAnimatedBackground />
      <Header />
      {/* Hero Section with floating gold dots and shimmer text */}
      <section
        className="relative flex h-[60vh] flex-col items-center justify-center overflow-hidden bg-gradient-to-t from-yellow-500 to-yellow-600 text-center md:h-[50vh]"
      >
        {/* Floating gold dots */}
        <div className="absolute inset-0 z-0">
          {dots.map((dot, i) => (
            <div
              key={i}
              className="absolute size-2 rounded-full bg-yellow-300 opacity-20"
              style={{
                left: `${dot.baseX}%`,
                top: `${dot.baseY}%`,
                animation: `float ${dot.duration}s ease-in-out infinite`,
                animationDelay: `${dot.delay}s`,
              }}
            ></div>
          ))}
        </div>
        <div className={`z-10 px-6 transition-all duration-1000 ease-out ${isHeroVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}>
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-white md:text-6xl">
            <span className="inline-block text-white">
              Careers
            </span>
          </h1>
          <p className={`text-md mb-8 leading-relaxed text-amber-100 transition-all delay-300 duration-1000 ease-out md:text-lg ${isHeroVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>Start your golden journey with us. Shape the future with passion and creativity!</p>
        </div>
        <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2">
          <div className="flex h-10 w-6 animate-bounce justify-center rounded-full border-2 border-white">
            <div className="mt-2 h-3 w-1 animate-pulse rounded-full bg-white"></div>
          </div>
        </div>
      </section>
      {/* Careers Application Form Section (styled like Contact Us) */}
      <section className="bg-gradient-to-br from-amber-50 to-yellow-50 px-6 py-20">
        <div className="max-w-8xl mx-auto">
          <div className="mb-12 text-center">
            <h2 className="animate-fade-in-up mb-6 text-4xl font-bold text-black md:text-5xl">Apply for a <span className='text-yellow-500'>Career</span></h2>
            <p className="animate-fade-in-up animation-delay-200 text-xl text-gray-600">We'd love to hear from you and discuss your next step with us!</p>
          </div>
          <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2">
            <div className="relative">
              <div className="animate-slide-in-up w-full rounded-2xl border-2 border-yellow-400 bg-white p-8 shadow-lg transition-all duration-500">
                <div className="absolute -right-4 -top-4 size-8 animate-ping rounded-full bg-gradient-to-r from-yellow-400 to-yellow-600 opacity-20" />
                <h3 className="mb-6 flex items-center gap-3 text-2xl font-bold text-amber-900">
                  <Send className="size-6 text-yellow-500 transition-transform duration-300 hover:rotate-12" />
                  Apply Now
                </h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div className="group relative">
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full rounded-xl border border-gray-200 px-4 py-3 transition-all duration-300 hover:border-amber-300 hover:shadow-lg focus:outline-none"
                        placeholder="Your Name"
                        required
                      />
                    </div>
                    <div className="group relative">
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full rounded-xl border border-gray-200 px-4 py-3 transition-all duration-300 hover:border-amber-300 hover:shadow-lg focus:outline-none"
                        placeholder="Your Email"
                        required
                      />
                    </div>
                  </div>
                  <div className="group relative">
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-gray-200 px-4 py-3 transition-all duration-300 hover:border-amber-300 hover:shadow-lg focus:outline-none"
                      placeholder="Subject / Position"
                      required
                    />
                  </div>
                  {/* Resume Upload */}
                  <div className="group relative">
                    <label className="mb-2 block text-sm font-semibold text-amber-900">Upload Resume</label>
                    <input
                      type="file"
                      name="resume"
                      accept=".pdf,.doc,.docx"
                      className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 transition-all duration-300 file:mr-4 file:rounded-full file:border-0 file:bg-yellow-50 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-yellow-700 hover:border-amber-300 hover:shadow-lg file:hover:bg-yellow-100 focus:outline-none"
                    />
                  </div>
                  <div className="group relative">
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className="w-full resize-none rounded-xl border border-gray-200 px-4 py-3 transition-all duration-300 hover:border-amber-300 hover:shadow-lg focus:outline-none"
                      placeholder="Tell us why you're a great fit..."
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitted}
                    className="group flex w-full items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-amber-400 to-yellow-500 py-4 font-semibold text-white  shadow-lg transition-all duration-300 hover:shadow-amber-400/25 active:scale-95 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    {isSubmitted ? (
                      <>
                        <Star className="size-5 animate-spin" />
                        Application Sent! ✨
                      </>
                    ) : (
                      <>
                        <Send className="size-5 transition-transform duration-300 hover:rotate-12" />
                        <span className="hover:animate-pulse">Send Application</span>
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
            <div className="space-y-8">
              <div className="animate-slide-in-up animation-delay-200 relative overflow-hidden rounded-2xl bg-gradient-to-br from-yellow-400 to-yellow-500  p-8 text-white shadow-xl transition-all duration-500">
                <div className="absolute right-0 top-0 size-32 -translate-y-16 translate-x-16 rounded-full bg-white/10" />
                <div className="absolute bottom-0 left-0 size-24 -translate-x-12 translate-y-12 rounded-full bg-white/10" />
                <div className="relative z-10">
                  <div className="mb-4 flex items-center gap-3">
                    <Star className="size-8 animate-pulse" />
                    <h3 className="text-2xl font-bold">
                      Why Join Us?
                    </h3>
                  </div>
                  <p className="mb-6 leading-relaxed text-yellow-100">
                    Ready to turn your career into golden reality? We're here to make it happen with style, innovation, and unmatched dedication to excellence.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="size-2 animate-pulse rounded-full bg-yellow-300" />
                      <span className="text-yellow-100">Growth Opportunities</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="size-2 animate-pulse rounded-full bg-yellow-300" />
                      <span className="text-yellow-100">Creative Environment</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="size-2 animate-pulse rounded-full bg-yellow-300" />
                      <span className="text-yellow-100">Supportive Team</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Did You Know Section styled like Contact Us gold card */}
      <section className="relative z-10 flex flex-col items-center justify-center px-4 py-12">
        <div className="animate-fade-in-up w-full max-w-2xl rounded-2xl bg-gradient-to-br from-yellow-400 to-yellow-500 p-8 text-center shadow-xl">
          <h2 className="animate-text-shimmer mb-4 text-3xl font-bold text-white">Did You Know?</h2>
          <p className="mb-4 text-lg text-yellow-100">Start the collaboration with us while figuring out the best solution based on your needs.</p>
          <div className="mt-4 flex flex-col items-center justify-center gap-4 md:flex-row">
            <span className="inline-block rounded-full bg-white/20 px-4 py-2 text-lg font-semibold text-yellow-100 shadow">📞 +91 91826 84160</span>
            <div className="mt-2 flex gap-3 md:mt-0">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 font-semibold text-white shadow transition-all duration-200 hover:scale-110 hover:shadow-lg hover:ring-2 hover:ring-white/40">
                <LinkedInIcon /> LinkedIn
              </a>
              <a href="https://internshala.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 font-semibold text-white shadow transition-all duration-200 hover:scale-110 hover:shadow-lg hover:ring-2 hover:ring-white/40">
                <InternshalaIcon /> Internshala
              </a>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
