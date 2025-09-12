import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Users, Leaf, MapPin, Shield, Mic } from "lucide-react";

const categories = [
  {
    icon: BookOpen,
    title: "Stories & Folklore",
    description: "Traditional tales and oral literature",
    count: "200+ stories",
    color: "text-heritage-green",
    bgColor: "bg-heritage-green/10"
  },
  {
    icon: Mic,
    title: "Poetry & Songs",
    description: "Traditional poems and songs",
    count: "150+ pieces",
    color: "text-ubuntu",
    bgColor: "bg-ubuntu/10"
  },
  {
    icon: Leaf,
    title: "Medicinal Plants",
    description: "Traditional healing knowledge",
    count: "300+ herbs",
    color: "text-heritage-green",
    bgColor: "bg-heritage-green/10"
  },
  {
    icon: MapPin,
    title: "Heritage Places",
    description: "Sacred sites and their stories",
    count: "100+ places",
    color: "text-heritage-red",
    bgColor: "bg-heritage-red/10"
  },
  {
    icon: Shield,
    title: "Heroes & Fighters",
    description: "Freedom fighters and local heroes",
    count: "80+ profiles",
    color: "text-heritage-brown",
    bgColor: "bg-heritage-brown/10"
  },
  {
    icon: Users,
    title: "Ubuntu Voices",
    description: "Elder interviews and wisdom",
    count: "100+ elders",
    color: "text-ubuntu",
    bgColor: "bg-ubuntu/10"
  }
];

const QuickAccess = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-heritage-brown mb-4">
            Explore Our Heritage
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover the rich tapestry of Kenyan culture through stories, wisdom, and traditions
            passed down through generations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-border hover:border-ubuntu/30">
                <CardContent className="p-6">
                  <div className={`inline-flex p-3 rounded-lg ${category.bgColor} mb-4`}>
                    <Icon className={`h-6 w-6 ${category.color}`} />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-heritage-brown mb-2">
                    {category.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-4">
                    {category.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-ubuntu">
                      {category.count}
                    </span>
                    <Button variant="ghost" size="sm" className="group-hover:bg-ubuntu/10">
                      Explore →
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Button variant="heritage" size="lg">
            View All Categories
          </Button>
        </div>
      </div>
    </section>
  );
};

export default QuickAccess;