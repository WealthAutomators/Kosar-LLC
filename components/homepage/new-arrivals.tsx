"use client";

import Link from "next/link";
import { homepageNewArrivalSlugs } from "@/data/homepage";
import { getProductsBySlugs } from "@/data/products";
import { Container } from "@/components/ui/container";
import { Carousel } from "@/components/ui/carousel";
import { ProductCard } from "@/components/product/product-card";

export function NewArrivals() {
  const products = getProductsBySlugs(homepageNewArrivalSlugs);

  return (
    <section className="border-b border-border py-16 md:py-24">
      <Container>
        <div className="mb-10 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between md:mb-14">
          <div>
            <h2 className="font-heading text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground">
              Just Arrived
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              New products worth taking a closer look at.
            </p>
          </div>
          <Link
            href="/new-arrivals"
            className="font-heading text-xs font-semibold uppercase tracking-[0.15em] text-accent hover:text-primary"
          >
            View All →
          </Link>
        </div>
        <Carousel slidesToShow={4} className="px-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </Carousel>
      </Container>
    </section>
  );
}
