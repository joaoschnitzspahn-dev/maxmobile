"use client";

import { HOW_IT_WORKS } from "@/lib/constants";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/animations/fade-up";

export function HowItWorks() {
  return (
    <section
      id="como-funciona"
      className="section-padding relative overflow-hidden"
      aria-labelledby="como-funciona-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeUp className="mx-auto mb-16 max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Como funciona
          </span>
          <h2
            id="como-funciona-heading"
            className="font-display mt-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl"
          >
            Simples como deveria ser
          </h2>
          <p className="mt-4 text-foreground-muted text-justify">
            Em quatro passos você está conectado.
          </p>
        </FadeUp>

        <StaggerContainer className="relative">
          {/* Timeline line — desktop */}
          <div
            className="absolute left-0 right-0 top-8 hidden h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent lg:block"
            aria-hidden="true"
          />

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {HOW_IT_WORKS.map((step, index) => (
              <StaggerItem key={step.step}>
                <div className="group relative flex flex-col items-center text-center">
                  {/* Step circle */}
                  <div className="relative mb-6">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full border border-primary/30 bg-background-secondary transition-all duration-500 group-hover:border-primary group-hover:glow-red-sm">
                      <span className="font-display text-lg font-bold text-primary">
                        {step.step}
                      </span>
                    </div>
                    {index < HOW_IT_WORKS.length - 1 && (
                      <div
                        className="absolute left-full top-1/2 hidden h-px w-full -translate-y-1/2 bg-gradient-to-r from-primary/40 to-transparent lg:block"
                        aria-hidden="true"
                      />
                    )}
                  </div>

                  <h3 className="font-display text-lg font-semibold text-white">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm text-foreground-muted text-justify">
                    {step.description}
                  </p>

                  {/* Mobile arrow */}
                  {index < HOW_IT_WORKS.length - 1 && (
                    <div className="mt-6 text-primary/40 lg:hidden" aria-hidden="true">
                      ↓
                    </div>
                  )}
                </div>
              </StaggerItem>
            ))}
          </div>
        </StaggerContainer>
      </div>
    </section>
  );
}
