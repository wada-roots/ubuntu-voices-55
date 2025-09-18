import { useState, useEffect } from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, CarouselApi } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

const CulturalCarousel = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);
  const [currentNumber, setCurrentNumber] = useState(1);
  const [showTranslation, setShowTranslation] = useState(false);

  const culturalImages = [
    { src: "/images/components/storytelling-circle.jpg", alt: "Traditional storytelling circle" },
    { src: "/images/components/medicinal-plants.jpg", alt: "Traditional medicinal plants" },
    { src: "/images/components/poetry-music.jpg", alt: "Poetry and traditional music" },
    { src: "/images/components/sacred-places.jpg", alt: "Sacred cultural places" },
    { src: "/images/components/elders-storytelling.jpg", alt: "Elders sharing wisdom" },
  ];

  // Numbers 1-10 in different Kenyan languages
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

  useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  // Animate numbers cycling through languages
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentNumber(prev => (prev % 10) + 1);
      setShowTranslation(false);
      
      setTimeout(() => {
        setShowTranslation(true);
      }, 1000);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const currentNumberData = numbers[currentNumber - 1];
  const languages = ['kikuyu', 'luo', 'luhya', 'kalenjin', 'maasai'] as const;
  
  return (
    <div className="w-full">
      <Carousel 
        setApi={setApi} 
        className="w-full max-w-5xl mx-auto"
        opts={{
          align: "start",
          loop: true,
        }}
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          {culturalImages.map((image, index) => (
            <CarouselItem key={index} className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3">
              <Card className="border-none shadow-lg overflow-hidden hover-scale">
                <CardContent className="p-0 relative group">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-heritage-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 text-card transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-sm sm:text-base font-medium">{image.alt}</p>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden sm:flex -left-8 lg:-left-12" />
        <CarouselNext className="hidden sm:flex -right-8 lg:-right-12" />
      </Carousel>

      {/* Animated Number Counter */}
      <div className="mt-8 sm:mt-12 text-center">
        <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-4 sm:p-6 lg:p-8 border border-border shadow-lg max-w-md mx-auto">
          <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-4">Count in Our Languages</h3>
          
          <div className="space-y-3 sm:space-y-4">
            <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary animate-scale-in">
              {currentNumber}
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 text-sm sm:text-base">
              {languages.map((lang) => (
                <div 
                  key={lang} 
                  className="flex justify-between items-center py-1 sm:py-2 px-2 sm:px-3 rounded-lg bg-muted/50"
                >
                  <span className="font-medium text-muted-foreground capitalize">{lang}:</span>
                  <span className="font-semibold text-foreground animate-fade-in">
                    {currentNumberData[lang]}
                  </span>
                </div>
              ))}
            </div>
            
            {showTranslation && (
              <div className="mt-3 sm:mt-4 p-2 sm:p-3 bg-ubuntu/20 rounded-lg animate-fade-in">
                <span className="text-ubuntu font-bold text-lg sm:text-xl">
                  {currentNumberData.english}
                </span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Carousel Indicators */}
      <div className="flex justify-center mt-4 sm:mt-6 gap-2">
        {Array.from({ length: count }).map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
              index + 1 === current 
                ? 'bg-primary scale-125' 
                : 'bg-muted hover:bg-muted-foreground/50'
            }`}
            onClick={() => api?.scrollTo(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default CulturalCarousel;