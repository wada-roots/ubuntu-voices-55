import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Heart, ArrowRight } from "lucide-react";

const LandingPage = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/founder-with-elder.jpg" 
          alt="Masaki Magack with an elder - preserving African stories"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-heritage-black/95 via-heritage-black/85 to-heritage-black/75"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            {/* Logo/Brand */}
            <div className="mb-8">
              <h1 className="text-5xl lg:text-7xl font-bold text-card mb-4 leading-tight">
                Sauti Za
                <span className="bg-gradient-wisdom bg-clip-text text-transparent block">
                  Kale Afrika
                </span>
              </h1>
              <p className="text-xl lg:text-2xl text-heritage-accent font-medium">
                Stories Rooted in Africa, Shared with the World
              </p>
            </div>

            {/* Founder's Welcome */}
            <Card className="bg-background/95 backdrop-blur-sm border-heritage-accent/20 max-w-3xl mx-auto mb-8">
              <CardContent className="p-8">
                <div className="flex items-center justify-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-full bg-gradient-wisdom flex items-center justify-center">
                    <Heart className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">Welcome</h3>
                    <p className="text-muted-foreground">From our Founder, Masaki Magack</p>
                  </div>
                </div>

                <blockquote className="text-lg text-foreground/90 leading-relaxed mb-6 italic">
                  "I am Masaki Magack, a Pan-African storyteller born in Kisii, Kenya. 
                  From childhood, I discovered the power of words and devoted my life to preserving 
                  African heritage through storytelling, poetry, and digital archiving."
                </blockquote>

                <p className="text-foreground/80 leading-relaxed mb-6">
                  Today, Africa faces rapid erosion of indigenous languages and traditions. 
                  Through this platform, I am building a living archive where African voices, 
                  spoken in our own languages, are preserved and shared with the world.
                </p>

                <div className="bg-ubuntu/10 p-4 rounded-lg border-l-4 border-ubuntu">
                  <p className="text-foreground font-medium">
                    "My vision is to create a bridge between past and future, ensuring our 
                    children inherit not just our lands but our voices."
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Statistics */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center p-6 bg-background/20 backdrop-blur-sm rounded-lg border border-ubuntu/20">
                <BookOpen className="h-8 w-8 text-ubuntu mx-auto mb-3" />
                <div className="text-3xl font-bold text-ubuntu mb-1">42+</div>
                <div className="text-card/80 text-sm">Kenyan Communities</div>
              </div>
              <div className="text-center p-6 bg-background/20 backdrop-blur-sm rounded-lg border border-ubuntu/20">
                <Heart className="h-8 w-8 text-ubuntu mx-auto mb-3" />
                <div className="text-3xl font-bold text-ubuntu mb-1">3</div>
                <div className="text-card/80 text-sm">Languages</div>
                <div className="text-xs text-card/60 mt-1">Ekegusii, Kiswahili, English</div>
              </div>
              <div className="text-center p-6 bg-background/20 backdrop-blur-sm rounded-lg border border-ubuntu/20">
                <ArrowRight className="h-8 w-8 text-ubuntu mx-auto mb-3" />
                <div className="text-3xl font-bold text-ubuntu mb-1">1000+</div>
                <div className="text-card/80 text-sm">Stories Preserved</div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="ubuntu" 
                size="lg"
                className="text-lg px-8 py-4"
                onClick={() => window.location.href = '/home'}
              >
                Explore Our Heritage
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="elder" 
                size="lg"
                className="text-lg px-8 py-4"
                onClick={() => window.location.href = '/auth'}
              >
                Share Your Story
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;