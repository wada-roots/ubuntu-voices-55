import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Download, Users, Video, FileText, Award } from "lucide-react";

const ForTeachers = () => {
  const resources = [
    {
      title: "Cultural Studies Curriculum",
      description: "Complete lesson plans for teaching Kenyan cultural heritage",
      icon: BookOpen,
      downloads: "1,234",
    },
    {
      title: "Video Resources",
      description: "Elder interviews and traditional practice demonstrations",
      icon: Video,
      downloads: "856",
    },
    {
      title: "Activity Worksheets",
      description: "Engaging worksheets for different grade levels",
      icon: FileText,
      downloads: "2,103",
    },
    {
      title: "Assessment Tools",
      description: "Quizzes and evaluation materials for cultural education",
      icon: Award,
      downloads: "672",
    },
  ];

  const lessonPlans = [
    {
      title: "Introduction to Ubuntu Philosophy",
      grade: "Grades 6-8",
      duration: "2 weeks",
      topics: ["Community values", "Interconnectedness", "Oral traditions"],
    },
    {
      title: "Kenyan Tribal Traditions",
      grade: "Grades 9-12",
      duration: "4 weeks",
      topics: ["Tribal diversity", "Cultural practices", "Traditional governance"],
    },
    {
      title: "Medicinal Plants of Kenya",
      grade: "Grades 7-10",
      duration: "3 weeks",
      topics: ["Traditional medicine", "Plant identification", "Conservation"],
    },
    {
      title: "Heroes of Kenyan Independence",
      grade: "Grades 8-12",
      duration: "2 weeks",
      topics: ["Colonial resistance", "Freedom fighters", "National identity"],
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
              Resources for Educators
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Comprehensive teaching materials to bring African cultural heritage into your classroom
            </p>
            <Button size="lg" className="gap-2">
              <Download className="h-5 w-5" />
              Download Teacher's Guide
            </Button>
          </div>
        </div>
      </section>

      {/* Teaching Resources */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
              Teaching Resources
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {resources.map((resource, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6 text-center">
                    <resource.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                    <h3 className="font-semibold text-lg mb-2">{resource.title}</h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      {resource.description}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {resource.downloads} downloads
                    </p>
                    <Button variant="outline" size="sm" className="mt-4 w-full">
                      <Download className="mr-2 h-4 w-4" />
                      Download
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sample Lesson Plans */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
              Sample Lesson Plans
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {lessonPlans.map((plan, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle>{plan.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Grade Level:</span>
                        <span className="font-medium">{plan.grade}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Duration:</span>
                        <span className="font-medium">{plan.duration}</span>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground mb-2">Topics Covered:</p>
                        <ul className="list-disc list-inside text-sm space-y-1">
                          {plan.topics.map((topic, i) => (
                            <li key={i}>{topic}</li>
                          ))}
                        </ul>
                      </div>
                      <Button variant="outline" className="w-full mt-4">
                        View Full Lesson Plan
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Community Features */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <Users className="h-12 w-12 text-primary flex-shrink-0" />
                  <div>
                    <h3 className="text-2xl font-bold mb-4">Join Our Teacher Community</h3>
                    <p className="text-muted-foreground mb-6">
                      Connect with fellow educators, share experiences, and collaborate on cultural 
                      education initiatives. Our teacher community provides a space for professional 
                      development, resource sharing, and ongoing support.
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold mb-2">Community Benefits:</h4>
                        <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                          <li>Monthly webinars with cultural experts</li>
                          <li>Exclusive teaching materials</li>
                          <li>Collaborative lesson planning</li>
                          <li>Professional development certificates</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Get Started:</h4>
                        <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                          <li>Create a free teacher account</li>
                          <li>Browse the resource library</li>
                          <li>Join discussion forums</li>
                          <li>Attend live training sessions</li>
                        </ul>
                      </div>
                    </div>
                    <Button className="mt-6">
                      Join Teacher Community
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ForTeachers;
