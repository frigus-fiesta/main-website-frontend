"use client"

import React from 'react'
import { motion } from 'framer-motion'

const floatingCircles = [
  { size: '140px', top: '8%', left: '3%', delay: 0, color: 'from-amber-300 to-yellow-500' },
  { size: '100px', top: '65%', left: '8%', delay: 0.7, color: 'from-yellow-400 to-amber-600' },
  { size: '120px', top: '15%', left: '85%', delay: 1.2, color: 'from-amber-400 to-yellow-600' },
  { size: '80px', top: '78%', left: '75%', delay: 1.8, color: 'from-yellow-300 to-amber-500' },
  { size: '110px', top: '42%', left: '45%', delay: 0.9, color: 'from-amber-200 to-yellow-400' },
  { size: '70px', top: '25%', left: '25%', delay: 2.1, color: 'from-yellow-500 to-amber-700' },
]

const EnhancedGoldBackground = () => (
  <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-amber-50/30 via-yellow-50/20 to-orange-50/30" />
    <svg
      className="absolute size-full"
      preserveAspectRatio="xMidYMid slice"
      viewBox="0 0 1920 1080"
    >
      <defs>
        <linearGradient id="goldGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFD700" stopOpacity="0.2" />
          <stop offset="50%" stopColor="#FFB300" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#FF8F00" stopOpacity="0.1" />
        </linearGradient>
        <linearGradient id="goldGradient2" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFF8E1" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#FFD54F" stopOpacity="0.1" />
        </linearGradient>
      </defs>
      <path
        d="M -100 500 C 400 1000, 800 100, 1100 450 S 1600 1000, 2020 600"
        stroke="url(#goldGradient1)"
        strokeWidth="3"
        fill="none"
      />
      <path
        d="M 0 200 C 300 400, 600 100, 900 300 S 1200 500, 1500 200"
        stroke="url(#goldGradient2)"
        strokeWidth="2"
        fill="none"
      />
      <path
        d="M 200 800 C 500 600, 800 900, 1100 700 S 1400 500, 1700 800"
        stroke="#FFD700"
        strokeWidth="1.5"
        fill="none"
        opacity="0.12"
      />
    </svg>
  </div>
)

const SectionCard: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = "" }) => (
  <motion.div
    className={`relative rounded-3xl border border-amber-100/50 bg-white/80 p-8 shadow-xl backdrop-blur-sm transition-all duration-500 hover:shadow-2xl ${className}`}
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
    whileHover={{ scale: 1.02 }}
  >
    {children}
  </motion.div>
)

const VideoPlayer: React.FC<{ src: string; poster: string; className?: string }> = ({ src, poster, className = "" }) => (
  <div className={`group relative ${className}`}>
    <div className="absolute inset-0 rotate-3 rounded-2xl bg-gradient-to-br from-amber-400/20 to-yellow-600/20 transition-transform duration-500 group-hover:rotate-6" />
    <video
      src={src}
      controls
      className="relative mx-auto max-h-[400px] w-96 max-w-full rounded-2xl object-contain shadow-2xl transition-all duration-500 hover:shadow-amber-200/50"
      poster={poster}
    />
    <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-t from-black/10 to-transparent" />
  </div>
)

const HomeShowcase = () => {
  return (
    <div className="relative min-h-screen overflow-hidden px-4 py-16 sm:px-6 lg:px-8">
      <EnhancedGoldBackground />
      {floatingCircles.map((circle, i) => (
        <motion.div
          key={i}
          className="pointer-events-none absolute z-0 opacity-30 blur-2xl"
          style={{
            width: circle.size,
            height: circle.size,
            top: circle.top,
            left: circle.left,
          }}
          initial={{ y: 0, x: 0, opacity: 0.2, scale: 0.8 }}
          animate={{ 
            y: [-20, 20, -20], 
            x: [-10, 15, -10], 
            opacity: [0.2, 0.4, 0.2],
            scale: [0.8, 1.1, 0.8]
          }}
          transition={{
            duration: 4 + i * 0.5,
            delay: circle.delay,
            ease: "easeInOut",
            repeat: Infinity,
          }}
        >
          <div className={`size-full rounded-full bg-gradient-to-br ${circle.color}`} />
        </motion.div>
      ))}
      <div className="relative z-10 mx-auto max-w-7xl space-y-16">
        <SectionCard>
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="mb-4 inline-flex items-center rounded-full bg-amber-100 px-4 py-2 text-sm font-medium text-amber-700">
                  ✨ Premium Event Planning
                </div>
                <h2 className="text-3xl font-bold leading-tight text-gray-800">
                  Crafting Moments with 
                  <span className="text-yellow-500"> Precision</span>
                </h2>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="space-y-4"
              >
                <p className="text-lg leading-relaxed text-gray-600">
                  From intimate gatherings to grand celebrations, we transform your vision into reality. Our meticulous attention to detail and innovative approach ensures every event becomes a cherished memory.
                </p>
                <div className="flex items-center space-x-2 font-semibold text-amber-600">
                  <span className="text-2xl">🎯</span>
                  <span>"Where every detail matters, every moment counts"</span>
                </div>
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <VideoPlayer
                src="/assets/ss1.mp4"
                poster="/assets/thumb.png"
              />
            </motion.div>
          </div>
        </SectionCard>
        <SectionCard>
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="order-2 lg:order-1"
            >
              <VideoPlayer
                src="/assets/ss2.mp4"
                poster="/assets/thumb1.png"
              />
            </motion.div>
            <div className="order-1 space-y-6 lg:order-2">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="mb-4 inline-flex items-center rounded-full bg-yellow-100 px-4 py-2 text-sm font-medium text-yellow-700">
                  🏆 Award-Winning Service
                </div>
                <h2 className="text-3xl font-bold leading-tight text-gray-800">
                  Recognized Excellence in 
                  <span className="text-yellow-500"> Events</span>
                </h2>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="space-y-4"
              >
                <p className="text-lg leading-relaxed text-gray-600">
                  Our commitment to excellence has earned recognition from industry leaders and countless satisfied clients. We don't just plan events – we create experiences that leave lasting impressions.
                </p>
                <div className="flex items-center space-x-2 font-semibold text-yellow-600">
                  <span className="text-2xl">🌟</span>
                  <span>"Excellence recognized, memories treasured"</span>
                </div>
              </motion.div>
            </div>
          </div>
        </SectionCard>
      </div>
    </div>
  )
}

export default HomeShowcase
