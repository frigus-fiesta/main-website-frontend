"use client"

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const services = [
  {
    title: 'Corporate Events',
    image: '/assets/ser1.jpg',
    desc: 'Professional, seamless, and memorable corporate gatherings tailored to your brand.',
  },
  {
    title: 'Live Concert',
    image: '/assets/ser2.jpg',
    desc: 'Electrifying live music experiences with top artists and immersive production.',
  },
  {
    title: 'Social Events',
    image: '/assets/ser3.jpg',
    desc: 'Vibrant parties, weddings, and celebrations that leave lasting memories.',
  },
];

const floatingCircles = [
  { size: '120px', top: '10%', left: '5%', delay: 0 },
  { size: '80px', top: '60%', left: '10%', delay: 0.5 },
  { size: '100px', top: '20%', left: '80%', delay: 1 },
  { size: '60px', top: '75%', left: '70%', delay: 1.5 },
  { size: '90px', top: '40%', left: '50%', delay: 0.8 },
];

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

const cardVariants = {
  initial: { y: 40, opacity: 0 },
  animate: { y: 0, opacity: 1, transition: { type: 'spring' as const, stiffness: 60 } },
};

const HomeServices = () => {
  return (
    <section className="relative py-24 min-h-[90vh] flex flex-col items-center justify-center">
      <GoldAnimatedBackground />
      {floatingCircles.map((circle, i) => (
        <motion.div
          key={i}
          className="pointer-events-none absolute z-0 blur-2xl opacity-40"
          style={{
            width: circle.size,
            height: circle.size,
            top: circle.top,
            left: circle.left,
            background: 'radial-gradient(circle at 60% 40%, #fde047 60%, #fbbf24 100%)',
            borderRadius: '50%',
          }}
          initial={{ y: 0, x: 0, opacity: 0.4 }}
          animate={{ y: -20, x: 10, opacity: 0.6 }}
          transition={{
            duration: 2.5 + i,
            delay: circle.delay,
            ease: 'easeInOut',
          }}
        />
      ))}
      <motion.h2
        className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4 text-center relative z-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        Our <span className="text-yellow-400">Services</span>
        <span className="block w-24 h-1 bg-yellow-400 mt-2 rounded-full mx-auto" />
      </motion.h2>
      <motion.p
        className="text-lg text-gray-500 max-w-2xl mx-auto mb-12 text-center z-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Discover the magic we bring to every event. Our expertise spans a wide range of unforgettable experiences.
      </motion.p>
      <div className="relative w-full flex justify-center z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl px-4">
          {services.map((service, idx) => (
            <motion.div
              key={service.title}
              className="group bg-white/90 rounded-3xl shadow-xl border border-yellow-100 min-w-[270px] max-w-xs w-full flex flex-col items-center p-6 transition-all duration-300 hover:-translate-y-1 cursor-pointer mx-auto"
              variants={cardVariants}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <div className="relative w-40 h-40 mb-4 rounded-2xl shadow-lg transition-transform duration-300">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover rounded-md"
                  sizes="(max-width: 768px) 100vw, 40vw"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2 text-center">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm text-center">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeServices;