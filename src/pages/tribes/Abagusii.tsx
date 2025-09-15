import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { BookOpen, Heart, Leaf, Crown } from "lucide-react";

// Sample data for Abagusii tribe
const stories = [
  {
    id: 1,
    title: "The Legend of Mogaka and the Sacred Hill",
    author: "Elder Mary Nyaboke",
    excerpt: "Long ago, when the Abagusii first settled in Gusiiland, there lived a wise man named Mogaka...",
    content: "The full story of how Mogaka established the first Gusii settlement and the sacred rituals that protected the land.",
    category: "Origin Stories",
    premium: false
  },
  {
    id: 2,
    title: "The Story of Nyansera the Brave",
    author: "Mzee Thomas Kebaso",
    excerpt: "Nyansera was known throughout Gusiiland for her courage in defending our people...",
    content: "A tale of bravery during the colonial period, when Nyansera led resistance efforts.",
    category: "Heroic Tales",
    premium: true
  },
  {
    id: 3,
    title: "The Mystery of Tabaka Soapstone",
    author: "Elder Janet Moraa",
    excerpt: "The discovery of soapstone in Tabaka brought both blessing and mystery to our people...",
    content: "Traditional story about the sacred soapstone quarries and their spiritual significance.",
    category: "Cultural Heritage",
    premium: false
  }
];

const poems = [
  {
    id: 1,
    title: "Omogusii Bwana",
    author: "Traditional",
    excerpt: "Omogusii bwana, omoiseke bwana, abanto b'ase Gusii...",
    content: "A traditional praise song celebrating the identity and pride of the Gusii people.",
    category: "Praise Songs",
    premium: false
  },
  {
    id: 2,
    title: "Egesaku song for Harvest",
    author: "Elder Ruth Kwamboka",
    excerpt: "When the rains come and the maize grows tall...",
    content: "Traditional harvest song sung during the planting and harvesting seasons.",
    category: "Seasonal Songs",
    premium: false
  }
];

const medicinalPlants = [
  {
    id: 1,
    name: "Omurere (Wild Sage)",
    uses: "Treating stomach ailments and spiritual cleansing",
    preparation: "Boil leaves in water for 15 minutes, drink while warm",
    safety: "Safe for adults, consult elder for children",
    healer: "Mama Kerubo Bosire"
  },
  {
    id: 2,
    name: "Omosongoti (Fever Tree)",
    uses: "Reducing fever and treating malaria symptoms",
    preparation: "Strip bark, boil with water, drink three times daily",
    safety: "Use only prescribed amounts",
    healer: "Mzee Samuel Nyachae"
  },
  {
    id: 3,
    name: "Omogaka (Sacred Grass)",
    uses: "Ceremonial purification and protection rituals",
    preparation: "Used fresh during ceremonies, not for consumption",
    safety: "Ceremonial use only",
    healer: "Elder Mary Nyaboke"
  }
];

const traditionalFoods = [
  {
    id: 1,
    name: "Obokima (Ugali)",
    description: "Staple food made from maize flour",
    ingredients: "Maize flour, water, salt",
    preparation: "Boil water, gradually add maize flour while stirring until thick",
    occasion: "Daily meals, served with vegetables or meat"
  },
  {
    id: 2,
    name: "Omogaka ne Chinende",
    description: "Traditional vegetables cooked with cow peas",
    ingredients: "Indigenous vegetables, cow peas, salt, cooking oil",
    preparation: "Boil cow peas until tender, add vegetables and seasonings",
    occasion: "Family gatherings and daily nutrition"
  },
  {
    id: 3,
    name: "Enkaragua (Traditional Beer)",
    description: "Ceremonial brew made from millet and sorghum",
    ingredients: "Millet, sorghum, water, traditional yeast",
    preparation: "Fermentation process taking several days with specific rituals",
    occasion: "Ceremonies, marriages, and community celebrations"
  }
];

const Abagusii = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-16 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-heritage-brown/90 to-heritage-green/80"></div>
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold text-card mb-6">
            Abagusii People
          </h1>
          <p className="text-xl text-card/90 max-w-3xl mx-auto leading-relaxed">
            Discover the rich heritage of the Abagusii people, known for their soapstone carving, 
            agricultural prowess, and strong community bonds in the highlands of Nyanza Province.
          </p>
        </div>
      </section>

      {/* Cultural Overview */}
      <section className="py-16 bg-heritage-accent/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-heritage-brown mb-8 text-center">
              Cultural Overview
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-heritage-brown/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Crown className="h-8 w-8 text-heritage-brown" />
                </div>
                <h3 className="font-semibold text-heritage-brown mb-2">Population</h3>
                <p className="text-muted-foreground">Over 2.7 million people in Kenya</p>
              </div>
              <div className="text-center">
                <div className="bg-heritage-green/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Leaf className="h-8 w-8 text-heritage-green" />
                </div>
                <h3 className="font-semibold text-heritage-brown mb-2">Famous For</h3>
                <p className="text-muted-foreground">Soapstone carving and farming</p>
              </div>
              <div className="text-center">
                <div className="bg-ubuntu/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-ubuntu" />
                </div>
                <h3 className="font-semibold text-heritage-brown mb-2">Core Values</h3>
                <p className="text-muted-foreground">Ubuntu, hard work, and respect for elders</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Tabs */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="stories" className="max-w-6xl mx-auto">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="stories">Stories</TabsTrigger>
              <TabsTrigger value="poems">Poems & Songs</TabsTrigger>
              <TabsTrigger value="plants">Medicinal Plants</TabsTrigger>
              <TabsTrigger value="foods">Traditional Foods</TabsTrigger>
            </TabsList>

            <TabsContent value="stories" className="mt-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {stories.map((story) => (
                  <Card key={story.id} className="group hover:shadow-lg transition-all duration-300">
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <Badge variant={story.premium ? "default" : "secondary"}>
                          {story.category}
                        </Badge>
                        {story.premium && (
                          <Badge variant="outline" className="text-ubuntu border-ubuntu">
                            Premium
                          </Badge>
                        )}
                      </div>
                      <CardTitle className="text-xl group-hover:text-ubuntu transition-colors">
                        {story.title}
                      </CardTitle>
                      <p className="text-sm text-muted-foreground">by {story.author}</p>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4 line-clamp-3">
                        {story.excerpt}
                      </p>
                      <Button variant="outline" size="sm" className="w-full">
                        <BookOpen className="h-4 w-4 mr-2" />
                        Read Story
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="poems" className="mt-8">
              <div className="grid md:grid-cols-2 gap-6">
                {poems.map((poem) => (
                  <Card key={poem.id} className="group hover:shadow-lg transition-all duration-300">
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <Badge variant="secondary">{poem.category}</Badge>
                        {poem.premium && (
                          <Badge variant="outline" className="text-ubuntu border-ubuntu">
                            Premium
                          </Badge>
                        )}
                      </div>
                      <CardTitle className="text-xl group-hover:text-ubuntu transition-colors">
                        {poem.title}
                      </CardTitle>
                      <p className="text-sm text-muted-foreground">by {poem.author}</p>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4 italic">
                        {poem.excerpt}
                      </p>
                      <Button variant="outline" size="sm" className="w-full">
                        <BookOpen className="h-4 w-4 mr-2" />
                        Read Full Poem
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="plants" className="mt-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {medicinalPlants.map((plant) => (
                  <Card key={plant.id} className="group hover:shadow-lg transition-all duration-300">
                    <CardHeader>
                      <CardTitle className="text-xl group-hover:text-heritage-green transition-colors flex items-center">
                        <Leaf className="h-5 w-5 mr-2 text-heritage-green" />
                        {plant.name}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div>
                        <h4 className="font-semibold text-heritage-brown mb-1">Uses:</h4>
                        <p className="text-sm text-muted-foreground">{plant.uses}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-heritage-brown mb-1">Preparation:</h4>
                        <p className="text-sm text-muted-foreground">{plant.preparation}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-heritage-brown mb-1">Safety:</h4>
                        <p className="text-sm text-muted-foreground">{plant.safety}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-heritage-brown mb-1">Traditional Healer:</h4>
                        <p className="text-sm text-ubuntu">{plant.healer}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="foods" className="mt-8">
              <div className="grid md:grid-cols-2 gap-6">
                {traditionalFoods.map((food) => (
                  <Card key={food.id} className="group hover:shadow-lg transition-all duration-300">
                    <CardHeader>
                      <CardTitle className="text-xl group-hover:text-heritage-brown transition-colors">
                        {food.name}
                      </CardTitle>
                      <p className="text-muted-foreground">{food.description}</p>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div>
                        <h4 className="font-semibold text-heritage-brown mb-1">Ingredients:</h4>
                        <p className="text-sm text-muted-foreground">{food.ingredients}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-heritage-brown mb-1">Preparation:</h4>
                        <p className="text-sm text-muted-foreground">{food.preparation}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-heritage-brown mb-1">Occasion:</h4>
                        <p className="text-sm text-muted-foreground">{food.occasion}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Abagusii;