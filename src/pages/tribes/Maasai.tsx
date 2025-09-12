import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, Leaf, Heart, Shield, Sun } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Maasai = () => {
  const stories = [
    {
      id: 1,
      title: "Enkai and the Origin of Cattle",
      author: "Laibon Elder",
      content: "The sacred story of how Enkai (God) gave all cattle to the Maasai people, making them the rightful guardians of all livestock. This fundamental myth explains the Maasai relationship with cattle and their pastoral lifestyle.",
      category: "Creation Myth",
      readTime: "10 min",
      premium: false
    },
    {
      id: 2,
      title: "The Great Maasai Migration",
      author: "Oral Historians",
      content: "The epic journey of the Maasai people from the Nile Valley down the Rift Valley, establishing their territories across Kenya and Tanzania through courage and divine guidance.",
      category: "Historical Epic",
      readTime: "18 min",
      premium: true
    },
    {
      id: 3,
      title: "The Legend of Enkikuuru o Nkaitin",
      author: "Traditional Laibon",
      content: "Thunder and the Gods - a powerful story explaining the relationship between the red and black gods (Enkai narok and Enkai nanyokie) and their influence on Maasai life.",
      category: "Spiritual Legend",
      readTime: "8 min",
      premium: false
    },
    {
      id: 4,
      title: "The Brave Warrior Moran",
      author: "Age-Set Elders",
      content: "Tales of courage and honor from Maasai warrior traditions, teaching young men about bravery, cattle protection, and community service.",
      category: "Warrior Tales",
      readTime: "12 min",
      premium: true
    },
    {
      id: 5,
      title: "The Wisdom of the Laibon",
      author: "Spiritual Council",
      content: "Stories of the Maasai spiritual leaders and their prophetic visions that guided the community through challenges and changes.",
      category: "Spiritual Wisdom",
      readTime: "9 min",
      premium: false
    }
  ];

  const poems = [
    {
      id: 1,
      title: "Enkai Prayers",
      author: "Laibon Singers",
      excerpt: "Enkai, father of all creation, / Bless our cattle, our children...",
      content: "Sacred prayers and hymns to Enkai, the Maasai creator god",
      category: "Sacred Chants",
      premium: false
    },
    {
      id: 2,
      title: "Moran War Songs",
      author: "Warrior Chorus",
      excerpt: "We are the lions of the savanna, / Protectors of our people...",
      content: "Traditional warrior songs celebrating courage and strength",
      category: "Warrior Poetry",
      premium: true
    },
    {
      id: 3,
      title: "Enkishon (Songs of Love)",
      author: "Young Warriors",
      excerpt: "Beautiful maiden of my heart, / Like the acacia in bloom...",
      content: "Romantic poetry and courtship songs of Maasai youth",
      category: "Love Songs",
      premium: false
    },
    {
      id: 4,
      title: "Olkirama (Ceremonial Songs)",
      author: "Ceremonial Singers",
      excerpt: "Today we mark the passage, / From childhood to wisdom...",
      content: "Ceremonial songs for important rites of passage",
      category: "Ceremonial",
      premium: true
    },
    {
      id: 5,
      title: "Inkurma e Nkera (Songs of the Cattle)",
      author: "Herders' Chorus",
      excerpt: "Our cattle are our pride, / Gift from Enkai above...",
      content: "Praise songs celebrating the sacred cattle and pastoral life",
      category: "Pastoral Poetry",
      premium: false
    }
  ];

  const medicinalPlants = [
    {
      id: 1,
      name: "Orpul",
      scientificName: "Traditional Maasai herb",
      uses: ["Malaria treatment", "Fever reduction", "General health"],
      preparation: "Boil roots and drink as bitter tea three times daily",
      safety: "Use under traditional healer guidance, very potent",
      healer: "Laibon Sankale"
    },
    {
      id: 2,
      name: "Oloisuki",
      scientificName: "Acacia species",
      uses: ["Stomach problems", "Diarrhea", "Digestive health"],
      preparation: "Chew bark or brew as tea, very effective for stomach issues",
      safety: "Safe for adults, reduce dose for children",
      healer: "Mama Nasirian"
    },
    {
      id: 3,
      name: "Oloirowa",
      scientificName: "Desert rose plant",
      uses: ["Wound healing", "Skin infections", "Burns"],
      preparation: "Apply sap directly to wounds or make paste from leaves",
      safety: "External use only, avoid contact with eyes",
      healer: "Traditional Healer Sempere"
    },
    {
      id: 4,
      name: "Entito",
      scientificName: "Wild sage",
      uses: ["Respiratory problems", "Colds", "Spiritual cleansing"],
      preparation: "Burn for inhalation or brew as aromatic tea",
      safety: "Safe for all ages, aromatic and soothing",
      healer: "Elder Nasimiyu"
    },
    {
      id: 5,
      name: "Oloirien",
      scientificName: "Wild medicinal root",
      uses: ["Strength enhancement", "Energy boost", "General vitality"],
      preparation: "Grind roots and mix with cow's milk or honey",
      safety: "Use in moderation, very powerful herb",
      healer: "Laibon Ole Sankan"
    }
  ];

  const traditionalFoods = [
    {
      id: 1,
      name: "Maziwa (Fresh Milk)",
      description: "Fresh cow's milk, the primary staple of Maasai diet, often mixed with blood for nutrition",
      ingredients: ["Fresh cow's milk", "Optional: cattle blood", "Traditional gourd"],
      preparation: "Drink fresh from cattle or store in traditional gourds",
      occasion: "Daily consumption, foundation of Maasai diet"
    },
    {
      id: 2,
      name: "Nyama ya Ng'ombe (Beef)",
      description: "Beef prepared for special occasions and ceremonies, sacred food from divine cattle",
      ingredients: ["Beef from cattle", "Salt", "Traditional herbs"],
      preparation: "Roasted over open fire or boiled with minimal seasoning",
      occasion: "Ceremonies, celebrations, and important rituals"
    },
    {
      id: 3,
      name: "Enkeer Naoto (Maasai Porridge)",
      description: "Traditional porridge made from maize meal, often enriched with milk",
      ingredients: ["Maize flour", "Fresh milk", "Water", "Honey (optional)"],
      preparation: "Cook maize flour with milk and water until smooth",
      occasion: "Daily meals, especially for children and elders"
    },
    {
      id: 4,
      name: "Olng'wessi (Wild Fruits)",
      description: "Seasonal wild fruits gathered from the savanna, important during dry seasons",
      ingredients: ["Wild berries", "Baobab fruit", "Desert dates", "Wild melons"],
      preparation: "Eaten fresh or dried for preservation",
      occasion: "Seasonal supplement during dry periods"
    },
    {
      id: 5,
      name: "Entito Tea",
      description: "Traditional herbal tea made from indigenous plants, both medicinal and nutritional",
      ingredients: ["Wild sage", "Traditional herbs", "Honey", "Hot water"],
      preparation: "Steep herbs in hot water, sweeten with wild honey",
      occasion: "Evening gatherings and medicinal purposes"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden bg-gradient-heritage">
        <div className="container mx-auto px-4 text-center">
          <div className="animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-heritage-red/20 px-4 py-2 rounded-full mb-6">
              <Shield className="h-5 w-5 text-heritage-red animate-pulse" />
              <span className="text-heritage-red font-semibold">Warriors of the Savanna</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-card mb-6">
              The
              <span className="bg-gradient-wisdom bg-clip-text text-transparent block">
                Maasai
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-card/90 mb-8 max-w-3xl mx-auto">
              Children of Enkai • Guardians of the Cattle • Keepers of Ancient Wisdom
            </p>
          </div>
        </div>
      </section>

      {/* Cultural Overview */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <Shield className="h-12 w-12 mx-auto mb-4 text-heritage-red" />
              <h3 className="text-xl font-bold mb-2">Warrior Culture</h3>
              <p className="text-muted-foreground">Traditional age-set system and moran warriors</p>
            </div>
            <div className="p-6">
              <Sun className="h-12 w-12 mx-auto mb-4 text-heritage-brown" />
              <h3 className="text-xl font-bold mb-2">Pastoralists</h3>
              <p className="text-muted-foreground">Semi-nomadic cattle herders of the Great Rift Valley</p>
            </div>
            <div className="p-6">
              <BookOpen className="h-12 w-12 mx-auto mb-4 text-ubuntu" />
              <h3 className="text-xl font-bold mb-2">Oral Tradition</h3>
              <p className="text-muted-foreground">Rich storytelling and spiritual practices</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Tabs */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="stories" className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-8">
              <TabsTrigger value="stories">Stories & Articles</TabsTrigger>
              <TabsTrigger value="poems">Poetry & Songs</TabsTrigger>
              <TabsTrigger value="medicine">Medicinal Plants</TabsTrigger>
              <TabsTrigger value="food">Traditional Foods</TabsTrigger>
            </TabsList>

            <TabsContent value="stories">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {stories.map((story) => (
                  <Card key={story.id} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <Badge variant="secondary">{story.category}</Badge>
                        {story.premium && <Badge variant="destructive">Premium $5</Badge>}
                      </div>
                      <CardTitle className="text-lg">{story.title}</CardTitle>
                      <p className="text-sm text-muted-foreground">By {story.author} • {story.readTime}</p>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm mb-4">{story.content}</p>
                      <Button variant="heritage" size="sm" className="w-full">
                        <BookOpen className="mr-2 h-4 w-4" />
                        Read Story
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="poems">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {poems.map((poem) => (
                  <Card key={poem.id} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <Badge variant="secondary">{poem.category}</Badge>
                        {poem.premium && <Badge variant="destructive">Premium $5</Badge>}
                      </div>
                      <CardTitle className="text-lg">{poem.title}</CardTitle>
                      <p className="text-sm text-muted-foreground">By {poem.author}</p>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm italic mb-2">"{poem.excerpt}"</p>
                      <p className="text-xs text-muted-foreground mb-4">{poem.content}</p>
                      <Button variant="ubuntu" size="sm" className="w-full">
                        <Heart className="mr-2 h-4 w-4" />
                        Read Poem
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="medicine">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {medicinalPlants.map((plant) => (
                  <Card key={plant.id} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <CardTitle className="text-lg">{plant.name}</CardTitle>
                      <p className="text-sm italic text-muted-foreground">{plant.scientificName}</p>
                      <p className="text-xs text-muted-foreground">Traditional Healer: {plant.healer}</p>
                    </CardHeader>
                    <CardContent>
                      <div className="mb-4">
                        <h4 className="font-semibold mb-2">Uses:</h4>
                        <div className="flex flex-wrap gap-1">
                          {plant.uses.map((use, index) => (
                            <Badge key={index} variant="outline" className="text-xs">{use}</Badge>
                          ))}
                        </div>
                      </div>
                      <p className="text-sm mb-2"><strong>Preparation:</strong> {plant.preparation}</p>
                      <p className="text-sm mb-4"><strong>Safety:</strong> {plant.safety}</p>
                      <Button variant="heritage" size="sm" className="w-full">
                        <Leaf className="mr-2 h-4 w-4" />
                        Learn More
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="food">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {traditionalFoods.map((food) => (
                  <Card key={food.id} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <CardTitle className="text-lg">{food.name}</CardTitle>
                      <p className="text-sm text-muted-foreground">{food.occasion}</p>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm mb-4">{food.description}</p>
                      <div className="mb-4">
                        <h4 className="font-semibold mb-2">Ingredients:</h4>
                        <div className="flex flex-wrap gap-1">
                          {food.ingredients.map((ingredient, index) => (
                            <Badge key={index} variant="outline" className="text-xs">{ingredient}</Badge>
                          ))}
                        </div>
                      </div>
                      <p className="text-sm mb-4"><strong>Preparation:</strong> {food.preparation}</p>
                      <Button variant="ubuntu" size="sm" className="w-full">
                        Get Recipe
                      </Button>
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

export default Maasai;