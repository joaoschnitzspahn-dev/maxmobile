"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { FadeUp } from "@/components/animations/fade-up";

const COVERAGE_POINTS = [
  { x: 35, y: 45, label: "Norte", delay: 0 },
  { x: 42, y: 38, label: "Nordeste", delay: 0.2 },
  { x: 38, y: 58, label: "Centro-Oeste", delay: 0.4 },
  { x: 48, y: 72, label: "Sudeste", delay: 0.6 },
  { x: 40, y: 82, label: "Sul", delay: 0.8 },
];

function BrazilMap() {
  return (
    <svg
      viewBox="0 0 400 450"
      className="h-full w-full max-w-md mx-auto"
      aria-label="Mapa de cobertura do Brasil"
      role="img"
    >
      <defs>
        <linearGradient id="mapGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F31623" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#FF4B5B" stopOpacity="0.05" />
        </linearGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="3" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Brazil simplified shape */}
      <motion.path
        d="M 180 30 
           C 200 25, 220 35, 230 50
           C 245 55, 260 70, 255 90
           C 270 100, 285 120, 280 145
           C 290 160, 295 180, 285 200
           C 280 220, 270 240, 260 260
           C 250 280, 240 300, 230 320
           C 220 340, 210 360, 200 380
           C 190 400, 175 410, 160 400
           C 150 390, 140 370, 135 350
           C 130 330, 125 310, 120 290
           C 115 270, 110 250, 105 230
           C 100 210, 95 190, 90 170
           C 85 150, 80 130, 85 110
           C 90 90, 100 70, 115 55
           C 130 40, 150 30, 180 30 Z"
        fill="url(#mapGrad)"
        stroke="rgba(243, 22, 35, 0.3)"
        strokeWidth="1.5"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 2, ease: "easeInOut" }}
      />

      {/* Coverage dots */}
      {COVERAGE_POINTS.map((point) => (
        <g key={point.label}>
          <motion.circle
            cx={`${point.x}%`}
            cy={`${point.y}%`}
            r="6"
            fill="#F31623"
            filter="url(#glow)"
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: point.delay + 0.5 }}
          />
          <motion.circle
            cx={`${point.x}%`}
            cy={`${point.y}%`}
            r="12"
            fill="none"
            stroke="#F31623"
            strokeWidth="0.5"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: [1, 2, 1], opacity: [0.6, 0, 0.6] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: point.delay,
            }}
          />
        </g>
      ))}

      {/* Connection lines between points */}
      <motion.path
        d="M 140 200 Q 160 180 168 171 M 168 171 Q 190 160 192 261 M 192 261 Q 200 290 160 360"
        fill="none"
        stroke="rgba(243, 22, 35, 0.2)"
        strokeWidth="0.8"
        strokeDasharray="4 4"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 2, delay: 1 }}
      />
    </svg>
  );
}

export function Coverage() {
  return (
    <section
      id="cobertura"
      className="section-padding relative overflow-hidden"
      aria-labelledby="cobertura-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <FadeUp>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Cobertura
            </span>
            <h2
              id="cobertura-heading"
              className="font-display mt-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl"
            >
              Conectado em{" "}
              <span className="gradient-text-red">todo o Brasil</span>
            </h2>
            <p className="mt-4 text-foreground-muted leading-relaxed">
              Infraestrutura robusta com presença em milhares de municípios.
              Do Amazonas ao Rio Grande do Sul, a MAX MOBILE garante
              conectividade onde você estiver.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4">
              {[
                { value: "5.570+", label: "Municípios" },
                { value: "27", label: "Estados" },
                { value: "99.9%", label: "Disponibilidade" },
                { value: "5G", label: "Tecnologia" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="glass rounded-xl p-4 transition-all duration-300 hover:border-primary/20"
                >
                  <p className="font-display text-2xl font-bold text-primary">
                    {stat.value}
                  </p>
                  <p className="text-sm text-foreground-muted">{stat.label}</p>
                </div>
              ))}
            </div>
          </FadeUp>

          <FadeUp delay={0.2}>
            <div className="relative">
              <div className="absolute inset-0 rounded-3xl bg-primary/5 blur-3xl" />
              <div className="relative glass rounded-3xl p-8">
                <BrazilMap />
                <div className="mt-4 flex items-center justify-center gap-2 text-sm text-foreground-muted">
                  <MapPin className="h-4 w-4 text-primary" />
                  Cobertura nacional ativa
                </div>
              </div>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
