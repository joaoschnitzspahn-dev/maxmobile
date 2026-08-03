"use client";

import { motion } from "framer-motion";
import { MessageCircle, ArrowRight, Signal, Wifi, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Particles } from "@/components/background-effects/particles";
import { DigitalLines, GlowOrbs, WaveBackground } from "@/components/background-effects/digital-lines";
import { SITE, whatsappUrl } from "@/lib/constants";

function HeroVisual() {
  return (
    <div className="relative mx-auto h-[420px] w-full max-w-lg lg:h-[520px] [&_p]:text-center [&_p]:hyphens-none">
      {/* Glow backdrop */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="h-64 w-64 rounded-full bg-primary/20 blur-[80px]" />
      </div>

      {/* Connection lines */}
      <svg className="absolute inset-0 h-full w-full" aria-hidden="true">
        <motion.line
          x1="20%" y1="30%" x2="50%" y2="45%"
          stroke="rgba(243,22,35,0.4)" strokeWidth="1"
          initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
        />
        <motion.line
          x1="80%" y1="25%" x2="50%" y2="45%"
          stroke="rgba(243,22,35,0.3)" strokeWidth="1"
          initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, delay: 0.7 }}
        />
        <motion.line
          x1="50%" y1="45%" x2="50%" y2="65%"
          stroke="rgba(243,22,35,0.5)" strokeWidth="1"
          initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, delay: 0.9 }}
        />
        <motion.circle
          cx="50%" cy="45%" r="4" fill="#F31623"
          initial={{ scale: 0 }} animate={{ scale: [1, 1.3, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </svg>

      {/* Phone mockup */}
      <motion.div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <motion.div
          animate={{ y: [-8, 8, -8] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="relative"
        >
          {/* Phone frame */}
          <div className="relative h-[280px] w-[140px] rounded-[2rem] border-2 border-white/20 bg-gradient-to-b from-[#1a1a1a] to-[#0d0d0d] p-2 shadow-2xl shadow-primary/10 lg:h-[340px] lg:w-[170px]">
            <div className="h-full w-full overflow-hidden rounded-[1.6rem] bg-[#090909]">
              {/* Screen content */}
              <div className="flex h-full flex-col items-center justify-center gap-3 p-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/20">
                  <Signal className="h-5 w-5 text-primary" />
                </div>
                <div className="text-center">
                  <p className="text-[10px] font-bold tracking-widest text-white lg:text-xs">MAX</p>
                  <p className="text-[8px] tracking-[0.3em] text-foreground-muted lg:text-[10px]">MOBILE</p>
                </div>
                <div className="mt-2 flex gap-1">
                  {[...Array(4)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="h-6 w-1 rounded-full bg-primary"
                      animate={{ scaleY: [0.4, 1, 0.4] }}
                      transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.15 }}
                    />
                  ))}
                </div>
                <p className="text-[9px] text-primary lg:text-[10px]">5G Ativo</p>
              </div>
            </div>
            {/* Notch */}
            <div className="absolute left-1/2 top-3 h-4 w-16 -translate-x-1/2 rounded-full bg-black" />
          </div>
        </motion.div>
      </motion.div>

      {/* SIM Card */}
      <motion.div
        className="absolute left-4 top-16 lg:left-0 lg:top-20"
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.6 }}
      >
        <motion.div
          animate={{ y: [-6, 6, -6], rotate: [-2, 2, -2] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="glass rounded-xl p-3 glow-red-sm"
        >
          <div className="flex h-16 w-12 flex-col items-center justify-center rounded-lg bg-gradient-to-br from-primary/30 to-primary/10 lg:h-20 lg:w-14">
            <div className="mb-1 h-3 w-5 rounded-sm bg-primary/60" />
            <div className="h-1 w-4 rounded bg-white/30" />
            <div className="mt-1 h-1 w-3 rounded bg-white/20" />
          </div>
          <p className="mt-2 text-center text-[9px] font-medium text-foreground-muted">SIM</p>
        </motion.div>
      </motion.div>

      {/* Floating cards */}
      <motion.div
        className="absolute right-2 top-8 lg:right-0"
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.8 }}
      >
        <motion.div
          animate={{ y: [5, -5, 5] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="glass flex items-center gap-2 rounded-xl px-3 py-2"
        >
          <Wifi className="h-4 w-4 text-primary" />
          <div>
            <p className="text-[10px] font-semibold text-white">45 GB</p>
            <p className="text-[8px] text-foreground-muted">Alta velocidade</p>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute bottom-16 right-4 lg:right-0 lg:bottom-20"
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 1 }}
      >
        <motion.div
          animate={{ y: [-4, 4, -4] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
          className="glass flex items-center gap-2 rounded-xl px-3 py-2"
        >
          <Shield className="h-4 w-4 text-primary" />
          <div>
            <p className="text-[10px] font-semibold text-white">Seguro</p>
            <p className="text-[8px] text-foreground-muted">LGPD</p>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute bottom-8 left-8 lg:left-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 1.2 }}
      >
        <motion.div
          animate={{ y: [3, -3, 3] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
          className="glass rounded-xl px-3 py-2"
        >
          <p className="text-[10px] font-semibold text-primary">99.9%</p>
          <p className="text-[8px] text-foreground-muted">Uptime</p>
        </motion.div>
      </motion.div>
    </div>
  );
}

export function Hero() {
  return (
    <section
      className="relative flex min-h-screen items-center overflow-hidden pt-20"
      aria-label="Hero"
    >
      <div className="digital-grid absolute inset-0" />
      <GlowOrbs />
      <DigitalLines />
      <Particles />
      <WaveBackground />

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-0">
        {/* Text content */}
        <div className="flex flex-col gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-medium text-primary-light tracking-widest uppercase">
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
              Telefonia do futuro
            </span>
          </motion.div>

          <motion.h1
            className="font-display text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            A nova geração da{" "}
            <span className="gradient-text-red">telefonia móvel.</span>
          </motion.h1>

          <motion.p
            className="max-w-lg text-base leading-relaxed text-foreground-muted sm:text-lg"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {SITE.description}
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <Button size="lg" asChild>
              <a href="/#planos">
                Ver planos
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a
                href={whatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="h-4 w-4" />
                Falar no WhatsApp
              </a>
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="flex gap-8 pt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            {[
              { value: "4G/5G", label: "Velocidade" },
              { value: "100%", label: "Brasil" },
              { value: "0800", label: "Suporte" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="font-display text-2xl font-bold text-white">{stat.value}</p>
                <p className="text-xs text-foreground-muted">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <HeroVisual />
        </motion.div>
      </div>
    </section>
  );
}
