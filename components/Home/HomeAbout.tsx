"use client";

import React from 'react';
import { motion } from 'framer-motion';

const YOUTUBE_VIDEO_ID = 'YWp3pVI3kog'; // Correct video ID only

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

const HomeAbout = () => {
  return (
    <section className="relative flex min-h-[70vh] flex-col items-center justify-center overflow-hidden px-4 py-8 xl:flex-row xl:px-8">
      <GoldAnimatedBackground />
      <div className="flex flex-1 flex-col items-center justify-center px-4 py-8 xl:px-8">
        <motion.h2 
          className="relative mb-4 text-center text-2xl font-extrabold text-gray-800 sm:text-3xl md:text-4xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Welcome to <span className='text-yellow-400'> Frigus Fiesta </span>
          <span className="absolute -bottom-2 left-1/2 mt-2 block h-0.5 w-16 -translate-x-1/2 rounded-full bg-yellow-400" />
        </motion.h2>
        <motion.p 
          className="mt-4 max-w-xl text-center text-sm text-gray-500 sm:text-base xl:text-xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Are you looking to add a touch of magic to your events in India? Look no further than Frigus Fiesta! As one of the leading entertainment websites in the country, Frigus Fiesta specializes in organizing a wide array of events and services, ranging from corporate gatherings to electrifying live concerts and vibrant social events. With a presence in key cities like Pune, Hyderabad, Delhi, and Bangalore, Frigus Fiesta brings the joy of celebration to every corner of the nation.
        </motion.p>
      </div>
      <div className="flex w-full flex-1 items-center justify-center px-4 py-8 xl:px-8">
        <motion.div
          className="relative w-full max-w-2xl"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="relative aspect-video w-full overflow-hidden rounded-xl shadow-xl">
            <iframe
              src={`https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}?si=77o_iSKN-Kg_DkAW`}
              title="Frigus Fiesta Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 size-full"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HomeAbout;
