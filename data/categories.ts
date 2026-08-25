import { Category } from "@/types";

export const categories: Category[] = [
  {
    id: "1",
    slug: "electronics",
    name: "Electronics",
    image: "/categories/electronics.jpg",
    description: "Smart gadgets, connected home, and everyday tech essentials.",
    productCount: 3,
  },
  {
    id: "2",
    slug: "home-kitchen",
    name: "Home & Kitchen",
    image: "/categories/home-kitchen.jpg",
    description: "Cookware, appliances, and tools for modern home life.",
    productCount: 3,
  },
  {
    id: "3",
    slug: "bathroom",
    name: "Bathroom",
    image: "/categories/bathroom.jpg",
    description: "Bath essentials, fixtures, and spa-inspired upgrades.",
    productCount: 2,
  },
  {
    id: "4",
    slug: "educational-toys",
    name: "Educational Toys",
    image: "/categories/educational-toys.jpg",
    description: "Learning tools that make education engaging and fun.",
    productCount: 2,
  },
  {
    id: "5",
    slug: "pet-supplies",
    name: "Pet Supplies",
    image: "/categories/pet-supplies.jpg",
    description: "Comfort and care products for your four-legged family.",
    productCount: 2,
  },
  {
    id: "6",
    slug: "beauty",
    name: "Beauty",
    image: "/categories/beauty.jpg",
    description: "Skincare, wellness beauty, and self-care favorites.",
    productCount: 2,
  },
  {
    id: "7",
    slug: "sports-outdoors",
    name: "Sports & Outdoors",
    image: "/categories/sports-outdoors.jpg",
    description: "Gear for fitness, camping, and outdoor adventures.",
    productCount: 2,
  },
  {
    id: "8",
    slug: "office-supplies",
    name: "Office",
    image: "/categories/office-supplies.jpg",
    description: "Workspace organizers and desk essentials.",
    productCount: 2,
  },
  {
    id: "9",
    slug: "fashion-accessories",
    name: "Fashion",
    image: "/categories/fashion-accessories.jpg",
    description: "Accessories to complete your everyday look.",
    productCount: 2,
  },
  {
    id: "10",
    slug: "baby-products",
    name: "Baby",
    image: "/categories/baby-products.jpg",
    description: "Safe, thoughtful products for little ones.",
    productCount: 2,
  },
  {
    id: "11",
    slug: "toys-games",
    name: "Toys & Games",
    image: "/categories/toys-games.jpg",
    description: "Fun for kids and families of all ages.",
    productCount: 2,
  },
  {
    id: "12",
    slug: "health-wellness",
    name: "Health & Wellness",
    image: "/categories/health-wellness.jpg",
    description: "Products to support your daily wellness routine.",
    productCount: 2,
  },
];

export const departmentDirectory = [
  { number: "01", name: "ELECTRONICS", slug: "electronics", image: "/categories/electronics.jpg" },
  { number: "02", name: "HOME", slug: "home-kitchen", image: "/categories/home-kitchen.jpg" },
  { number: "03", name: "KITCHEN", slug: "home-kitchen", image: "/hero/stories-kitchen.jpg" },
  { number: "04", name: "BEAUTY", slug: "beauty", image: "/categories/beauty.jpg" },
  { number: "05", name: "STYLE", slug: "fashion-accessories", image: "/categories/fashion-accessories.jpg" },
  { number: "06", name: "WORKSPACE", slug: "office-supplies", image: "/categories/office-supplies.jpg" },
  { number: "07", name: "FAMILY", slug: "baby-products", image: "/categories/baby-products.jpg" },
  { number: "08", name: "TRAVEL", slug: "sports-outdoors", image: "/hero/stories-travel.jpg" },
  { number: "09", name: "OUTDOOR", slug: "sports-outdoors", image: "/categories/sports-outdoors.jpg" },
  { number: "10", name: "PETS", slug: "pet-supplies", image: "/categories/pet-supplies.jpg" },
  { number: "11", name: "WELLNESS", slug: "health-wellness", image: "/categories/health-wellness.jpg" },
  { number: "12", name: "TOYS & GAMES", slug: "toys-games", image: "/categories/toys-games.jpg" },
];

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}
