"use client";
import { faqData } from "@/data/faq";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

export default function FAQ() {
  return (
    <section id="faq" className="px-5 py-16 sm:px-8 sm:py-20 section-warm">
      <div className="mx-auto max-w-2xl">
        <div className="text-center mb-10">
          <p className="text-[11px] tracking-[0.3em] uppercase text-brand font-medium mb-3">FAQ</p>
          <h2 className="text-3xl font-[family-name:var(--font-heading)] tracking-tight">
            Frequently Asked Questions
          </h2>
        </div>
        <Accordion className="space-y-2">
          {faqData.map((item, i) => (
            <AccordionItem key={i} className="rounded-lg border border-border/60 bg-background px-5 not-last:border-b-0">
              <AccordionTrigger className="text-sm font-medium hover:no-underline hover:text-brand py-4">
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
