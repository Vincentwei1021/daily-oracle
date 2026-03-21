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
    <section id="faq" className="px-4 py-12 sm:px-6 sm:py-16">
      <div className="mx-auto max-w-3xl">
        <h2 className="mb-8 text-center text-3xl font-bold tracking-tight font-[family-name:var(--font-heading)]">
          Frequently Asked Questions
        </h2>
        <Accordion className="space-y-2">
          {faqData.map((item, i) => (
            <AccordionItem key={i} className="rounded-xl border border-border bg-card px-5 not-last:border-b-0">
              <AccordionTrigger className="text-sm font-semibold hover:no-underline hover:text-brand py-4">
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
