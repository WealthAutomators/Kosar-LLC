import { HeroBanner } from "@/components/homepage/hero-banner";
import { KosarStatement } from "@/components/homepage/kosar-statement";
import { DepartmentDirectory } from "@/components/homepage/department-directory";
import { FeaturedStories } from "@/components/homepage/featured-stories";
import { NewArrivals } from "@/components/homepage/new-arrivals";
import { KosarEdit } from "@/components/homepage/kosar-edit";
import { BestSellers } from "@/components/homepage/best-sellers";
import { RedLabelDeals } from "@/components/homepage/red-label-deals";
import { CustomerReviews } from "@/components/homepage/customer-reviews";
import { WhyKosar } from "@/components/homepage/why-kosar";
import { Newsletter } from "@/components/homepage/newsletter";

export default function HomePage() {
  return (
    <>
      <HeroBanner />
      <KosarStatement />
      <DepartmentDirectory />
      <FeaturedStories />
      <NewArrivals />
      <KosarEdit />
      <BestSellers />
      <RedLabelDeals />
      <CustomerReviews />
      <WhyKosar />
      <Newsletter />
    </>
  );
}
