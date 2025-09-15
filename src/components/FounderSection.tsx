import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, BookOpen, Users } from "lucide-react";

const FounderSection = () => {
  return (
    <section className="relative min-h-screen flex items-center py-16 lg:py-24 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/founder-with-elder.jpg" 
          alt="Masaki Magack with an elder - preserving African stories"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-heritage-black/90 via-heritage-black/80 to-heritage-black/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Founder's Message */}
          <div>
            <div className="inline-block px-4 py-2 bg-ubuntu/20 backdrop-blur-sm rounded-full mb-6">
              <span className="text-ubuntu font-medium">Welcome Message</span>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold text-card mb-6 leading-tight">
              A Message from Our
              <span className="bg-gradient-wisdom bg-clip-text text-transparent block">
                Founder
              </span>
            </h2>

            <Card className="bg-background/95 backdrop-blur-sm border-heritage-accent/20">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-full bg-gradient-wisdom flex items-center justify-center">
                    <Heart className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground">Masaki Magack</h3>
                    <p className="text-muted-foreground">Pan-African Storyteller & Founder</p>
                  </div>
                </div>

                <blockquote className="text-foreground/90 leading-relaxed mb-6 italic">
                  "I am Masaki Magack, a Pan-African storyteller born in Kisii, Kenya, speaking Ekegusii. 
                  From childhood, I discovered the power of words through family gatherings that grew into 
                  a lifelong devotion to preserving African heritage.
                </blockquote>

                <p className="text-foreground/80 leading-relaxed mb-6">
                  I have spent years learning from our elders—grandmothers and grandfathers whose wisdom 
                  often remains undocumented. Their stories hold invaluable insights into Africa's past, 
                  yet much of this knowledge disappears with each generation. As a digital enthusiast, 
                  I believe we must take advantage of technology to preserve our voices.
                </p>

                <p className="text-foreground/80 leading-relaxed mb-6">
                  Today, Africa faces rapid erosion of indigenous languages and traditions. Younger 
                  generations risk losing touch with ancestral knowledge and identity. Through storytelling, 
                  poetry, and digital archiving, I am building a platform where African voices, spoken 
                  in our own languages, are preserved and shared with the world.
                </p>

                <div className="bg-ubuntu/10 p-4 rounded-lg border-l-4 border-ubuntu">
                  <p className="text-foreground font-medium">
                    "My vision is to create a living archive of African languages, stories, and cultural 
                    memories—a bridge between past and future, ensuring our children inherit not just our 
                    lands but our voices."
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Mission Stats & Call to Action */}
          <div className="space-y-8">
            <div className="text-center lg:text-left">
              <h3 className="text-2xl font-bold text-card mb-6">Our Mission in Numbers</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-6 bg-background/20 backdrop-blur-sm rounded-lg border border-ubuntu/20">
                  <BookOpen className="h-8 w-8 text-ubuntu mx-auto mb-3" />
                  <div className="text-3xl font-bold text-ubuntu mb-1">42+</div>
                  <div className="text-card/80 text-sm">Kenyan Communities</div>
                </div>
                <div className="text-center p-6 bg-background/20 backdrop-blur-sm rounded-lg border border-ubuntu/20">
                  <Users className="h-8 w-8 text-ubuntu mx-auto mb-3" />
                  <div className="text-3xl font-bold text-ubuntu mb-1">3</div>
                  <div className="text-card/80 text-sm">Languages</div>
                  <div className="text-xs text-card/60 mt-1">Ekegusii, Kiswahili, English</div>
                </div>
              </div>
            </div>

            <Card className="bg-gradient-to-br from-ubuntu/20 to-heritage-accent/20 backdrop-blur-sm border-ubuntu/30">
              <CardContent className="p-8 text-center">
                <Heart className="h-12 w-12 text-ubuntu mx-auto mb-4" />
                <h4 className="text-xl font-bold text-card mb-3">Join Our Mission</h4>
                <p className="text-card/80 mb-6 leading-relaxed">
                  Help us preserve African heritage for future generations. Every story matters, 
                  every voice deserves to be heard.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Button 
                    variant="ubuntu" 
                    size="lg"
                    onClick={() => window.location.href = '/stories'}
                  >
                    Explore Stories
                  </Button>
                  <Button 
                    variant="elder" 
                    size="lg"
                    onClick={() => window.location.href = '/auth'}
                  >
                    Share Your Story
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 right-20 hidden lg:block">
        <div className="w-20 h-20 rounded-full bg-ubuntu/20 backdrop-blur-sm flex items-center justify-center animate-pulse">
          <BookOpen className="h-10 w-10 text-ubuntu" />
        </div>
      </div>
    </section>
  );
};

export default FounderSection;