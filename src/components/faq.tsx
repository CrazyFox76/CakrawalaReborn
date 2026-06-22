"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle, MessageCircle } from "lucide-react";
import { faqs } from "@/data/faqs";

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [showAll, setShowAll] = useState(false);
  const displayed = showAll ? faqs : faqs.slice(0, 5);

  return (
    <section id="faq" className="scroll-mt-20 bg-white py-16 sm:py-24 dark:bg-slate-950">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/5 px-4 py-1.5 text-xs font-semibold text-primary dark:bg-primary/20 dark:text-blue-300">
            <HelpCircle className="h-3.5 w-3.5" />
            FAQ
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
            Ada yang{" "}
            <span className="text-accent">Ditanyakan?</span>
          </h2>
          <p className="mt-4 text-base text-slate-500 dark:text-slate-400">
            Temukan jawaban cepat di bawah, atau hubungi kami langsung.
          </p>
        </div>

        <div className="mt-10 space-y-3">
          {displayed.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className={`rounded-xl border bg-white transition-all dark:bg-slate-900 ${
                  isOpen
                    ? "border-primary/20 shadow-sm"
                    : "border-slate-200 hover:border-slate-300 dark:border-slate-700 dark:hover:border-slate-600"
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="flex w-full items-center justify-between px-5 py-4 text-left sm:px-6"
                >
                  <span className="pr-4 text-sm font-medium text-slate-900 sm:text-base dark:text-slate-100">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`h-4 w-4 shrink-0 text-slate-400 transition-all duration-300 ${
                      isOpen ? "rotate-180 text-accent" : ""
                    }`}
                  />
                </button>
                <div
                  className={`grid transition-all duration-300 ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="border-t border-slate-100 px-5 py-4 text-sm text-slate-500 sm:px-6 dark:border-slate-800 dark:text-slate-400">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {faqs.length > 5 && (
          <div className="mt-5 text-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-1 text-sm font-medium text-accent hover:text-gold-600"
            >
              {showAll ? "Tampilkan lebih sedikit" : `Lihat ${faqs.length - 5} pertanyaan lainnya`}
              <ChevronDown className={`h-3.5 w-3.5 transition-transform ${showAll ? "rotate-180" : ""}`} />
            </button>
          </div>
        )}

        <div className="mt-8 rounded-xl border border-primary/10 bg-primary/5 p-6 text-center sm:p-8 dark:border-primary/20 dark:bg-primary/10">
          <p className="text-sm text-slate-600 sm:text-base dark:text-slate-300">
            Tidak menemukan jawaban?
          </p>
          <a
            href="https://wa.me/6281324868790"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-bold text-white shadow-sm transition-all hover:bg-primary-light hover:shadow-md"
          >
            <MessageCircle className="h-4 w-4" />
            Hubungi via WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
