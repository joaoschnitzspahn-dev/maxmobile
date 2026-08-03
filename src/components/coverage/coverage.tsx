"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import {
  BRAZIL_STATES,
  BRAZIL_VIEWBOX,
  COVERAGE_CONNECTIONS,
  COVERAGE_POINTS,
} from "./brazil-map-data";

function BrazilMap() {
  return (
    <svg
      viewBox={BRAZIL_VIEWBOX}
      className="mx-auto h-full w-full max-w-md"
      aria-label="Mapa de cobertura do Brasil"
      role="img"
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        <linearGradient id="brazilFill" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F31623" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#FF4B5B" stopOpacity="0.04" />
        </linearGradient>
        <filter id="dotGlow">
          <feGaussianBlur stdDeviation="2.5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <g fill="url(#brazilFill)" stroke="rgba(243, 22, 35, 0.35)" strokeWidth="0.8">
        {BRAZIL_STATES.map((state, index) => (
          <motion.path
            key={state.id}
            d={state.path}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.02 }}
          />
        ))}
      </g>

      <motion.path
        d={BRAZIL_STATES.map((s) => s.path).join(" ")}
        fill="none"
        stroke="rgba(243, 22, 35, 0.55)"
        strokeWidth="1.2"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 2.2, ease: "easeInOut" }}
      />

      {COVERAGE_CONNECTIONS.map((path, index) => (
        <motion.path
          key={path}
          d={path}
          fill="none"
          stroke="rgba(243, 22, 35, 0.22)"
          strokeWidth="0.8"
          strokeDasharray="3 4"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.8, delay: 0.8 + index * 0.2 }}
        />
      ))}

      {COVERAGE_POINTS.map((point) => (
        <g key={point.id}>
          <motion.circle
            cx={point.cx}
            cy={point.cy}
            r="5"
            fill="#F31623"
            filter="url(#dotGlow)"
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: point.delay + 0.6 }}
          />
          <motion.circle
            cx={point.cx}
            cy={point.cy}
            r="10"
            fill="none"
            stroke="#F31623"
            strokeWidth="0.6"
            initial={{ scale: 0.6, opacity: 0 }}
            animate={{ scale: [1, 2.2, 1], opacity: [0.5, 0, 0.5] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: point.delay,
              ease: "easeOut",
            }}
          />
        </g>
      ))}
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
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
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
            <p className="mt-4 leading-relaxed text-foreground-muted text-justify">
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
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative">
              <div className="absolute inset-0 rounded-3xl bg-primary/5 blur-3xl" />
              <div className="relative glass rounded-3xl p-6 sm:p-8">
                <div className="aspect-[613/639] w-full">
                  <BrazilMap />
                </div>
                <div className="mt-4 flex items-center justify-center gap-2 text-sm text-foreground-muted">
                  <MapPin className="h-4 w-4 text-primary" />
                  Cobertura nacional ativa
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
