import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, BookOpen, Users, Home, Heart } from "lucide-react";

const Akamba = () => {
  const stories = [
    {
      id: 1,
      title: "The Origin of the Akamba People",
      author: "Elder Muindi",
      content: "The foundational story of how the Akamba people migrated from the north and settled in the eastern regions of Kenya, establishing their rich cultural traditions.",
      category: "Origin Story",
      readTime: "8 min",
      language: "Kikamba"
    },
    {
      id: 2,
      title: "Kitui - The Sacred Land",
      author: "Elder Mutindi",
      content: "The spiritual significance of Kitui and how it became the heartland of the Akamba people, blessed by the ancestors.",
      category: "Sacred Places",
      readTime: "6 min",
      language: "Kikamba"
    },
    {
      id: 3,
      title: "The Art of Kikamba Proverbs",
      author: "Elder Nzomo",
      content: "Traditional wisdom encoded in Kikamba proverbs and their deep meanings in guiding daily life.",
      category: "Wisdom",
      readTime: "7 min",
      language: "Kikamba"
    }
  ];

  const culturalElements = [
    {
      title: "Kikamba Language",
      description: "The Bantu language of the Akamba people",
      icon: BookOpen
    },
    {
      title: "Traditional Dances",
      description: "Kilumi and other ceremonial dances",
      icon: Users
    },
    {
      title: "Ukambani Region",
      description: "Traditional homeland in Eastern Kenya",
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
            <h1 className="text-5xl lg:text-6xl font-bold mb-4">Akamba</h1>
            <p className="text-xl lg:text-2xl opacity-90 mb-6">
              The People of Eastern Kenya
            </p>
            <p className="text-lg opacity-80 leading-relaxed">
              Discover the rich heritage of the Akamba people, their ancient wisdom, 
              traditional practices, and the beautiful Kikamba language that carries 
              centuries of cultural knowledge.
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
              <h2 className="text-3xl font-bold mb-2">Akamba Stories</h2>
              <p className="text-muted-foreground">Traditional tales and wisdom from the Akamba elders</p>
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
              <h3 className="text-2xl font-bold mb-2 text-heritage-green">4.7M+</h3>
              <p className="text-muted-foreground">Akamba People</p>
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

export default Akamba;