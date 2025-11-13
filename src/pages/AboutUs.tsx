import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Users, Globe, BookOpen } from "lucide-react";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-primary/10 to-background py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              About Sauti Za Kale Afrika
            </h1>
            <p className="text-xl text-muted-foreground">
              Preserving Africa's rich cultural heritage for future generations
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Our Mission</h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Sauti Za Kale Afrika (Voices of Ancient Africa) is dedicated to preserving and sharing the 
              invaluable wisdom, stories, and traditions of Kenya's diverse communities. We believe that 
              the knowledge held by our elders and cultural guardians is a treasure that must be documented, 
              celebrated, and passed on to future generations.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Through our platform, we create a digital archive of oral histories, traditional practices, 
              medicinal knowledge, sacred places, and the heroic stories that define who we are as Africans. 
              We embrace the Ubuntu philosophy - "I am because we are" - recognizing that our collective 
              heritage strengthens us all.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Our Core Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <Card>
              <CardContent className="pt-6">
                <Heart className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Respect</h3>
                <p className="text-muted-foreground">
                  Honoring our elders, ancestors, and the wisdom they carry
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <Users className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Ubuntu</h3>
                <p className="text-muted-foreground">
                  Embracing our interconnectedness and shared humanity
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <Globe className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Preservation</h3>
                <p className="text-muted-foreground">
                  Safeguarding cultural heritage for future generations
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <BookOpen className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Education</h3>
                <p className="text-muted-foreground">
                  Sharing knowledge to inspire and educate communities
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Our Story</h2>
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
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-foreground mb-8">Our Impact</h2>
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div>
                <div className="text-4xl font-bold text-primary mb-2">150+</div>
                <div className="text-muted-foreground">Stories Documented</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">45+</div>
                <div className="text-muted-foreground">Elders Interviewed</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">20+</div>
                <div className="text-muted-foreground">Communities Served</div>
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
