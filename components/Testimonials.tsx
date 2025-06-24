"use client"

import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    name: 'Apoorwa Devappa',
    text: `I choose them for my two day wedding, they indeed made it the most memorable one. Every work was delivered as promised. Very cooperative and highly charming team. Will surely opt them in future tooo`,
    rating: 5,
  },
  {
    name: 'Nagaraju Badri',
    text: `It's amazing service and people also very respective response and good profession`,
    rating: 5,
  },
  {
    name: 'Tejaswini Ikkurthi',
    text: `Excellent quality work. All corporates can go ahead with them for all your business meetings without second thought.`,
    rating: 5,
  },
  {
    name: 'Rohit Sharma',
    text: `We loved having you onboard for one of the events and must say everyone loved the way the event was planned and implemented. Our decision to engage you turned out to be a good one. Highly recommended for any end to end events.`,
    rating: 5,
  },
  {
    name: 'Priya Menon',
    text: `They are quite flexible and cater to people's dynamic needs. The team is very professional and friendly.`,
    rating: 4,
  },
  {
    name: 'Siddharth Rao',
    text: `Great experience! The event was a huge success thanks to their dedication and attention to detail.`,
    rating: 5,
  },
];

function getInitials(name: string) {
  return name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase();
}

const cardVariants = {
  offscreen: { opacity: 0, y: 60 },
  onscreen: { opacity: 1, y: 0, transition: { type: 'spring' as const, bounce: 0.3, duration: 0.8 } },
};
const floatingCircles = [
    { size: '120px', top: '10%', left: '5%', delay: 0 },
    { size: '80px', top: '60%', left: '10%', delay: 0.5 },
    { size: '100px', top: '20%', left: '80%', delay: 1 },
    { size: '60px', top: '75%', left: '70%', delay: 1.5 },
    { size: '90px', top: '40%', left: '50%', delay: 0.8 },
  ];
  
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

const Testimonials = () => {
  return (
    <section className="relative overflow-hidden py-20">
      <GoldAnimatedBackground />
      {floatingCircles.map((circle, i) => (
        <motion.div
          key={i}
          className="pointer-events-none absolute z-0 opacity-40 blur-2xl"
          style={{
            width: circle.size,
            height: circle.size,
            top: circle.top,
            left: circle.left,
            background: 'radial-gradient(circle at 60% 40%, #fde047 60%, #fbbf24 100%)',
            borderRadius: '50%',
          }}
          animate={{
            y: [0, -20, 0],
            x: [0, 10, 0],
            opacity: [0.4, 0.6, 0.4],
          }}
          transition={{
            duration: 6 + i,
            repeat: Infinity,
            repeatType: 'mirror',
            delay: circle.delay,
            ease: 'easeInOut',
          }}
        />
      ))}
      <h2 className="mb-12 text-center text-5xl font-extrabold text-gray-900">Our <span className='text-yellow-400'>Reviews</span></h2>
      <div className="mx-auto grid h-full max-w-5xl grid-cols-1 gap-10 px-4 md:grid-cols-2">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            className={`relative flex h-full flex-col justify-between rounded-lg p-5 pt-7 transition-all duration-300 ${
              i % 2 === 0 ? 'bg-[#353237] text-white' : 'border border-gray-100 bg-gray-100 text-gray-900'
            }`}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariants}
          >
            <div>
              <p className="mb-3 text-base leading-relaxed">{t.text}</p>
              <div className="mb-1 flex items-center gap-1 text-sm">
                {[...Array(5)].map((_, idx) => (
                  <span key={idx} className={idx < t.rating ? 'text-yellow-400' : 'text-gray-300'}>
                    ★
                  </span>
                ))}
              </div>
            </div>
            <div className="mt-4 flex items-center gap-3">
              {/* Initials Avatar */}
              <div className={`flex size-10 items-center justify-center rounded-full text-lg font-bold ${i % 2 === 0 ? 'bg-white text-gray-800' : 'bg-gray-200 text-gray-700'}`}>{getInitials(t.name)}</div>
              <span className="text-base font-bold">{t.name}</span>
            </div>
            {/* Speech bubble tail at the bottom */}
            <div
              className={`absolute -bottom-2 left-8 size-4 rotate-45 ${
                i % 2 === 0 ? 'bg-[#353237]' : 'border-b border-l border-gray-100 bg-gray-100'
              }`}
              style={{ zIndex: 1 }}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;