import { testimonials } from "@/data/testimonials";
import { Container } from "@/components/ui/container";
import { StarRating } from "@/components/ui/star-rating";

export function CustomerReviews() {
  const featured = testimonials.find((t) => t.featured) ?? testimonials[0];
  const supporting = testimonials.filter((t) => t.id !== featured.id).slice(0, 2);

  return (
    <section className="border-b border-border py-16 md:py-24">
      <Container>
        <h2 className="font-heading mb-10 text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground md:mb-14">
          The Good Word
        </h2>

        <div className="grid gap-6 lg:grid-cols-12">
          {/* Featured testimonial */}
          <div className="border border-border bg-card p-8 md:p-10 lg:col-span-7">
            <StarRating rating={featured.rating} showCount={false} />
            <blockquote className="font-display mt-6 text-2xl leading-snug text-primary md:text-3xl">
              &ldquo;{featured.text}&rdquo;
            </blockquote>
            <div className="mt-8 border-t border-border pt-6">
              <p className="font-heading text-sm font-semibold">{featured.name}</p>
              <p className="text-xs text-muted-foreground">{featured.location}</p>
              {featured.product && (
                <p className="mt-1 text-xs text-accent">Purchased: {featured.product}</p>
              )}
            </div>
          </div>

          {/* Supporting reviews */}
          <div className="flex flex-col gap-6 lg:col-span-5">
            {supporting.map((t) => (
              <div key={t.id} className="flex-1 border border-border bg-background p-6">
                <StarRating rating={t.rating} showCount={false} size="sm" />
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">&ldquo;{t.text}&rdquo;</p>
                <div className="mt-4 border-t border-border pt-4">
                  <p className="text-sm font-medium">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.location}</p>
                  {t.product && (
                    <p className="mt-0.5 text-xs text-muted-foreground">Purchased: {t.product}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
