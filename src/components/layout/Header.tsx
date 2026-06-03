"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";
import { navigation } from "@/data/navigation";
import { cn } from "@/lib/utils";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/logos/logo-logidental.png"
              alt="Logidental"
              width={180}
              height={60}
              className="h-12 w-auto"
              priority
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navigation.map((item) =>
              item.children ? (
                <div key={item.label} className="relative group">
                  <button
                    className="flex items-center gap-1 text-charcoal hover:text-primary font-medium transition-colors"
                    onClick={() => setSolutionsOpen(!solutionsOpen)}
                  >
                    {item.label}
                    <ChevronDown className="w-4 h-4" />
                  </button>
                  <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                    <div className="bg-white rounded-lg shadow-lg border border-gray-100 py-2 min-w-52">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-4 py-2.5 text-charcoal hover:text-primary hover:bg-surface transition-colors text-sm"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-charcoal hover:text-primary font-medium transition-colors"
                >
                  {item.label}
                </Link>
              )
            )}
          </nav>

          {/* CTA */}
          <div className="hidden lg:block">
            <Link
              href="/contact"
              className="bg-primary hover:bg-primary-dark text-white font-semibold px-5 py-2.5 rounded-lg transition-colors"
            >
              Nous contacter
            </Link>
          </div>

          {/* Mobile burger */}
          <button
            className="lg:hidden p-2 text-charcoal"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-gray-100 bg-white px-4 py-4 flex flex-col gap-2">
          {navigation.map((item) =>
            item.children ? (
              <div key={item.label}>
                <button
                  className="flex items-center gap-1 w-full text-left font-medium text-charcoal py-2"
                  onClick={() => setSolutionsOpen(!solutionsOpen)}
                >
                  {item.label}
                  <ChevronDown className={cn("w-4 h-4 transition-transform", solutionsOpen && "rotate-180")} />
                </button>
                {solutionsOpen && (
                  <div className="pl-4 flex flex-col gap-1">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="text-sm text-charcoal-muted hover:text-primary py-1.5"
                        onClick={() => setMobileOpen(false)}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.label}
                href={item.href}
                className="font-medium text-charcoal hover:text-primary py-2"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
            )
          )}
          <Link
            href="/contact"
            className="mt-2 bg-primary text-white font-semibold px-5 py-3 rounded-lg text-center"
            onClick={() => setMobileOpen(false)}
          >
            Nous contacter
          </Link>
        </div>
      )}
    </header>
  );
}
