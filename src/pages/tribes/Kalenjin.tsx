import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, Leaf, Heart, Trophy, Mountain } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Kalenjin = () => {
  const stories = [
    {
      id: 1,
      title: "The Kalenjin Creation Story",
      author: "Elder Kipkoech",
      content: "The ancient tale of how Asis (God) created the Kalenjin people and placed them in the Rift Valley, giving them the gift of running and the wisdom of the highlands.",
      category: "Creation Myth",
      readTime: "8 min",
      premium: false
    },
    {
      id: 2,
      title: "Koitalel arap Samoei: The Orkoiyot's Last Stand",
      author: "Historical Council",
      content: "The heroic story of the great Nandi Orkoiyot (spiritual leader) who led resistance against British colonial forces, becoming a symbol of Kalenjin courage and determination.",
      category: "Historical Legend",
      readTime: "15 min",
      premium: true
    },
    {
      id: 3,
      title: "The Origin of Running Champions",
      author: "Sports Elders",
      content: "Why the Kalenjin people dominate long-distance running - a cultural story explaining the traditional lifestyle that created the world's greatest runners.",
      category: "Cultural Story",
      readTime: "6 min",
      premium: false
    },
    {
      id: 4,
      title: "The Clever Hyena and the Lion",
      author: "Traditional Storyteller",
      content: "A wisdom tale about cunning and strength, teaching children about using intelligence over brute force to overcome challenges.",
      category: "Folk Tale",
      readTime: "4 min",
      premium: true
    },
    {
      id: 5,
      title: "The Sacred Kapkatet Hills",
      author: "Spiritual Elders",
      content: "The spiritual significance of the Kapkatet hills in Kalenjin culture, where important ceremonies and communication with ancestors take place.",
      category: "Spiritual Story",
      readTime: "9 min",
      premium: false
    }
  ];

  const poems = [
    {
      id: 1,
      title: "Tunes Asis (Praise to God)",
      author: "Traditional Singers",
      excerpt: "Asis, creator of the hills, / Giver of strength to our limbs...",
      content: "Sacred hymns praising Asis, the Kalenjin creator god",
      category: "Sacred Poetry",
      premium: false
    },
    {
      id: 2,
      title: "Kapkoros Songs",
      author: "Warriors' Chorus",
      excerpt: "Young warriors, brave and true, / The cattle raids await you...",
      content: "Traditional warrior songs celebrating courage and cattle raiding traditions",
      category: "Warrior Poetry",
      premium: true
    },
    {
      id: 3,
      title: "Saget ab Eito (Songs of the Home)",
      author: "Women's Circle",
      excerpt: "In our home, love abides, / Children's laughter fills the air...",
      content: "Domestic songs celebrating family life and women's roles in Kalenjin society",
      category: "Family Songs",
      premium: false
    },
    {
      id: 4,
      title: "Tumdo (Circumcision Songs)",
      author: "Age-Set Singers",
      excerpt: "Today you shed childhood, / Tomorrow you lead our people...",
      content: "Ceremonial songs for the male circumcision ritual marking transition to manhood",
      category: "Initiation Songs",
      premium: true
    },
    {
      id: 5,
      title: "Olympic Champions' Praise",
      author: "Modern Bards",
      excerpt: "From Rift Valley heights they run, / Bringing glory to our land...",
      content: "Contemporary praise poems celebrating Kalenjin Olympic champions",
      category: "Modern Praise",
      premium: false
    }
  ];

  const medicinalPlants = [
    {
      id: 1,
      name: "Leleshwa",
      scientificName: "Tarenna graveolens",
      uses: ["Respiratory problems", "Spiritual cleansing", "Cold and flu"],
      preparation: "Burn dried leaves for inhalation or brew fresh leaves as tea",
      safety: "Safe for all ages, aromatic and soothing",
      healer: "Elder Cherono"
    },
    {
      id: 2,
      name: "Soget",
      scientificName: "Traditional highland herb",
      uses: ["Altitude sickness", "Headaches", "Energy boost"],
      preparation: "Chew raw leaves or brew as tea with honey",
      safety: "Safe for adults, helps with high altitude adaptation",
      healer: "Traditional Healer Kiprotich"
    },
    {
      id: 3,
      name: "Saliandet",
      scientificName: "Highland medicinal plant",
      uses: ["Digestive problems", "Stomach pain", "Appetite stimulation"],
      preparation: "Boil roots and drink warm before meals",
      safety: "Use in moderation, avoid during pregnancy",
      healer: "Mama Jebet"
    },
    {
      id: 4,
      name: "Chepkerta",
      scientificName: "Kalenjin wound herb",
      uses: ["Wound healing", "Cuts and bruises", "Skin infections"],
      preparation: "Crush fresh leaves and apply directly to wounds",
      safety: "External use only, very effective for healing",
      healer: "Elder Kiplagat"
    },
    {
      id: 5,
      name: "Mogotiet",
      scientificName: "Rift Valley medicinal root",
      uses: ["Joint pain", "Muscle soreness", "Athletic recovery"],
      preparation: "Make poultice from ground roots or soak in traditional beer",
      safety: "Use under guidance of traditional healer",
      healer: "Sports Medicine Elder Kiptoo"
    }
  ];

  const traditionalFoods = [
    {
      id: 1,
      name: "Ugali with Milk",
      description: "Traditional maize meal served with fresh cow's milk, a staple of pastoralist diet",
      ingredients: ["White maize flour", "Fresh cow's milk", "Water", "Salt"],
      preparation: "Cook ugali normally, serve with warm fresh milk on the side",
      occasion: "Daily meals, especially for warriors and athletes"
    },
    {
      id: 2,
      name: "Mursik",
      description: "Traditional fermented milk stored and flavored in special gourds with charcoal",
      ingredients: ["Fresh cow's milk", "Traditional gourd", "Special charcoal", "Traditional herbs"],
      preparation: "Ferment milk in gourd with charcoal for distinctive smoky flavor",
      occasion: "Special occasions and ceremonies"
    },
    {
      id: 3,
      name: "Kienyeji Vegetables",
      description: "Traditional indigenous vegetables including managu, terere, and sagek",
      ingredients: ["Managu", "Terere", "Sagek", "Onions", "Traditional spices"],
      preparation: "Sauté vegetables with minimal seasoning to preserve nutrients",
      occasion: "Daily meals, especially important for runners' diet"
    },
    {
      id: 4,
      name: "Nyama Choma",
      description: "Grilled meat, especially beef and goat, prepared for celebrations",
      ingredients: ["Beef or goat meat", "Salt", "Traditional herbs"],
      preparation: "Roast over open fire with minimal seasoning",
      occasion: "Celebrations, ceremonies, and important gatherings"
    },
    {
      id: 5,
      name: "Busaa ya Kalenjin",
      description: "Traditional fermented drink made from millet, specific to Kalenjin preparation methods",
      ingredients: ["Finger millet", "Traditional yeast", "Water", "Honey (optional)"],
      preparation: "Ferment for several days using traditional Kalenjin methods",
      occasion: "Ceremonies, age-set graduations, and community celebrations"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden bg-gradient-heritage">
        <div className="container mx-auto px-4 text-center">
          <div className="animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-heritage-green/20 px-4 py-2 rounded-full mb-6">
              <Trophy className="h-5 w-5 text-heritage-green animate-pulse" />
              <span className="text-heritage-green font-semibold">Champions of the Rift</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-card mb-6">
              The
              <span className="bg-gradient-wisdom bg-clip-text text-transparent block">
                Kalenjin
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-card/90 mb-8 max-w-3xl mx-auto">
              Warriors of the Highlands • World's Greatest Runners • Children of Asis
            </p>
          </div>
        </div>
      </section>

      {/* Cultural Overview */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <Trophy className="h-12 w-12 mx-auto mb-4 text-heritage-green" />
              <h3 className="text-xl font-bold mb-2">Running Champions</h3>
              <p className="text-muted-foreground">Home to most of the world's elite distance runners</p>
            </div>
            <div className="p-6">
              <Mountain className="h-12 w-12 mx-auto mb-4 text-heritage-brown" />
              <h3 className="text-xl font-bold mb-2">Rift Valley</h3>
              <p className="text-muted-foreground">Highland warriors and pastoralists</p>
            </div>
            <div className="p-6">
              <BookOpen className="h-12 w-12 mx-auto mb-4 text-ubuntu" />
              <h3 className="text-xl font-bold mb-2">Age-Set System</h3>
              <p className="text-muted-foreground">Traditional governance through age groups</p>
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

export default Kalenjin;