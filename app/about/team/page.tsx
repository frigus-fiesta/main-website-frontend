"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaFeatherAlt } from "react-icons/fa";

import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import Image from "next/image";

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

const Sparkles = () => (
  <div className="pointer-events-none absolute inset-0 -z-20">
    {[...Array(18)].map((_, _i) => (
      <motion.span
        key={_i}
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

const teamMembers = [
  {
    name: "John Doe",
    role: "Founder & CEO",
    bio: "Visionary leader with a passion for innovation.",
  },
  {
    name: "Jane Smith",
    role: "CTO",
    bio: "Tech enthusiast and architect of scalable solutions.",
  },
  {
    name: "Emily Johnson",
    role: "Lead Designer",
    bio: "Creative mind behind our brand's visual identity.",
  },
  // Add more team members as needed
];

const OurTeamPage = () => {
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
          className="relative z-10 w-full max-w-5xl rounded-3xl border border-yellow-100 bg-white/80 p-10 shadow-2xl backdrop-blur-lg animate-border-glow flex flex-col items-center"
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
            Our <span className="text-yellow-400">Team</span>
          </motion.h1>
          <motion.p
            className="mb-8 text-gray-700 text-base font-medium text-center"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, type: "spring", stiffness: 100 }}
          >
            Meet the passionate people who drive our mission and vision.
          </motion.p>
          <div className="w-full flex flex-col gap-12">
            {[...Array(4)].map((_, idx) => (
              <div
                key={idx}
                className={`flex flex-col md:flex-row items-center justify-between gap-8 ${idx % 2 === 1 ? "md:flex-row-reverse" : ""}`}
              >
                <div className="flex-1 flex justify-center">
                  <ThreeDCardDemo />
                </div>
                <div className="flex-1 flex flex-col justify-center items-center md:items-start">
                  <h2 className="text-xl font-bold text-yellow-700 mb-2">
                    Team Member {idx + 1}
                  </h2>
                  <p className="text-gray-700 text-base max-w-md text-center md:text-left">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Pellentesque vitae velit ex.
                  </p>
                </div>
              </div>
            ))}
          </div>
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

function ThreeDCardDemo() {
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-white/90 border-yellow-100 group/card w-auto sm:w-[30rem] h-auto rounded-xl p-6 border shadow-lg">
        <CardItem translateZ="50" className="text-xl font-bold text-yellow-700">
          Make things float in air
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-yellow-700/80 text-sm max-w-sm mt-2"
        >
          Hover over this card to unleash the power of CSS perspective
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            height={240}
            width={400}
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
            priority
          />
        </CardItem>
        <div className="flex justify-between items-center mt-20">
          <CardItem
            translateZ={20}
            as="a"
            href="https://twitter.com/mannupaaji"
            target="__blank"
            className="px-4 py-2 rounded-xl text-xs font-normal text-yellow-700 hover:bg-yellow-100 transition"
          >
            Try now →
          </CardItem>
          <CardItem
            translateZ={20}
            as="button"
            className="px-4 py-2 rounded-xl bg-yellow-400 text-white text-xs font-bold hover:bg-yellow-500 transition"
          >
            Sign up
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}

export default OurTeamPage;
