import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Play, Heart, Clock, Users, Filter, Search } from "lucide-react";
import { useState } from "react";
import storytellingImage from "@/assets/storytelling-circle.jpg";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const stories = [
  {
    id: 1,
    title: "The Wise Tortoise and the Sacred Mountain",
    community: "Kikuyu",
    narrator: "Mama Wanjiku",
    age: 102,
    duration: "12 min",
    description: "A tale of wisdom and patience during the great drought when animals sought guidance from the ancient tortoise.",
    tags: ["Wisdom", "Nature", "Drought"],
    audioUrl: "#"
  },
  {
    id: 2,
    title: "The Brave Hunter and the Spirit of the Forest",
    community: "Kalenjin",
    narrator: "Mzee Kipkoech",
    age: 98,
    duration: "15 min",
    description: "A young hunter learns respect for nature's spirits in the dense forests of the Aberdare ranges.",
    tags: ["Courage", "Spirits", "Forest"],
    audioUrl: "#"
  },
  {
    id: 3,
    title: "The Fisherman's Daughter and the Ocean's Gift",
    community: "Swahili",
    narrator: "Bibi Fatuma",
    age: 105,
    duration: "18 min",
    description: "A coastal tale of generosity and the ocean's mysterious ways of rewarding kindness.",
    tags: ["Ocean", "Kindness", "Magic"],
    audioUrl: "#"
  },
  {
    id: 4,
    title: "The Dancing Zebras of Maasai Mara",
    community: "Maasai",
    narrator: "Mama Nasirian",
    age: 94,
    duration: "10 min",
    description: "How the zebras got their stripes through a magical dance competition during the full moon.",
    tags: ["Animals", "Magic", "Dance"],
    audioUrl: "#"
  },
  {
    id: 5,
    title: "The Secret of the Talking Baobab",
    community: "Luo",
    narrator: "Dani Otieno",
    age: 89,
    duration: "14 min",
    description: "An ancient baobab tree reveals the history of the land to a curious young girl.",
    tags: ["Trees", "History", "Mystery"],
    audioUrl: "#"
  },
  {
    id: 6,
    title: "The Star-Crossed Warriors",
    community: "Turkana",
    narrator: "Elder Ekara",
    age: 96,
    duration: "20 min",
    description: "A tale of honor and reconciliation between neighboring communities under the desert stars.",
    tags: ["Honor", "Peace", "Stars"],
    audioUrl: "#"
  }
];

const communities = ["All", "Kikuyu", "Kalenjin", "Swahili", "Maasai", "Luo", "Turkana"];

const Stories = () => {
  const [selectedCommunity, setSelectedCommunity] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredStories = stories.filter(story => {
    const matchesCommunity = selectedCommunity === "All" || story.community === selectedCommunity;
    const matchesSearch = story.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         story.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCommunity && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={storytellingImage} 
            alt="Traditional storytelling circle"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-heritage-black/60"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold text-card mb-6">
              Stories & 
              <span className="bg-gradient-wisdom bg-clip-text text-transparent block">
                Folklore
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-card/90 mb-8 max-w-3xl mx-auto">
              Traditional tales passed down through generations • Oral literature • Community wisdom
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 bg-card border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <input
                type="text"
                placeholder="Search stories..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-ubuntu"
              />
            </div>
            
            <div className="flex gap-2 overflow-x-auto">
              {communities.map((community) => (
                <Button
                  key={community}
                  variant={selectedCommunity === community ? "ubuntu" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCommunity(community)}
                  className="whitespace-nowrap"
                >
                  {community}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stories Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredStories.map((story, index) => (
              <Card 
                key={story.id} 
                className="group hover:shadow-xl transition-all duration-300 border-ubuntu/20 hover-scale animate-fade-in"
                style={{"--stagger": index} as React.CSSProperties}
              >
                <CardContent className="p-6">
                  <div className="mb-4">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="inline-block px-3 py-1 text-xs font-semibold bg-ubuntu/20 text-ubuntu rounded-full">
                        {story.community}
                      </span>
                      <span className="text-xs text-muted-foreground flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {story.duration}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-heritage-brown mb-2 story-link">
                      {story.title}
                    </h3>
                    
                    <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                      {story.description}
                    </p>
                  </div>

                  <div className="border-t border-border pt-4">
                    <div className="flex items-center justify-between mb-3">
                      <div className="text-xs text-muted-foreground">
                        <div className="font-medium">{story.narrator}</div>
                        <div>{story.age} years old</div>
                      </div>
                      <Button variant="ubuntu" size="sm" className="group-hover:scale-105 transition-transform">
                        <Play className="mr-1 h-3 w-3" />
                        Listen
                      </Button>
                    </div>
                    
                    <div className="flex gap-1 flex-wrap">
                      {story.tags.map((tag) => (
                        <span key={tag} className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredStories.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No stories found matching your criteria.</p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Stories;