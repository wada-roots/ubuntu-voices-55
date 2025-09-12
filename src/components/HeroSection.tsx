import { Button } from "@/components/ui/button";
import { Play, Heart, Users } from "lucide-react";
import heroImage from "@/assets/hero-elder.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Wise Kenyan elder sharing stories"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-heritage-black/70 via-heritage-black/50 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-left max-w-4xl">
        <div className="max-w-2xl">
          <h1 className="text-5xl md:text-7xl font-bold text-card mb-6 leading-tight">
            Voices of Kenya's
            <span className="bg-gradient-wisdom bg-clip-text text-transparent block">
              Elders
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-card/90 mb-8 leading-relaxed">
            Stories of Our Roots • Ubuntu Philosophy • Indigenous Wisdom
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button variant="ubuntu" size="lg" className="group">
              <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              Listen to Stories
            </Button>
            <Button variant="elder" size="lg">
              <Users className="mr-2 h-5 w-5" />
              Meet the Elders
            </Button>
          </div>

          {/* Stats */}
          <div className="flex gap-8 text-card/80">
            <div>
              <div className="text-2xl font-bold text-ubuntu">200+</div>
              <div className="text-sm">Stories Preserved</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-ubuntu">50+</div>
              <div className="text-sm">Languages</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-ubuntu">100+</div>
              <div className="text-sm">Elders</div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Ubuntu Symbol */}
      <div className="absolute bottom-8 right-8 hidden lg:block">
        <div className="w-16 h-16 rounded-full bg-ubuntu/20 backdrop-blur-sm flex items-center justify-center">
          <Heart className="h-8 w-8 text-ubuntu animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;