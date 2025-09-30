import FAQsThree from "@/components/faqs-3";
import Features from "@/components/features-4";
import FooterSection from "@/components/footer";
import HeroSection from "@/components/hero-section";
import IntegrationsSection from "@/components/integrations-7";
import StatsSection from "@/components/stats-3";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Features />
      <IntegrationsSection />
      <StatsSection />
      <FAQsThree />
      <FooterSection />
    </>
  );
}
