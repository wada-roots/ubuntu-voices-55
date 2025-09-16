import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"; 
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { BookOpen, Heart, Leaf, Crown } from "lucide-react";

const Abagusii = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-16 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-heritage-brown/90 to-heritage-green/80"></div>
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold text-card mb-6">
            Abagusii People
          </h1>
          <p className="text-xl text-card/90 max-w-3xl mx-auto leading-relaxed">
            Discover the rich heritage of the Abagusii people, known for their soapstone carving, 
            agricultural prowess, and strong community bonds in the highlands of Nyanza Province.
          </p>
        </div>
      </section>

      {/* Cultural Overview */}
      <section className="py-16 bg-heritage-accent/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-heritage-brown mb-8 text-center">
              Cultural Overview
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-heritage-brown/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Crown className="h-8 w-8 text-heritage-brown" />
                </div>
                <h3 className="font-semibold text-heritage-brown mb-2">Population</h3>
                <p className="text-muted-foreground">Over 2.7 million people in Kenya</p>
              </div>
              <div className="text-center">
                <div className="bg-heritage-green/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Leaf className="h-8 w-8 text-heritage-green" />
                </div>
                <h3 className="font-semibold text-heritage-brown mb-2">Famous For</h3>
                <p className="text-muted-foreground">Soapstone carving and farming</p>
              </div>
              <div className="text-center">
                <div className="bg-ubuntu/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-ubuntu" />
                </div>
                <h3 className="font-semibold text-heritage-brown mb-2">Core Values</h3>
                <p className="text-muted-foreground">Ubuntu, hard work, and respect for elders</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Tabs */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="stories" className="max-w-6xl mx-auto">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="stories">Stories</TabsTrigger>
              <TabsTrigger value="poems">Poems & Songs</TabsTrigger>
              <TabsTrigger value="plants">Medicinal Plants</TabsTrigger>
              <TabsTrigger value="foods">Traditional Foods</TabsTrigger>
            </TabsList>

            {/* Empty states for now */}
            <TabsContent value="stories" className="mt-8">
              <p className="text-center text-muted-foreground">No stories uploaded yet.</p>
            </TabsContent>

            <TabsContent value="poems" className="mt-8">
              <p className="text-center text-muted-foreground">No poems or songs uploaded yet.</p>
            </TabsContent>

            <TabsContent value="plants" className="mt-8">
              <p className="text-center text-muted-foreground">No medicinal plants uploaded yet.</p>
            </TabsContent>

            <TabsContent value="foods" className="mt-8">
              <p className="text-center text-muted-foreground">No traditional foods uploaded yet.</p>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Abagusii;
