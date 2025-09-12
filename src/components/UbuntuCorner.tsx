import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Play, Clock, Heart, Quote, Users } from "lucide-react";
import villageImage from "@/assets/village-landscape.jpg";

const elderSpotlights = [
  {
    name: "Mama Wanjiku",
    age: 102,
    community: "Kikuyu",
    wisdom: "Mti hauendi ila ukiwa na mizizi - A tree cannot grow without roots",
    preview: "She remembers the days when Mount Kenya was covered in snow...",
    duration: "15 min"
  },
  {
    name: "Mzee Kipkoech",
    age: 98,
    community: "Kalenjin",
    wisdom: "Chepsiryet chi kibai - Unity is strength",
    preview: "Stories of running across the Rift Valley plains...",
    duration: "12 min"
  },
  {
    name: "Bibi Fatuma",
    age: 105,
    community: "Swahili",
    wisdom: "Haraka haraka haina baraka - Rushing has no blessings",
    preview: "Tales from the coastal communities and fishing traditions...",
    duration: "18 min"
  }
];

const UbuntuCorner = () => {
  return (
    <section className="py-16 bg-card relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 opacity-5">
        <img 
          src={villageImage}
          alt="Village landscape"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-ubuntu/10 px-4 py-2 rounded-full mb-4">
            <Heart className="h-5 w-5 text-ubuntu" />
            <span className="text-ubuntu font-semibold">Ubuntu Philosophy</span>
          </div>
          
          <h2 className="text-4xl font-bold text-heritage-brown mb-4">
            Voices of Wisdom
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            "I am because we are" - Listen to centenarians share life lessons, 
            cultural practices, and memories that span over a century of African heritage.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
          {elderSpotlights.map((elder, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-ubuntu/20">
              <CardContent className="p-6">
                <div className="mb-4">
                  <div className="w-16 h-16 bg-gradient-wisdom rounded-full flex items-center justify-center mb-4">
                    <Quote className="h-8 w-8 text-heritage-brown" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-heritage-brown mb-1">
                    {elder.name}
                  </h3>
                  
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                    <span>{elder.age} years</span>
                    <span>•</span>
                    <span>{elder.community} Elder</span>
                  </div>
                </div>

                <div className="mb-4">
                  <p className="text-ubuntu font-medium text-sm mb-2 italic">
                    "{elder.wisdom}"
                  </p>
                  <p className="text-muted-foreground text-sm">
                    {elder.preview}
                  </p>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Clock className="h-3 w-3" />
                    {elder.duration}
                  </div>
                  
                  <Button variant="ubuntu" size="sm" className="group-hover:scale-105 transition-transform">
                    <Play className="mr-1 h-3 w-3" />
                    Listen
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button variant="elder" size="lg">
            <Users className="mr-2 h-5 w-5" />
            Meet All Our Elders
          </Button>
        </div>
      </div>
    </section>
  );
};

export default UbuntuCorner;