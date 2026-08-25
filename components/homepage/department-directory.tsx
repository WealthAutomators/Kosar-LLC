"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { departmentDirectory } from "@/data/categories";
import { Container } from "@/components/ui/container";

export function DepartmentDirectory() {
  const [hovered, setHovered] = useState<string | null>(null);
  const hoveredDept = departmentDirectory.find((d) => d.number === hovered);

  return (
    <section className="border-b border-border bg-card py-16 md:py-24">
      <Container>
        <h2 className="font-heading mb-12 text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground md:mb-16">
          Shop By Department
        </h2>

        <div className="relative grid gap-0 lg:grid-cols-[1fr_280px]">
          <div className="divide-y divide-border border-y border-border">
            {departmentDirectory.map((dept) => (
              <Link
                key={dept.number}
                href={`/categories/${dept.slug}`}
                className="group flex items-center gap-4 py-5 transition-colors hover:bg-muted/50 md:gap-8 md:py-6"
                onMouseEnter={() => setHovered(dept.number)}
                onMouseLeave={() => setHovered(null)}
              >
                <motion.span
                  className="font-display w-12 shrink-0 text-2xl text-muted-foreground/50 md:w-16 md:text-3xl"
                  animate={{
                    color: hovered === dept.number ? "#B63A32" : "rgba(119, 115, 109, 0.5)",
                    x: hovered === dept.number ? 4 : 0,
                  }}
                  transition={{ duration: 0.2 }}
                >
                  {dept.number}
                </motion.span>
                <span className="font-heading flex flex-1 items-center justify-between text-sm font-semibold uppercase tracking-[0.15em] text-primary md:text-base">
                  <motion.span animate={{ x: hovered === dept.number ? 8 : 0 }} transition={{ duration: 0.2 }}>
                    {dept.name}
                  </motion.span>
                  <ArrowRight
                    className={`h-4 w-4 transition-all ${hovered === dept.number ? "translate-x-0 opacity-100" : "-translate-x-2 opacity-0"}`}
                  />
                </span>
              </Link>
            ))}
          </div>

          <div className="relative hidden min-h-[400px] lg:block">
            <AnimatePresence mode="wait">
              {hoveredDept ? (
                <motion.div
                  key={hoveredDept.number}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.3 }}
                  className="sticky top-32 aspect-[3/4] overflow-hidden"
                >
                  <Image src={hoveredDept.image} alt={hoveredDept.name} fill className="object-cover" sizes="280px" />
                </motion.div>
              ) : (
                <motion.div
                  key="default"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="sticky top-32 flex aspect-[3/4] items-center justify-center border border-border bg-muted"
                >
                  <p className="font-heading px-6 text-center text-xs uppercase tracking-[0.2em] text-muted-foreground">
                    Hover a department
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </Container>
    </section>
  );
}
