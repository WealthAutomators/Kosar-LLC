import { Feature, HeroSlide } from "@/types";

export const heroSlides: HeroSlide[] = [
  {
    id: "1",
    image: "/hero/hero-1.jpg",
    headline: "GOOD THINGS.\nWELL CHOSEN.",
    description:
      "Everyday essentials, useful upgrades and unexpected finds, selected for modern living.",
    ctaText: "SHOP KOSAR",
    ctaLink: "/shop",
    secondaryCtaText: "EXPLORE NEW ARRIVALS",
    secondaryCtaLink: "/new-arrivals",
  },
];

export const featuredStories = [
  {
    id: "1",
    label: "LIFESTYLE",
    title: "THE EVERYDAY EDIT",
    description: "Thoughtful essentials for rooms you actually live in — curated for comfort, function, and quiet style.",
    image: "/hero/stories-everyday.jpg",
    href: "/shop",
    aspect: "tall" as const,
  },
  {
    id: "2",
    label: "WORKSPACE",
    title: "WORKSPACE RESET",
    description: "Clear surfaces, better tools, and pieces that make working from anywhere feel intentional.",
    image: "/hero/stories-workspace.jpg",
    href: "/categories/office-supplies",
    aspect: "wide" as const,
  },
  {
    id: "3",
    label: "WEEKEND",
    title: "WEEKEND ESSENTIALS",
    description: "From outdoor gear to kitchen favorites — everything worth packing for a well-spent weekend.",
    image: "/hero/stories-weekend.jpg",
    href: "/categories/sports-outdoors",
    aspect: "square" as const,
  },
];

export const whyKosarFeatures: Feature[] = [
  {
    id: "1",
    icon: "curated",
    title: "Curated Selection",
    description: "Every product earns its place — no endless aisles of forgettable items.",
  },
  {
    id: "2",
    icon: "prices",
    title: "Smart Prices",
    description: "Quality finds at fair prices, without the markup games.",
  },
  {
    id: "3",
    icon: "easy",
    title: "Easy Shopping",
    description: "Browse, compare, and checkout without the friction.",
  },
  {
    id: "4",
    icon: "new",
    title: "Something New, Often",
    description: "Fresh arrivals and rotating edits keep discovery interesting.",
  },
];

export const dealsEndTime = new Date(Date.now() + 1000 * 60 * 60 * 18).toISOString();

export const homepageDealsSlugs = [
  "portable-mini-projector",
  "air-fryer",
  "bamboo-bath-mat",
  "dog-bed",
  "merino-wool-scarf",
] as const;

export const homepageBestsellerSlugs = [
  "portable-mini-projector",
  "cast-iron-skillet",
  "magnetic-tile-building-set",
  "dog-bed",
  "yoga-mat",
  "air-fryer",
] as const;

export const homepageFeaturedSlugs = [
  "portable-mini-projector",
  "cast-iron-skillet",
  "ceramic-pour-over-set",
  "bamboo-monitor-riser",
  "retinol-night-cream",
  "wooden-strategy-game",
] as const;

export const homepageNewArrivalSlugs = [
  "wifi-smart-plug-kit",
  "ceramic-pour-over-set",
  "world-geography-puzzle",
  "retinol-night-cream",
  "silicone-baby-feeding-set",
  "weighted-sleep-mask",
] as const;

export const kosarEditSlugs = {
  feature: "portable-mini-projector",
  lifestyle: "/hero/edit-lifestyle.jpg",
  medium: ["cast-iron-skillet", "canvas-crossbody-tote"],
  small: "jade-roller-skincare-kit",
} as const;

export const redLabelDealSlug = "portable-mini-projector";

export const newsletter = {
  title: "THE GOOD STUFF,\nIN YOUR INBOX.",
  description: "New arrivals, useful finds and occasional offers. Nothing unnecessary.",
  placeholder: "Your email address",
  buttonText: "Subscribe",
};

export const sortOptions = [
  { value: "featured", label: "Featured" },
  { value: "newest", label: "Newest" },
  { value: "price-asc", label: "Price: Low to High" },
  { value: "price-desc", label: "Price: High to Low" },
  { value: "rating", label: "Top Rated" },
];
