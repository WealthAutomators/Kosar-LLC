"use client";

import { useState } from "react";
import { newsletter } from "@/data/homepage";
import { Container } from "@/components/ui/container";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const titleLines = newsletter.title.split("\n");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      setEmail("");
    }
  };

  return (
    <section className="border-b border-border bg-muted py-16 md:py-24">
      <Container>
        <div className="mx-auto max-w-xl text-center">
          <h2 className="font-display text-3xl text-primary md:text-4xl">
            {titleLines.map((line, i) => (
              <span key={line} className={i > 0 ? "block" : ""}>
                {line}
              </span>
            ))}
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{newsletter.description}</p>

          {submitted ? (
            <p className="mt-8 text-sm font-medium text-accent">Thank you for subscribing!</p>
          ) : (
            <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Input
                type="email"
                placeholder={newsletter.placeholder}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="h-12 flex-1 border-border bg-card text-foreground"
              />
              <Button type="submit" className="h-12 bg-accent px-8 text-white hover:bg-accent/90">
                {newsletter.buttonText}
              </Button>
            </form>
          )}
        </div>
      </Container>
    </section>
  );
}
