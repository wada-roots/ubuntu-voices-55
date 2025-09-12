import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Info, Mountain, Users, Calendar, Camera } from "lucide-react";
import { useState } from "react";
import sacredImage from "@/assets/sacred-places.jpg";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const places = [
  {
    id: 1,
    name: "Kirinyaga (Mount Kenya)",
    type: "Sacred Mountain",
    community: "Kikuyu",
    significance: "Home of Ngai (God), the dwelling place of the supreme being in Kikuyu cosmology",
    history: "The name Kenya comes from Kirinyaga, meaning 'where the ostrich lives' in Kikuyu. The mountain has been sacred for over 1000 years.",
    coordinates: "0.1521° S, 37.3084° E",
    elevation: "5,199m",
    traditionalName: "Kirinyaga",
    modernName: "Mount Kenya",
    ceremonies: ["Prayer ceremonies", "Initiation rites", "Harvest thanksgiving"],
    legends: "The mountain is believed to be the resting place of Ngai, who would descend to help his people during times of need.",
    image: sacredImage,
    status: "UNESCO World Heritage Site"
  },
  {
    id: 2,
    name: "Lake Naivasha",
    type: "Sacred Lake",
    community: "Maasai",
    significance: "Source of life and spiritual cleansing, associated with rain-making ceremonies",
    history: "Named 'Nai'posha' meaning 'rough water' in Maasai. The lake has been central to Maasai pastoralism for centuries.",
    coordinates: "0.7167° S, 36.3500° E",
    elevation: "1,884m",
    traditionalName: "Nai'posha",
    modernName: "Lake Naivasha",
    ceremonies: ["Rain-making rituals", "Cleansing ceremonies", "Coming of age rites"],
    legends: "The lake spirits are said to control rainfall across the Rift Valley. Elders would offer sacrifices during droughts.",
    image: sacredImage,
    status: "Ramsar Wetland Site"
  },
  {
    id: 3,
    name: "Kaya Kinondo Forest",
    type: "Sacred Forest",
    community: "Mijikenda",
    significance: "Ancestral burial ground and ritual site, protected by traditional laws for over 600 years",
    history: "One of the last remaining coastal forests, protected by the Digo community through traditional conservation practices.",
    coordinates: "4.4500° S, 39.5667° E",
    elevation: "60m",
    traditionalName: "Kaya Kinondo",
    modernName: "Kaya Kinondo Sacred Forest",
    ceremonies: ["Ancestral veneration", "Rain ceremonies", "Healing rituals"],
    legends: "The spirits of ancestors guard the forest. Breaking traditional laws results in supernatural punishment.",
    image: sacredImage,
    status: "UNESCO World Heritage Site"
  },
  {
    id: 4,
    name: "Menengai Crater",
    type: "Sacred Crater",
    community: "Kalenjin",
    significance: "Site of great spiritual power, associated with warrior initiation and community gatherings",
    history: "Named 'Menengai' meaning 'place of corpses' after a historic battle. The crater has been a spiritual site for millennia.",
    coordinates: "0.2000° S, 36.0667° E",
    elevation: "2,278m",
    traditionalName: "Menengai",
    modernName: "Menengai Crater",
    ceremonies: ["Warrior initiation", "Community assemblies", "Spiritual retreats"],
    legends: "The crater was formed by the gods as a meeting place. Steam from the crater carries prayers to the heavens.",
    image: sacredImage,
    status: "Protected Natural Monument"
  },
  {
    id: 5,
    name: "Kit Mikayi Rock",
    type: "Sacred Rock Formation",
    community: "Luo",
    significance: "The 'Stone of the First Wife', central to Luo creation mythology and marriage customs",
    history: "A massive rock formation revered for over 500 years, featuring in Luo oral traditions about the first woman.",
    coordinates: "0.0833° S, 34.7667° E",
    elevation: "1,200m",
    traditionalName: "Kit Mikayi",
    modernName: "Kit Mikayi Rock",
    ceremonies: ["Marriage blessings", "Fertility rites", "Community prayers"],
    legends: "The rock is said to be the first wife of the Luo people, who was turned to stone to protect the community.",
    image: sacredImage,
    status: "Cultural Heritage Site"
  },
  {
    id: 6,
    name: "Lake Turkana",
    type: "Sacred Lake",
    community: "Turkana",
    significance: "The 'Jade Sea', source of life in the desert and connection to ancestral spirits",
    history: "Known as 'Anam Ka'alakol' (the sea), this ancient lake has sustained the Turkana people for thousands of years.",
    coordinates: "3.6000° N, 36.1000° E",
    elevation: "360m",
    traditionalName: "Anam Ka'alakol",
    modernName: "Lake Turkana",
    ceremonies: ["Fishing blessings", "Rain ceremonies", "Ancestral communication"],
    legends: "The lake appeared when ancestral spirits decided to provide water for their children in the desert.",
    image: sacredImage,
    status: "UNESCO World Heritage Site"
  }
];

const HeritageMap = () => {
  const [selectedPlace, setSelectedPlace] = useState<typeof places[0] | null>(null);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={sacredImage} 
            alt="Sacred places of Kenya"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-heritage-black/60"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-heritage-red/20 px-4 py-2 rounded-full mb-6">
              <MapPin className="h-5 w-5 text-heritage-red animate-pulse" />
              <span className="text-heritage-red font-semibold">Sacred Geography</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-card mb-6">
              Heritage
              <span className="bg-gradient-wisdom bg-clip-text text-transparent block">
                Places
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-card/90 mb-8 max-w-3xl mx-auto">
              Sacred sites • Ancient names • Spiritual landscapes • Cultural geography
            </p>
          </div>
        </div>
      </section>

      {/* Interactive Map Section */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-heritage-brown mb-4">
              Sacred Geography of Kenya
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Explore the sacred sites, traditional names, and spiritual significance 
              of Kenya's most important cultural landmarks.
            </p>
          </div>

          {/* Placeholder for interactive map - would be implemented with actual mapping library */}
          <div className="relative h-96 bg-gradient-earth rounded-lg mb-8 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="h-12 w-12 text-heritage-brown mx-auto mb-4" />
              <h3 className="text-xl font-bold text-heritage-brown mb-2">Interactive Map</h3>
              <p className="text-heritage-brown/80">Click on locations below to explore sacred sites</p>
            </div>
          </div>
        </div>
      </section>

      {/* Places Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {places.map((place, index) => (
              <Card 
                key={place.id} 
                className="group hover:shadow-xl transition-all duration-300 border-heritage-red/20 hover-scale animate-fade-in cursor-pointer"
                style={{"--stagger": index} as React.CSSProperties}
                onClick={() => setSelectedPlace(place)}
              >
                <CardContent className="p-0">
                  <div className="relative h-48 overflow-hidden rounded-t-lg">
                    <img 
                      src={place.image}
                      alt={place.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-heritage-black/60 to-transparent"></div>
                    <div className="absolute top-4 right-4">
                      <span className="px-2 py-1 text-xs font-semibold bg-heritage-red/20 text-heritage-red rounded-full">
                        {place.type}
                      </span>
                    </div>
                    <div className="absolute bottom-4 left-4">
                      <div className="text-card font-bold text-lg">{place.traditionalName}</div>
                      <div className="text-card/80 text-sm">{place.modernName}</div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="mb-4">
                      <h3 className="text-xl font-bold text-heritage-brown mb-2">
                        {place.name}
                      </h3>
                      <span className="inline-block px-3 py-1 text-xs font-semibold bg-ubuntu/20 text-ubuntu rounded-full">
                        {place.community} Sacred Site
                      </span>
                    </div>

                    <p className="text-muted-foreground text-sm mb-4 leading-relaxed line-clamp-3">
                      {place.significance}
                    </p>

                    <div className="space-y-2 text-xs text-muted-foreground mb-4">
                      <div className="flex items-center gap-2">
                        <MapPin className="h-3 w-3" />
                        <span>{place.coordinates}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Mountain className="h-3 w-3" />
                        <span>Elevation: {place.elevation}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Info className="h-3 w-3" />
                        <span>{place.status}</span>
                      </div>
                    </div>

                    <div className="border-t border-border pt-4">
                      <div className="flex gap-1 flex-wrap mb-3">
                        {place.ceremonies.slice(0, 2).map((ceremony) => (
                          <span key={ceremony} className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded">
                            {ceremony}
                          </span>
                        ))}
                      </div>
                      
                      <Button variant="heritage" size="sm" className="w-full group-hover:scale-105 transition-transform">
                        <Camera className="mr-1 h-3 w-3" />
                        Explore Site
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Cultural Preservation Message */}
      <section className="py-16 bg-heritage-brown text-card">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Protecting Sacred Spaces</h2>
          <p className="text-lg text-card/80 mb-8 max-w-3xl mx-auto">
            These sacred sites are not just geographical locations - they are living libraries 
            of cultural knowledge, spiritual practice, and ancestral connection. Their preservation 
            is crucial for maintaining Kenya's cultural identity.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="ubuntu" size="lg">
              <MapPin className="mr-2 h-5 w-5" />
              Report a Sacred Site
            </Button>
            <Button variant="outline" size="lg" className="border-card/30 text-card hover:bg-card/10">
              <Users className="mr-2 h-5 w-5" />
              Join Conservation
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HeritageMap;