"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQ_ITEMS } from "@/lib/constants";
import { FadeUp } from "@/components/animations/fade-up";

export function FAQ() {
  return (
    <section
      id="faq"
      className="section-padding relative overflow-hidden"
      aria-labelledby="faq-heading"
    >
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <FadeUp className="mb-12 text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            FAQ
          </span>
          <h2
            id="faq-heading"
            className="font-display mt-4 text-3xl font-bold tracking-tight sm:text-4xl"
          >
            Perguntas frequentes
          </h2>
          <p className="mt-4 text-center text-foreground-muted">
            Tudo o que você precisa saber antes de contratar.
          </p>
        </FadeUp>

        <FadeUp delay={0.1}>
          <Accordion type="single" collapsible className="w-full">
            {FAQ_ITEMS.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent>{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </FadeUp>
      </div>
    </section>
  );
}
