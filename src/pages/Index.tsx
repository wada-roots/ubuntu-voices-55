import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FeaturedStory from "@/components/FeaturedStory";
import QuickAccess from "@/components/QuickAccess";
import UbuntuCorner from "@/components/UbuntuCorner";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <FeaturedStory />
      <QuickAccess />
      <UbuntuCorner />
      <Footer />
    </div>
  );
};

export default Index;
