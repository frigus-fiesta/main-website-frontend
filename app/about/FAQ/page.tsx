"use client";

import React, { useEffect, useState, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Confetti from "react-confetti";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

// --- Fun facts for after question submit ---
const funFacts = [
  "Frigus Fiesta has hosted over 1200 events!",
  "Our team can customize any event theme you dream of.",
  "We serve clients in 12+ cities across India.",
  "Our most popular event type is live concerts!",
  "We once organized a wedding with a snow machine!",
  "Our fastest event setup was under 3 hours!",
];

// --- FAQ data with categories ---
const faqCategories = [
  {
    name: "General",
    faqs: [
      { q: "What types of events does Frigus Fiesta organize?", a: "Frigus Fiesta specializes in organizing a wide range of events, including corporate gatherings, live concerts, social parties, weddings, and more." },
      { q: "What makes Frigus Fiesta stand out?", a: "Our unwavering commitment to excellence, creativity, and customer satisfaction sets us apart. We go above and beyond to ensure every event is a resounding success." },
      { q: "Can I customize my event?", a: "Absolutely! We tailor our services to your unique preferences and requirements." },
    ],
  },
  {
    name: "Booking",
    faqs: [
      { q: "How do I book an event?", a: "Simply contact our team via phone, email, or our website, and we'll guide you through the process step by step." },
      { q: "Can I book last-minute?", a: "We do our best to accommodate last-minute bookings, but recommend booking in advance for best results." },
    ],
  },
  {
    name: "Services",
    faqs: [
      { q: "Do you offer event design and decoration?", a: "Yes, we offer event design and decoration services to create a beautiful and memorable event." },
      { q: "Do you provide catering?", a: "Yes, we can provide catering services tailored to your event's needs and budget." },
      { q: "Do you offer equipment rental?", a: "Yes, we offer event equipment rental services including audiovisual equipment, furniture, and more." },
      { q: "Can you help with permits and licenses?", a: "Yes, we can assist you with obtaining the necessary permits and licenses for your event." },
    ],
  },
  {
    name: "Special",
    faqs: [
      { q: "Do you plan private parties?", a: "Yes! Whether you're celebrating a personal milestone or hosting a private gathering, our team is here to make your event unforgettable." },
      { q: "What is the most unique event you've done?", a: "We once organized a masquerade ball with live ice sculpting!" },
    ],
  },
];

const emojiList = [
  { emoji: "😍", label: "Loved it" },
  { emoji: "👍", label: "Helpful" },
  { emoji: "🤔", label: "Confused" },
  { emoji: "👎", label: "Not helpful" },
];

const GOLDEN_TICKET = "golden ticket";

// --- Animated SVG Particle Background with Parallax (optimized) ---
const ParallaxParticles = () => {
  const svgRef = useRef<SVGSVGElement>(null);
  const offset = useRef({ x: 0, y: 0 });
  useEffect(() => {
    let frame: number;
    const handle = (e: MouseEvent) => {
      offset.current = {
        x: (e.clientX - window.innerWidth / 2) / 40,
        y: (e.clientY - window.innerHeight / 2) / 40,
      };
      if (svgRef.current) {
        const circles = svgRef.current.querySelectorAll('circle');
        circles.forEach((circle, i) => {
          (circle as SVGCircleElement).setAttribute('cx', String(200 + Math.sin(i) * 700 + offset.current.x * (i % 3 === 0 ? 8 : 3)));
          (circle as SVGCircleElement).setAttribute('cy', String(200 + Math.cos(i) * 400 + offset.current.y * (i % 2 === 0 ? 8 : 3)));
        });
      }
    };
    const throttled = (e: MouseEvent) => {
      if (frame) cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => handle(e));
    };
    window.addEventListener("mousemove", throttled);
    
return () => {
      window.removeEventListener("mousemove", throttled);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);
  
return (
  <svg ref={svgRef} className="pointer-events-none fixed left-0 top-0 -z-10 size-full" viewBox="0 0 1920 1080">
    {[...Array(18)].map((_, i) => (
      <circle
          key={i}
          cx={200 + Math.sin(i) * 700}
          cy={200 + Math.cos(i) * 400}
          r={30 + (i % 5) * 10}
          fill="#FFD700"
          opacity={0.08 + (i % 3) * 0.04}
        />
      ))}
    {[...Array(8)].map((_, i) => (
      <rect
          key={100 + i}
          x={Math.random() * 1920}
          y={Math.random() * 1080}
          width={6 + Math.random() * 8}
          height={2 + Math.random() * 4}
          fill="#fff8e1"
          opacity={0.12}
          rx={2}
        />
      ))}
  </svg>
  );
};

// --- Typewriter effect for modal title ---
const useTypewriter = (text: string, speed = 60) => {
  const [displayed, setDisplayed] = useState("");
  useEffect(() => {
    setDisplayed("");
    let i = 0;
    const interval = setInterval(() => {
      setDisplayed(t => t + (text[i] ?? ""));
      i++;
      if (i >= text.length) clearInterval(interval);
    }, speed);
    
return () => clearInterval(interval);
  }, [text, speed]);
  
return displayed;
};

const FAQPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showAskModal, setShowAskModal] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", question: "" });
  const [submitted, setSubmitted] = useState(false);
  const [confetti, setConfetti] = useState(false);
  const [search, setSearch] = useState("");
  const [activeTab, setActiveTab] = useState(0);
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [feedback, setFeedback] = useState<{ [key: string]: number | null }>({});
  const [easterEgg, setEasterEgg] = useState(false);
  const [funFact, setFunFact] = useState<string | null>(null);
  const faqSectionRef = useRef<HTMLDivElement>(null);
  const typewriterTitle = useTypewriter("Ask a Question");
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  useEffect(() => { setIsVisible(true); }, []);

  useEffect(() => {
    if (search.toLowerCase().includes(GOLDEN_TICKET)) setEasterEgg(true);
    else setEasterEgg(false);
  }, [search]);

  const handleScrollToFaq = () => {
    faqSectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleAskOpen = () => setShowAskModal(true);
  const handleAskClose = () => {
    setShowAskModal(false);
    setForm({ name: "", email: "", question: "" });
    setSubmitted(false);
    setConfetti(false);
    setFunFact(null);
  };

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setConfetti(true);
    setFunFact(funFacts[Math.floor(Math.random() * funFacts.length)]);
    setTimeout(() => {
      setConfetti(false);
      handleAskClose();
    }, 2600);
  };

  // Filtered FAQs by search and category
  const filteredFaqs = faqCategories[activeTab].faqs.filter(faq =>
    faq.q.toLowerCase().includes(search.toLowerCase()) ||
    faq.a.toLowerCase().includes(search.toLowerCase())
  );

  // 3D Card Parallax effect (ref only, handlers removed for lint)
  const cardRef = useRef<(HTMLDivElement | null)[]>([]);

  // Emoji feedback
  const handleFeedback = (faqQ: string, emojiIdx: number) => {
    setFeedback({ ...feedback, [faqQ]: emojiIdx });
  };

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-gradient-to-br from-amber-50 to-yellow-50">
      <ParallaxParticles />
      <Header />
      <div className="relative h-[90vh] overflow-hidden pt-10 md:h-[70vh]">
        <div className="absolute inset-0 bg-gradient-to-t from-yellow-500 to-yellow-600" />
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute size-2 rounded-full bg-yellow-300 opacity-20"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 2}s`,
              }}
            />
          ))}
        </div>
        <div className={`relative z-10 flex h-full items-center justify-center px-6 text-center transition-all duration-1000 ease-out ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}>
          <div className="max-w-4xl">
            <h1 className="animate-fade-in-up mb-6 text-4xl font-bold tracking-tight text-white md:text-6xl">
              <span className="animate-text-shimmer inline-block text-white">FAQ's</span>
            </h1>
            <p className={`text-md mb-8 leading-relaxed text-amber-100 transition-all delay-300 duration-1000 ease-out md:text-lg ${isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}>
              Find answers to the most common questions about our services, process, and more.
            </p>
            <div className={`flex flex-col justify-center gap-4 transition-all delay-500 duration-1000 ease-out sm:flex-row ${isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}>
              <button
                className="rounded-full bg-gradient-to-r from-yellow-400 to-amber-500 px-8 py-4 font-semibold text-white shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-yellow-400/40"
                onClick={handleAskOpen}
              >
                Ask a Question
              </button>
              <button
                className="rounded-full border-2 border-white px-8 py-4 font-semibold text-white transition-all duration-300 hover:bg-white/10 hover:text-yellow-100"
                onClick={handleScrollToFaq}
              >
                View All FAQs
              </button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <div className="flex h-10 w-6 animate-bounce justify-center rounded-full border-2 border-white">
            <div className="mt-2 h-3 w-1 animate-pulse rounded-full bg-white" />
          </div>
        </div>
      </div>
      <div ref={faqSectionRef} className="mx-auto max-w-3xl px-4 py-20">
        <h2 className="mb-12 text-center text-3xl font-extrabold text-yellow-700 md:text-4xl">Frequently Asked Questions</h2>
        {/* Tabs for categories */}
        <div className="mb-10 flex justify-center gap-2">
          {faqCategories.map((cat, idx) => (
            <button
              key={cat.name}
              className={`relative rounded-full px-5 py-2 text-lg font-semibold transition-all duration-300 ${activeTab === idx ? "bg-gradient-to-r from-yellow-400 to-amber-400 text-white shadow-lg" : "bg-yellow-50 text-yellow-700 hover:bg-yellow-100"}`}
              onClick={() => { setActiveTab(idx); setOpenIndex(null); }}
            >
              {cat.name}
              {activeTab === idx && (
                <motion.span
                  layoutId="tab-underline"
                  className="absolute inset-x-0 -bottom-1 h-1 rounded-full bg-yellow-300"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>
        {/* Search bar */}
        <div className="mb-10 flex items-center justify-center gap-3">
          <input
            type="text"
            placeholder="Search FAQs... (try 'golden ticket')"
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="w-full max-w-md rounded-full border border-yellow-200 bg-yellow-50 px-5 py-3 text-base text-yellow-800 shadow focus:border-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-200"
            aria-label="Search FAQs"
          />
        </div>
        {/* Easter Egg */}
        {easterEgg && (
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="mb-10 flex flex-col items-center justify-center gap-2 rounded-2xl border-2 border-yellow-400 bg-gradient-to-r from-yellow-100 to-yellow-50 p-8 shadow-xl"
          >
            <span className="text-4xl">🎫✨</span>
            <span className="text-xl font-bold text-yellow-700">You found the Golden Ticket!</span>
            <span className="text-yellow-600">Enjoy a magical surprise at your next event 🎉</span>
          </motion.div>
        )}
        {/* FAQ Cards */}
        <motion.div
          className="space-y-10"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.12 } },
          }}
        >
          <AnimatePresence initial={false}>
            {filteredFaqs.length === 0 ? (
              <motion.div
                className="rounded-xl bg-white/90 p-10 text-center text-lg text-yellow-700 shadow"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
              >
                No FAQs found for your search.
              </motion.div>
            ) : (
              filteredFaqs.map((faq, idx) => {
                const realIdx = faqCategories[activeTab].faqs.findIndex(f => f.q === faq.q);
                const isOpen = openIndex === realIdx;
                const isHovered = hoveredIdx === idx;
                
return (
  <motion.div
                    key={faq.q}
                    layout
                    initial={{ opacity: 0, y: 18, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 18, scale: 0.98 }}
                    transition={{ duration: 0.35, type: "spring", stiffness: 120 }}
                  >
    <div
                      ref={el => { cardRef.current[idx] = el; }}
                      className={`group relative cursor-pointer select-none rounded-3xl border border-yellow-100 bg-white/95 p-8 shadow-lg transition-all duration-300 hover:shadow-yellow-200/60 ${isOpen ? "ring-2 ring-yellow-300" : ""}`}
                      onMouseMove={() => setHoveredIdx(idx)}
                      onMouseLeave={() => setHoveredIdx(null)}
                    >
      <button
                        className="flex w-full items-center justify-between text-xl font-bold text-yellow-700 outline-none transition-colors duration-200"
                        aria-expanded={isOpen}
                        aria-controls={`faq-panel-${realIdx}`}
                        onClick={() => setOpenIndex(isOpen ? null : realIdx)}
                      >
        <span>{faq.q}</span>
        <motion.span
                          className="ml-4 flex items-center justify-center"
                          initial={false}
                          animate={{ rotate: isOpen ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                        >
          <svg width="28" height="28" fill="none" stroke="#FFD700" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
        <motion.div
                            id={`faq-panel-${realIdx}`}
                            key="content"
                            initial="collapsed"
                            animate="open"
                            exit="collapsed"
                            variants={{
                              open: { height: "auto", opacity: 1 },
                              collapsed: { height: 0, opacity: 0 },
                            }}
                            transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                            className="overflow-hidden"
                          >
          <div className="pt-5 text-base text-gray-700">
            {faq.a}
          </div>
          {/* Emoji feedback */}
          <div className="mt-5 flex items-center gap-3 text-lg text-yellow-700">
            <span>How do you feel?</span>
            {emojiList.map((em, emIdx) => (
              <motion.button
                                  key={em.emoji}
                                  whileTap={{ scale: 1.2, rotate: [0, 10, -10, 0] }}
                                  className={`text-2xl transition-all duration-200 ${feedback[faq.q] === emIdx ? "scale-125 drop-shadow-[0_0_8px_#FFD700]" : "hover:scale-110"}`}
                                  onClick={() => handleFeedback(faq.q, emIdx)}
                                  aria-label={em.label}
                                >
                {em.emoji}
              </motion.button>
                              ))}
            {feedback[faq.q] !== null && (
            <span className="animate-fade-in ml-2 text-green-600">Thank you!</span>
                              )}
          </div>
        </motion.div>
                        )}
      </AnimatePresence>
      {/* Soft golden glow only on open/hover */}
      <motion.div
                        className="pointer-events-none absolute inset-0 -z-10 rounded-3xl bg-gradient-to-br from-yellow-200/30 to-yellow-400/20 opacity-0 blur-2xl transition-all duration-500"
                        animate={{ opacity: isOpen || isHovered ? 1 : 0 }}
                      />
    </div>
  </motion.div>
                );
              })
            )}
          </AnimatePresence>
        </motion.div>
      </div>
      <AnimatePresence>
        {showAskModal && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleAskClose}
          >
            <motion.div
              className="relative w-full max-w-lg rounded-2xl bg-white p-8 shadow-2xl"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", duration: 0.4 }}
              onClick={e => e.stopPropagation()}
            >
              <button
                className="absolute right-4 top-4 text-gray-400 hover:text-gray-700"
                onClick={handleAskClose}
                aria-label="Close modal"
              >
                <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
              </button>
              <h3 className="mb-4 min-h-10 text-2xl font-bold text-yellow-700">{typewriterTitle}</h3>
              {confetti && <Confetti width={window.innerWidth} height={window.innerHeight} numberOfPieces={220} recycle={false} gravity={0.25} />} 
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-8">
                  <svg className="mb-2 text-green-500" width="40" height="40" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                  <p className="text-lg font-semibold text-green-600">Thank you! Your question has been submitted.</p>
                  {funFact && <p className="mt-4 font-semibold text-yellow-700">💡 {funFact}</p>}
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-5">
                  <div>
                    <label className="mb-1 block text-sm font-semibold text-yellow-700">Name</label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleFormChange}
                      required
                      className="w-full rounded-lg border border-yellow-200 bg-yellow-50 px-4 py-2 text-gray-800 focus:border-yellow-400 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="mb-1 block text-sm font-semibold text-yellow-700">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleFormChange}
                      required
                      className="w-full rounded-lg border border-yellow-200 bg-yellow-50 px-4 py-2 text-gray-800 focus:border-yellow-400 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="mb-1 block text-sm font-semibold text-yellow-700">Your Question</label>
                    <textarea
                      name="question"
                      value={form.question}
                      onChange={handleFormChange}
                      required
                      rows={4}
                      className="w-full rounded-lg border border-yellow-200 bg-yellow-50 px-4 py-2 text-gray-800 focus:border-yellow-400 focus:outline-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full rounded-full bg-gradient-to-r from-yellow-400 to-amber-500 px-6 py-3 font-bold text-white shadow-lg transition-all duration-300 hover:from-yellow-500 hover:to-amber-600"
                  >
                    Submit Question
                  </button>
                </form>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <Footer />
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
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default FAQPage; 