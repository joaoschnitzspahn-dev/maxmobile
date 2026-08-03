"use client";

import { motion } from "framer-motion";
import { MessageCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { whatsappUrl } from "@/lib/constants";
import { FadeUp } from "@/components/animations/fade-up";

export function CTA() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-28" aria-label="Chamada para ação">
      <FadeUp>
        <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-[#9b0f19]" />
            <div className="absolute inset-0 digital-grid opacity-20" />
            <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-white/10 blur-3xl" />
            <div className="absolute -bottom-20 -left-20 h-60 w-60 rounded-full bg-black/20 blur-3xl" />

            <div className="relative px-8 py-16 text-center sm:px-16 sm:py-20">
              <motion.h2
                className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                Pronto para a nova era da conectividade?
              </motion.h2>
              <p className="mx-auto mt-4 max-w-lg text-white/80">
                Junte-se a milhares de brasileiros que já escolheram a MAX MOBILE.
                Ativação rápida, suporte humano e a melhor experiência móvel.
              </p>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <Button
                  size="lg"
                  className="bg-white text-primary hover:bg-white/90 hover:scale-[1.02] glow-red-sm"
                  asChild
                >
                  <a
                    href={whatsappUrl("Olá! Quero contratar um plano MAX MOBILE.")}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="h-5 w-5" />
                    Falar no WhatsApp
                  </a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white/10"
                  asChild
                >
                  <a href="/#planos">
                    Ver planos
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </FadeUp>
    </section>
  );
}
