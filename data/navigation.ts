import { NavLink } from "@/types";

export const mainNavLinks: NavLink[] = [
  { label: "SHOP", href: "/shop" },
  { label: "NEW ARRIVALS", href: "/new-arrivals" },
  { label: "COLLECTIONS", href: "/categories" },
  { label: "BEST SELLERS", href: "/best-sellers" },
  { label: "DEALS", href: "/shop?sale=true" },
];

export const departmentNav = [
  { label: "ELECTRONICS", href: "/categories/electronics", slug: "electronics" },
  { label: "HOME", href: "/categories/home-kitchen", slug: "home-kitchen" },
  { label: "KITCHEN", href: "/categories/home-kitchen", slug: "home-kitchen" },
  { label: "BEAUTY", href: "/categories/beauty", slug: "beauty" },
  { label: "STYLE", href: "/categories/fashion-accessories", slug: "fashion-accessories" },
  { label: "WORKSPACE", href: "/categories/office-supplies", slug: "office-supplies" },
  { label: "FAMILY", href: "/categories/baby-products", slug: "baby-products" },
  { label: "TRAVEL", href: "/shop?category=sports-outdoors", slug: "travel" },
  { label: "OUTDOOR", href: "/categories/sports-outdoors", slug: "sports-outdoors" },
  { label: "PETS", href: "/categories/pet-supplies", slug: "pet-supplies" },
  { label: "WELLNESS", href: "/categories/health-wellness", slug: "health-wellness" },
];

export const navigationLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Shop", href: "/shop" },
  { label: "New Arrivals", href: "/new-arrivals" },
  { label: "Best Sellers", href: "/best-sellers" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const footerLinks = {
  shop: [
    { label: "All Products", href: "/shop" },
    { label: "New Arrivals", href: "/new-arrivals" },
    { label: "Best Sellers", href: "/best-sellers" },
    { label: "Deals", href: "/shop?sale=true" },
  ],
  departments: [
    { label: "Electronics", href: "/categories/electronics" },
    { label: "Home & Kitchen", href: "/categories/home-kitchen" },
    { label: "Beauty", href: "/categories/beauty" },
    { label: "Fashion", href: "/categories/fashion-accessories" },
    { label: "Office", href: "/categories/office-supplies" },
    { label: "Sports & Outdoors", href: "/categories/sports-outdoors" },
    { label: "Pet Supplies", href: "/categories/pet-supplies" },
    { label: "Health & Wellness", href: "/categories/health-wellness" },
  ],
  customerCare: [
    { label: "Track Order", href: "/track-order" },
    { label: "Returns", href: "/returns" },
    { label: "Shipping Policy", href: "/shipping" },
    { label: "FAQs", href: "/faq" },
    { label: "Contact Us", href: "/contact" },
  ],
  company: [
    { label: "About KOSAR", href: "/about" },
    { label: "Careers", href: "/contact" },
  ],
  policies: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms & Conditions", href: "/terms" },
    { label: "Refund Policy", href: "/refund" },
  ],
};

export const paymentMethods = [
  { name: "Visa", icon: "/payments/visa.svg" },
  { name: "Mastercard", icon: "/payments/mastercard.svg" },
  { name: "Amex", icon: "/payments/amex.svg" },
  { name: "PayPal", icon: "/payments/paypal.svg" },
  { name: "Apple Pay", icon: "/payments/apple-pay.svg" },
];
