import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, Leaf, Heart, Waves, Fish } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Luo = () => {
  const stories = [
    {
      id: 1,
      title: "The Origin of the Luo People",
      author: "Traditional Elder",
      content: "The ancient migration story of the Luo people from the Nile Valley, their journey south, and how they came to settle by Lake Victoria. This epic tale spans generations and explains the Luo connection to water.",
      category: "Origin Story",
      readTime: "7 min",
      premium: false
    },
    {
      id: 2,
      title: "Kit Mikayi - The First Wife",
      author: "Elder Ochieng",
      content: "The legend of Kit Mikayi, the three stone pillars near Kisumu that represent the first wife. This story explains the cultural importance of marriage and family structure in Luo society.",
      category: "Cultural Legend",
      readTime: "6 min",
      premium: true
    },
    {
      id: 3,
      title: "The Tale of Were and the Rain",
      author: "Mama Awino",
      content: "How Were, the Luo god, controls the rains and waters of Lake Victoria. A story about the spiritual connection between the Luo people and their environment.",
      category: "Spiritual Story",
      readTime: "5 min",
      premium: false
    },
    {
      id: 4,
      title: "Otieno and the Magic Fish",
      author: "Traditional Storyteller",
      content: "A fisherman's encounter with a magical fish that grants wishes, teaching lessons about greed and contentment in Luo culture.",
      category: "Folk Tale",
      readTime: "8 min",
      premium: true
    },
    {
      id: 5,
      title: "The Wisdom of Ramogi",
      author: "Elder Oloo",
      content: "Stories of Ramogi, the legendary Luo leader, and his wise sayings that continue to guide the community today.",
      category: "Historical Legend",
      readTime: "10 min",
      premium: false
    }
  ];

  const poems = [
    {
      id: 1,
      title: "Wer gi Nam (God and Water)",
      author: "Traditional Bards",
      excerpt: "From the waters we came, / To the waters we return...",
      content: "Sacred hymns about the Luo connection to water and their creator god Were",
      category: "Sacred Poetry",
      premium: false
    },
    {
      id: 2,
      title: "Pak Luo (Praise to Luo)",
      author: "Community Singers",
      excerpt: "Luo land, our pride, / Lake Victoria's gentle side...",
      content: "Praise poems celebrating Luo culture, land, and heritage",
      category: "Praise Songs",
      premium: true
    },
    {
      id: 3,
      title: "Siasa mar Chiengʼ",
      author: "Political Singers",
      excerpt: "The sun rises on new hopes, / Freedom flows like mighty waters...",
      content: "Political and freedom songs that emerged during Kenya's independence struggle",
      category: "Political Poetry",
      premium: false
    },
    {
      id: 4,
      title: "Tero Buru",
      author: "Wedding Singers",
      excerpt: "Bring the bride with joy, / Dance the ancient steps...",
      content: "Traditional wedding songs and poems celebrating marriage ceremonies",
      category: "Wedding Songs",
      premium: true
    },
    {
      id: 5,
      title: "Duond Luo",
      author: "Funeral Singers",
      excerpt: "The voice of our ancestors, / Calls across the waters...",
      content: "Funeral dirges and ancestral praise songs honoring the departed",
      category: "Funeral Rites",
      premium: false
    }
  ];

  const medicinalPlants = [
    {
      id: 1,
      name: "Oyier",
      scientificName: "Traditional Luo herb",
      uses: ["Stomach problems", "Diarrhea", "General cleansing"],
      preparation: "Boil roots and drink as tea twice daily",
      safety: "Safe for adults, reduce dose for children",
      healer: "Nyamrerwa Ocholla"
    },
    {
      id: 2,
      name: "Alara",
      scientificName: "Cleome gynandra",
      uses: ["Blood purification", "Malaria prevention", "Nutrition"],
      preparation: "Cook young leaves as vegetable or make herbal tea",
      safety: "Safe for all ages, rich in vitamins",
      healer: "Mama Auma"
    },
    {
      id: 3,
      name: "Thuriat",
      scientificName: "Indigenous water plant",
      uses: ["Kidney problems", "Water retention", "Cleansing"],
      preparation: "Dry and grind roots, mix with water",
      safety: "Use under traditional healer guidance",
      healer: "Mzee Ochieng"
    },
    {
      id: 4,
      name: "Boo",
      scientificName: "Luo medicinal grass",
      uses: ["Wound healing", "Skin conditions", "Burns"],
      preparation: "Crush fresh leaves and apply directly to affected area",
      safety: "External use only",
      healer: "Traditional Healer Awino"
    },
    {
      id: 5,
      name: "Ng'wen",
      scientificName: "Lake shore plant",
      uses: ["Respiratory problems", "Cough", "Chest congestion"],
      preparation: "Steam inhalation or brew as tea with honey",
      safety: "Safe for adults and children over 5",
      healer: "Elder Onyango"
    }
  ];

  const traditionalFoods = [
    {
      id: 1,
      name: "Fish and Ugali",
      description: "Fresh tilapia or other Lake Victoria fish served with traditional maize meal",
      ingredients: ["Fresh fish", "Maize flour", "Onions", "Tomatoes", "Traditional spices"],
      preparation: "Fish is usually fried or stewed with vegetables, served with ugali",
      occasion: "Daily meals and celebrations"
    },
    {
      id: 2,
      name: "Aliya (Traditional Vegetables)",
      description: "Mixed indigenous vegetables including cow peas leaves, spider plant, and nightshade",
      ingredients: ["Cowpea leaves", "Spider plant", "Black nightshade", "Onions", "Salt"],
      preparation: "Sauté vegetables with onions, often mixed with groundnut paste",
      occasion: "Everyday meals"
    },
    {
      id: 3,
      name: "Kuon (Sorghum Porridge)",
      description: "Traditional sorghum-based porridge, a staple food especially during dry seasons",
      ingredients: ["Sorghum flour", "Water", "Salt"],
      preparation: "Cook sorghum flour with water until thick, stir continuously",
      occasion: "Breakfast and main meals"
    },
    {
      id: 4,
      name: "Nyama ya Dhiang (Beef)",
      description: "Traditional beef preparation for special occasions and ceremonies",
      ingredients: ["Beef", "Traditional herbs", "Salt", "Local spices"],
      preparation: "Slow-cooked over open fire with traditional herbs",
      occasion: "Weddings, funerals, and important ceremonies"
    },
    {
      id: 5,
      name: "Kong'o (Traditional Beer)",
      description: "Fermented drink made from millet or sorghum for ceremonial purposes",
      ingredients: ["Millet", "Sorghum", "Traditional yeast", "Water"],
      preparation: "Fermented for several days in traditional gourds",
      occasion: "Religious ceremonies and community gatherings"
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
              <Waves className="h-5 w-5 text-heritage-green animate-pulse" />
              <span className="text-heritage-green font-semibold">People of the Lake</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-card mb-6">
              The
              <span className="bg-gradient-wisdom bg-clip-text text-transparent block">
                Luo
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-card/90 mb-8 max-w-3xl mx-auto">
              Children of Were • Fishers of Lake Victoria • Keepers of Water Wisdom
            </p>
          </div>
        </div>
      </section>

      {/* Cultural Overview */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <Fish className="h-12 w-12 mx-auto mb-4 text-heritage-green" />
              <h3 className="text-xl font-bold mb-2">Lake Victoria</h3>
              <p className="text-muted-foreground">Traditional fishing community of Africa's largest lake</p>
            </div>
            <div className="p-6">
              <Waves className="h-12 w-12 mx-auto mb-4 text-heritage-brown" />
              <h3 className="text-xl font-bold mb-2">Nilotic Heritage</h3>
              <p className="text-muted-foreground">Ancient migration from the Nile Valley</p>
            </div>
            <div className="p-6">
              <BookOpen className="h-12 w-12 mx-auto mb-4 text-ubuntu" />
              <h3 className="text-xl font-bold mb-2">Oral Tradition</h3>
              <p className="text-muted-foreground">Rich storytelling and musical heritage</p>
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

export default Luo;