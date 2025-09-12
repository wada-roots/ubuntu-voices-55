import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Play, Mic, Music, Heart, Filter, Search } from "lucide-react";
import { useState } from "react";
import poetryImage from "@/assets/poetry-music.jpg";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const poetryItems = [
  {
    id: 1,
    title: "Nyimbo za Harambee",
    type: "Traditional Song",
    community: "Kikuyu",
    poet: "Mama Wanjiku",
    description: "Traditional work songs sung during community building projects, embodying the spirit of unity and cooperation.",
    excerpt: "Harambee, harambee, twendeni pamoja...\nTogether we build, together we grow,\nOur hands united, our hearts as one...",
    theme: "Unity",
    duration: "8 min",
    language: "Kikuyu/Swahili",
    occasion: "Community work",
    instruments: ["Traditional drums", "Clapping", "Vocal harmony"],
    image: poetryImage
  },
  {
    id: 2,
    title: "Warrior's Lament",
    type: "Epic Poetry", 
    community: "Maasai",
    poet: "Elder Sankale",
    description: "Epic poem recounting the courage of Maasai warriors and the changing times of their pastoral lifestyle.",
    excerpt: "Engai watches from Ol Doinyo Lengai,\nAs warriors stride across endless plains,\nSpears gleaming under African sun...",
    theme: "Courage",
    duration: "15 min",
    language: "Maa",
    occasion: "Warrior ceremonies",
    instruments: ["Enkidiong (horn)", "Vocal chanting"],
    image: poetryImage
  },
  {
    id: 3,
    title: "Msondo wa Bahari",
    type: "Coastal Poetry",
    community: "Swahili",
    poet: "Bibi Fatuma",
    description: "Rhythmic poetry celebrating the relationship between coastal communities and the ocean.",
    excerpt: "Bahari ya urembo, mama yetu mkuu,\nDalizi za dhahabu, mawimbi ya hamu,\nSamaki na jahazi, maisha ya pwani...",
    theme: "Ocean Life",
    duration: "12 min",
    language: "Kiswahili",
    occasion: "Fishing ceremonies",
    instruments: ["Oud", "Kayamba", "Sea shells"],
    image: poetryImage
  },
  {
    id: 4,
    title: "Songs of the Ancestors",
    type: "Spiritual Chant",
    community: "Luo",
    poet: "Dani Otieno",
    description: "Sacred songs connecting the living with ancestral spirits, performed during important ceremonies.",
    excerpt: "Jok ma dwaro wacho neni,\nSpirits of our fathers calling,\nFrom the waters of Nam Lolwe...",
    theme: "Spirituality",
    duration: "20 min",
    language: "Dholuo",
    occasion: "Ancestral ceremonies",
    instruments: ["Nyatiti", "Orutu", "Traditional drums"],
    image: poetryImage
  },
  {
    id: 5,
    title: "Desert Wind Stories", 
    type: "Narrative Poetry",
    community: "Turkana",
    poet: "Elder Ekara",
    description: "Poetic narratives carried by desert winds, telling tales of survival and adaptation in harsh landscapes.",
    excerpt: "Atumpan carries whispers of rain,\nAcross the burning sands of Turkana,\nEtomes remember when rivers flowed...",
    theme: "Survival",
    duration: "18 min",
    language: "Turkana",
    occasion: "Storytelling gatherings",
    instruments: ["Wind instruments", "Vocal narration"],
    image: poetryImage
  },
  {
    id: 6,
    title: "Mountain Echoes",
    type: "Praise Poetry",
    community: "Kalenjin",
    poet: "Mzee Kipkoech",
    description: "Praise poems echoing through highland valleys, celebrating athletic achievements and community pride.",
    excerpt: "From Kaptagat to Eldoret plains,\nRunners born of mountain chains,\nFeet that dance on highland rains...",
    theme: "Achievement",
    duration: "10 min",
    language: "Kalenjin",
    occasion: "Athletic celebrations",
    instruments: ["Flutes", "Horn instruments", "Rhythmic chanting"],
    image: poetryImage
  }
];

const types = ["All", "Traditional Song", "Epic Poetry", "Coastal Poetry", "Spiritual Chant", "Narrative Poetry", "Praise Poetry"];
const themes = ["All", "Unity", "Courage", "Ocean Life", "Spirituality", "Survival", "Achievement"];
const communities = ["All", "Kikuyu", "Maasai", "Swahili", "Luo", "Turkana", "Kalenjin"];

const Poetry = () => {
  const [selectedType, setSelectedType] = useState("All");
  const [selectedTheme, setSelectedTheme] = useState("All");
  const [selectedCommunity, setSelectedCommunity] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredPoetry = poetryItems.filter(item => {
    const matchesType = selectedType === "All" || item.type === selectedType;
    const matchesTheme = selectedTheme === "All" || item.theme === selectedTheme;
    const matchesCommunity = selectedCommunity === "All" || item.community === selectedCommunity;
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.poet.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesType && matchesTheme && matchesCommunity && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={poetryImage} 
            alt="Traditional poetry and music"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-heritage-black/60"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-ubuntu/20 px-4 py-2 rounded-full mb-6">
              <Music className="h-5 w-5 text-ubuntu animate-pulse" />
              <span className="text-ubuntu font-semibold">Oral Literature</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-card mb-6">
              Poetry &
              <span className="bg-gradient-wisdom bg-clip-text text-transparent block">
                Songs
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-card/90 mb-8 max-w-3xl mx-auto">
              Traditional verses • Musical heritage • Rhythmic stories • Cultural expressions
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 bg-card border-b border-border">
        <div className="container mx-auto px-4">
          <div className="space-y-4">
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <input
                type="text"
                placeholder="Search poetry and songs..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-ubuntu"
              />
            </div>
            
            <div className="flex flex-wrap gap-4 justify-center">
              <div className="flex gap-2 items-center">
                <span className="text-sm font-medium text-muted-foreground">Type:</span>
                <div className="flex gap-1 flex-wrap">
                  {types.slice(0, 4).map((type) => (
                    <Button
                      key={type}
                      variant={selectedType === type ? "ubuntu" : "outline"}
                      size="sm"
                      onClick={() => setSelectedType(type)}
                      className="text-xs"
                    >
                      {type}
                    </Button>
                  ))}
                </div>
              </div>
              
              <div className="flex gap-2 items-center">
                <span className="text-sm font-medium text-muted-foreground">Theme:</span>
                <div className="flex gap-1 flex-wrap">
                  {themes.map((theme) => (
                    <Button
                      key={theme}
                      variant={selectedTheme === theme ? "heritage" : "outline"}
                      size="sm"
                      onClick={() => setSelectedTheme(theme)}
                      className="text-xs"
                    >
                      {theme}
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Poetry Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPoetry.map((item, index) => (
              <Card 
                key={item.id} 
                className="group hover:shadow-xl transition-all duration-300 border-ubuntu/20 hover-scale animate-fade-in"
                style={{"--stagger": index} as React.CSSProperties}
              >
                <CardContent className="p-0">
                  <div className="relative h-48 overflow-hidden rounded-t-lg">
                    <img 
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-heritage-black/60 to-transparent"></div>
                    <div className="absolute top-4 right-4">
                      <span className="px-2 py-1 text-xs font-semibold bg-ubuntu/20 text-ubuntu rounded-full">
                        {item.type}
                      </span>
                    </div>
                    <div className="absolute bottom-4 left-4">
                      <div className="text-card font-bold text-lg">{item.title}</div>
                      <div className="text-card/80 text-sm">{item.community}</div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="mb-4">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="inline-block px-3 py-1 text-xs font-semibold bg-heritage-green/20 text-heritage-green rounded-full">
                          {item.theme}
                        </span>
                        <span className="text-xs text-muted-foreground">{item.duration}</span>
                      </div>
                      
                      <h3 className="text-lg font-bold text-heritage-brown mb-1">
                        {item.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        By {item.poet} • {item.language}
                      </p>
                    </div>

                    <p className="text-muted-foreground text-sm mb-4 leading-relaxed line-clamp-3">
                      {item.description}
                    </p>

                    <div className="bg-muted/50 p-3 rounded-md mb-4">
                      <p className="text-sm italic text-heritage-brown leading-relaxed">
                        {item.excerpt}
                      </p>
                    </div>

                    <div className="mb-4">
                      <div className="text-xs text-muted-foreground mb-2">
                        <strong>Occasion:</strong> {item.occasion}
                      </div>
                      <div className="flex gap-1 flex-wrap">
                        {item.instruments.slice(0, 2).map((instrument) => (
                          <span key={instrument} className="text-xs bg-ubuntu/10 text-ubuntu px-2 py-1 rounded">
                            {instrument}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="border-t border-border pt-4">
                      <div className="flex gap-2">
                        <Button variant="ubuntu" size="sm" className="flex-1 group-hover:scale-105 transition-transform">
                          <Play className="mr-1 h-3 w-3" />
                          Listen
                        </Button>
                        <Button variant="outline" size="sm" className="flex-1">
                          <Mic className="mr-1 h-3 w-3" />
                          Learn
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredPoetry.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No poetry or songs found matching your criteria.</p>
            </div>
          )}
        </div>
      </section>

      {/* Cultural Expression Section */}
      <section className="py-16 bg-gradient-earth">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-heritage-brown mb-4">
            The Rhythm of Our Heritage
          </h2>
          <p className="text-lg text-heritage-brown/80 mb-8 max-w-3xl mx-auto">
            Poetry and song are the heartbeat of African culture. Through rhythm, melody, and verse, 
            our ancestors passed down wisdom, celebrated life, and preserved our collective memory. 
            Each performance connects us to generations past and future.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="heritage" size="lg">
              <Music className="mr-2 h-5 w-5" />
              Submit Your Poetry
            </Button>
            <Button variant="elder" size="lg">
              <Heart className="mr-2 h-5 w-5" />
              Join Performance Circle
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Poetry;