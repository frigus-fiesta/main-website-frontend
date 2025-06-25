"use client";
import React from "react";
import {
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon,
  HandThumbUpIcon,
} from "@heroicons/react/24/outline";
import { motion } from "framer-motion";

import WorldMap from "../ui/world-map";

import ContactUsMap from "./ContactUsMap";

const floatingCircles = [
  { size: '120px', top: '10%', left: '5%', delay: 0 },
  { size: '80px', top: '60%', left: '10%', delay: 0.5 },
  { size: '100px', top: '20%', left: '80%', delay: 1 },
  { size: '60px', top: '75%', left: '70%', delay: 1.5 },
  { size: '90px', top: '40%', left: '50%', delay: 0.8 },
];

const GoldAnimatedBackground = () => (
  <div className="pointer-events-none absolute left-0 top-0 -z-10 size-full overflow-hidden">
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
    {/* Floating gold circles */}
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
        initial={{ y: 0, x: 0, opacity: 0.4 }}
        animate={{ y: -20, x: 10, opacity: 0.6 }}
        transition={{
          duration: 2.5 + i,
          delay: circle.delay,
          ease: 'easeInOut',
          repeat: Infinity,
          repeatType: 'mirror',
        }}
      />
    ))}
  </div>
);

const ContactUsLanding = () => {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-white/10 px-6 py-24 text-white backdrop-blur-xl">
      <GoldAnimatedBackground />
      {/* Top Section: Get in Touch */}
      <div className="flex w-full max-w-[1440px] flex-col lg:flex-row">
        {/* Left Side */}
        <div className="mb-20 flex flex-1 flex-col items-center justify-start pt-24 lg:mb-0">
          <h1 className="text-center text-[60px] leading-[1.1] tracking-wider text-[#FFD700] sm:text-[90px]">
            Get in<br />touch.
          </h1>
          <div className="mt-8 flex w-full justify-center">
            <ContactUsMap />
          </div>
        </div>
        {/* Right Side */}
        <div className="flex flex-1 flex-col items-end justify-center space-y-20 pr-2 text-right sm:pr-8 md:pr-16 lg:pr-24">
          {/* Address */}
          <div className="flex flex-col items-end space-y-4">
            <div className="flex items-center gap-4">
              <MapPinIcon className="size-12 text-[#FFD700]" />
              <h3 className="text-5xl tracking-tighter text-black">Address</h3>
            </div>
            <p className="max-w-sm text-2xl text-gray-400">
              FRIGUS FIESTA<br />
              Jawahar Nagar, Sainikpuri,<br />
              Hyderabad, Telangana, India – 500094
            </p>
          </div>
          {/* Phone */}
          <div className="flex flex-col items-end space-y-4">
            <div className="flex items-center gap-4">
              <PhoneIcon className="size-12 text-[#FFD700]" />
              <h3 className="text-5xl tracking-tighter text-black">Phone</h3>
            </div>
            <p className="text-2xl text-gray-400">+91-91826-84160</p>
          </div>
          {/* Mail */}
          <div className="flex flex-col items-end space-y-4">
            <div className="flex items-center gap-4">
              <EnvelopeIcon className="size-12 text-[#FFD700]" />
              <h3 className="text-5xl tracking-tighter text-black">Mail</h3>
            </div>
            <p className="text-2xl text-gray-400">info@frigusfiesta.com</p>
          </div>
          {/* Social Links */}
          <div className="flex flex-col items-end space-y-4">
            <div className="flex items-center gap-4">
              <HandThumbUpIcon className="size-12 text-[#FFD700]" />
              <h3 className="text-5xl tracking-tighter text-black">Follow Us</h3>
            </div>
            <div className="flex gap-4">
              <a href="#" className="flex size-12 items-center justify-center rounded-full bg-white text-black transition hover:scale-110">in</a>
              <a href="#" className="flex size-12 items-center justify-center rounded-full bg-white text-black transition hover:scale-110">𝕏</a>
              <a href="#" className="flex size-12 items-center justify-center rounded-full bg-white text-black transition hover:scale-110">📸</a>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-40 flex w-full max-w-[1440px] flex-col-reverse gap-12 self-start lg:flex-row">
        {/* Left: Form */}
        <div className="min-w-[320px] flex-1">
          <div className="mb-6 flex items-center gap-3">
            <h2 className="text-7xl font-extrabold text-black">
              Start a <span className="text-[#FFD700]">conversation.</span>
            </h2>
            <div className="group relative">
              <button
                type="button"
                aria-label="Info"
                className="flex size-8 items-center justify-center rounded-full bg-[#FFD700] text-xl font-bold text-black hover:bg-yellow-400 focus:outline-none"
              >
                i
              </button>
              <div className="pointer-events-none absolute left-full top-1/2 z-20 ml-4 w-[340px] -translate-y-1/2 rounded-lg bg-white/95 p-4 text-sm text-black opacity-0 shadow-xl transition-all duration-200 group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100">
                <span className="mb-2 block text-base font-semibold">Welcome to our Contact Us page!</span>
                We value your feedback, inquiries, and suggestions. Whether you have a question about our services, want to collaborate, or simply wish to say hello, we're here to listen and assist you.<br /><br />
                Feel free to reach out to us using the contact information provided below. We strive to respond to all inquiries promptly.<br /><br />
                Have a specific question or need assistance? Our dedicated team is ready to help. Fill out the form below, and we'll get back to you as soon as possible.
              </div>
            </div>
          </div>
          <p className="mb-12 max-w-2xl text-lg text-gray-400">
            Let us know your requirements and we&apos;ll get back to you as soon as possible.
          </p>
          <form className="space-y-10">
            <div className="flex flex-col gap-8 md:flex-row">
              <div className="flex-1">
                <label className="mb-1 block text-sm text-black">Name*</label>
                <input
                  type="text"
                  className="w-full border-b border-gray-500 bg-transparent py-3 text-black focus:border-[#FFD700] focus:outline-none"
                />
              </div>
              <div className="flex-1">
                <label className="mb-1 block text-sm text-black">Email*</label>
                <input
                  type="email"
                  className="w-full border-b border-gray-500 bg-transparent py-3 text-black focus:border-[#FFD700] focus:outline-none"
                />
              </div>
            </div>
            {/* Message */}
            <div>
              <label className="mb-1 block text-sm text-black">Message*</label>
              <textarea
                rows={5}
                className="w-full resize-none border-b border-gray-500 bg-transparent py-3 text-black focus:border-[#FFD700] focus:outline-none"
                placeholder="Write your message..."
              />
            </div>
            {/* Submit */}
            <button
              type="submit"
              className="mt-4 w-full rounded-[1.75rem] border-2 border-yellow-400 bg-white py-3 font-semibold text-black transition-colors duration-300 hover:bg-yellow-100 focus:outline-none"
            >
              Send Message
            </button>
          </form>
        </div>
        {/* Right: Animated World Map */}
        <div className="flex min-w-[350px] flex-1 items-center justify-center">
          <WorldMap
            dots={[
              // Mumbai to London
              { start: { lat: 19.0760, lng: 72.8777, label: "Mumbai" }, end: { lat: 51.5074, lng: -0.1278, label: "London" } },
              // Mumbai to New York
              { start: { lat: 19.0760, lng: 72.8777, label: "Mumbai" }, end: { lat: 40.7128, lng: -74.0060, label: "New York" } },
              // Mumbai to Tokyo
              { start: { lat: 19.0760, lng: 72.8777, label: "Mumbai" }, end: { lat: 35.6895, lng: 139.6917, label: "Tokyo" } },
              // Mumbai to Sydney
              { start: { lat: 19.0760, lng: 72.8777, label: "Mumbai" }, end: { lat: -33.8688, lng: 151.2093, label: "Sydney" } },
              // Mumbai to Cape Town
              { start: { lat: 19.0760, lng: 72.8777, label: "Mumbai" }, end: { lat: -33.9249, lng: 18.4241, label: "Cape Town" } },
              // Mumbai to Moscow
              { start: { lat: 19.0760, lng: 72.8777, label: "Mumbai" }, end: { lat: 55.7558, lng: 37.6173, label: "Moscow" } },
              // Mumbai to San Francisco
              { start: { lat: 19.0760, lng: 72.8777, label: "Mumbai" }, end: { lat: 37.7749, lng: -122.4194, label: "San Francisco" } },
              // Mumbai to Cairo
              { start: { lat: 19.0760, lng: 72.8777, label: "Mumbai" }, end: { lat: 30.0444, lng: 31.2357, label: "Cairo" } },
              // Mumbai to Rio de Janeiro
              { start: { lat: 19.0760, lng: 72.8777, label: "Mumbai" }, end: { lat: -22.9068, lng: -43.1729, label: "Rio" } },
              // Mumbai to Beijing
              { start: { lat: 19.0760, lng: 72.8777, label: "Mumbai" }, end: { lat: 39.9042, lng: 116.4074, label: "Beijing" } },
            ]}
            lineColor="#FFD700"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactUsLanding;
