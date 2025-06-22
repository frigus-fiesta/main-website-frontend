"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const clients = [
  { name: 'Robert M. Weiss', image: '/assets/client1.jpg' },
  { name: 'Margaret Smith', image: '/assets/client2.jpg' },
  { name: 'Bonnie McKee', image: '/assets/client3.jpg' },
  { name: 'Leland Duncan', image: '/assets/client4.jpg' },
  { name: 'Over The Board', image: '/assets/client5.jpg' },
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

const HomeClients = () => {
  return (
    <section className="relative py-24 min-h-[80vh] flex flex-col items-center justify-center overflow-hidden">
      <GoldAnimatedBackground />
      {/* Floating yellow circles (same as HomeAbout, now above SVG) */}
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
        className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-2 text-center relative z-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        Our <span className="text-yellow-400">Clients</span>
      </motion.h2>
      <motion.p
        className="text-lg text-gray-500 max-w-2xl mx-auto mb-12 text-center z-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        Display logos of your clients on your website to show credibility and build trust.
      </motion.p>
      <div className="w-full flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full max-w-6xl px-4">
          {clients.map((client, idx) => (
            <motion.div
              key={client.name}
              className="rounded-xl overflow-hidden shadow-lg border border-yellow-100 bg-white flex flex-col justify-end aspect-[4/3] relative group transition-all duration-300"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <Image
                src={client.image}
                alt={client.name}
                fill
                className="object-cover w-full h-full"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute left-0 bottom-0 w-full bg-gradient-to-t from-black/80 to-transparent px-4 py-3 flex items-end justify-center">
                <span className="text-white font-bold text-lg drop-shadow-lg text-center w-full truncate">
                  {client.name}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeClients;