import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Play, Clock, Search } from "lucide-react";
import { useState } from "react";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Stories = () => {
  const [selectedCommunity, setSelectedCommunity] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  // Stories data should come from API or props
  const stories: any[] = [];

  // Community list can be dynamically derived from stories or API
  const communities: string[] = ["All"];

  const filteredStories = stories.filter((story) => {
    const matchesCommunity =
      selectedCommunity === "All" || story.community === selectedCommunity;
    const matchesSearch =
      story.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
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
            src="/images/storytelling-circle.jpg"
            alt="Traditional storytelling circle"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-heritage-black/60"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold text-card mb-6">
              Stories &{" "}
              <span className="bg-gradient-wisdom bg-clip-text text-transparent block">
                Folklore
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-card/90 mb-8 max-w-3xl mx-auto">
              Traditional tales passed down through generations • Oral
              literature • Community wisdom
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
          {filteredStories.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredStories.map((story, index) => (
                <Card
                  key={story.id}
                  className="group hover:shadow-xl transition-all duration-300 border-ubuntu/20 hover-scale animate-fade-in"
                  style={{ "--stagger": index } as React.CSSProperties}
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
                        <Button
                          variant="ubuntu"
                          size="sm"
                          className="group-hover:scale-105 transition-transform"
                        >
                          <Play className="mr-1 h-3 w-3" />
                          Listen
                        </Button>
                      </div>

                      <div className="flex gap-1 flex-wrap">
                        {story.tags.map((tag: string) => (
                          <span
                            key={tag}
                            className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-muted-foreground">
                No stories found. Please add content or adjust your filters.
              </p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Stories;
