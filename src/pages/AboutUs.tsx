import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Users, Globe, BookOpen, Sparkles, Target } from "lucide-react";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section with Image */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/people/founder-with-elder.jpg"
            alt="Founder with Elder"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-heritage-black/90 via-heritage-black/70 to-heritage-black/50"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 bg-ubuntu/20 backdrop-blur-sm px-6 py-3 rounded-full mb-6 border border-ubuntu/30">
            <Sparkles className="h-5 w-5 text-ubuntu" />
            <span className="text-ubuntu font-semibold">Our Story</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-card mb-6 leading-tight">
            Sauti Za Kale
            <span className="bg-gradient-warm bg-clip-text text-transparent block">
              Afrika
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-card/90 max-w-3xl mx-auto">
            Preserving Africa's rich cultural heritage for future generations
          </p>
        </div>
      </section>

      {/* Mission Section with Enhanced Design */}
      <section className="py-20 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-heritage-green/10 px-6 py-3 rounded-full mb-6">
                <Target className="h-5 w-5 text-heritage-green" />
                <span className="text-heritage-green font-semibold">Our Mission</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Voices of Ancient Africa
              </h2>
            </div>
            
            <div className="bg-card rounded-2xl p-8 md:p-12 shadow-xl border border-border/50">
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                <span className="text-heritage-brown font-semibold text-xl">Sauti Za Kale Afrika</span> (Voices of Ancient Africa) is dedicated to preserving and sharing the 
                invaluable wisdom, stories, and traditions of Kenya's diverse communities. We believe that 
                the knowledge held by our elders and cultural guardians is a treasure that must be documented, 
                celebrated, and passed on to future generations.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Through our platform, we create a digital archive of oral histories, traditional practices, 
                medicinal knowledge, sacred places, and the heroic stories that define who we are as Africans. 
                We embrace the <span className="text-ubuntu font-semibold">Ubuntu philosophy</span> - <em>"I am because we are"</em> - recognizing that our collective 
                heritage strengthens us all.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section - Redesigned Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-16 text-center">
            Our Core <span className="text-ubuntu">Values</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            <Card className="group hover:shadow-2xl transition-all duration-300 border-2 hover:border-ubuntu/50 hover:-translate-y-2">
              <CardContent className="pt-8 pb-6 text-center">
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-heritage-red/20 to-heritage-red/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Heart className="h-10 w-10 text-heritage-red" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-heritage-brown">Respect</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Honoring our elders, ancestors, and the wisdom they carry through generations
                </p>
              </CardContent>
            </Card>
            
            <Card className="group hover:shadow-2xl transition-all duration-300 border-2 hover:border-ubuntu/50 hover:-translate-y-2">
              <CardContent className="pt-8 pb-6 text-center">
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-ubuntu/20 to-ubuntu/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Users className="h-10 w-10 text-ubuntu" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-heritage-brown">Ubuntu</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Embracing our interconnectedness and celebrating our shared humanity
                </p>
              </CardContent>
            </Card>
            
            <Card className="group hover:shadow-2xl transition-all duration-300 border-2 hover:border-ubuntu/50 hover:-translate-y-2">
              <CardContent className="pt-8 pb-6 text-center">
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-heritage-green/20 to-heritage-green/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Globe className="h-10 w-10 text-heritage-green" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-heritage-brown">Preservation</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Safeguarding cultural heritage for future generations to treasure
                </p>
              </CardContent>
            </Card>
            
            <Card className="group hover:shadow-2xl transition-all duration-300 border-2 hover:border-ubuntu/50 hover:-translate-y-2">
              <CardContent className="pt-8 pb-6 text-center">
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-heritage-gold/20 to-heritage-gold/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <BookOpen className="h-10 w-10 text-heritage-gold" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-heritage-brown">Education</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Sharing knowledge to inspire and educate communities worldwide
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Story Section with Image */}
      <section className="py-20 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
                  Our <span className="text-ubuntu">Story</span>
                </h2>
                <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                  <p>
                    Founded by passionate cultural advocates, Sauti Za Kale Afrika emerged from a deep concern 
                    about the rapid loss of traditional knowledge in Kenya and across Africa. As modernization 
                    accelerates, many elders pass away without their stories being recorded, and traditional 
                    practices fade into obscurity.
                  </p>
                  <p>
                    We work directly with communities across Kenya, interviewing centenarian elders, documenting 
                    tribal traditions, recording medicinal plant knowledge, and preserving the stories of our 
                    heroes and sacred places. Each story, each piece of wisdom, and each tradition we document 
                    represents a thread in the rich tapestry of African heritage.
                  </p>
                  <p>
                    Our platform serves as a bridge between generations, making this knowledge accessible to 
                    young Africans, researchers, educators, and anyone interested in understanding and celebrating 
                    Africa's cultural wealth.
                  </p>
                </div>
              </div>
              <div className="order-1 md:order-2">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <img 
                    src="/images/components/elders-storytelling.jpg"
                    alt="Elders Storytelling"
                    className="w-full h-[500px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-heritage-black/60 to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section - Enhanced */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-ubuntu/5 via-heritage-green/5 to-heritage-red/5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Our <span className="text-ubuntu">Impact</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-16 max-w-3xl mx-auto">
              Together, we're building a legacy of preserved knowledge and cultural pride
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-card rounded-2xl p-8 shadow-xl border-2 border-heritage-green/20 hover:border-heritage-green/40 transition-all hover:scale-105">
                <div className="text-6xl font-bold bg-gradient-to-r from-heritage-green to-heritage-earth bg-clip-text text-transparent mb-3">
                  200+
                </div>
                <div className="text-lg font-semibold text-foreground mb-2">Stories Documented</div>
                <div className="text-muted-foreground text-sm">Oral histories preserved for eternity</div>
              </div>
              <div className="bg-card rounded-2xl p-8 shadow-xl border-2 border-ubuntu/20 hover:border-ubuntu/40 transition-all hover:scale-105">
                <div className="text-6xl font-bold bg-gradient-warm bg-clip-text text-transparent mb-3">
                  100+
                </div>
                <div className="text-lg font-semibold text-foreground mb-2">Elders Interviewed</div>
                <div className="text-muted-foreground text-sm">Centenarian wisdom captured</div>
              </div>
              <div className="bg-card rounded-2xl p-8 shadow-xl border-2 border-heritage-red/20 hover:border-heritage-red/40 transition-all hover:scale-105">
                <div className="text-6xl font-bold bg-gradient-to-r from-heritage-red to-heritage-brown bg-clip-text text-transparent mb-3">
                  40+
                </div>
                <div className="text-lg font-semibold text-foreground mb-2">Communities Served</div>
                <div className="text-muted-foreground text-sm">Across Kenya and beyond</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutUs;
