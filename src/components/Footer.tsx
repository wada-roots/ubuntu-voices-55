import { Button } from "@/components/ui/button";
import { Heart, Mail, Share2, Upload } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className="bg-heritage-brown text-card py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Logo & Mission */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img
                src="/images/branding/kenyan-flag.png"
                alt="Kenyan Flag"
                className="w-12 h-8 rounded-sm shadow-md"
              />
              <div>
                <h3 className="text-xl font-bold">Sauti Za Kale Afrika</h3>
                <p className="text-sm text-card/80">Preserving Africa's Heritage</p>
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
              <li><Link to="/stories" className="hover:text-ubuntu transition-colors">Stories & Folklore</Link></li>
              <li><Link to="/ubuntu-voices" className="hover:text-ubuntu transition-colors">Ubuntu Voices</Link></li>
              <li><Link to="/poetry" className="hover:text-ubuntu transition-colors">Poetry & Songs</Link></li>
              <li><Link to="/medicinal-plants" className="hover:text-ubuntu transition-colors">Medicinal Plants</Link></li>
              <li><Link to="/heritage-map" className="hover:text-ubuntu transition-colors">Heritage Places</Link></li>
              <li><Link to="/heroes" className="hover:text-ubuntu transition-colors">Heroes & Fighters</Link></li>
            </ul>
          </div>

          {/* Community */}
          <div>
            <h4 className="font-semibold mb-4">Community</h4>
            <ul className="space-y-2 text-sm text-card/80">
              <li><Link to="/submit-content" className="hover:text-ubuntu transition-colors">Contribute Stories</Link></li>
              <li><Link to="/learning-hub" className="hover:text-ubuntu transition-colors">Learning Hub</Link></li>
              <li><Link to="/teachers" className="hover:text-ubuntu transition-colors">For Teachers</Link></li>
              <li><Link to="/researchers" className="hover:text-ubuntu transition-colors">Researchers</Link></li>
              <li><Link to="/about" className="hover:text-ubuntu transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-ubuntu transition-colors">Contact</Link></li>
            </ul>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="border-t border-card/20 pt-8 mb-8">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* Share Your Story */}
            <Button
              variant="ubuntu"
              size="lg"
              className="bg-ubuntu text-white shadow-md"
              onClick={() => navigate("/submit-content")}
            >
              <Upload className="mr-2 h-5 w-5" />
              Share Your Story
            </Button>

            {/* Subscribe to Updates */}
            <Button
              variant="outline"
              size="lg"
              className="border border-ubuntu/40 text-white bg-card/20"
            >
              <Mail className="mr-2 h-5 w-5" />
              Subscribe to Updates
            </Button>

            {/* Share Platform */}
            <Button
              variant="outline"
              size="lg"
              className="border border-ubuntu/40 text-white bg-card/20"
            >
              <Share2 className="mr-2 h-5 w-5" />
              Share Platform
            </Button>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-card/20 pt-8 text-center">
          <p className="text-card/60 text-sm">
            © 2025 Sauti Za Kale Afrika. Preserving Africa's heritage for future generations.
          </p>
          <p className="text-card/60 text-xs mt-2">
            Built By DMS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
