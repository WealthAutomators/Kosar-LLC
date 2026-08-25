"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
import { Heart, Menu, Search, ShoppingBag, User, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { company } from "@/data/company";
import { mainNavLinks, departmentNav } from "@/data/navigation";
import { searchProducts } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { formatPrice } from "@/lib/format";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const pathname = usePathname();
  const { itemCount } = useCart();
  const { wishlist } = useWishlist();

  const searchResults = searchQuery.length > 0 ? searchProducts(searchQuery).slice(0, 5) : [];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(e.target as Node)) {
        setSearchOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/shop?search=${encodeURIComponent(searchQuery.trim())}`);
      setSearchOpen(false);
      setSearchQuery("");
      setMobileOpen(false);
    }
  };

  const activeDeptSlug = departmentNav.find((d) => pathname.startsWith(d.href.split("?")[0]))?.slug;

  return (
    <header className={cn("bg-background transition-shadow", scrolled && "border-b border-border shadow-sm")}>
      {/* Top micro-strip */}
      <AnimatePresence>
        {!scrolled && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden bg-primary text-primary-foreground"
          >
            <Container>
              <div className="flex h-8 items-center justify-between text-[10px] font-heading font-medium uppercase tracking-[0.2em] sm:text-[11px]">
                <span>
                  {company.shortName} / {company.microTagline}
                </span>
                <div className="flex items-center gap-4 sm:gap-6">
                  <Link href="/contact" className="transition-opacity hover:opacity-70">
                    Customer Care
                  </Link>
                  <Link href="/track-order" className="transition-opacity hover:opacity-70">
                    Track Order
                  </Link>
                </div>
              </div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main header */}
      <Container>
        <div className={cn("flex items-center gap-3 transition-all", scrolled ? "h-14" : "h-16 lg:h-[4.5rem]")}>
          <Link
            href="/"
            className="font-display shrink-0 text-xl font-semibold tracking-[0.15em] text-primary sm:text-2xl"
          >
            {company.shortName}
          </Link>

          <nav className="hidden flex-1 justify-center lg:flex">
            <ul className="flex items-center gap-1">
              {mainNavLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-heading px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.15em] text-foreground transition-colors hover:text-accent"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="ml-auto flex items-center gap-0.5 sm:gap-1">
            <Button
              variant="ghost"
              size="icon"
              className="h-9 w-9"
              onClick={() => setSearchOpen(!searchOpen)}
              aria-label="Search"
            >
              <Search className="h-[18px] w-[18px]" />
            </Button>

            <Button variant="ghost" size="icon" asChild className="hidden h-9 w-9 sm:inline-flex">
              <Link href="/profile" aria-label="Account">
                <User className="h-[18px] w-[18px]" />
              </Link>
            </Button>

            <Button variant="ghost" size="icon" asChild className="relative hidden h-9 w-9 sm:inline-flex">
              <Link href="/wishlist" aria-label="Wishlist">
                <Heart className="h-[18px] w-[18px]" />
                {wishlist.length > 0 && (
                  <span className="absolute -right-0.5 -top-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-accent text-[10px] font-bold text-white">
                    {wishlist.length}
                  </span>
                )}
              </Link>
            </Button>

            <Button variant="ghost" size="icon" asChild className="relative h-9 w-9">
              <Link href="/cart" aria-label="Cart">
                <ShoppingBag className="h-[18px] w-[18px]" />
                {itemCount > 0 && (
                  <span className="absolute -right-0.5 -top-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-accent text-[10px] font-bold text-white">
                    {itemCount}
                  </span>
                )}
              </Link>
            </Button>

            <Button variant="ghost" size="icon" className="h-9 w-9 lg:hidden" onClick={() => setMobileOpen(!mobileOpen)}>
              {mobileOpen ? <X className="h-[18px] w-[18px]" /> : <Menu className="h-[18px] w-[18px]" />}
            </Button>
          </div>
        </div>
      </Container>

      {/* Search overlay */}
      <AnimatePresence>
        {searchOpen && (
          <motion.div
            ref={searchRef}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-b border-border bg-card"
          >
            <Container className="py-3">
              <form onSubmit={handleSearchSubmit}>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder="Search departments, products & more..."
                    className="h-11 border-border bg-background pl-10 font-sans text-sm"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    autoFocus
                  />
                </div>
              </form>
              {searchQuery.trim().length > 0 && (
                <div className="mt-2 overflow-hidden rounded border border-border bg-card">
                  {searchResults.length > 0 ? (
                    <>
                      {searchResults.map((product) => (
                        <Link
                          key={product.id}
                          href={`/product/${product.slug}`}
                          className="flex items-center gap-3 px-3 py-2 transition-colors hover:bg-muted"
                          onClick={() => {
                            setSearchOpen(false);
                            setSearchQuery("");
                          }}
                        >
                          <div className="relative h-9 w-9 shrink-0 overflow-hidden border border-border">
                            <Image src={product.images[0]} alt={product.name} fill className="object-cover" sizes="36px" />
                          </div>
                          <div>
                            <p className="text-sm font-medium">{product.name}</p>
                            <p className="text-xs text-muted-foreground">{formatPrice(product.salePrice ?? product.price)}</p>
                          </div>
                        </Link>
                      ))}
                      <button
                        type="button"
                        className="w-full border-t border-border px-3 py-2 text-left text-sm font-medium text-accent transition-colors hover:bg-muted"
                        onClick={() => {
                          router.push(`/shop?search=${encodeURIComponent(searchQuery.trim())}`);
                          setSearchOpen(false);
                          setSearchQuery("");
                        }}
                      >
                        View all results for &quot;{searchQuery}&quot;
                      </button>
                    </>
                  ) : (
                    <div className="px-3 py-2.5 text-sm text-muted-foreground">
                      No products found for &quot;{searchQuery}&quot;.
                    </div>
                  )}
                </div>
              )}
            </Container>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Department index */}
      <div className="hidden border-t border-border bg-muted lg:block">
        <Container>
          <div className="flex items-center gap-0 overflow-x-auto py-2.5 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {departmentNav.map((dept) => (
              <Link
                key={dept.label}
                href={dept.href}
                className={cn(
                  "font-heading shrink-0 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-foreground/70 transition-colors hover:text-foreground",
                  activeDeptSlug === dept.slug && "text-foreground underline decoration-accent decoration-1 underline-offset-4"
                )}
              >
                {dept.label}
              </Link>
            ))}
          </div>
        </Container>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-border bg-card lg:hidden">
          <Container className="py-4">
            <ul className="space-y-1">
              {mainNavLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-heading block px-2 py-2.5 text-xs font-semibold uppercase tracking-[0.15em] hover:text-accent"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-4 border-t border-border pt-4">
              <p className="mb-2 px-2 text-[10px] font-heading font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                Departments
              </p>
              <div className="flex gap-2 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                {departmentNav.map((dept) => (
                  <Link
                    key={dept.label}
                    href={dept.href}
                    className="font-heading shrink-0 border border-border px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.12em]"
                    onClick={() => setMobileOpen(false)}
                  >
                    {dept.label}
                  </Link>
                ))}
              </div>
            </div>
          </Container>
        </div>
      )}
    </header>
  );
}
