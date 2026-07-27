import { ContactSection } from "./_components/contact-section";
import { CtaSection } from "./_components/cta-section";
import { HeroSection } from "./_components/hero-section";
import { ServicesSection } from "./_components/services-section";
import { SiteFooter } from "./_components/site-footer";
import { SiteHeader } from "./_components/site-header";
import { TestimonialSection } from "./_components/testimonial-section";
import { TrustBar } from "./_components/trust-bar";
import { WhyUsSection } from "./_components/why-us-section";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <SiteHeader />
      <main className="flex flex-1 flex-col">
        <HeroSection />
        <TrustBar />
        <ServicesSection />
        <WhyUsSection />
        <TestimonialSection />
        <CtaSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </div>
  );
}
