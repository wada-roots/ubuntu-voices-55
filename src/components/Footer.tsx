import { Button } from "@/components/ui/button";
import { Heart, Mail, Share2, Upload } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-heritage-brown text-card py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Logo & Mission */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-8 bg-gradient-to-b from-heritage-black via-heritage-red to-heritage-green rounded-sm shadow-md"></div>
              <div>
                <h3 className="text-xl font-bold">Ubuntu Voices</h3>
                <p className="text-sm text-card/80">Preserving Kenya's Heritage</p>
              </div>
            </div>
            <p className="text-card/80 leading-relaxed mb-4">
              Dedicated to preserving and celebrating Kenyan indigenous languages, 
              oral traditions, and cultural knowledge through the Ubuntu philosophy 
              of interconnectedness and shared humanity.
            </p>
            <div className="flex items-center gap-2 text-sm">
              <Heart className="h-4 w-4 text-ubuntu" />
              <span className="text-ubuntu font-medium">"I am because we are"</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Explore</h4>
            <ul className="space-y-2 text-sm text-card/80">
              <li><a href="#stories" className="hover:text-ubuntu transition-colors">Stories & Folklore</a></li>
              <li><a href="#elders" className="hover:text-ubuntu transition-colors">Ubuntu Voices</a></li>
              <li><a href="#poetry" className="hover:text-ubuntu transition-colors">Poetry & Songs</a></li>
              <li><a href="#healing" className="hover:text-ubuntu transition-colors">Medicinal Plants</a></li>
              <li><a href="#places" className="hover:text-ubuntu transition-colors">Heritage Places</a></li>
              <li><a href="#heroes" className="hover:text-ubuntu transition-colors">Heroes & Fighters</a></li>
            </ul>
          </div>

          {/* Community */}
          <div>
            <h4 className="font-semibold mb-4">Community</h4>
            <ul className="space-y-2 text-sm text-card/80">
              <li><a href="#contribute" className="hover:text-ubuntu transition-colors">Contribute Stories</a></li>
              <li><a href="#learn" className="hover:text-ubuntu transition-colors">Learning Hub</a></li>
              <li><a href="#teachers" className="hover:text-ubuntu transition-colors">For Teachers</a></li>
              <li><a href="#researchers" className="hover:text-ubuntu transition-colors">Researchers</a></li>
              <li><a href="#about" className="hover:text-ubuntu transition-colors">About Us</a></li>
              <li><a href="#contact" className="hover:text-ubuntu transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="border-t border-card/20 pt-8 mb-8">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="ubuntu" size="lg">
              <Upload className="mr-2 h-5 w-5" />
              Share Your Story
            </Button>
            <Button variant="outline" size="lg" className="border-card/30 text-card hover:bg-card/10">
              <Mail className="mr-2 h-5 w-5" />
              Subscribe to Updates
            </Button>
            <Button variant="outline" size="lg" className="border-card/30 text-card hover:bg-card/10">
              <Share2 className="mr-2 h-5 w-5" />
              Share Platform
            </Button>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-card/20 pt-8 text-center">
          <p className="text-card/60 text-sm">
            © 2024 Ubuntu Voices. Preserving Kenya's heritage for future generations.
          </p>
          <p className="text-card/60 text-xs mt-2">
            Built with love for our elders and ancestors
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;