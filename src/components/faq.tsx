"use client";

import { useState } from "react";
import { ChevronDown, MessageCircle } from "lucide-react";
import { faqs } from "@/data/faqs";

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-surface py-16 sm:py-24 dark:bg-gradient-to-b dark:from-slate-900 dark:to-slate-950">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            Pertanyaan yang Sering Diajukan
          </h2>
          <p className="mt-4 text-lg text-zinc-600 dark:text-slate-400">
            Masih ragu? Temukan jawaban dari pertanyaan berikut atau hubungi
            kami langsung.
          </p>
        </div>

        <div className="mt-12 space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className="overflow-hidden rounded-xl border border-zinc-200 bg-white transition-all dark:border-slate-700 dark:bg-slate-800/50"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="flex w-full items-center justify-between px-6 py-4 text-left transition-colors hover:bg-zinc-50 dark:hover:bg-slate-800"
                >
                  <span className="pr-4 text-sm font-semibold text-zinc-900 sm:text-base dark:text-slate-100">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 flex-shrink-0 text-zinc-400 transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`grid transition-all ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="border-t border-zinc-100 px-6 py-4 text-sm leading-relaxed text-zinc-500 dark:border-zinc-700 dark:text-slate-400">
                      {faq.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-8 rounded-xl border border-zinc-200 bg-white p-6 text-center dark:border-slate-700 dark:bg-slate-800/50">
          <p className="text-sm text-zinc-600">
            Tidak menemukan jawaban yang Anda cari?
          </p>
          <a
            href="https://wa.me/6281324868790"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary-light"
          >
            <MessageCircle className="h-4 w-4" />
            Hubungi Kami via WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
