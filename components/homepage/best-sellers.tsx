"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Eye, Heart, ShoppingBag, Check } from "lucide-react";
import { useState } from "react";
import { homepageBestsellerSlugs } from "@/data/homepage";
import { getProductsBySlugs } from "@/data/products";
import { Container } from "@/components/ui/container";
import { formatPrice, calculateDiscount } from "@/lib/format";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";
import { StarRating } from "@/components/ui/star-rating";
import { Button } from "@/components/ui/button";
import { QuickViewModal } from "@/components/product/quick-view-modal";
import { cn } from "@/lib/utils";
import { Product } from "@/types";

function BestSellerCard({ product, large = false }: { product: Product; large?: boolean }) {
  const [quickViewOpen, setQuickViewOpen] = useState(false);
  const [added, setAdded] = useState(false);
  const { addToCart } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();
  const hasDiscount = product.salePrice && product.salePrice < product.price;

  const handleAddToCart = () => {
    addToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <>
      <motion.div
        className="group relative flex flex-col"
        whileHover={{ y: -4 }}
        transition={{ duration: 0.3 }}
      >
        <div
          className={cn(
            "relative overflow-hidden border border-border bg-card",
            large ? "aspect-[4/5]" : "aspect-square"
          )}
        >
          <Link href={`/product/${product.slug}`} className="block h-full w-full">
            <Image
              src={product.images[0]}
              alt={product.name}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes={large ? "40vw" : "20vw"}
            />
          </Link>
          <div className="absolute right-2 top-2 flex flex-col gap-1.5 opacity-0 transition-opacity group-hover:opacity-100">
            <Button variant="secondary" size="icon" className="h-8 w-8" onClick={() => toggleWishlist(product.id)}>
              <Heart className={cn("h-3.5 w-3.5", isInWishlist(product.id) && "fill-accent text-accent")} />
            </Button>
            <Button variant="secondary" size="icon" className="h-8 w-8" onClick={() => setQuickViewOpen(true)}>
              <Eye className="h-3.5 w-3.5" />
            </Button>
          </div>
          <div className="absolute bottom-0 left-0 right-0 translate-y-full p-2 transition-transform group-hover:translate-y-0">
            <Button size="sm" className="w-full text-xs" onClick={handleAddToCart}>
              {added ? <><Check className="h-3.5 w-3.5" /> Added</> : <><ShoppingBag className="h-3.5 w-3.5" /> Add to Cart</>}
            </Button>
          </div>
        </div>
        <div className="mt-3">
          <Link href={`/product/${product.slug}`}>
            <h3 className={cn("font-medium leading-snug hover:text-accent", large ? "text-base" : "text-sm line-clamp-2")}>
              {product.name}
            </h3>
          </Link>
          <StarRating rating={product.rating} reviews={product.reviews} size="sm" />
          <div className="mt-1 flex items-center gap-2">
            {hasDiscount ? (
              <>
                <span className="text-sm font-semibold text-accent">{formatPrice(product.salePrice!)}</span>
                <span className="text-xs text-muted-foreground line-through">{formatPrice(product.price)}</span>
              </>
            ) : (
              <span className="text-sm font-semibold">{formatPrice(product.price)}</span>
            )}
          </div>
        </div>
      </motion.div>
      <QuickViewModal product={product} open={quickViewOpen} onOpenChange={setQuickViewOpen} />
    </>
  );
}

export function BestSellers() {
  const products = getProductsBySlugs(homepageBestsellerSlugs);
  const [feature, ...rest] = products;
  const promoCard = {
    title: "THE RED LABEL",
    subtitle: "Limited-time offers on curated picks",
    href: "/shop?sale=true",
  };

  if (!feature) return null;

  return (
    <section className="border-b border-border py-16 md:py-24">
      <Container>
        <div className="mb-10 flex items-end justify-between md:mb-14">
          <h2 className="font-heading text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground">
            Best of KOSAR
          </h2>
          <Link href="/best-sellers" className="font-heading text-xs font-semibold uppercase tracking-[0.15em] text-accent hover:text-primary">
            View All →
          </Link>
        </div>

        <div className="grid gap-5 md:grid-cols-12 md:gap-6">
          <div className="md:col-span-5">
            <BestSellerCard product={feature} large />
          </div>
          <div className="grid grid-cols-2 gap-5 md:col-span-7 md:grid-cols-3 md:gap-6">
            {rest.slice(0, 4).map((product) => (
              <BestSellerCard key={product.id} product={product} />
            ))}
            <Link
              href={promoCard.href}
              className="group flex aspect-square flex-col justify-between border border-primary bg-primary p-5 text-white transition-colors hover:bg-secondary"
            >
              <span className="font-heading text-[10px] font-semibold uppercase tracking-[0.2em] text-white/60">
                Limited / KOSAR
              </span>
              <div>
                <h3 className="font-display text-xl">{promoCard.title}</h3>
                <p className="mt-1 text-xs text-white/70">{promoCard.subtitle}</p>
                <span className="mt-3 inline-block text-xs font-heading uppercase tracking-[0.15em] text-accent group-hover:text-highlight">
                  Shop Deals →
                </span>
              </div>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
