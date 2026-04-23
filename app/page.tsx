import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import SubjectsSection from "@/components/SubjectsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";

export default function Home() {
  return (
    <PageTransition>
      <main>
        <HeroSection />
        <StatsSection />
        <SubjectsSection />
        <Footer />
      </main>
    </PageTransition>
  );
}