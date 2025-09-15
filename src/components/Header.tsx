import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, Search, ChevronDown, X } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="border-b border-border bg-card/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-3 sm:px-4 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          {/* Logo with Kenyan Flag */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            <img 
              src="/images/kenyan-flag.png" 
              alt="Kenyan Flag"
              className="w-8 h-6 sm:w-12 sm:h-8 object-cover rounded-sm shadow-md border border-border"
            />
            <div className="hidden sm:block">
              <h1 className="text-lg sm:text-xl font-bold text-foreground">Sauti Za Kale Afrika</h1>
              <p className="text-xs text-muted-foreground hidden md:block">Stories Rooted in Africa, Shared with the World</p>
            </div>
            <div className="block sm:hidden">
              <h1 className="text-base font-bold text-foreground">Sauti Za Kale Afrika</h1>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden lg:flex items-center space-x-4 xl:space-x-6">
            <a href="/" className="text-foreground hover:text-primary transition-colors story-link text-sm xl:text-base">Home</a>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="text-foreground hover:text-primary transition-colors story-link flex items-center gap-1 text-sm xl:text-base">
                  Tribes <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-48 bg-card border border-border shadow-lg z-50">
                <DropdownMenuItem asChild>
                  <a href="/tribes/kikuyu" className="w-full cursor-pointer text-foreground hover:bg-muted">Kikuyu</a>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <a href="/tribes/luo" className="w-full cursor-pointer text-foreground hover:bg-muted">Luo</a>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <a href="/tribes/luhya" className="w-full cursor-pointer text-foreground hover:bg-muted">Luhya</a>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <a href="/tribes/kalenjin" className="w-full cursor-pointer text-foreground hover:bg-muted">Kalenjin</a>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <a href="/tribes/maasai" className="w-full cursor-pointer text-foreground hover:bg-muted">Maasai</a>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <a href="/stories" className="text-foreground hover:text-primary transition-colors story-link text-sm xl:text-base">Stories</a>
            <a href="/ubuntu-voices" className="text-foreground hover:text-primary transition-colors story-link text-sm xl:text-base">Elders</a>
            <a href="/poetry" className="text-foreground hover:text-primary transition-colors story-link text-sm xl:text-base">Poetry</a>
            <a href="/medicinal-plants" className="text-foreground hover:text-primary transition-colors story-link text-sm xl:text-base">Healing</a>
            <a href="/heritage-map" className="text-foreground hover:text-primary transition-colors story-link text-sm xl:text-base">Places</a>
            <a href="/heroes" className="text-foreground hover:text-primary transition-colors story-link text-sm xl:text-base">Heroes</a>
            <a href="/learning-hub" className="text-foreground hover:text-primary transition-colors story-link text-sm xl:text-base">Learn</a>
          </nav>

          {/* Search and Author Login */}
          <div className="flex items-center space-x-1 sm:space-x-2">
            <Button variant="ghost" size="icon" className="h-8 w-8 sm:h-10 sm:w-10">
              <Search className="h-4 w-4 sm:h-5 sm:w-5" />
            </Button>
            <Button 
              variant="outline" 
              className="hidden sm:flex items-center gap-1 text-xs xl:text-sm px-2 sm:px-3"
              onClick={() => window.location.href = "/auth"}
            >
              Authors
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              className="lg:hidden h-8 w-8 sm:h-10 sm:w-10"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="h-4 w-4 sm:h-5 sm:w-5" />
              ) : (
                <Menu className="h-4 w-4 sm:h-5 sm:w-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-border bg-card/95 backdrop-blur-sm">
            <nav className="container mx-auto px-3 sm:px-4 py-4 space-y-3">
              <a href="/" className="block text-sm text-foreground hover:text-primary transition-colors py-2">Home</a>
              {/* Mobile Tribes Dropdown */}
              <div className="space-y-2">
                <div className="font-medium text-foreground text-sm">Tribes</div>
                <div className="pl-4 space-y-2">
                  <a href="/tribes/kikuyu" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Kikuyu</a>
                  <a href="/tribes/luo" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Luo</a>
                  <a href="/tribes/luhya" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Luhya</a>
                  <a href="/tribes/kalenjin" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Kalenjin</a>
                  <a href="/tribes/maasai" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Maasai</a>
                </div>
              </div>
              <a href="/stories" className="block text-sm text-foreground hover:text-primary transition-colors py-2">Stories</a>
              <a href="/ubuntu-voices" className="block text-sm text-foreground hover:text-primary transition-colors py-2">Elders</a>
              <a href="/poetry" className="block text-sm text-foreground hover:text-primary transition-colors py-2">Poetry</a>
              <a href="/medicinal-plants" className="block text-sm text-foreground hover:text-primary transition-colors py-2">Healing</a>
              <a href="/heritage-map" className="block text-sm text-foreground hover:text-primary transition-colors py-2">Places</a>
              <a href="/heroes" className="block text-sm text-foreground hover:text-primary transition-colors py-2">Heroes</a>
              <a href="/learning-hub" className="block text-sm text-foreground hover:text-primary transition-colors py-2">Learn</a>
              <a href="/auth" className="block text-sm text-foreground hover:text-primary transition-colors py-2 border-t border-border pt-3 mt-3">Authors Portal</a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;