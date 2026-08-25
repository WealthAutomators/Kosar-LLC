"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { kosarEditSlugs } from "@/data/homepage";
import { getProductBySlug } from "@/data/products";
import { Container } from "@/components/ui/container";
import { ProductCard } from "@/components/product/product-card";
import { formatPrice, calculateDiscount } from "@/lib/format";
import { StarRating } from "@/components/ui/star-rating";

export function KosarEdit() {
  const feature = getProductBySlug(kosarEditSlugs.feature);
  const mediumProducts = kosarEditSlugs.medium.map((slug) => getProductBySlug(slug)).filter(Boolean);
  const small = getProductBySlug(kosarEditSlugs.small);

  if (!feature) return null;

  const hasDiscount = feature.salePrice && feature.salePrice < feature.price;

  return (
    <section className="border-b border-border bg-muted/30 py-16 md:py-24">
      <Container>
        <div className="mb-10 md:mb-14">
          <h2 className="font-heading text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground">
            The KOSAR Edit
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            A rotating selection of things we think you&apos;ll like.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-12 md:gap-6">
          {/* Feature product */}
          <motion.div
            className="md:col-span-5"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Link href={`/product/${feature.slug}`} className="group block">
              <div className="relative aspect-[4/5] overflow-hidden border border-border bg-card">
                <Image
                  src={feature.images[0]}
                  alt={feature.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 40vw"
                />
              </div>
              <div className="mt-4">
                <h3 className="font-heading text-lg font-semibold text-primary">{feature.name}</h3>
                <StarRating rating={feature.rating} reviews={feature.reviews} />
                <div className="mt-2 flex items-center gap-2">
                  {hasDiscount ? (
                    <>
                      <span className="font-semibold text-accent">{formatPrice(feature.salePrice!)}</span>
                      <span className="text-sm text-muted-foreground line-through">{formatPrice(feature.price)}</span>
                      <span className="text-xs text-accent">-{calculateDiscount(feature.price, feature.salePrice!)}%</span>
                    </>
                  ) : (
                    <span className="font-semibold">{formatPrice(feature.price)}</span>
                  )}
                </div>
              </div>
            </Link>
          </motion.div>

          {/* Lifestyle image */}
          <motion.div
            className="md:col-span-3"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <div className="relative aspect-[3/4] overflow-hidden border border-border">
              <Image
                src={kosarEditSlugs.lifestyle}
                alt="KOSAR lifestyle edit"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 25vw"
              />
            </div>
          </motion.div>

          {/* Medium + small products */}
          <div className="flex flex-col gap-5 md:col-span-4 md:gap-6">
            <div className="grid grid-cols-2 gap-5 md:gap-6">
              {mediumProducts.map(
                (product) =>
                  product && <ProductCard key={product.id} product={product} />
              )}
            </div>
            {small && (
              <div className="max-w-[200px]">
                <ProductCard product={small} />
              </div>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
