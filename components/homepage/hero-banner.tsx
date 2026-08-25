"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { heroSlides } from "@/data/homepage";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

export function HeroBanner() {
  const slide = heroSlides[0];
  const headlineLines = slide.headline.split("\n");

  return (
    <section className="relative overflow-hidden border-b border-border">
      <div className="relative min-h-[520px] md:min-h-[620px] lg:min-h-[680px]">
        <div className="absolute inset-0 animate-hero-zoom">
          <Image
            src={slide.image}
            alt="KOSAR editorial campaign"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        </div>

        {/* Targeted overlays for text readability */}
        <div className="absolute inset-0 bg-black/10" />
        <div className="absolute inset-y-0 left-0 w-2/3 bg-gradient-to-r from-black/40 to-transparent" />
        <div className="absolute bottom-0 right-0 h-1/2 w-1/2 bg-gradient-to-tl from-black/30 to-transparent" />

        <Container className="relative flex h-full min-h-[520px] flex-col md:min-h-[620px] lg:min-h-[680px]">
          {/* Editorial label */}
          <motion.span
            className="font-heading absolute left-4 top-6 text-[10px] font-semibold uppercase tracking-[0.25em] text-white/80 sm:left-0 sm:top-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            KOSAR / ISSUE 01
          </motion.span>

          {/* Vertical text */}
          <motion.span
            className="font-heading absolute right-4 top-1/2 hidden -translate-y-1/2 text-[10px] font-semibold uppercase tracking-[0.3em] text-white/60 [writing-mode:vertical-rl] sm:right-8 lg:block"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            CURATED DAILY
          </motion.span>

          {/* Main headline — spread across composition */}
          <div className="flex flex-1 flex-col justify-center pt-16 sm:pt-20">
            <motion.h1
              className="font-display max-w-4xl text-[2.75rem] font-normal leading-[0.95] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-[5.5rem]"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              {headlineLines.map((line, i) => (
                <span key={line} className={i === 1 ? "block text-white/90" : "block"}>
                  {line}
                </span>
              ))}
            </motion.h1>
          </div>

          {/* Bottom area: panel + CTAs */}
          <div className="flex flex-col gap-6 pb-10 sm:flex-row sm:items-end sm:justify-between sm:pb-12">
            <motion.div
              className="max-w-sm border border-white/20 bg-white/95 p-5 backdrop-blur-sm"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <p className="text-sm leading-relaxed text-foreground">{slide.description}</p>
            </motion.div>

            <motion.div
              className="flex flex-wrap gap-3"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <Button asChild className="font-heading bg-primary text-white hover:bg-secondary">
                <Link href={slide.ctaLink}>{slide.ctaText}</Link>
              </Button>
              {slide.secondaryCtaText && slide.secondaryCtaLink && (
                <Button
                  asChild
                  variant="outline"
                  className="font-heading border-white/60 bg-transparent text-white hover:bg-white hover:text-primary"
                >
                  <Link href={slide.secondaryCtaLink}>{slide.secondaryCtaText}</Link>
                </Button>
              )}
            </motion.div>
          </div>
        </Container>
      </div>
    </section>
  );
}
