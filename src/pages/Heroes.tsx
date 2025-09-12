import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Users, Calendar, Heart, Search, Filter } from "lucide-react";
import { useState } from "react";
import heroesImage from "@/assets/heroes-memorial.jpg";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const heroes = [
  {
    id: 1,
    name: "Mekatilili wa Menza",
    community: "Giriama",
    period: "1860-1924",
    role: "Female Resistance Leader",
    achievements: [
      "Led the Giriama resistance against British colonial rule",
      "Organized communities through traditional dances and ceremonies", 
      "Exiled but escaped and continued resistance"
    ],
    legacy: "Pioneer of women's leadership in anti-colonial resistance, symbol of Mijikenda unity",
    quote: "The land belongs to our ancestors, not to strangers from across the sea",
    historicalContext: "Led her people during the period of British coastal expansion, using traditional Giriama governance structures.",
    image: heroesImage,
    significance: "First documented female resistance leader in Kenya"
  },
  {
    id: 2,
    name: "Koitalel arap Samoei",
    community: "Nandi",
    period: "1860-1905",
    role: "Orkoiyot (Spiritual Leader)",
    achievements: [
      "Led Nandi resistance for over 10 years",
      "United Nandi clans against railway construction",
      "Prophesied the coming of the 'iron snake' (railway)"
    ],
    legacy: "Symbol of Nandi resistance and spiritual leadership, his prophecies are still remembered",
    quote: "The iron snake will bring strangers who will rule over our children",
    historicalContext: "Resisted the Uganda Railway construction through Nandi territory, leading one of the longest resistances.",
    image: heroesImage,
    significance: "Longest sustained resistance against colonial rule"
  },
  {
    id: 3,
    name: "Waiyaki wa Hinga",
    community: "Kikuyu",
    period: "1838-1892", 
    role: "Chief and Diplomat",
    achievements: [
      "First Kikuyu leader to engage with Europeans",
      "Attempted diplomatic solutions to land disputes",
      "Protected Kikuyu interests in early colonial period"
    ],
    legacy: "Remembered as a forward-thinking leader who tried to navigate the changing world diplomatically",
    quote: "Let us learn the ways of these strangers, but not forget our own",
    historicalContext: "Lived during the arrival of the first European explorers and missionaries in Kikuyu territory.",
    image: heroesImage,
    significance: "Bridge between traditional and colonial periods"
  },
  {
    id: 4,
    name: "Syokimau",
    community: "Kamba",
    period: "1800-1875",
    role: "Prophetess and Leader",
    achievements: [
      "Prophesied the coming of railways and foreigners",
      "Guided Kamba trade expeditions to the coast",
      "Warned of future colonization through visions"
    ],
    legacy: "Revered as the greatest Kamba prophetess, her predictions proved remarkably accurate",
    quote: "I see a great iron snake crossing our land, bringing people of different colors",
    historicalContext: "Lived during the height of Kamba long-distance trade, foreseeing major changes to come.",
    image: heroesImage,
    significance: "Prophetic vision of colonial future"
  },
  {
    id: 5,
    name: "Mukite wa Ngui",
    community: "Kikuyu",
    period: "1840-1920",
    role: "Medicine Woman and Resistance Leader",
    achievements: [
      "Led spiritual resistance against colonial medicine",
      "Preserved traditional healing practices",
      "Organized women's resistance networks"
    ],
    legacy: "Keeper of traditional healing knowledge, symbol of cultural preservation",
    quote: "Our medicines have healed our people for generations, why abandon them now?",
    historicalContext: "Resisted colonial medical practices while maintaining traditional healing systems.",
    image: heroesImage,
    significance: "Cultural preservation in healthcare"
  },
  {
    id: 6,
    name: "Chief Kivoi",
    community: "Kamba",
    period: "1790-1860",
    role: "Trading Chief and Explorer",
    achievements: [
      "Established trade routes to Mount Kenya region",
      "First to guide Europeans to Mount Kenya",
      "Built extensive trading networks"
    ],
    legacy: "Pioneer of long-distance trade, bridge between communities",
    quote: "Trade brings people together, even those who speak different tongues",
    historicalContext: "Led Kamba trading expeditions far inland, establishing the community as master traders.",
    image: heroesImage,
    significance: "Economic pioneer and cultural bridge"
  }
];

const communities = ["All", "Giriama", "Nandi", "Kikuyu", "Kamba", "Luo", "Maasai"];
const periods = ["All", "Pre-1850", "1850-1900", "1900-1920", "1920-1963"];

const Heroes = () => {
  const [selectedCommunity, setSelectedCommunity] = useState("All");
  const [selectedPeriod, setSelectedPeriod] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredHeroes = heroes.filter(hero => {
    const matchesCommunity = selectedCommunity === "All" || hero.community === selectedCommunity;
    const heroYear = parseInt(hero.period.split("-")[0]);
    const matchesPeriod = selectedPeriod === "All" || 
      (selectedPeriod === "Pre-1850" && heroYear < 1850) ||
      (selectedPeriod === "1850-1900" && heroYear >= 1850 && heroYear < 1900) ||
      (selectedPeriod === "1900-1920" && heroYear >= 1900 && heroYear < 1920) ||
      (selectedPeriod === "1920-1963" && heroYear >= 1920 && heroYear <= 1963);
    const matchesSearch = hero.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         hero.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         hero.legacy.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCommunity && matchesPeriod && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroesImage} 
            alt="Heroes and freedom fighters"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-heritage-black/60"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-heritage-red/20 px-4 py-2 rounded-full mb-6">
              <Shield className="h-5 w-5 text-heritage-red animate-pulse" />
              <span className="text-heritage-red font-semibold">Heroes & Resistance</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-card mb-6">
              Heroes &
              <span className="bg-gradient-wisdom bg-clip-text text-transparent block">
                Fighters
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-card/90 mb-8 max-w-3xl mx-auto">
              Freedom fighters • Resistance leaders • Cultural defenders • Community heroes
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 bg-card border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-4 items-center">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <input
                type="text"
                placeholder="Search heroes..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-heritage-red"
              />
            </div>
            
            <div className="flex gap-4 flex-wrap">
              <div className="flex gap-2">
                <span className="text-sm font-medium text-muted-foreground self-center">Community:</span>
                {communities.map((community) => (
                  <Button
                    key={community}
                    variant={selectedCommunity === community ? "heritage" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCommunity(community)}
                    className="text-xs"
                  >
                    {community}
                  </Button>
                ))}
              </div>
              
              <div className="flex gap-2">
                <span className="text-sm font-medium text-muted-foreground self-center">Period:</span>
                {periods.map((period) => (
                  <Button
                    key={period}
                    variant={selectedPeriod === period ? "ubuntu" : "outline"}
                    size="sm"
                    onClick={() => setSelectedPeriod(period)}
                    className="text-xs"
                  >
                    {period}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Heroes Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredHeroes.map((hero, index) => (
              <Card 
                key={hero.id} 
                className="group hover:shadow-xl transition-all duration-300 border-heritage-red/20 hover-scale animate-fade-in"
                style={{"--stagger": index} as React.CSSProperties}
              >
                <CardContent className="p-0">
                  <div className="relative h-48 overflow-hidden rounded-t-lg">
                    <img 
                      src={hero.image}
                      alt={hero.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-heritage-black/60 to-transparent"></div>
                    <div className="absolute top-4 right-4">
                      <span className="px-2 py-1 text-xs font-semibold bg-heritage-red/20 text-heritage-red rounded-full">
                        {hero.role}
                      </span>
                    </div>
                    <div className="absolute bottom-4 left-4">
                      <div className="text-card font-bold text-lg">{hero.name}</div>
                      <div className="text-card/80 text-sm">{hero.period}</div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="mb-4">
                      <span className="inline-block px-3 py-1 text-xs font-semibold bg-ubuntu/20 text-ubuntu rounded-full mb-3">
                        {hero.community} Hero
                      </span>
                      
                      <h3 className="text-xl font-bold text-heritage-brown mb-2">
                        {hero.significance}
                      </h3>
                    </div>

                    <blockquote className="border-l-4 border-ubuntu pl-4 mb-4">
                      <p className="text-ubuntu font-medium text-sm italic">
                        "{hero.quote}"
                      </p>
                    </blockquote>

                    <p className="text-muted-foreground text-sm mb-4 leading-relaxed line-clamp-3">
                      {hero.legacy}
                    </p>

                    <div className="mb-4">
                      <h4 className="font-semibold text-heritage-brown mb-2 text-sm">Key Achievements:</h4>
                      <ul className="space-y-1">
                        {hero.achievements.slice(0, 2).map((achievement, i) => (
                          <li key={i} className="text-xs text-muted-foreground flex items-start gap-2">
                            <span className="text-heritage-red mt-1">•</span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="border-t border-border pt-4">
                      <div className="flex items-center justify-between text-xs text-muted-foreground mb-3">
                        <span className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {hero.period}
                        </span>
                      </div>
                      
                      <Button variant="heritage" size="sm" className="w-full group-hover:scale-105 transition-transform">
                        <Shield className="mr-1 h-3 w-3" />
                        Learn More
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredHeroes.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No heroes found matching your criteria.</p>
            </div>
          )}
        </div>
      </section>

      {/* Legacy Message */}
      <section className="py-16 bg-heritage-brown text-card">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Honoring Our Heroes</h2>
          <p className="text-lg text-card/80 mb-8 max-w-3xl mx-auto">
            These brave men and women fought to preserve our freedom, culture, and identity. 
            Their sacrifices and courage continue to inspire new generations of Kenyans. 
            We must never forget their contributions to our nation's story.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="ubuntu" size="lg">
              <Shield className="mr-2 h-5 w-5" />
              Submit a Hero Story
            </Button>
            <Button variant="outline" size="lg" className="border-card/30 text-card hover:bg-card/10">
              <Heart className="mr-2 h-5 w-5" />
              Honor Their Memory
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Heroes;