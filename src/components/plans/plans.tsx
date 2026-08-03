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
            Sem fidelidade. Internet sem cortes. Portabilidade com +5 GB todo mês.
          </p>
        </FadeUp>

        <StaggerContainer className="grid gap-6 sm:grid-cols-2 xl:grid-cols-5">
          {PLANS.map((plan) => (
            <StaggerItem key={plan.name}>
              <motion.div
                whileHover={{ scale: 1.02, y: -4 }}
                transition={{ duration: 0.3 }}
                className={cn(
                  "relative flex h-full flex-col overflow-hidden rounded-2xl p-6 transition-all duration-500 lg:p-7",
                  plan.popular
                    ? "border border-primary/40 bg-gradient-to-b from-primary/10 to-background glass glow-red-sm"
                    : "glass hover:border-primary/20 hover:glow-red-sm"
                )}
              >
                {plan.popular && (
                  <div className="absolute right-3 top-3 flex items-center gap-1 rounded-full bg-primary px-2.5 py-1 text-[10px] font-semibold text-white">
                    <Star className="h-3 w-3 fill-white" />
                    Popular
                  </div>
                )}

                <div className="mb-5">
                  <h3 className="font-display text-lg font-bold text-white">
                    {plan.name}
                  </h3>
                  <div className="mt-3 flex items-baseline gap-1">
                    <span className="text-sm text-foreground-muted">R$</span>
                    <span className="font-display text-3xl font-bold text-white">
                      {plan.price}
                    </span>
                    <span className="text-sm text-foreground-muted">/mês</span>
                  </div>
                </div>

                <div className="mb-5 space-y-2 border-y border-white/8 py-5">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-sm text-foreground-muted">Internet</span>
                    <span className="font-semibold text-white">{plan.internet}</span>
                  </div>
                  <p className="text-xs text-foreground-muted">{plan.internetDetail}</p>
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-sm text-foreground-muted">Minutos</span>
                    <span className="font-semibold text-white">{plan.minutes}</span>
                  </div>
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-sm text-foreground-muted">SMS</span>
                    <span className="font-semibold text-white">{plan.sms}</span>
                  </div>
                  <p className="pt-1 text-xs font-medium text-primary">
                    {plan.portabilityBonus}
                  </p>
                </div>

                <ul className="mb-6 flex-1 space-y-2.5">
                  {plan.benefits.map((benefit) => (
                    <li
                      key={benefit}
                      className="flex items-start gap-2 text-sm text-foreground-muted"
                    >
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
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
                    href={whatsappUrl(
                      `Olá! Tenho interesse no plano ${plan.name} (${plan.internet}) da MAX MOBILE.`
                    )}
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

        <FadeUp className="mt-8 text-center">
          <p className="text-xs text-foreground-muted">
            * Ligações ilimitadas locais e LDN com CSP 41, conforme{" "}
            <a href="/termo-smp" className="text-primary hover:underline">
              Termo SMP
            </a>
            . Valores sujeitos a alteração.
          </p>
        </FadeUp>
      </div>
    </section>
  );
}
