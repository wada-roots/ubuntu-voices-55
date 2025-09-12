import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, Leaf, Heart, Home, TreePine } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Luhya = () => {
  const stories = [
    {
      id: 1,
      title: "The Origin of the Luhya Clans",
      author: "Elder Wanyama",
      content: "The foundational story of how the eighteen Luhya sub-tribes came to be, each with their own unique traditions while sharing common Bantu roots in Western Kenya.",
      category: "Origin Story",
      readTime: "9 min",
      premium: false
    },
    {
      id: 2,
      title: "Nabongo Mumia's Kingdom",
      author: "Historical Society",
      content: "The story of the great Luhya king Nabongo Mumia and his powerful kingdom that stretched across Western Kenya, including his diplomatic relations with early colonial administrators.",
      category: "Historical Legend",
      readTime: "12 min",
      premium: true
    },
    {
      id: 3,
      title: "The Wise Hare and the Hyena",
      author: "Traditional Storyteller",
      content: "A classic Luhya folktale teaching children about cleverness and wit, where the small hare outsmarts the mighty hyena through intelligence.",
      category: "Folk Tale",
      readTime: "5 min",
      premium: false
    },
    {
      id: 4,
      title: "The Sacred Mukusu Tree",
      author: "Mama Nafula",
      content: "The spiritual significance of the Mukusu (fig) tree in Luhya culture, where community meetings and important rituals take place under its protective shade.",
      category: "Spiritual Story",
      readTime: "7 min",
      premium: true
    },
    {
      id: 5,
      title: "Masinde Muliro: The Political Pioneer",
      author: "Elder Council",
      content: "The inspiring story of Masinde Muliro, the Luhya political leader who fought for Kenya's independence and championed unity among the Luhya sub-tribes.",
      category: "Modern Legend",
      readTime: "10 min",
      premium: false
    }
  ];

  const poems = [
    {
      id: 1,
      title: "Buluhya Bwitu (Our Luhya Land)",
      author: "Community Bards",
      excerpt: "Green hills of Kakamega, / Our ancestral home calls...",
      content: "Traditional praise songs celebrating the beautiful Luhya homeland in Western Kenya",
      category: "Praise Poetry",
      premium: false
    },
    {
      id: 2,
      title: "Sioyaye (Wedding Songs)",
      author: "Women's Chorus",
      excerpt: "Dance, bride, dance with joy, / Today you join our family...",
      content: "Traditional wedding songs performed during Luhya marriage ceremonies",
      category: "Wedding Songs",
      premium: true
    },
    {
      id: 3,
      title: "Lunyole Children's Rhymes",
      author: "Traditional Children",
      excerpt: "Kimbo kange, kimbo kange, / Round and round we go...",
      content: "Playful children's songs and rhymes in the Lunyole dialect",
      category: "Children's Poetry",
      premium: false
    },
    {
      id: 4,
      title: "Litungu Music Poetry",
      author: "Traditional Musicians",
      excerpt: "Eight strings sing the stories, / Of our fathers' wisdom...",
      content: "Poetry accompanying the traditional Luhya lyre (litungu) performances",
      category: "Musical Poetry",
      premium: true
    },
    {
      id: 5,
      title: "Circumcision Songs",
      author: "Age-Set Singers",
      excerpt: "Today you become a man, / Leave behind childhood ways...",
      content: "Traditional songs for the circumcision ceremony marking transition to adulthood",
      category: "Initiation Songs",
      premium: false
    }
  ];

  const medicinalPlants = [
    {
      id: 1,
      name: "Mukombero",
      scientificName: "Mondia whitei",
      uses: ["Enhancing vitality", "Digestive health", "General wellness"],
      preparation: "Chew raw roots or brew as tea with honey",
      safety: "Safe for adults, use in moderation",
      healer: "Mama Sakwa"
    },
    {
      id: 2,
      name: "Mukusu Roots",
      scientificName: "Ficus sycomorus",
      uses: ["Spiritual cleansing", "Stomach problems", "Ceremonial medicine"],
      preparation: "Boil roots for tea or use in traditional rituals",
      safety: "Use under elder guidance for spiritual purposes",
      healer: "Elder Wekesa"
    },
    {
      id: 3,
      name: "Lunyasi",
      scientificName: "Traditional Luhya herb",
      uses: ["Wound healing", "Skin conditions", "Burns"],
      preparation: "Crush fresh leaves and apply as poultice",
      safety: "External use only, safe for all ages",
      healer: "Traditional Healer Wamalwa"
    },
    {
      id: 4,
      name: "Busasala",
      scientificName: "Indigenous medicinal plant",
      uses: ["Malaria treatment", "Fever reduction", "Blood cleansing"],
      preparation: "Boil leaves and bark, drink warm three times daily",
      safety: "Avoid during pregnancy, consult healer for children",
      healer: "Mama Nasimiyu"
    },
    {
      id: 5,
      name: "Mukhuyu",
      scientificName: "Wild medicinal root",
      uses: ["Respiratory problems", "Cough", "Chest infections"],
      preparation: "Steam inhalation or brew as herbal tea",
      safety: "Safe for adults and children over 3",
      healer: "Elder Barasa"
    }
  ];

  const traditionalFoods = [
    {
      id: 1,
      name: "Ingokho (Chicken)",
      description: "Traditional free-range chicken prepared with indigenous vegetables and spices",
      ingredients: ["Indigenous chicken", "Traditional vegetables", "Onions", "Local spices", "Salt"],
      preparation: "Slow-cooked with traditional vegetables and seasoning",
      occasion: "Special celebrations and ceremonies"
    },
    {
      id: 2,
      name: "Obusuma",
      description: "Traditional maize meal staple, similar to ugali but with unique Luhya preparation methods",
      ingredients: ["White maize flour", "Water", "Salt"],
      preparation: "Cook maize flour with water, stirring continuously until thick",
      occasion: "Daily meals"
    },
    {
      id: 3,
      name: "Murenda (Jute Leaves)",
      description: "Traditional vegetable dish made from jute leaves, rich in nutrients",
      ingredients: ["Jute leaves", "Onions", "Tomatoes", "Groundnut paste", "Salt"],
      preparation: "Sauté with onions and tomatoes, add groundnut paste for richness",
      occasion: "Regular meals and special occasions"
    },
    {
      id: 4,
      name: "Kamalowo (Sweet Potatoes)",
      description: "Traditional sweet potatoes prepared with beans and vegetables",
      ingredients: ["Sweet potatoes", "Beans", "Traditional vegetables", "Salt"],
      preparation: "Boil together until tender, season with traditional herbs",
      occasion: "Everyday meals"
    },
    {
      id: 5,
      name: "Busaa",
      description: "Traditional fermented drink made from millet for ceremonial purposes",
      ingredients: ["Finger millet", "Traditional yeast", "Water", "Sorghum (optional)"],
      preparation: "Fermented for 2-3 days in traditional gourds",
      occasion: "Ceremonies, community gatherings, and celebrations"
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
              <TreePine className="h-5 w-5 text-heritage-green animate-pulse" />
              <span className="text-heritage-green font-semibold">People of the West</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-card mb-6">
              The
              <span className="bg-gradient-wisdom bg-clip-text text-transparent block">
                Luhya
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-card/90 mb-8 max-w-3xl mx-auto">
              Eighteen United Clans • Keepers of Western Traditions • Children of the Fertile Hills
            </p>
          </div>
        </div>
      </section>

      {/* Cultural Overview */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <Home className="h-12 w-12 mx-auto mb-4 text-heritage-green" />
              <h3 className="text-xl font-bold mb-2">18 Sub-tribes</h3>
              <p className="text-muted-foreground">United Bantu communities in Western Kenya</p>
            </div>
            <div className="p-6">
              <TreePine className="h-12 w-12 mx-auto mb-4 text-heritage-brown" />
              <h3 className="text-xl font-bold mb-2">Kakamega Forest</h3>
              <p className="text-muted-foreground">Guardians of Kenya's ancient rainforest</p>
            </div>
            <div className="p-6">
              <BookOpen className="h-12 w-12 mx-auto mb-4 text-ubuntu" />
              <h3 className="text-xl font-bold mb-2">Rich Folklore</h3>
              <p className="text-muted-foreground">Diverse oral traditions and musical heritage</p>
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

export default Luhya;