import { Sparkles, Tag, ShoppingBag, RefreshCw } from "lucide-react";
import { whyKosarFeatures } from "@/data/homepage";
import { Container } from "@/components/ui/container";

const iconMap: Record<string, React.ReactNode> = {
  curated: <Sparkles className="h-5 w-5" strokeWidth={1.5} />,
  prices: <Tag className="h-5 w-5" strokeWidth={1.5} />,
  easy: <ShoppingBag className="h-5 w-5" strokeWidth={1.5} />,
  new: <RefreshCw className="h-5 w-5" strokeWidth={1.5} />,
};

export function WhyKosar() {
  return (
    <section className="border-b border-border py-16 md:py-24">
      <Container>
        <h2 className="font-heading mb-12 text-center text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground md:mb-16">
          Why KOSAR?
        </h2>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {whyKosarFeatures.map((feature) => (
            <div key={feature.id} className="text-center">
              <div className="mx-auto mb-4 flex h-10 w-10 items-center justify-center text-accent">
                {iconMap[feature.icon]}
              </div>
              <h3 className="font-heading text-sm font-semibold uppercase tracking-[0.1em] text-primary">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
