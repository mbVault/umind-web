import { HeroSection } from "@/components/sections/HeroSection";
import { HowItWorksSection } from "@/components/sections/HowItWorksSection";
import { InsideTheAppSection } from "@/components/sections/InsideTheAppSection";
import { OnlyOnUmindSection } from "@/components/sections/OnlyOnUmindSection";
import { MakeItYoursSection } from "@/components/sections/MakeItYoursSection";
import { HerHealthSection } from "@/components/sections/HerHealthSection";
import { PrivacySection } from "@/components/sections/PrivacySection";
import { LifeStagesSection } from "@/components/sections/LifeStagesSection";
import { ExpertsSection } from "@/components/sections/ExpertsSection";
import { PricingSection } from "@/components/sections/PricingSection";
import { B2BSection } from "@/components/sections/B2BSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { FinalCtaSection } from "@/components/sections/FinalCtaSection";
import { CrisisFooter } from "@/components/sections/CrisisFooter";

/** Full marketing landing — UmindWeb-1 … 17. Pricing is display-only. */
export default function HomePage() {
  return (
    <>
      <HeroSection />
      <HowItWorksSection />
      <InsideTheAppSection />
      <OnlyOnUmindSection />
      <MakeItYoursSection />
      <HerHealthSection />
      <PrivacySection />
      <LifeStagesSection />
      <ExpertsSection />
      <PricingSection />
      <B2BSection />
      <FaqSection />
      <FinalCtaSection />
      <CrisisFooter />
    </>
  );
}
