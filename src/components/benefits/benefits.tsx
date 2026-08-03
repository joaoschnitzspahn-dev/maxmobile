"use client";

import {
  Zap,
  MapPin,
  ArrowLeftRight,
  Headphones,
  Wifi,
  MessageCircle,
  Rocket,
  BadgeCheck,
  type LucideIcon,
} from "lucide-react";
import { BENEFITS } from "@/lib/constants";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/animations/fade-up";

const ICON_MAP: Record<string, LucideIcon> = {
  Zap,
  MapPin,
  ArrowLeftRight,
  Headphones,
  Wifi,
  MessageCircle,
  Rocket,
  BadgeCheck,
};

export function Benefits() {
  return (
    <section
      id="beneficios"
      className="section-padding relative overflow-hidden bg-background-secondary"
      aria-labelledby="beneficios-heading"
    >
      <div className="absolute inset-0 digital-grid opacity-50" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-px w-1/2 bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeUp className="mx-auto mb-16 max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Benefícios
          </span>
          <h2
            id="beneficios-heading"
            className="font-display mt-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl"
          >
            Tudo que você precisa para{" "}
            <span className="gradient-text-red">conectar</span>
          </h2>
          <p className="mt-4 text-center text-foreground-muted">
            Tecnologia de ponta com a simplicidade que você merece.
          </p>
        </FadeUp>

        <StaggerContainer className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {BENEFITS.map((benefit) => {
            const Icon = ICON_MAP[benefit.icon];
            return (
              <StaggerItem key={benefit.title}>
                <div className="group relative h-full overflow-hidden rounded-2xl glass p-6 transition-all duration-500 hover:border-primary/30 hover:bg-white/[0.06] hover:scale-[1.02] hover:glow-red-sm">
                  <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-primary/5 blur-2xl transition-all duration-500 group-hover:bg-primary/10" />
                  <div className="relative">
                    <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 transition-colors duration-300 group-hover:bg-primary/20">
                      {Icon && <Icon className="h-5 w-5 text-primary" />}
                    </div>
                    <h3 className="font-display text-base font-semibold text-white">
                      {benefit.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-muted text-left">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
