"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface FaqItem {
  question: string;
  answer: string;
}

export default function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="divide-y divide-gray-100 border border-gray-100 rounded-xl overflow-hidden">
      {items.map((item, i) => (
        <div key={i}>
          <button
            className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-surface transition-colors"
            onClick={() => setOpen(open === i ? null : i)}
          >
            <span className="font-semibold text-charcoal pr-4">{item.question}</span>
            <ChevronDown
              className={cn(
                "w-5 h-5 text-secondary flex-shrink-0 transition-transform",
                open === i && "rotate-180"
              )}
            />
          </button>
          {open === i && (
            <div className="px-6 pb-5 text-charcoal-muted leading-relaxed text-sm">
              {item.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
