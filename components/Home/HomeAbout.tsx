"use client"

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const YOUTUBE_VIDEO_ID = 'YWp3pVI3kog?si=77o_iSKN-Kg_DkAW'; // Replace with your video

const floatingCircles = [
  { size: '120px', top: '10%', left: '5%', delay: 0 },
  { size: '80px', top: '60%', left: '10%', delay: 0.5 },
  { size: '100px', top: '20%', left: '80%', delay: 1 },
  { size: '60px', top: '75%', left: '70%', delay: 1.5 },
  { size: '90px', top: '40%', left: '50%', delay: 0.8 },
];

const GoldAnimatedBackground = () => (
  <div className="pointer-events-none absolute left-0 top-0 -z-20 size-full overflow-hidden">
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
      <circle r="1.2" fill="#FFD700" />
      <circle r="0.8" fill="#FFB300" />
      <circle r="1.1" fill="#FFECB3" />
      <circle r="0.9" fill="#FFC107" />
      <circle r="1" fill="#FFF8E1" />
      <circle cx="200" cy="800" r="80" fill="#FFD700" opacity="0.03" />
      <circle cx="900" cy="250" r="100" fill="#FFB300" opacity="0.03" />
      <circle cx="1500" cy="850" r="60" fill="#FFD700" opacity="0.03" />
      <circle cx="400" cy="150" r="70" fill="#FFECB3" opacity="0.03" />
      <circle cx="1200" cy="600" r="90" fill="#FFC107" opacity="0.03" />
      <circle cx="600" cy="950" r="50" fill="#FFF8E1" opacity="0.03" />
      <circle cx="1700" cy="300" r="75" fill="#FFD700" opacity="0.03" />
    </svg>
  </div>
);

const HomeAbout = () => {
  const [modalOpen, setModalOpen] = useState(false);

  // Prevent background scroll when modal is open
  React.useEffect(() => {
    if (modalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => { document.body.style.overflow = ''; };
  }, [modalOpen]);

  return (
    <section className="relative flex min-h-[70vh] flex-col items-center justify-center overflow-hidden lg:flex-row">
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
      <div className="flex flex-1 flex-col items-center justify-center px-6 py-12 lg:px-16">
        <motion.h2 
          className="relative mb-2 text-center text-3xl font-extrabold text-gray-800 md:text-4xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Welcome to <span className='text-yellow-400'> Frigus Fiesta </span>
          <span className="absolute -bottom-2 left-1/2 mt-2 block h-0.5 w-16 -translate-x-1/2 rounded-full bg-yellow-400" />
        </motion.h2>
        <motion.p 
          className="mt-4 max-w-xl text-center text-gray-500 lg:text-base"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Are you looking to add a touch of magic to your events in India? Look no further than Frigus Fiesta! As one of the leading entertainment websites in the country, Frigus Fiesta specializes in organizing a wide array of events and services, ranging from corporate gatherings to electrifying live concerts and vibrant social events. With a presence in key cities like Pune, Hyderabad, Delhi, and Bangalore, Frigus Fiesta brings the joy of celebration to every corner of the nation.
        </motion.p>
      </div>
      <div className="flex flex-1 items-center justify-center px-6 py-12">
        <motion.div
          className="group relative flex w-full max-w-xl cursor-pointer items-center justify-center"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          onClick={() => setModalOpen(true)}
          tabIndex={0}
          aria-label="Play video"
          onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') setModalOpen(true); }}
        >
          <Image
            width={100000000000}
            height={100000000000}
            src="/assets/aboutus.jpg"
            alt="Frigus Fiesta event preview"
            className="lg:h-100 h-80 w-full rounded-md object-cover shadow-xl transition group-hover:brightness-75"
            style={{ background: '#eee' }}
          />
          <span className="absolute inset-0 flex animate-pulse items-center justify-center">
            <span className="rounded-full bg-yellow-400 p-4 shadow-lg transition-transform">
              <svg width="32" height="32" viewBox="0 0 48 48" fill="none"><circle cx="24" cy="24" r="24" fill="white" fillOpacity="0.7"/><polygon points="20,16 34,24 20,32" fill="#fbbf24"/></svg>
            </span>
          </span>
        </motion.div>
      </div>
      <AnimatePresence>
        {modalOpen && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setModalOpen(false)}
            tabIndex={-1}
            aria-modal="true"
            role="dialog"
          >
            <motion.div
              className="relative overflow-hidden rounded-2xl bg-black shadow-2xl"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              onClick={e => e.stopPropagation()}
            >
              <button
                className="absolute right-2 top-2 z-10 rounded-full bg-black/50 p-2 text-white hover:bg-black/80 focus:outline-none"
                onClick={() => setModalOpen(false)}
                aria-label="Close video"
              >
                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/></svg>
              </button>
              <iframe
                width="560"
                height="315"
                src={`https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}&autoplay=1&rel=0`}
                title="Frigus Fiesta Video"
                allow="autoplay; encrypted-media"
                allowFullScreen
                className="h-[45vw] max-h-[70vh] w-screen max-w-2xl rounded-sm"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default HomeAbout;