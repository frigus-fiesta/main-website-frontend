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

const HomeClients = () => {
  const repeatedClients = [...clients, ...clients, ...clients]; // 15 images for smooth loop

  return (
    <section className="relative flex min-h-[60vh] flex-col items-center justify-center overflow-hidden py-24">
      <GoldAnimatedBackground />
      {floatingCircles.map((circle, i) => (
        <motion.div
          key={i}
          className={`pointer-events-none absolute z-0 opacity-40 blur-2xl`}
          style={{
            top: circle.top,
            left: circle.left,
            background: 'radial-gradient(circle at 60% 40%, #fde047 60%, #fbbf24 100%)',
            borderRadius: '50%',
            width: circle.size,
            height: circle.size,
          } as any}
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
        className="relative z-10 mb-2 text-center text-3xl font-extrabold text-gray-900 md:text-5xl"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        Our <span className="text-yellow-400">Clients</span>
        <span className="mx-auto mb-3 mt-2 block h-1 w-24 rounded-full bg-yellow-400" />
      </motion.h2>
      <motion.p
        className="z-10 mx-auto mb-12 max-w-2xl text-center text-lg text-gray-500"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        We`ve had the privilege of working with renowned artists and musical legends from around the world. 
      </motion.p>
      <div className="relative w-full max-w-8xl overflow-x-hidden mt-10">
        <div className="scrolling-carousel flex items-center gap-12" style={{ width: 'max-content', overflowY: 'hidden' }}>
          {repeatedClients.map((client, idx) => (
            <motion.div
              key={idx + client.name}
              className="group relative flex aspect-[4/3] w-96 min-w-[24rem] flex-col justify-end overflow-hidden rounded-2xl border border-yellow-100 bg-white shadow-xl transition-all duration-300"
              transition={{ duration: 0.7, delay: (idx % 5) * 0.1 }}
              viewport={{ once: true }}
            >
              <Image
                src={client.image}
                alt={client.name}
                fill
                className="size-full object-cover"
                sizes="(max-width: 768px) 90vw, 24rem"
              />
              <div className="pointer-events-none absolute inset-0 z-10 bg-black/0 transition-all duration-300 group-hover:bg-black/30" />
              <div
                className="absolute left-1/2 top-1/2 z-20 flex w-full -translate-x-1/2 translate-y-12 justify-center px-4 py-3 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100"
              >
                <span className="w-full truncate text-center text-2xl font-bold text-white drop-shadow-lg">
                  {client.name}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
        <style jsx>{`
          .scrolling-carousel {
            animation: scroll-x 30s linear infinite;
          }
          @keyframes scroll-x {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-33.333%);
            }
          }
        `}</style>
      </div>
    </section>
  );
};

export default HomeClients;