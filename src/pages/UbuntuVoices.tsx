import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Play, Heart, Clock, Quote, Users, MapPin } from "lucide-react";
import { useState } from "react";
import eldersImage from "@/assets/elders-storytelling.jpg";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const elders = [
  {
    id: 1,
    name: "Mama Wanjiku Nduta",
    age: 102,
    community: "Kikuyu",
    location: "Nyeri County",
    wisdom: "Mti hauendi ila ukiwa na mizizi - A tree cannot grow without roots",
    bio: "Born during the colonial era, Mama Wanjiku has witnessed Kenya's transformation from colonization to independence. She is a keeper of traditional Kikuyu farming practices and storytelling.",
    specialties: ["Traditional farming", "Kikuyu folklore", "Women's ceremonies"],
    interviewCount: 12,
    totalDuration: "3h 45min",
    image: eldersImage
  },
  {
    id: 2,
    name: "Mzee Kipkoech Rotich",
    age: 98,
    community: "Kalenjin",
    location: "Rift Valley",
    wisdom: "Chepsiryet chi kibai - Unity is strength",
    bio: "A former warrior and long-distance runner, Mzee Kipkoech remembers the old cattle-raiding traditions and the transformation of the Kalenjin community.",
    specialties: ["Warrior traditions", "Running culture", "Cattle keeping"],
    interviewCount: 8,
    totalDuration: "2h 30min",
    image: eldersImage
  },
  {
    id: 3,
    name: "Bibi Fatuma Al-Zahra",
    age: 105,
    community: "Swahili",
    location: "Lamu Island",
    wisdom: "Haraka haraka haina baraka - Rushing has no blessings",
    bio: "The oldest resident of Lamu, Bibi Fatuma has seen the island change through decades. She is a master of traditional Swahili poetry and dhow-building tales.",
    specialties: ["Swahili poetry", "Maritime traditions", "Islamic culture"],
    interviewCount: 15,
    totalDuration: "4h 20min",
    image: eldersImage
  },
  {
    id: 4,
    name: "Mama Nasirian Sankale",
    age: 94,
    community: "Maasai",
    location: "Kajiado County",
    wisdom: "Meaa sii olmurran - A warrior never retreats",
    bio: "A respected elder and traditional healer, Mama Nasirian bridges the gap between traditional Maasai customs and modern life.",
    specialties: ["Traditional healing", "Maasai ceremonies", "Beadwork traditions"],
    interviewCount: 10,
    totalDuration: "3h 15min",
    image: eldersImage
  },
  {
    id: 5,
    name: "Dani Otieno Oginga",
    age: 89,
    community: "Luo",
    location: "Kisumu County",
    wisdom: "Jaduong' ok nyal bedo matin - An elder cannot become small",
    bio: "A traditional musician and oral historian, Dani has preserved countless Luo songs, proverbs, and historical accounts.",
    specialties: ["Traditional music", "Oral history", "Luo customs"],
    interviewCount: 20,
    totalDuration: "5h 10min",
    image: eldersImage
  },
  {
    id: 6,
    name: "Elder Ekara Lomuria",
    age: 96,
    community: "Turkana",
    location: "Turkana County",
    wisdom: "Akimuj kang alo ebei - Knowledge shared is knowledge multiplied",
    bio: "A master of traditional astronomy and weather prediction, Elder Ekara guides his community through the harsh desert climate using ancestral knowledge.",
    specialties: ["Weather prediction", "Desert survival", "Turkana traditions"],
    interviewCount: 7,
    totalDuration: "2h 45min",
    image: eldersImage
  }
];

const UbuntuVoices = () => {
  const [selectedElder, setSelectedElder] = useState<typeof elders[0] | null>(null);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={eldersImage} 
            alt="Elders sharing wisdom"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-heritage-black/60"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-ubuntu/20 px-4 py-2 rounded-full mb-6">
              <Heart className="h-5 w-5 text-ubuntu animate-pulse" />
              <span className="text-ubuntu font-semibold">Ubuntu Philosophy</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-card mb-6">
              Ubuntu
              <span className="bg-gradient-wisdom bg-clip-text text-transparent block">
                Voices
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-card/90 mb-8 max-w-3xl mx-auto">
              "I am because we are" • Centenarian wisdom • Life lessons across generations
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-gradient-earth">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="animate-fade-in" style={{"--stagger": 0} as React.CSSProperties}>
              <div className="text-4xl font-bold text-heritage-brown mb-2">100+</div>
              <div className="text-heritage-brown/80">Elders Interviewed</div>
            </div>
            <div className="animate-fade-in" style={{"--stagger": 1} as React.CSSProperties}>
              <div className="text-4xl font-bold text-heritage-brown mb-2">25+</div>
              <div className="text-heritage-brown/80">Hours of Wisdom</div>
            </div>
            <div className="animate-fade-in" style={{"--stagger": 2} as React.CSSProperties}>
              <div className="text-4xl font-bold text-heritage-brown mb-2">42</div>
              <div className="text-heritage-brown/80">Communities</div>
            </div>
            <div className="animate-fade-in" style={{"--stagger": 3} as React.CSSProperties}>
              <div className="text-4xl font-bold text-heritage-brown mb-2">200+</div>
              <div className="text-heritage-brown/80">Life Lessons</div>
            </div>
          </div>
        </div>
      </section>

      {/* Elders Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-heritage-brown mb-4">
              Voices of Wisdom
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Meet the centenarians and near-centenarians who carry the living memory 
              of Kenya's transformation, traditions, and timeless wisdom.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {elders.map((elder, index) => (
              <Card 
                key={elder.id} 
                className="group hover:shadow-xl transition-all duration-300 border-ubuntu/20 hover-scale animate-fade-in cursor-pointer"
                style={{"--stagger": index} as React.CSSProperties}
                onClick={() => setSelectedElder(elder)}
              >
                <CardContent className="p-0">
                  <div className="relative h-48 overflow-hidden rounded-t-lg">
                    <img 
                      src={elder.image}
                      alt={elder.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-heritage-black/60 to-transparent"></div>
                    <div className="absolute bottom-4 left-4">
                      <div className="text-card font-bold text-lg">{elder.age} years</div>
                      <div className="text-card/80 text-sm flex items-center gap-1">
                        <MapPin className="h-3 w-3" />
                        {elder.location}
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="mb-4">
                      <h3 className="text-xl font-bold text-heritage-brown mb-1">
                        {elder.name}
                      </h3>
                      <span className="inline-block px-3 py-1 text-xs font-semibold bg-ubuntu/20 text-ubuntu rounded-full">
                        {elder.community} Elder
                      </span>
                    </div>

                    <div className="mb-4">
                      <Quote className="h-4 w-4 text-ubuntu mb-2" />
                      <p className="text-ubuntu font-medium text-sm italic mb-2">
                        "{elder.wisdom}"
                      </p>
                      <p className="text-muted-foreground text-sm line-clamp-3">
                        {elder.bio}
                      </p>
                    </div>

                    <div className="border-t border-border pt-4">
                      <div className="flex items-center justify-between text-xs text-muted-foreground mb-3">
                        <span>{elder.interviewCount} interviews</span>
                        <span>{elder.totalDuration}</span>
                      </div>
                      
                      <div className="flex gap-1 flex-wrap mb-3">
                        {elder.specialties.slice(0, 2).map((specialty) => (
                          <span key={specialty} className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded">
                            {specialty}
                          </span>
                        ))}
                      </div>
                      
                      <Button variant="ubuntu" size="sm" className="w-full group-hover:scale-105 transition-transform">
                        <Play className="mr-1 h-3 w-3" />
                        Listen to Wisdom
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-heritage-brown text-card">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Honor Our Elders</h2>
          <p className="text-lg text-card/80 mb-8 max-w-2xl mx-auto">
            Help us preserve these precious voices for future generations. 
            Every story matters, every voice has value.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="ubuntu" size="lg">
              <Users className="mr-2 h-5 w-5" />
              Nominate an Elder
            </Button>
            <Button variant="outline" size="lg" className="border-card/30 text-card hover:bg-card/10">
              <Heart className="mr-2 h-5 w-5" />
              Support the Project
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default UbuntuVoices;