"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { featuredStories } from "@/data/homepage";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";

export function FeaturedStories() {
  return (
    <section className="border-b border-border py-16 md:py-24">
      <Container>
        <h2 className="font-heading mb-10 text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground md:mb-14">
          What&apos;s Happening Now
        </h2>

        <div className="grid gap-4 md:grid-cols-12 md:gap-5">
          {featuredStories.map((story, i) => (
            <motion.div
              key={story.id}
              className={cn(
                "group relative overflow-hidden",
                story.aspect === "tall" && "md:col-span-4 md:row-span-2",
                story.aspect === "wide" && "md:col-span-8",
                story.aspect === "square" && "md:col-span-4"
              )}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Link href={story.href} className="block">
                <div
                  className={cn(
                    "relative overflow-hidden",
                    story.aspect === "tall" ? "aspect-[3/4] md:min-h-[520px]" : "",
                    story.aspect === "wide" ? "aspect-[16/9] md:aspect-[2/1]" : "",
                    story.aspect === "square" ? "aspect-square" : ""
                  )}
                >
                  <Image
                    src={story.image}
                    alt={story.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 40vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
                    <span className="font-heading text-[10px] font-semibold uppercase tracking-[0.2em] text-white/70">
                      {story.label}
                    </span>
                    <h3 className="font-display mt-2 text-2xl text-white md:text-3xl">{story.title}</h3>
                    <p className="mt-2 max-w-md text-sm leading-relaxed text-white/80">{story.description}</p>
                    <span className="mt-4 inline-flex items-center gap-1 text-xs font-heading font-semibold uppercase tracking-[0.15em] text-white transition-transform group-hover:translate-x-1">
                      Explore <ArrowUpRight className="h-3.5 w-3.5" />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
