"use client";
import React from 'react';
import Link from 'next/link';
import { FaWhatsapp } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Homepage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: 'easeOut' as const,
      },
    },
  };

  return (
    <section className="relative flex h-screen items-center justify-center overflow-hidden text-white">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute z-0 size-full object-cover"
      >
        <source src="/assets/homepagevideo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 z-10 bg-black/60" />
      <motion.div 
        className="relative z-20 flex flex-col items-center px-4 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.p 
          className="mb-4 text-lg uppercase tracking-wide md:text-xl"
          variants={itemVariants}
        >
          Dream Weddings Made Easy.
        </motion.p>
        <motion.h1 
          className="bg-gradient-to-r from-yellow-400 to-yellow-500 bg-clip-text text-6xl font-extrabold uppercase leading-none tracking-tighter text-transparent md:text-8xl"
          variants={itemVariants}
          style={{ WebkitTextStroke: '1px rgba(255,255,255,0.1)' }}
        >
          Book Now
        </motion.h1>
        <motion.h2 
          className="mt-2 text-5xl font-bold tracking-wide"
          variants={itemVariants}
        >
          Learn More
        </motion.h2>
        <motion.div className="mt-12" variants={itemVariants}>
          <Link href="/contact">
            <span className="cursor-pointer rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 px-10 py-4 font-bold uppercase text-white">
              Curate Event With Us
            </span>
          </Link>
        </motion.div>
      </motion.div>
      <Link href="https://wa.link/t2d60w" target="_blank" rel="noopener noreferrer">
        <span className="fixed bottom-6 right-6 z-30 flex cursor-pointer items-center rounded-full bg-green-500 p-3 text-white shadow-lg transition-colors hover:scale-110 hover:bg-green-600">
          <FaWhatsapp className="size-6" />
        </span>
      </Link>
    </section>
  );
};

export default Homepage;