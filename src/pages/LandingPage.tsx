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
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-heritage-black/90 via-heritage-black/80 to-heritage-black/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            {/* Logo/Brand */}
            <div className="mb-8 animate-fade-in">
              <h1 className="text-5xl lg:text-7xl font-bold text-card mb-4 leading-tight">
                Sauti Za
                <span className="bg-gradient-wisdom bg-clip-text text-transparent block animate-scale-in">
                  Kale Afrika
                </span>
              </h1>
              <p className="text-xl lg:text-2xl text-heritage-accent font-medium animate-fade-in">
                Stories Rooted in Africa, Shared with the World
              </p>
            </div>

            {/* Founder's Welcome */}
            <Card className="bg-background/95 backdrop-blur-sm border-heritage-accent/20 max-w-3xl mx-auto mb-8 animate-fade-in hover-scale">
              <CardContent className="p-8">
                <div className="flex items-center justify-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-full bg-gradient-heritage flex items-center justify-center animate-scale-in">
                    <Heart className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">Welcome</h3>
                    <p className="text-muted-foreground">From our Founder, Masaki Magack</p>
                  </div>
                </div>

                <blockquote className="text-lg text-foreground/90 leading-relaxed mb-6 italic border-l-4 border-heritage-red pl-4">
                  "I am Masaki Magack, a Pan-African storyteller, writer and emerging scholar in communication, 
                  culture, and media studies. I was born in a small village in Kisii, Kenya, speaking Ekegusii. 
                  From childhood, I discovered the power of words."
                </blockquote>

                <p className="text-foreground/80 leading-relaxed mb-6">
                  Today, Africa faces rapid erosion of indigenous languages and traditions. 
                  Through storytelling, poetry, research, and digital archiving, I am building a platform 
                  where African voices, spoken in our own languages, are preserved and shared with the world.
                </p>

                <div className="bg-heritage-green/10 p-4 rounded-lg border-l-4 border-heritage-green">
                  <p className="text-foreground font-medium">
                    "My vision is to create a living archive of African languages, stories, and cultural 
                    memories—a bridge between past and future, ensuring our children inherit not just our lands but our voices."
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Statistics */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center p-6 bg-background/20 backdrop-blur-sm rounded-lg border border-heritage-green/20 hover-scale animate-fade-in">
                <BookOpen className="h-8 w-8 text-heritage-green mx-auto mb-3" />
                <div className="text-3xl font-bold text-heritage-red mb-1">42+</div>
                <div className="text-card/80 text-sm">Kenyan Communities</div>
              </div>
              <div className="text-center p-6 bg-background/20 backdrop-blur-sm rounded-lg border border-heritage-green/20 hover-scale animate-fade-in">
                <Heart className="h-8 w-8 text-heritage-red mx-auto mb-3" />
                <div className="text-3xl font-bold text-heritage-green mb-1">3</div>
                <div className="text-card/80 text-sm">Languages</div>
                <div className="text-xs text-card/60 mt-1">Ekegusii, Kiswahili, English</div>
              </div>
              <div className="text-center p-6 bg-background/20 backdrop-blur-sm rounded-lg border border-heritage-green/20 hover-scale animate-fade-in">
                <ArrowRight className="h-8 w-8 text-ubuntu mx-auto mb-3" />
                <div className="text-3xl font-bold text-heritage-red mb-1">1000+</div>
                <div className="text-card/80 text-sm">Stories Preserved</div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
              <Button 
                variant="heritage" 
                size="lg"
                className="text-lg px-8 py-4 animate-scale-in hover-scale"
                onClick={() => window.location.href = '/home'}
              >
                Explore Our Heritage
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="text-lg px-8 py-4 border-heritage-red text-heritage-red hover:bg-heritage-red hover:text-white animate-scale-in hover-scale"
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