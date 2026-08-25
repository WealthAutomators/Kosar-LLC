"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ShoppingBag, Check } from "lucide-react";
import { useState } from "react";
import { dealsEndTime, redLabelDealSlug } from "@/data/homepage";
import { getProductBySlug } from "@/data/products";
import { Container } from "@/components/ui/container";
import { CountdownTimer } from "@/components/ui/countdown-timer";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";
import { formatPrice, calculateDiscount } from "@/lib/format";

export function RedLabelDeals() {
  const product = getProductBySlug(redLabelDealSlug);
  const [added, setAdded] = useState(false);
  const { addToCart } = useCart();

  if (!product || !product.salePrice) return null;

  const discount = calculateDiscount(product.price, product.salePrice);

  const handleAddToCart = () => {
    addToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <section className="border-b border-border bg-primary py-16 text-white md:py-24">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="font-heading text-[10px] font-semibold uppercase tracking-[0.25em] text-highlight">
              Limited / KOSAR
            </span>
            <h2 className="font-display mt-4 text-4xl md:text-5xl lg:text-6xl">The Red Label</h2>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-white/70">
              Signature offers on standout products — available for a limited time only.
            </p>
            <div className="mt-8 flex items-center gap-4">
              <span className="font-heading text-xs uppercase tracking-[0.15em] text-white/60">Ends in</span>
              <CountdownTimer endTime={dealsEndTime} variant="dark" />
            </div>
          </motion.div>

          <motion.div
            className="flex flex-col gap-6 border border-white/10 bg-white/5 p-6 md:flex-row md:items-center md:p-8"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Link href={`/product/${product.slug}`} className="relative aspect-square w-full shrink-0 overflow-hidden md:w-48">
              <Image src={product.images[0]} alt={product.name} fill className="object-cover" sizes="200px" />
            </Link>
            <div className="flex-1">
              <span className="font-heading text-xs font-semibold uppercase tracking-[0.15em] text-accent">
                -{discount}% Off
              </span>
              <Link href={`/product/${product.slug}`}>
                <h3 className="mt-2 font-heading text-lg font-semibold hover:text-highlight">{product.name}</h3>
              </Link>
              <div className="mt-3 flex items-baseline gap-3">
                <span className="text-2xl font-semibold text-highlight">{formatPrice(product.salePrice)}</span>
                <span className="text-sm text-white/50 line-through">{formatPrice(product.price)}</span>
              </div>
              <Button
                className="mt-5 w-full bg-accent text-white hover:bg-accent/90 md:w-auto"
                onClick={handleAddToCart}
              >
                {added ? (
                  <>
                    <Check className="h-4 w-4" /> Added to Cart
                  </>
                ) : (
                  <>
                    <ShoppingBag className="h-4 w-4" /> Add to Cart
                  </>
                )}
              </Button>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
