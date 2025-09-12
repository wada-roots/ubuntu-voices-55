import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Play, Leaf, Search, Filter, Star, Clock } from "lucide-react";
import { useState } from "react";
import medicinalImage from "@/assets/medicinal-plants.jpg";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const plants = [
  {
    id: 1,
    name: "Muthithi",
    scientificName: "Senna didymobotrya",
    community: "Kikuyu",
    uses: ["Stomach problems", "Malaria", "Skin infections"],
    preparation: "Boil leaves and roots in water for 20 minutes. Drink 3 times daily.",
    healer: "Mama Wanjiku",
    difficulty: "Easy",
    safety: "Generally safe, avoid during pregnancy",
    description: "A common shrub found in highland areas, traditionally used by Kikuyu healers for digestive issues and fever.",
    image: medicinalImage
  },
  {
    id: 2,
    name: "Mukinduri",
    scientificName: "Croton megalocarpus",
    community: "Kikuyu",
    uses: ["Wounds", "Respiratory problems", "Joint pain"],
    preparation: "Crush fresh leaves and apply directly to wounds, or boil bark for respiratory issues.",
    healer: "Mzee Kamau",
    difficulty: "Medium",
    safety: "External use only for wounds",
    description: "Sacred tree whose bark and leaves have powerful healing properties for external wounds and lung conditions.",
    image: medicinalImage
  },
  {
    id: 3,
    name: "Leleshwa",
    scientificName: "Tarenna graveolens",
    community: "Maasai",
    uses: ["Colds", "Flu", "Breathing problems"],
    preparation: "Burn dried leaves and inhale smoke, or make tea from fresh leaves.",
    healer: "Mama Nasirian",
    difficulty: "Easy",
    safety: "Safe for all ages",
    description: "Aromatic shrub highly valued by Maasai communities for treating respiratory ailments and cleansing ceremonies.",
    image: medicinalImage
  },
  {
    id: 4,
    name: "Mubiru",
    scientificName: "Kikuyu traditional name",
    community: "Kikuyu",
    uses: ["Diabetes", "High blood pressure", "Kidney problems"],
    preparation: "Boil roots in water overnight, drink in the morning on empty stomach.",
    healer: "Elder Wambui",
    difficulty: "Advanced",
    safety: "Consult healer for proper dosage",
    description: "Powerful medicinal root requiring careful preparation, traditionally used for serious health conditions.",
    image: medicinalImage
  },
  {
    id: 5,
    name: "Sodom Apple",
    scientificName: "Solanum incanum",
    community: "Kalenjin",
    uses: ["Tooth pain", "Skin conditions", "Digestive issues"],
    preparation: "Chew small piece for tooth pain, or make paste for skin application.",
    healer: "Mzee Kipkoech",
    difficulty: "Medium",
    safety: "Use sparingly, can be toxic in large amounts",
    description: "Thorny plant with powerful alkaloids, used carefully by traditional healers for pain relief.",
    image: medicinalImage
  },
  {
    id: 6,
    name: "Msaharati",
    scientificName: "Ocimum gratissimum",
    community: "Swahili",
    uses: ["Fever", "Headaches", "Spiritual cleansing"],
    preparation: "Make tea from fresh leaves, or use in steam baths for spiritual purposes.",
    healer: "Bibi Fatuma",
    difficulty: "Easy",
    safety: "Safe for regular use",
    description: "Sacred basil used in coastal communities for both physical healing and spiritual practices.",
    image: medicinalImage
  }
];

const categories = ["All", "Digestive", "Respiratory", "Skin", "Pain Relief", "Spiritual"];
const communities = ["All", "Kikuyu", "Maasai", "Kalenjin", "Swahili", "Luo"];

const MedicinalPlants = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedCommunity, setSelectedCommunity] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredPlants = plants.filter(plant => {
    const matchesCategory = selectedCategory === "All" || 
      plant.uses.some(use => use.toLowerCase().includes(selectedCategory.toLowerCase()));
    const matchesCommunity = selectedCommunity === "All" || plant.community === selectedCommunity;
    const matchesSearch = plant.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         plant.scientificName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         plant.uses.some(use => use.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesCommunity && matchesSearch;
  });

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Easy": return "text-heritage-green bg-heritage-green/10";
      case "Medium": return "text-ubuntu bg-ubuntu/10";
      case "Advanced": return "text-heritage-red bg-heritage-red/10";
      default: return "text-muted-foreground bg-muted";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={medicinalImage} 
            alt="Traditional medicinal plants"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-heritage-black/60"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-heritage-green/20 px-4 py-2 rounded-full mb-6">
              <Leaf className="h-5 w-5 text-heritage-green animate-pulse" />
              <span className="text-heritage-green font-semibold">Traditional Healing</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-card mb-6">
              Medicinal
              <span className="bg-gradient-wisdom bg-clip-text text-transparent block">
                Plants
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-card/90 mb-8 max-w-3xl mx-auto">
              Ancient healing wisdom • Traditional remedies • Nature's pharmacy
            </p>
          </div>
        </div>
      </section>

      {/* Warning Banner */}
      <section className="py-4 bg-heritage-red/10 border-b border-heritage-red/20">
        <div className="container mx-auto px-4">
          <div className="text-center text-heritage-red">
            <p className="font-medium">
              ⚠️ Traditional Knowledge Disclaimer: Always consult qualified healthcare providers before using traditional remedies. 
              This information is for educational and cultural preservation purposes only.
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
                placeholder="Search plants..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-heritage-green"
              />
            </div>
            
            <div className="flex gap-4 flex-wrap">
              <div className="flex gap-2">
                <span className="text-sm font-medium text-muted-foreground self-center">Category:</span>
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "heritage" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(category)}
                    className="text-xs"
                  >
                    {category}
                  </Button>
                ))}
              </div>
              
              <div className="flex gap-2">
                <span className="text-sm font-medium text-muted-foreground self-center">Community:</span>
                {communities.map((community) => (
                  <Button
                    key={community}
                    variant={selectedCommunity === community ? "ubuntu" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCommunity(community)}
                    className="text-xs"
                  >
                    {community}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Plants Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPlants.map((plant, index) => (
              <Card 
                key={plant.id} 
                className="group hover:shadow-xl transition-all duration-300 border-heritage-green/20 hover-scale animate-fade-in"
                style={{"--stagger": index} as React.CSSProperties}
              >
                <CardContent className="p-0">
                  <div className="relative h-48 overflow-hidden rounded-t-lg">
                    <img 
                      src={plant.image}
                      alt={plant.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-heritage-black/60 to-transparent"></div>
                    <div className="absolute top-4 right-4">
                      <span className={`px-2 py-1 text-xs font-semibold rounded-full ${getDifficultyColor(plant.difficulty)}`}>
                        {plant.difficulty}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="mb-4">
                      <h3 className="text-xl font-bold text-heritage-brown mb-1">
                        {plant.name}
                      </h3>
                      <p className="text-sm italic text-muted-foreground mb-2">
                        {plant.scientificName}
                      </p>
                      <span className="inline-block px-3 py-1 text-xs font-semibold bg-heritage-green/20 text-heritage-green rounded-full">
                        {plant.community} Tradition
                      </span>
                    </div>

                    <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                      {plant.description}
                    </p>

                    <div className="mb-4">
                      <h4 className="font-semibold text-heritage-brown mb-2">Traditional Uses:</h4>
                      <div className="flex gap-1 flex-wrap mb-3">
                        {plant.uses.map((use) => (
                          <span key={use} className="text-xs bg-ubuntu/10 text-ubuntu px-2 py-1 rounded">
                            {use}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="border-t border-border pt-4">
                      <div className="text-xs text-muted-foreground mb-3">
                        <div><strong>Healer:</strong> {plant.healer}</div>
                        <div><strong>Safety:</strong> {plant.safety}</div>
                      </div>
                      
                      <Button variant="heritage" size="sm" className="w-full group-hover:scale-105 transition-transform">
                        <Leaf className="mr-1 h-3 w-3" />
                        View Preparation
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredPlants.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No medicinal plants found matching your criteria.</p>
            </div>
          )}
        </div>
      </section>

      {/* Educational Banner */}
      <section className="py-16 bg-gradient-earth">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-heritage-brown mb-4">
            Preserving Traditional Healing Knowledge
          </h2>
          <p className="text-lg text-heritage-brown/80 mb-8 max-w-3xl mx-auto">
            This knowledge has been passed down through generations of traditional healers. 
            Help us preserve this precious wisdom for future generations while respecting 
            both traditional practices and modern medical understanding.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="heritage" size="lg">
              <Leaf className="mr-2 h-5 w-5" />
              Contribute Knowledge
            </Button>
            <Button variant="elder" size="lg">
              Find a Traditional Healer
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MedicinalPlants;