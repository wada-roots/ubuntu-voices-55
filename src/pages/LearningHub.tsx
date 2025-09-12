import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Users, Download, Play, Search, GraduationCap } from "lucide-react";
import { useState } from "react";
import learningImage from "@/assets/learning-hub.jpg";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const resources = [
  {
    id: 1,
    title: "Introduction to Kikuyu Folklore",
    type: "Teacher's Guide",
    category: "Stories",
    ageGroup: "8-12 years",
    duration: "45 minutes",
    description: "Comprehensive guide for educators to introduce traditional Kikuyu stories in the classroom setting.",
    materials: ["Story transcripts", "Audio files", "Discussion questions", "Cultural context"],
    downloads: 1240,
    rating: 4.8,
    language: "English/Kikuyu",
    image: learningImage
  },
  {
    id: 2,
    title: "Basic Kiswahili Phrases Through Songs",
    type: "Language Lesson",
    category: "Language",
    ageGroup: "6-10 years",
    duration: "30 minutes",
    description: "Interactive language learning using traditional Swahili songs and rhymes.",
    materials: ["Audio recordings", "Visual aids", "Pronunciation guide", "Activity sheets"],
    downloads: 2156,
    rating: 4.9,
    language: "Kiswahili/English",
    image: learningImage
  },
  {
    id: 3,
    title: "Ubuntu Philosophy for Young Minds",
    type: "Educational Series",
    category: "Philosophy",
    ageGroup: "10-16 years",
    duration: "60 minutes",
    description: "Age-appropriate introduction to Ubuntu philosophy through stories and practical examples.",
    materials: ["Video content", "Discussion guides", "Activity worksheets", "Assessment tools"],
    downloads: 876,
    rating: 4.7,
    language: "English",
    image: learningImage
  },
  {
    id: 4,
    title: "Traditional Healing Plants Study Guide",
    type: "Educational Resource",
    category: "Science",
    ageGroup: "12-18 years",
    duration: "90 minutes",
    description: "Scientific approach to traditional medicinal plants with safety guidelines.",
    materials: ["Plant identification cards", "Safety protocols", "Scientific explanations", "Lab activities"],
    downloads: 654,
    rating: 4.6,
    language: "English",
    image: learningImage
  },
  {
    id: 5,
    title: "Maasai Mathematics: Traditional Counting",
    type: "Math Integration",
    category: "Mathematics",
    ageGroup: "8-14 years",
    duration: "45 minutes",
    description: "Explore mathematical concepts through traditional Maasai counting systems and geometric patterns.",
    materials: ["Visual patterns", "Counting exercises", "Geometric activities", "Cultural context"],
    downloads: 543,
    rating: 4.5,
    language: "English/Maa",
    image: learningImage
  },
  {
    id: 6,
    title: "Heroes of Kenya: Research Project Guide",
    type: "Project Guide",
    category: "History",
    ageGroup: "14-18 years",
    duration: "Multiple sessions",
    description: "Comprehensive guide for student research projects on Kenyan freedom fighters and heroes.",
    materials: ["Research templates", "Primary sources", "Timeline activities", "Presentation guides"],
    downloads: 432,
    rating: 4.8,
    language: "English",
    image: learningImage
  }
];

const categories = ["All", "Stories", "Language", "Philosophy", "Science", "Mathematics", "History"];
const types = ["All", "Teacher's Guide", "Language Lesson", "Educational Series", "Educational Resource", "Math Integration", "Project Guide"];
const ageGroups = ["All", "6-10 years", "8-12 years", "8-14 years", "10-16 years", "12-18 years", "14-18 years"];

const LearningHub = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedType, setSelectedType] = useState("All");
  const [selectedAgeGroup, setSelectedAgeGroup] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredResources = resources.filter(resource => {
    const matchesCategory = selectedCategory === "All" || resource.category === selectedCategory;
    const matchesType = selectedType === "All" || resource.type === selectedType;
    const matchesAgeGroup = selectedAgeGroup === "All" || resource.ageGroup === selectedAgeGroup;
    const matchesSearch = resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resource.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesType && matchesAgeGroup && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={learningImage} 
            alt="Learning and education"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-heritage-black/60"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-heritage-green/20 px-4 py-2 rounded-full mb-6">
              <GraduationCap className="h-5 w-5 text-heritage-green animate-pulse" />
              <span className="text-heritage-green font-semibold">Education & Learning</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-card mb-6">
              Learning
              <span className="bg-gradient-wisdom bg-clip-text text-transparent block">
                Hub
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-card/90 mb-8 max-w-3xl mx-auto">
              Educational resources • Teacher guides • Student activities • Cultural integration
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-gradient-earth">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="animate-fade-in" style={{"--stagger": 0} as React.CSSProperties}>
              <div className="text-4xl font-bold text-heritage-brown mb-2">500+</div>
              <div className="text-heritage-brown/80">Learning Resources</div>
            </div>
            <div className="animate-fade-in" style={{"--stagger": 1} as React.CSSProperties}>
              <div className="text-4xl font-bold text-heritage-brown mb-2">50+</div>
              <div className="text-heritage-brown/80">Partner Schools</div>
            </div>
            <div className="animate-fade-in" style={{"--stagger": 2} as React.CSSProperties}>
              <div className="text-4xl font-bold text-heritage-brown mb-2">10K+</div>
              <div className="text-heritage-brown/80">Students Reached</div>
            </div>
            <div className="animate-fade-in" style={{"--stagger": 3} as React.CSSProperties}>
              <div className="text-4xl font-bold text-heritage-brown mb-2">200+</div>
              <div className="text-heritage-brown/80">Trained Teachers</div>
            </div>
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
                placeholder="Search learning resources..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-heritage-green"
              />
            </div>
            
            <div className="flex flex-wrap gap-4 justify-center">
              <div className="flex gap-2 items-center">
                <span className="text-sm font-medium text-muted-foreground">Category:</span>
                <div className="flex gap-1 flex-wrap">
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
              </div>
              
              <div className="flex gap-2 items-center">
                <span className="text-sm font-medium text-muted-foreground">Age:</span>
                <div className="flex gap-1 flex-wrap">
                  {ageGroups.slice(0, 4).map((ageGroup) => (
                    <Button
                      key={ageGroup}
                      variant={selectedAgeGroup === ageGroup ? "ubuntu" : "outline"}
                      size="sm"
                      onClick={() => setSelectedAgeGroup(ageGroup)}
                      className="text-xs"
                    >
                      {ageGroup}
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredResources.map((resource, index) => (
              <Card 
                key={resource.id} 
                className="group hover:shadow-xl transition-all duration-300 border-heritage-green/20 hover-scale animate-fade-in"
                style={{"--stagger": index} as React.CSSProperties}
              >
                <CardContent className="p-0">
                  <div className="relative h-48 overflow-hidden rounded-t-lg">
                    <img 
                      src={resource.image}
                      alt={resource.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-heritage-black/60 to-transparent"></div>
                    <div className="absolute top-4 right-4">
                      <span className="px-2 py-1 text-xs font-semibold bg-heritage-green/20 text-heritage-green rounded-full">
                        {resource.type}
                      </span>
                    </div>
                    <div className="absolute bottom-4 left-4">
                      <div className="text-card font-bold text-lg">{resource.category}</div>
                      <div className="text-card/80 text-sm">{resource.ageGroup}</div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="mb-4">
                      <h3 className="text-xl font-bold text-heritage-brown mb-2">
                        {resource.title}
                      </h3>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
                        <span>{resource.duration}</span>
                        <span>•</span>
                        <span>{resource.language}</span>
                        <span>•</span>
                        <span>⭐ {resource.rating}</span>
                      </div>
                    </div>

                    <p className="text-muted-foreground text-sm mb-4 leading-relaxed line-clamp-3">
                      {resource.description}
                    </p>

                    <div className="mb-4">
                      <h4 className="font-semibold text-heritage-brown mb-2 text-sm">Included Materials:</h4>
                      <div className="flex gap-1 flex-wrap">
                        {resource.materials.slice(0, 3).map((material) => (
                          <span key={material} className="text-xs bg-ubuntu/10 text-ubuntu px-2 py-1 rounded">
                            {material}
                          </span>
                        ))}
                        {resource.materials.length > 3 && (
                          <span className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded">
                            +{resource.materials.length - 3} more
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="border-t border-border pt-4">
                      <div className="flex items-center justify-between text-xs text-muted-foreground mb-3">
                        <span>{resource.downloads.toLocaleString()} downloads</span>
                      </div>
                      
                      <div className="flex gap-2">
                        <Button variant="heritage" size="sm" className="flex-1 group-hover:scale-105 transition-transform">
                          <Download className="mr-1 h-3 w-3" />
                          Download
                        </Button>
                        <Button variant="outline" size="sm" className="flex-1">
                          <Play className="mr-1 h-3 w-3" />
                          Preview
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredResources.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No learning resources found matching your criteria.</p>
            </div>
          )}
        </div>
      </section>

      {/* Teacher Support Section */}
      <section className="py-16 bg-heritage-brown text-card">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Supporting Educators</h2>
          <p className="text-lg text-card/80 mb-8 max-w-3xl mx-auto">
            We believe teachers are the bridge between traditional knowledge and modern education. 
            Our resources are designed to help educators integrate cultural wisdom into contemporary 
            learning while maintaining academic standards.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="ubuntu" size="lg">
              <GraduationCap className="mr-2 h-5 w-5" />
              Teacher Training Program
            </Button>
            <Button variant="outline" size="lg" className="border-card/30 text-card hover:bg-card/10">
              <Users className="mr-2 h-5 w-5" />
              Join Educator Network
            </Button>
            <Button variant="outline" size="lg" className="border-card/30 text-card hover:bg-card/10">
              <BookOpen className="mr-2 h-5 w-5" />
              Submit Resource
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LearningHub;