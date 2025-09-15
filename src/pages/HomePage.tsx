import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FounderSection from "@/components/FounderSection";
import FeaturedStory from "@/components/FeaturedStory";
import QuickAccess from "@/components/QuickAccess";
import UbuntuCorner from "@/components/UbuntuCorner";
import Footer from "@/components/Footer";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <FounderSection />
      <FeaturedStory />
      <QuickAccess />
      <UbuntuCorner />
      <Footer />
    </div>
  );
};

export default HomePage;