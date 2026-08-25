import Link from "next/link";
import Image from "next/image";
import { company } from "@/data/company";
import { footerLinks, paymentMethods } from "@/data/navigation";
import { Container } from "@/components/ui/container";
import { Separator } from "@/components/ui/separator";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <Container className="py-14 md:py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-1">
            <Link href="/" className="font-display text-2xl tracking-[0.15em]">
              {company.shortName}
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-white/60">{company.description}</p>
          </div>

          <div>
            <h3 className="font-heading mb-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/50">
              Shop
            </h3>
            <ul className="space-y-2.5">
              {footerLinks.shop.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-white/70 transition-colors hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading mb-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/50">
              Departments
            </h3>
            <ul className="space-y-2.5">
              {footerLinks.departments.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-white/70 transition-colors hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading mb-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/50">
              Customer Care
            </h3>
            <ul className="space-y-2.5">
              {footerLinks.customerCare.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-white/70 transition-colors hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <h3 className="font-heading mb-4 mt-8 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/50">
              Company
            </h3>
            <ul className="space-y-2.5">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-white/70 transition-colors hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading mb-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/50">
              Policies
            </h3>
            <ul className="space-y-2.5">
              {footerLinks.policies.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-white/70 transition-colors hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <h3 className="font-heading mb-4 mt-8 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/50">
              Contact
            </h3>
            <ul className="space-y-2 text-sm text-white/70">
              <li className="font-medium text-white">{company.name}</li>
              <li>
                <a href={`mailto:${company.email}`} className="transition-colors hover:text-white">
                  {company.email}
                </a>
              </li>
              <li>
                {company.address.street}
                <br />
                {company.address.city}, {company.address.state} {company.address.zip}
              </li>
            </ul>
          </div>
        </div>
      </Container>

      <Separator className="bg-white/10" />

      <Container className="flex flex-col items-center justify-between gap-4 py-6 sm:flex-row">
        <p className="text-sm text-white/50">{company.copyright}</p>
        <div className="flex items-center gap-2 opacity-70">
          {paymentMethods.map((method) => (
            <Image key={method.name} src={method.icon} alt={method.name} width={40} height={28} />
          ))}
        </div>
      </Container>
    </footer>
  );
}
