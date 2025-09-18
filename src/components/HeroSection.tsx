import { Button } from "@/components/ui/button";
import { Play, Heart, Users } from "lucide-react";
import CulturalCarousel from "./CulturalCarousel";


const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden py-8 sm:py-12 lg:py-16">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/components/hero-elder.jpg"
          alt="Wise Kenyan elder sharing stories"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-heritage-black/80 via-heritage-black/60 to-heritage-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center lg:text-left">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Text Content */}
          <div className="order-2 lg:order-1">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-card mb-4 sm:mb-6 leading-tight">
              Sauti Za Kale
              <span className="bg-gradient-wisdom bg-clip-text text-transparent block">
                Afrika
              </span>
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-card/90 mb-6 sm:mb-8 leading-relaxed">
              Stories Rooted in Africa, Shared with the World
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 sm:mb-12 justify-center lg:justify-start">
              <Button 
                variant="ubuntu" 
                size="lg" 
                className="group w-full sm:w-auto"
                onClick={() => window.location.href = '/stories'}
              >
                <Play className="mr-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:scale-110 transition-transform" />
                Listen to Stories
              </Button>
              <Button 
                variant="elder" 
                size="lg" 
                className="w-full sm:w-auto"
                onClick={() => window.location.href = '/ubuntu-voices'}
              >
                <Users className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                Meet the Elders
              </Button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 sm:gap-6 lg:gap-8 text-card/80">
              <div className="text-center lg:text-left">
                <div className="text-xl sm:text-2xl font-bold text-ubuntu">200+</div>
                <div className="text-xs sm:text-sm">Stories Preserved</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-xl sm:text-2xl font-bold text-ubuntu">50+</div>
                <div className="text-xs sm:text-sm">Languages</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-xl sm:text-2xl font-bold text-ubuntu">100+</div>
                <div className="text-xs sm:text-sm">Elders</div>
              </div>
            </div>
          </div>

          {/* Cultural Carousel */}
          <div className="order-1 lg:order-2">
            <CulturalCarousel />
          </div>
        </div>
      </div>

      {/* Floating Ubuntu Symbol */}
      <div className="absolute bottom-4 sm:bottom-8 right-4 sm:right-8 hidden lg:block">
        <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-ubuntu/20 backdrop-blur-sm flex items-center justify-center">
          <Heart className="h-6 w-6 sm:h-8 sm:w-8 text-ubuntu animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;