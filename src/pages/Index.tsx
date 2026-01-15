import Header from "@/components/landing/Header";
import HeroSection from "@/components/landing/HeroSection";
import PurposeSection from "@/components/landing/PurposeSection";
import ChallengesSection from "@/components/landing/ChallengesSection";
import SolutionsSection from "@/components/landing/SolutionsSection";
import SpeakersSection from "@/components/landing/SpeakersSection";
import TicketSection from "@/components/landing/TicketSection";
import FAQSection from "@/components/landing/FAQSection";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <PurposeSection />
        <ChallengesSection />
        <SolutionsSection />
        <SpeakersSection />
        <TicketSection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
