"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaFeatherAlt } from "react-icons/fa";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

// GoldAnimatedBackground and floatingCircles copied from HomeServices/HomeAbout/Testimonials
const floatingCircles = [
  { size: "120px", top: "10%", left: "5%", delay: 0 },
  { size: "80px", top: "60%", left: "10%", delay: 0.5 },
  { size: "100px", top: "20%", left: "80%", delay: 1 },
  { size: "60px", top: "75%", left: "70%", delay: 1.5 },
  { size: "90px", top: "40%", left: "50%", delay: 0.8 },
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

const terms = [
  {
    title: "1. Acceptance of Terms",
    text: "By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.",
  },
  {
    title: "2. Modification of Terms",
    text: "We reserve the right to change, modify, or revise these terms at any time. Your continued use of the site will signify your acceptance of any adjustment to these terms.",
  },
  {
    title: "3. User Responsibilities",
    text: "You agree to use the website only for lawful purposes and in a way that does not infringe the rights of, restrict or inhibit anyone else's use and enjoyment of the website.",
  },
  {
    title: "4. Intellectual Property",
    text: "All content, trademarks, and data on this website, including but not limited to software, databases, text, graphics, icons, hyperlinks, private information, designs, and agreements, are the property of or licensed to us and as such are protected from infringement by local and international legislation and treaties.",
  },
  {
    title: "5. Limitation of Liability",
    text: "We will not be liable for any direct, indirect, incidental, special, or consequential damages resulting from the use or the inability to use the website or for the cost of procurement of substitute goods and services.",
  },
  {
    title: "6. Governing Law",
    text: "These terms and conditions are governed by and construed in accordance with the laws of the jurisdiction in which the company operates.",
  },
];

const textVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.2 + i * 0.2,
      duration: 0.7,
      stiffness: 60,
    },
  }),
};

// Sparkle/particle effect
const Sparkles = () => (
  <div className="pointer-events-none absolute inset-0 -z-20">
    {[...Array(18)].map((_, i) => (
      <motion.span
        key={i}
        className="absolute rounded-full bg-yellow-200 opacity-60 blur-sm"
        style={{
          width: `${6 + Math.random() * 8}px`,
          height: `${6 + Math.random() * 8}px`,
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
        }}
        animate={{
          y: [0, -10 - Math.random() * 20, 0],
          opacity: [0.6, 1, 0.6],
        }}
        transition={{
          duration: 3 + Math.random() * 2,
          repeat: Infinity,
          repeatType: "mirror",
          delay: Math.random() * 2,
        }}
      />
    ))}
  </div>
);

// Animated divider
const AnimatedDivider = () => (
  <motion.div
    className="mx-auto mb-8 h-1 w-24 rounded-full bg-gradient-to-r from-yellow-400 via-yellow-200 to-yellow-400"
    initial={{ scaleX: 0 }}
    whileInView={{ scaleX: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.7, type: "spring" }}
    style={{ originX: 0 }}
  />
);

const titleVariants = {
  hidden: { opacity: 0, scale: 0.8, rotate: -8 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: {
      delay: 0.2 + i * 0.2,
      duration: 0.7,
      stiffness: 80,
    },
  }),
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 40 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.8, stiffness: 60 },
  },
};

const TermsAndConditionsPage = () => {
  return (
    <>
      <Header />
      <section className="relative min-h-screen flex flex-col items-center justify-center py-24 overflow-hidden">
        <GoldAnimatedBackground />
        <Sparkles />
        {/* Floating/rotating feather icon */}
        <motion.div
          className="pointer-events-none absolute left-1/2 top-24 z-0 text-yellow-300 opacity-30"
          style={{ fontSize: 120, marginLeft: -60 }}
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        >
          <FaFeatherAlt />
        </motion.div>
        {floatingCircles.map((circle, _i) => (
          <motion.div
            key={_i}
            className="pointer-events-none absolute z-0 opacity-40 blur-2xl"
            style={{
              width: circle.size,
              height: circle.size,
              top: circle.top,
              left: circle.left,
              background:
                "radial-gradient(circle at 60% 40%, #fde047 60%, #fbbf24 100%)",
              borderRadius: "50%",
            }}
            initial={{ y: 0, x: 0, opacity: 0.4 }}
            animate={{ y: -20, x: 10, opacity: 0.6 }}
            transition={{
              duration: 2.5 + _i,
              delay: circle.delay,
              ease: "easeInOut",
            }}
          />
        ))}
        <motion.div
          className="relative z-10 w-full max-w-3xl rounded-3xl border border-yellow-100 bg-white/80 p-10 shadow-2xl backdrop-blur-lg animate-border-glow flex flex-col items-center"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, type: "spring", stiffness: 80 }}
        >
          <motion.h1
            className="mb-4 text-center text-3xl md:text-4xl font-extrabold text-gray-900"
            initial={{ opacity: 0, y: 16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.4, type: "spring", stiffness: 120 }}
          >
            Terms <span className="text-yellow-400">&amp; Conditions</span>
          </motion.h1>
          <motion.p
            className="mb-8 text-gray-700 text-base font-medium text-center"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, type: "spring", stiffness: 100 }}
          >
            Please read these Terms and Conditions carefully before using our
            website.
          </motion.p>
          <motion.div
            className="w-full flex flex-col gap-8"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.08,
                },
              },
            }}
          >
            {terms.map((term, _i) => (
              <motion.div
                key={term.title}
                className="mb-2"
                variants={{
                  hidden: { opacity: 0, y: 18 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.35,
                      type: "spring",
                      stiffness: 100,
                    },
                  },
                }}
              >
                <motion.h2
                  className="mb-2 text-xl font-bold text-yellow-600"
                  initial={false}
                  animate={false}
                >
                  {term.title}
                </motion.h2>
                <motion.p
                  className="text-gray-700 text-base"
                  initial={false}
                  animate={false}
                >
                  {term.text}
                </motion.p>
              </motion.div>
            ))}
          </motion.div>
          <div className="mt-10 text-xs text-gray-400 text-center w-full">
            &copy; {new Date().getFullYear()} Frigus Fiesta. All rights
            reserved.
          </div>
        </motion.div>
        {/* Border glow animation */}
        <style jsx>{`
          .animate-border-glow {
            box-shadow:
              0 0 32px 0 #fde04766,
              0 0 0 4px #fde04722;
            animation: borderGlow 3s ease-in-out infinite alternate;
          }
          @keyframes borderGlow {
            0% {
              box-shadow:
                0 0 32px 0 #fde04766,
                0 0 0 4px #fde04722;
            }
            100% {
              box-shadow:
                0 0 48px 8px #fde047bb,
                0 0 0 8px #fde04744;
            }
          }
        `}</style>
      </section>
      <Footer />
    </>
  );
};

export default TermsAndConditionsPage;
