"use client";

import { motion } from "framer-motion";

export function DigitalLines() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      <svg
        className="absolute inset-0 h-full w-full opacity-20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#F31623" stopOpacity="0" />
            <stop offset="50%" stopColor="#F31623" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#F31623" stopOpacity="0" />
          </linearGradient>
        </defs>
        {[...Array(6)].map((_, i) => (
          <motion.line
            key={i}
            x1={`${10 + i * 15}%`}
            y1="0"
            x2={`${10 + i * 15 + 5}%`}
            y2="100%"
            stroke="url(#lineGrad)"
            strokeWidth="0.5"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: [0, 0.6, 0] }}
            transition={{
              duration: 4,
              delay: i * 0.5,
              repeat: Infinity,
              repeatDelay: 2,
            }}
          />
        ))}
      </svg>

      {/* Horizontal scan lines */}
      <motion.div
        className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent"
        animate={{ top: ["0%", "100%"] }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      />
    </div>
  );
}

export function GlowOrbs() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      <div className="absolute -top-1/4 -left-1/4 h-[600px] w-[600px] rounded-full bg-primary/8 blur-[120px]" />
      <div className="absolute -bottom-1/4 -right-1/4 h-[500px] w-[500px] rounded-full bg-primary/6 blur-[100px]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[300px] w-[300px] rounded-full bg-primary/4 blur-[80px]" />
    </div>
  );
}

export function WaveBackground() {
  return (
    <div className="absolute bottom-0 left-0 right-0 overflow-hidden pointer-events-none" aria-hidden="true">
      <svg
        viewBox="0 0 1440 120"
        className="w-full opacity-10"
        preserveAspectRatio="none"
      >
        <motion.path
          d="M0,60 C360,120 720,0 1080,60 C1260,90 1380,30 1440,60 L1440,120 L0,120 Z"
          fill="url(#waveGrad)"
          animate={{
            d: [
              "M0,60 C360,120 720,0 1080,60 C1260,90 1380,30 1440,60 L1440,120 L0,120 Z",
              "M0,80 C360,20 720,100 1080,40 C1260,10 1380,70 1440,40 L1440,120 L0,120 Z",
              "M0,60 C360,120 720,0 1080,60 C1260,90 1380,30 1440,60 L1440,120 L0,120 Z",
            ],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <defs>
          <linearGradient id="waveGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#F31623" stopOpacity="0.3" />
            <stop offset="50%" stopColor="#FF4B5B" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#F31623" stopOpacity="0.3" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
