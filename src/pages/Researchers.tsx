import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Database, FileSearch, BookOpen, Users, Download, Award } from "lucide-react";

const Researchers = () => {
  const datasets = [
    {
      title: "Oral History Archive",
      description: "Transcribed interviews with 150+ elders across Kenya",
      records: "12,500+",
      format: "JSON, CSV, PDF",
    },
    {
      title: "Medicinal Plants Database",
      description: "Documented traditional uses of 300+ indigenous plants",
      records: "3,200+",
      format: "JSON, Excel",
    },
    {
      title: "Cultural Practices Catalog",
      description: "Detailed documentation of tribal ceremonies and traditions",
      records: "800+",
      format: "PDF, Video",
    },
    {
      title: "Sacred Sites Registry",
      description: "Geographic and cultural data on heritage locations",
      records: "450+",
      format: "GeoJSON, KML",
    },
  ];

  const researchAreas = [
    {
      title: "Anthropology & Ethnography",
      icon: Users,
      description: "Study of cultural practices, social structures, and tribal traditions",
    },
    {
      title: "Linguistics",
      icon: BookOpen,
      description: "Analysis of indigenous languages, oral traditions, and storytelling",
    },
    {
      title: "Ethnobotany",
      icon: Database,
      description: "Research on traditional plant knowledge and medicinal practices",
    },
    {
      title: "Historical Studies",
      icon: FileSearch,
      description: "Documentation of historical events, heroes, and cultural evolution",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-primary/10 to-background py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Research & Data Access
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Access comprehensive cultural data for academic research and scholarly work
            </p>
            <Button size="lg" className="gap-2">
              <FileSearch className="h-5 w-5" />
              Request Data Access
            </Button>
          </div>
        </div>
      </section>

      {/* Available Datasets */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
              Available Datasets
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {datasets.map((dataset, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="flex items-start justify-between">
                      <span>{dataset.title}</span>
                      <Database className="h-5 w-5 text-primary" />
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{dataset.description}</p>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Records:</span>
                        <span className="font-medium">{dataset.records}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Formats:</span>
                        <span className="font-medium">{dataset.format}</span>
                      </div>
                    </div>
                    <Button variant="outline" className="w-full mt-4">
                      <Download className="mr-2 h-4 w-4" />
                      Request Access
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Research Areas */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
              Research Areas
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {researchAreas.map((area, index) => (
                <Card key={index}>
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <area.icon className="h-10 w-10 text-primary flex-shrink-0" />
                      <div>
                        <h3 className="text-xl font-semibold mb-2">{area.title}</h3>
                        <p className="text-muted-foreground">{area.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Research Guidelines */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
              Research Guidelines & Ethics
            </h2>
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Data Access Requirements</h3>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                      <li>Affiliation with recognized academic or research institution</li>
                      <li>Clear research proposal outlining intended use of data</li>
                      <li>Commitment to ethical research practices</li>
                      <li>Agreement to cite sources and acknowledge contributors</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-3">Ethical Considerations</h3>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                      <li>Respect for cultural sensitivity and indigenous knowledge</li>
                      <li>Protection of community identities when required</li>
                      <li>Recognition of elders and knowledge holders as co-creators</li>
                      <li>Commitment to benefit-sharing with source communities</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-3">Citation & Attribution</h3>
                    <p className="text-muted-foreground mb-3">
                      All publications using our data must include proper attribution:
                    </p>
                    <div className="bg-muted p-4 rounded-lg text-sm font-mono">
                      Sauti Za Kale Afrika. (2025). [Dataset Name]. Retrieved from 
                      https://sautizakale.org
                    </div>
                  </div>

                  <div className="flex gap-4 pt-4">
                    <Button className="flex-1">
                      <Award className="mr-2 h-4 w-4" />
                      Apply for Research Access
                    </Button>
                    <Button variant="outline" className="flex-1">
                      <BookOpen className="mr-2 h-4 w-4" />
                      View Ethics Guide
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Collaboration Opportunities */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Collaboration Opportunities
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              We welcome partnerships with universities, research institutions, and cultural 
              organizations. Join us in preserving and studying African cultural heritage.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardContent className="pt-6 text-center">
                  <h3 className="font-semibold mb-2">Joint Research Projects</h3>
                  <p className="text-sm text-muted-foreground">
                    Collaborate on field research and data collection
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6 text-center">
                  <h3 className="font-semibold mb-2">Grant Partnerships</h3>
                  <p className="text-sm text-muted-foreground">
                    Co-apply for research funding and grants
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6 text-center">
                  <h3 className="font-semibold mb-2">Knowledge Exchange</h3>
                  <p className="text-sm text-muted-foreground">
                    Share findings and methodologies
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Researchers;
