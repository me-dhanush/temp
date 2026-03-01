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
import SVGBracket from "@/components/ui/SVGBracket";

const rounds = [
  {
    id: "round-of-32",
    matches: [
      { id: "m1", p1: "Magnus Carlsen", p2: "Hikaru Nakamura" },
      { id: "m2", p1: "Fabiano Caruana", p2: "Alireza Firouzja" },
      { id: "m3", p1: "Ding Liren", p2: "Ian Nepomniachtchi" },
      { id: "m4", p1: "Anish Giri", p2: "Levon Aronian" },
      { id: "m5", p1: "Wesley So", p2: "Teimour Radjabov" },
      { id: "m6", p1: "Shakhriyar Mamedyarov", p2: "Maxime Vachier-Lagrave" },
      { id: "m7", p1: "Sergey Karjakin", p2: "Viswanathan Anand" },
      { id: "m8", p1: "Gukesh D", p2: "Praggnanandhaa R" },

      { id: "m9", p1: "Arjun Erigaisi", p2: "Vidit Gujrathi" },
      { id: "m10", p1: "Jan-Krzysztof Duda", p2: "Richard Rapport" },
      { id: "m11", p1: "Vladimir Kramnik", p2: "Boris Gelfand" },
      { id: "m12", p1: "Peter Svidler", p2: "Alexander Grischuk" },
      { id: "m13", p1: "Le Quang Liem", p2: "Sam Shankland" },
      { id: "m14", p1: "Jeffery Xiong", p2: "Ray Robson" },
      { id: "m15", p1: "Nodirbek Abdusattorov", p2: "Dommaraju Gukesh" },
      { id: "m16", p1: "Veselin Topalov", p2: "Michael Adams" },
    ],
  },

  {
    id: "round-of-16",
    matches: [
      { id: "m17", p1: "Winner M1", p2: "Winner M2" },
      { id: "m18", p1: "Winner M3", p2: "Winner M4" },
      { id: "m19", p1: "Winner M5", p2: "Winner M6" },
      { id: "m20", p1: "Winner M7", p2: "Winner M8" },
      { id: "m21", p1: "Winner M9", p2: "Winner M10" },
      { id: "m22", p1: "Winner M11", p2: "Winner M12" },
      { id: "m23", p1: "Winner M13", p2: "Winner M14" },
      { id: "m24", p1: "Winner M15", p2: "Winner M16" },
    ],
  },

  {
    id: "quarterfinals",
    matches: [
      { id: "m25", p1: "Winner M17", p2: "Winner M18" },
      { id: "m26", p1: "Winner M19", p2: "Winner M20" },
      { id: "m27", p1: "Winner M21", p2: "Winner M22" },
      { id: "m28", p1: "Winner M23", p2: "Winner M24" },
    ],
  },

  {
    id: "semifinals",
    matches: [
      { id: "m29", p1: "Winner M25", p2: "Winner M26" },
      { id: "m30", p1: "Winner M27", p2: "Winner M28" },
    ],
  },

  {
    id: "final",
    matches: [{ id: "m31", p1: "Winner M29", p2: "Winner M30" }],
  },
];

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center divide-y divide-border min-h-screen w-full">
      <HeroSection />
      <SVGBracket rounds={rounds}/>
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

