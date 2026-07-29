"use client";

import { Check, Star } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { PLANS, whatsappUrl } from "@/lib/constants";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/animations/fade-up";
import { cn } from "@/lib/utils";

export function Plans() {
  return (
    <section
      id="planos"
      className="section-padding relative overflow-hidden bg-background-secondary"
      aria-labelledby="planos-heading"
    >
      <div className="absolute inset-0 digital-grid opacity-30" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-primary/5 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeUp className="mx-auto mb-16 max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Planos
          </span>
          <h2
            id="planos-heading"
            className="font-display mt-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl"
          >
            Escolha o plano ideal
          </h2>
          <p className="mt-4 text-foreground-muted">
            Sem fidelidade. Sem taxas escondidas. Transparência total.
          </p>
        </FadeUp>

        <StaggerContainer className="grid gap-6 lg:grid-cols-3">
          {PLANS.map((plan) => (
            <StaggerItem key={plan.name}>
              <motion.div
                whileHover={{ scale: 1.02, y: -4 }}
                transition={{ duration: 0.3 }}
                className={cn(
                  "relative flex h-full flex-col overflow-hidden rounded-2xl p-8 transition-all duration-500",
                  plan.popular
                    ? "border border-primary/40 bg-gradient-to-b from-primary/10 to-background glass glow-red-sm"
                    : "glass hover:border-primary/20 hover:glow-red-sm"
                )}
              >
                {plan.popular && (
                  <div className="absolute right-4 top-4 flex items-center gap-1 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-white">
                    <Star className="h-3 w-3 fill-white" />
                    Mais popular
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="font-display text-xl font-bold text-white">
                    {plan.name}
                  </h3>
                  <div className="mt-4 flex items-baseline gap-1">
                    <span className="text-sm text-foreground-muted">R$</span>
                    <span className="font-display text-4xl font-bold text-white">
                      {plan.price}
                    </span>
                    <span className="text-sm text-foreground-muted">/mês</span>
                  </div>
                </div>

                <div className="mb-6 space-y-3 border-y border-white/8 py-6">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-foreground-muted">Internet</span>
                    <span className="font-semibold text-white">{plan.internet}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-foreground-muted">Minutos</span>
                    <span className="font-semibold text-white">{plan.minutes}</span>
                  </div>
                </div>

                <ul className="mb-8 flex-1 space-y-3">
                  {plan.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-center gap-2 text-sm text-foreground-muted">
                      <Check className="h-4 w-4 shrink-0 text-primary" />
                      {benefit}
                    </li>
                  ))}
                </ul>

                <Button
                  variant={plan.popular ? "default" : "outline"}
                  className="w-full"
                  asChild
                >
                  <a
                    href={whatsappUrl(`Olá! Tenho interesse no plano ${plan.name} da MAX MOBILE.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Contratar
                  </a>
                </Button>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
