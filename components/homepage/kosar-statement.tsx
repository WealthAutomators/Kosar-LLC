"use client";

import { motion } from "framer-motion";
import { company } from "@/data/company";
import { Container } from "@/components/ui/container";

export function KosarStatement() {
  return (
    <section className="border-b border-border py-20 md:py-28 lg:py-32">
      <Container>
        <motion.div
          className="mx-auto max-w-4xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="mx-auto mb-8 h-px w-16 bg-accent" />
          <h2 className="font-display text-4xl font-normal leading-tight tracking-tight text-primary sm:text-5xl md:text-6xl lg:text-7xl">
            LESS NOISE.
            <br />
            BETTER FINDS.
          </h2>
          <p className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
            {company.description}
          </p>
        </motion.div>
      </Container>
    </section>
  );
}
