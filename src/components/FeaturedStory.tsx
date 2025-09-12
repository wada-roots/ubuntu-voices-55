import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Play, Volume2, BookOpen } from "lucide-react";
import eldersImage from "@/assets/elders-storytelling.jpg";

const FeaturedStory = () => {
  return (
    <section className="py-16 bg-gradient-earth">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-heritage-brown mb-4">
            Featured Story of the Week
          </h2>
          <p className="text-lg text-heritage-brown/80">
            From the horse's mouth • Traditional wisdom • Community voices
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="overflow-hidden shadow-2xl border-ubuntu/20">
            <div className="grid md:grid-cols-2 gap-0">
              {/* Image */}
              <div className="relative h-64 md:h-auto">
                <img 
                  src={eldersImage}
                  alt="Elders sharing stories around fire"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-heritage-black/40 flex items-center justify-center">
                  <Button variant="ubuntu" size="lg" className="scale-110">
                    <Play className="mr-2 h-6 w-6" />
                    Play Story
                  </Button>
                </div>
              </div>

              {/* Content */}
              <CardContent className="p-8 bg-card">
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 text-xs font-semibold bg-ubuntu/20 text-ubuntu rounded-full">
                    Kikuyu • Traditional Tale
                  </span>
                </div>
                
                <h3 className="text-2xl font-bold text-heritage-brown mb-4">
                  The Wise Tortoise and the Sacred Mountain
                </h3>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  "Long ago, when the rains had not come for three seasons, the animals gathered 
                  to seek wisdom from the great tortoise who lived at the foot of Kirinyaga..."
                </p>

                <div className="space-y-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Narrated by: Mama Wanjiku (102 years)</span>
                    <span className="text-muted-foreground">12 minutes</span>
                  </div>
                  
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      <Volume2 className="mr-2 h-4 w-4" />
                      Audio
                    </Button>
                    <Button variant="outline" size="sm">
                      <BookOpen className="mr-2 h-4 w-4" />
                      Transcript
                    </Button>
                  </div>
                </div>
              </CardContent>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default FeaturedStory;