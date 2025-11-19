import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { motion, useScroll, useTransform, Variants } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Heart, ArrowRight, TrendingUp } from "lucide-react";
import CountUp from "react-countup";

const LandingPage = () => {
  const navigate = useNavigate();
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  // Typed Framer Motion Variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const statVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const founderCardVariants: Variants = {
    hidden: { opacity: 0, scale: 0.95 },
    show: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <div className="min-h-screen relative overflow-hidden" ref={ref}>
      {/* Fixed Transparent Header with Logo */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-heritage-black/60 backdrop-blur-md py-4 transition-all duration-300">
        <div className="container mx-auto px-4 flex items-center">
          <motion.img
            src="/images/branding/logo.jpg"
            alt="Sauti Za Kale Afrika Logo"
            className="h-12 w-auto"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          />
        </div>
      </header>

      {/* Background with Parallax Scroll */}
      <motion.div className="absolute inset-0 z-0" style={{ y }}>
        <img
          src="/images/people/founder-with-elder.jpg"
          alt="Masaki Magack with an elder - preserving African stories"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-heritage-black/90 via-heritage-black/80 to-heritage-black/70"></div>
      </motion.div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center py-16 mt-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column: Hero Section */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="show"
              className="text-center lg:text-left mb-8 lg:mb-0 flex flex-col items-center lg:items-start"
            >
              <motion.h1
                variants={itemVariants}
                className="text-5xl lg:text-7xl font-bold text-card leading-tight"
              >
                Sauti Za{" "}
                <span className="bg-gradient-wisdom bg-clip-text text-transparent block">
                  Kale Africa
                </span>
              </motion.h1>

              <motion.p
                variants={itemVariants}
                className="text-xl lg:text-2xl text-card font-medium mt-4 max-w-lg lg:max-w-none"
              >
                Stories Rooted in Africa, Shared with the World
              </motion.p>

              <motion.div
                variants={itemVariants}
                className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start w-full"
              >
                <Button
                  size="lg"
                  className="text-lg px-8 py-4 bg-gradient-to-r from-heritage-green to-heritage-red text-white shadow-lg transition-all duration-300 hover:scale-105"
                  onClick={() => navigate("/home")}
                >
                  Explore Our Heritage
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  className="text-lg px-8 py-4 border-heritage-red text-heritage-red transition-all duration-300 hover:bg-heritage-red hover:text-white hover:scale-105"
                  onClick={() => navigate("/auth")}
                >
                  Share Your Story
                </Button>
              </motion.div>
            </motion.div>

            {/* Right Column: Founder's Message */}
            <motion.div
              variants={founderCardVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              className="lg:pl-8"
            >
              <Card className="bg-background/95 backdrop-blur-sm border-heritage-accent/20 mx-auto max-w-xl text-center md:text-left">
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row items-center gap-4 mb-6">
                    <div className="w-20 h-20 rounded-full bg-gradient-heritage flex items-center justify-center">
                      <Heart className="h-10 w-10 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-foreground">
                        A Message from Our Founder
                      </h3>
                      <p className="text-muted-foreground">Masaki Magack</p>
                    </div>
                  </div>

                  <p className="text-foreground/80 leading-relaxed mb-6">
                    "I am Masaki Magack, a Pan-African storyteller, writer and emerging scholar in communication, culture, and media studies. From childhood, I discovered the power of words. Today, Africa faces rapid erosion of indigenous languages and traditions. Through storytelling, poetry, research, and digital archiving, I am building a platform where African voices are preserved and shared with the world."
                  </p>

                  <div className="bg-heritage-green/10 p-4 rounded-lg border-l-4 border-heritage-green">
                    <p className="text-foreground font-medium italic">
                      "My vision is to create a living archive of African languages, stories, and cultural memories — a bridge between past and future, ensuring our children inherit not just our lands but our voices."
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Statistics Section */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.5 }}
            className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mt-16"
          >
            {/* Stat 1 */}
            <motion.div
              variants={statVariants}
              className="text-center p-6 bg-background/20 backdrop-blur-sm rounded-lg border border-heritage-green/20"
            >
              <BookOpen className="h-8 w-8 text-heritage-green mx-auto mb-3" />
              <div className="text-3xl font-bold text-heritage-red mb-1">
                <CountUp end={42} duration={2} suffix="+" />
              </div>
              <div className="text-card/80 text-sm font-medium">
                Kenyan Communities
              </div>
            </motion.div>

            {/* Stat 2 */}
            <motion.div
              variants={statVariants}
              className="text-center p-6 bg-background/20 backdrop-blur-sm rounded-lg border border-heritage-green/20"
            >
              <Heart className="h-8 w-8 text-heritage-red mx-auto mb-3" />
              <div className="text-3xl font-bold text-heritage-green mb-1">
                <CountUp end={3} duration={2} />
              </div>
              <div className="text-card/80 text-sm font-medium">Languages</div>
              <div className="text-xs text-card/60 mt-1">
                Ekegusii, Kiswahili, English
              </div>
            </motion.div>

            {/* Stat 3 */}
            <motion.div
              variants={statVariants}
              className="text-center p-6 bg-background/20 backdrop-blur-sm rounded-lg border border-heritage-green/20"
            >
              <TrendingUp className="h-8 w-8 text-ubuntu mx-auto mb-3" />
              <div className="text-3xl font-bold text-heritage-red mb-1">
                <CountUp end={1000} duration={3} suffix="+" />
              </div>
              <div className="text-card/80 text-sm font-medium">
                Stories Preserved
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
