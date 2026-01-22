import Header from "@/components/landing/Header";
import HeroSection from "@/components/landing/HeroSection";
import PurposeSection from "@/components/landing/PurposeSection";
import ChallengesSection from "@/components/landing/ChallengesSection";
import SpeakersSection from "@/components/landing/SpeakersSection";
import TicketSection from "@/components/landing/TicketSection";
import FAQSection from "@/components/landing/FAQSection";
import Footer from "@/components/landing/Footer";
import BenefitsSection from "@/components/landing/BenefitsSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <PurposeSection />
        <BenefitsSection />
        <ChallengesSection />
        <SpeakersSection />
        <TicketSection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
