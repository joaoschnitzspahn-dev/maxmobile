"use client";

import {
  Gauge,
  Shield,
  Wifi,
  Cpu,
  Users,
  CircleDollarSign,
  type LucideIcon,
} from "lucide-react";
import { WHY_US } from "@/lib/constants";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/animations/fade-up";

const ICON_MAP: Record<string, LucideIcon> = {
  Gauge,
  Shield,
  Wifi,
  Cpu,
  Users,
  CircleDollarSign,
};

export function WhyUs() {
  return (
    <section
      className="section-padding relative overflow-hidden bg-background-secondary"
      aria-labelledby="por-que-heading"
    >
      <div className="absolute inset-0 digital-grid opacity-30" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeUp className="mx-auto mb-16 max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Por que MAX MOBILE
          </span>
          <h2
            id="por-que-heading"
            className="font-display mt-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl"
          >
            Construída para quem exige{" "}
            <span className="gradient-text-red">excelência</span>
          </h2>
        </FadeUp>

        <StaggerContainer className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {WHY_US.map((item, index) => {
            const Icon = ICON_MAP[item.icon];
            return (
              <StaggerItem key={item.title}>
                <div className="group relative overflow-hidden rounded-2xl glass p-8 transition-all duration-500 hover:border-primary/20 hover:scale-[1.01]">
                  <span className="absolute -right-2 -top-2 font-display text-6xl font-bold text-white/[0.03]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div className="relative">
                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 transition-colors group-hover:bg-primary/20">
                      {Icon && <Icon className="h-6 w-6 text-primary" />}
                    </div>
                    <h3 className="font-display text-xl font-semibold text-white">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-foreground-muted">
                      {item.description}
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
