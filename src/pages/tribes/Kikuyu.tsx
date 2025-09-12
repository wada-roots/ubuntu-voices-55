import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, Leaf, Heart, Mountain, Users } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Kikuyu = () => {
  const stories = [
    {
      id: 1,
      title: "The Creation Myth of Gikuyu and Mumbi",
      author: "Traditional Elder",
      content: "According to Kikuyu tradition, Ngai (God) called Gikuyu to the top of Mount Kenya (Kirinyaga) and gave him the land below. Gikuyu was given a wife, Mumbi, and together they bore nine daughters who became the mothers of the nine clans of the Kikuyu people.",
      category: "Creation Myth",
      readTime: "5 min",
      premium: false
    },
    {
      id: 2,
      title: "Mugo wa Kibiro: The Great Prophet",
      author: "Elder Wanjiku",
      content: "The story of Mugo wa Kibiro, the legendary Kikuyu seer who prophesied the coming of the white man and the iron snake (railway). His predictions warned the Kikuyu people about the changes that would come to their land.",
      category: "Historical Legend",
      readTime: "8 min",
      premium: true
    },
    {
      id: 3,
      title: "The Origin of Death",
      author: "Traditional Storyteller",
      content: "A powerful tale explaining how death came to the world, involving a bet between God and the chameleon about whether humans should be immortal.",
      category: "Folk Tale",
      readTime: "6 min",
      premium: false
    },
    {
      id: 4,
      title: "The Wise Hyena",
      author: "Mama Nyawira",
      content: "A clever story about a hyena who outwitted all the other animals, teaching lessons about intelligence and cunning in Kikuyu culture.",
      category: "Animal Fable",
      readTime: "4 min",
      premium: true
    },
    {
      id: 5,
      title: "The Sacred Mukuyu Tree",
      author: "Elder Kamau",
      content: "The significance of the fig tree in Kikuyu spirituality, where important ceremonies and community gatherings took place under its shade.",
      category: "Sacred Story",
      readTime: "7 min",
      premium: false
    }
  ];

  const poems = [
    {
      id: 1,
      title: "Nyimbo cia Kirinyaga",
      author: "Traditional Bards",
      excerpt: "Mountain of God, standing tall, / Kirinyaga, our sacred call...",
      content: "Traditional praise songs for Mount Kenya, the sacred dwelling of Ngai",
      category: "Praise Poetry",
      premium: false
    },
    {
      id: 2,
      title: "Mwomboko Songs",
      author: "Kikuyu Women",
      excerpt: "We grind the grain with rhythm, / Our voices rise in unison...",
      content: "Work songs sung by women during grain grinding and food preparation",
      category: "Work Songs",
      premium: true
    },
    {
      id: 3,
      title: "Gichandi gia Ngoma",
      author: "Traditional Drummers",
      excerpt: "Beat the drum of our ancestors, / Call the spirits of the land...",
      content: "Ceremonial drum poetry for important rituals and celebrations",
      category: "Ceremonial",
      premium: false
    },
    {
      id: 4,
      title: "Ituika Praise",
      author: "Age-Set Singers",
      excerpt: "The generation passes the staff, / Wisdom flows from old to young...",
      content: "Poetry celebrating the transition of leadership between age groups",
      category: "Ituika Songs",
      premium: true
    },
    {
      id: 5,
      title: "Kibaata Songs",
      author: "Circumcision Singers",
      excerpt: "Today you become a man, / Leave behind the child within...",
      content: "Traditional songs for the circumcision ceremony marking adulthood",
      category: "Initiation",
      premium: false
    }
  ];

  const medicinalPlants = [
    {
      id: 1,
      name: "Muthithi",
      scientificName: "Senna didymobotrya",
      uses: ["Stomach ailments", "Malaria treatment", "Skin infections"],
      preparation: "Boil leaves and roots for 20 minutes, drink three times daily",
      safety: "Generally safe, avoid during pregnancy",
      healer: "Mama Wanjiku"
    },
    {
      id: 2,
      name: "Mukinduri",
      scientificName: "Croton megalocarpus",
      uses: ["Wound healing", "Respiratory problems", "Joint pain"],
      preparation: "Crush fresh leaves for wounds, boil bark for respiratory issues",
      safety: "External use only for wounds",
      healer: "Mundu Mugo Kamau"
    },
    {
      id: 3,
      name: "Mukenia",
      scientificName: "Traditional name",
      uses: ["Digestive issues", "Fever reduction", "Blood purification"],
      preparation: "Make tea from dried leaves, drink twice daily",
      safety: "Safe for regular use",
      healer: "Elder Wambui"
    },
    {
      id: 4,
      name: "Mubiru",
      scientificName: "Kikuyu medicinal root",
      uses: ["Diabetes management", "High blood pressure", "Kidney health"],
      preparation: "Boil roots overnight, drink on empty stomach",
      safety: "Consult traditional healer for proper dosage",
      healer: "Mundu Mugo Githaiga"
    },
    {
      id: 5,
      name: "Muratina Plant",
      scientificName: "Kigelia africana",
      uses: ["Ceremonial medicine", "Spiritual cleansing", "Community healing"],
      preparation: "Used in traditional beer making for ceremonies",
      safety: "Ceremonial use only",
      healer: "Elder Council"
    }
  ];

  const traditionalFoods = [
    {
      id: 1,
      name: "Mukimo",
      description: "The quintessential Kikuyu dish made with mashed potatoes, maize, beans, and green vegetables",
      ingredients: ["Potatoes", "Maize kernels", "Beans", "Kienyeji vegetables", "Salt"],
      preparation: "Boil all ingredients together, then mash while mixing thoroughly",
      occasion: "Daily meals and celebrations"
    },
    {
      id: 2,
      name: "Irio",
      description: "A nutritious mix of green peas, maize, and potatoes, often served with meat",
      ingredients: ["Green peas", "Maize", "Potatoes", "Salt"],
      preparation: "Cook ingredients separately, then mix together with traditional wooden spoon",
      occasion: "Everyday meals"
    },
    {
      id: 3,
      name: "Ucuru",
      description: "Traditional fermented porridge, a staple breakfast food",
      ingredients: ["Millet flour", "Water", "Fermentation starter"],
      preparation: "Ferment millet flour for 2-3 days, then cook into smooth porridge",
      occasion: "Breakfast and for children"
    },
    {
      id: 4,
      name: "Kienyeji Chicken",
      description: "Free-range chicken prepared with traditional spices and cooking methods",
      ingredients: ["Indigenous chicken", "Traditional herbs", "Salt", "Native vegetables"],
      preparation: "Slow-cooked with indigenous vegetables and herbs",
      occasion: "Special celebrations and ceremonies"
    },
    {
      id: 5,
      name: "Muratina",
      description: "Traditional alcoholic beverage made from honey and sacred plants",
      ingredients: ["Honey", "Muratina fruit", "Water", "Traditional yeast"],
      preparation: "Fermented in gourds for several days during ceremonies",
      occasion: "Religious ceremonies and rites of passage"
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
              <Mountain className="h-5 w-5 text-heritage-green animate-pulse" />
              <span className="text-heritage-green font-semibold">Children of Kirinyaga</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-card mb-6">
              The
              <span className="bg-gradient-wisdom bg-clip-text text-transparent block">
                Kikuyu
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-card/90 mb-8 max-w-3xl mx-auto">
              Guardians of Mount Kenya • Keepers of Ancient Wisdom • Children of Gikuyu and Mumbi
            </p>
          </div>
        </div>
      </section>

      {/* Cultural Overview */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <Users className="h-12 w-12 mx-auto mb-4 text-heritage-green" />
              <h3 className="text-xl font-bold mb-2">Population</h3>
              <p className="text-muted-foreground">Over 7 million people, Kenya's largest ethnic group</p>
            </div>
            <div className="p-6">
              <Mountain className="h-12 w-12 mx-auto mb-4 text-heritage-brown" />
              <h3 className="text-xl font-bold mb-2">Sacred Mountain</h3>
              <p className="text-muted-foreground">Kirinyaga (Mount Kenya), home of Ngai</p>
            </div>
            <div className="p-6">
              <BookOpen className="h-12 w-12 mx-auto mb-4 text-ubuntu" />
              <h3 className="text-xl font-bold mb-2">Nine Clans</h3>
              <p className="text-muted-foreground">Descended from the nine daughters of Mumbi</p>
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

export default Kikuyu;