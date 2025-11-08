import { useState, useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  CarouselApi,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

// Define a safer type for Carousel API to avoid TS errors
type SafeCarouselApi = {
  scrollSnapList: () => any[];
  selectedScrollSnap: () => number;
  on?: (event: string, cb: () => void) => void;
  off?: (event: string, cb: () => void) => void;
};

const CulturalCarousel = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);
  const [currentNumber, setCurrentNumber] = useState(1);
  const [showTranslation, setShowTranslation] = useState(false);

  const culturalImages = [
    { src: "/images/components/storytelling-circle.jpg", alt: "Elders storytelling circle, Kenya" },
    { src: "/images/components/medicinal-plants.jpg", alt: "Traditional medicinal plants in Kenya" },
    { src: "/images/components/poetry-music.jpg", alt: "Poetry and traditional Kenyan music" },
    { src: "/images/components/sacred-places.jpg", alt: "Sacred cultural places in Kenya" },
    { src: "/images/components/elders-storytelling.jpg", alt: "Elders sharing wisdom around a fire" },
  ];

  const numbers = [
    { kikuyu: "Kimwe", luo: "Achiel", luhya: "Khumo", kalenjin: "Akou", maasai: "Nabo", english: "One" },
    { kikuyu: "Igiri", luo: "Ariyo", luhya: "Khiviri", kalenjin: "Aeng", maasai: "Are", english: "Two" },
    { kikuyu: "Ithatu", luo: "Adek", luhya: "Khidatu", kalenjin: "Somok", maasai: "Uni", english: "Three" },
    { kikuyu: "Ina", luo: "Angwen", luhya: "Khinne", kalenjin: "Angwen", maasai: "Ongwan", english: "Four" },
    { kikuyu: "Ithano", luo: "Abich", luhya: "Khitano", kalenjin: "Mut", maasai: "Iet", english: "Five" },
    { kikuyu: "Ithandatu", luo: "Auchiel", luhya: "Khisita", kalenjin: "Lo", maasai: "Ile", english: "Six" },
    { kikuyu: "Mugwanja", luo: "Abiriyo", luhya: "Khisaba", kalenjin: "Tisap", maasai: "Napishoye", english: "Seven" },
    { kikuyu: "Inyanya", luo: "Aboro", luhya: "Khiseere", kalenjin: "Sisit", maasai: "Isiet", english: "Eight" },
    { kikuyu: "Kenda", luo: "Ochiko", luhya: "Khienda", kalenjin: "Sokok", maasai: "Naudo", english: "Nine" },
    { kikuyu: "Ikumi", luo: "Apar", luhya: "Khikumi", kalenjin: "Taman", maasai: "Tomon", english: "Ten" },
  ];

  const languageList = [
    { key: "kikuyu", label: "Kikuyu" },
    { key: "luo", label: "Luo" },
    { key: "luhya", label: "Luhya" },
    { key: "kalenjin", label: "Kalenjin" },
    { key: "maasai", label: "Maasai" },
  ];

  // ✅ Fixed useEffect: clean listener attachment with proper typing
  useEffect(() => {
    if (!api) return;
    const carousel = api as SafeCarouselApi;

    setCount(carousel.scrollSnapList().length);
    setCurrent(carousel.selectedScrollSnap() + 1);

    const handleSelect = () => setCurrent(carousel.selectedScrollSnap() + 1);
    carousel.on?.("select", handleSelect);

    return () => carousel.off?.("select", handleSelect);
  }, [api]);

  // ✅ Simplified clean interval animation
  useEffect(() => {
    const interval = setInterval(() => {
      setShowTranslation(false);
      setCurrentNumber((prev) => (prev % 10) + 1);
      setShowTranslation(true);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const currentNumberData = numbers[currentNumber - 1];

  return (
    <div className="w-full">
      {/* Carousel Section */}
      <Carousel
        setApi={setApi}
        className="w-full max-w-5xl mx-auto"
        opts={{ align: "start", loop: true }}
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          {culturalImages.map((image, index) => (
            <CarouselItem
              key={index}
              className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3"
            >
              <Card className="border-none shadow-lg overflow-hidden">
                <CardContent className="p-0 relative group">
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={image.src}
                      alt={image.alt}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
       
                    <p className="text-sm sm:text-base font-medium">{image.alt}</p>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="opacity-70 hover:opacity-100" />
        <CarouselNext className="opacity-70 hover:opacity-100" />
      </Carousel>

      {/* Language Counter */}
      <div className="mt-8 sm:mt-12 text-center">
        <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-border shadow-lg max-w-md mx-auto">
          <h3 className="text-lg sm:text-xl font-semibold text-muted-foreground mb-4">
            Count in Our Languages
          </h3>

          <motion.div
            key={currentNumber}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary"
          >
            {currentNumber}
          </motion.div>

          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 text-sm sm:text-base">
            {languageList.map(({ key, label }) => (
              <div
                key={key}
                className="flex justify-between items-center py-1 sm:py-2 px-2 sm:px-3 rounded-lg bg-muted/50"
              >
                <span className="font-medium text-muted-foreground">{label}:</span>
                <span className="font-semibold text-foreground">{currentNumberData[key]}</span>
              </div>
            ))}
          </div>

          {showTranslation && (
            <motion.div
              aria-live="polite"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="mt-4 p-3 bg-ubuntu/20 rounded-lg"
            >
              <span className="text-ubuntu font-bold text-lg sm:text-xl">
                {currentNumberData.english}
              </span>
            </motion.div>
          )}
        </div>
      </div>

      {/* Carousel Indicators */}
      <div className="flex justify-center mt-6 gap-2">
        {Array.from({ length: count }).map((_, index) => (
          <button
            key={index}
            onClick={() => api?.scrollTo(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
              index + 1 === current
                ? "bg-primary scale-125"
                : "bg-muted hover:bg-muted-foreground/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default CulturalCarousel;
