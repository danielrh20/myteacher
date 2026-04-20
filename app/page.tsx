import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import SubjectsSection from "@/components/SubjectsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <StatsSection />
      <SubjectsSection />
      <Footer />
    </main>
  );
}