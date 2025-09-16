import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, BookOpen, Users, Home, Heart } from "lucide-react";

const Ekegusii = () => {
  const stories = [
    {
      id: 1,
      title: "Omogusii - The First Ancestor",
      author: "Elder Nyachieo",
      content: "The origin story of the Abagusii people and how Omogusii became the founding father of the community in the highlands of Kisii.",
      category: "Origin Story",
      readTime: "9 min",
      language: "Ekegusii"
    },
    {
      id: 2,
      title: "The Sacred Forests of Kisii",
      author: "Elder Mogaka",
      content: "Traditional beliefs about the sacred forests and their role in Abagusii spiritual practices and environmental conservation.",
      category: "Sacred Places",
      readTime: "7 min",
      language: "Ekegusii"
    },
    {
      id: 3,
      title: "Ekegusii Proverbs and Wisdom",
      author: "Elder Bosibori",
      content: "Traditional Ekegusii proverbs that have guided the community for generations, carrying deep cultural wisdom.",
      category: "Wisdom",
      readTime: "8 min",
      language: "Ekegusii"
    },
    {
      id: 4,
      title: "The Art of Soapstone Carving",
      author: "Elder Nyabuto",
      content: "The traditional craft of soapstone carving among the Abagusii people and its cultural significance.",
      category: "Crafts",
      readTime: "6 min",
      language: "Ekegusii"
    }
  ];

  const culturalElements = [
    {
      title: "Ekegusii Language",
      description: "The beautiful Bantu language of the Abagusii people",
      icon: BookOpen
    },
    {
      title: "Traditional Ceremonies",
      description: "Rich ceremonial traditions and rites of passage",
      icon: Users
    },
    {
      title: "Kisii Highlands",
      description: "The fertile highlands of southwestern Kenya",
      icon: Home
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-heritage text-primary-foreground py-16">
        <div className="container mx-auto px-4">
          <Button 
            variant="ghost" 
            onClick={() => window.history.back()}
            className="mb-6 text-primary-foreground hover:bg-primary-foreground/20"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back
          </Button>
          
          <div className="max-w-4xl">
            <h1 className="text-5xl lg:text-6xl font-bold mb-4">Abagusii</h1>
            <p className="text-xl lg:text-2xl opacity-90 mb-6">
              The People of the Kisii Highlands
            </p>
            <p className="text-lg opacity-80 leading-relaxed">
              Explore the rich cultural heritage of the Abagusii people, their beautiful 
              Ekegusii language, traditional crafts, and the wisdom passed down through 
              generations in the fertile highlands of Kisii.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        {/* Cultural Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {culturalElements.map((element, index) => (
            <Card key={index} className="hover-scale border-heritage-green/20">
              <div className="p-6">
                <element.icon className="h-12 w-12 mx-auto mb-4 text-heritage-green" />
                <h3 className="text-xl font-bold mb-2">{element.title}</h3>
                <p className="text-muted-foreground">{element.description}</p>
              </div>
            </Card>
          ))}
        </div>

        {/* Stories Section */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold mb-2">Abagusii Stories</h2>
              <p className="text-muted-foreground">Traditional tales and wisdom from the Abagusii elders</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {stories.map((story) => (
              <Card key={story.id} className="hover-scale border-heritage-green/20">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge variant="outline" className="border-heritage-green text-heritage-green">
                      {story.category}
                    </Badge>
                    <span className="text-sm text-muted-foreground">{story.readTime}</span>
                  </div>
                  <CardTitle className="text-xl mb-2">{story.title}</CardTitle>
                  <p className="text-sm text-heritage-green font-medium">by {story.author}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {story.content}
                  </p>
                  <div className="flex justify-between items-center">
                    <Badge variant="secondary" className="bg-ubuntu/20 text-ubuntu-foreground">
                      {story.language}
                    </Badge>
                    <Button variant="ghost" size="sm" className="text-heritage-green hover:bg-heritage-green/10">
                      Read Story
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Cultural Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="text-center border-heritage-green/20">
            <div className="p-6">
              <Users className="h-12 w-12 mx-auto mb-4 text-heritage-green" />
              <h3 className="text-2xl font-bold mb-2 text-heritage-green">2.7M+</h3>
              <p className="text-muted-foreground">Abagusii People</p>
            </div>
          </Card>
          
          <Card className="text-center border-heritage-green/20">
            <div className="p-6">
              <BookOpen className="h-12 w-12 mx-auto mb-4 text-heritage-green" />
              <h3 className="text-2xl font-bold mb-2 text-heritage-green">1</h3>
              <p className="text-muted-foreground">Primary Language</p>
            </div>
          </Card>
          
          <Card className="text-center border-heritage-green/20">
            <div className="p-6">
              <Heart className="h-12 w-12 mx-auto mb-4 text-heritage-green" />
              <h3 className="text-2xl font-bold mb-2 text-heritage-green">Ancient</h3>
              <p className="text-muted-foreground">Cultural Heritage</p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Ekegusii;