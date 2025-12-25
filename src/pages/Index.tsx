import Header from "@/components/Header";
import HeroSection from "@/components/sections/HeroSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import ShowcaseSection from "@/components/sections/ShowcaseSection";
import CTASection from "@/components/sections/CTASection";
import Footer from "@/components/sections/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <section id="features">
        <FeaturesSection />
      </section>
      <section id="how-it-works">
        <ShowcaseSection />
      </section>
      <CTASection />
      <Footer />
    </main>
  );
};

export default Index;
