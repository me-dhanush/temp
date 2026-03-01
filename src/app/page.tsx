import { BentoSection } from "@/components/sections/bento-section";
import { CompanyShowcase } from "@/components/sections/company-showcase";
import { CTASection } from "@/components/sections/cta-section";
import { FAQSection } from "@/components/sections/faq-section";
import { FeatureSection } from "@/components/sections/feature-section";
import { FooterSection } from "@/components/sections/footer-section";
import { GrowthSection } from "@/components/sections/growth-section";
import { HeroSection } from "@/components/sections/hero-section-copy";
import { PricingSection } from "@/components/sections/pricing-section";
import { QuoteSection } from "@/components/sections/quote-section";
import { TestimonialSection } from "@/components/sections/testimonial-section";
import TournamentBracket from "@/components/sections/tournment-bracket";

const rounds = [
  {
    id: "round-of-16",
    matches: [
      { id: "m1", p1: "Magnus Carlsen", p2: "Hikaru Nakamura" },
      { id: "m2", p1: "Fabiano Caruana", p2: "Alireza Firouzja" },
      { id: "m3", p1: "Ding Liren", p2: "Ian Nepomniachtchi" },
      { id: "m4", p1: "Anish Giri", p2: "Levon Aronian" },
      { id: "m5", p1: "Wesley So", p2: "Teimour Radjabov" },
      { id: "m6", p1: "Shakhriyar Mamedyarov", p2: "Maxime Vachier-Lagrave" },
      { id: "m7", p1: "Sergey Karjakin", p2: "Viswanathan Anand" },
      { id: "m8", p1: "Gukesh D", p2: "Praggnanandhaa R" },
    ],
  },
  {
    id: "quarterfinals",
    matches: [
      { id: "m9", p1: "Winner M1", p2: "Winner M2" },
      { id: "m10", p1: "Winner M3", p2: "Winner M4" },
      { id: "m11", p1: "Winner M5", p2: "Winner M6" },
      { id: "m12", p1: "Winner M7", p2: "Winner M8" },
    ],
  },
  {
    id: "semifinals",
    matches: [
      { id: "m13", p1: "Winner M9", p2: "Winner M10" },
      { id: "m14", p1: "Winner M11", p2: "Winner M12" },
    ],
  },
  {
    id: "final",
    matches: [{ id: "m15", p1: "Winner M13", p2: "Winner M14" }],
  },
];

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center divide-y divide-border min-h-screen w-full">
      <HeroSection />
      <TournamentBracket rounds={rounds}/>
      {/* <CompanyShowcase />
      <BentoSection />
      <QuoteSection />
      <FeatureSection />
      <GrowthSection />
      <PricingSection />
      <TestimonialSection />
      <FAQSection />
      <CTASection />
      <FooterSection /> */}
    </main>
  );
}

