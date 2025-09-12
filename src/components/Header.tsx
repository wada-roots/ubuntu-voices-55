import { Button } from "@/components/ui/button";
import { Menu, Search, ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = () => {
  return (
    <header className="border-b border-border bg-card/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo with Enhanced Kenyan Flag */}
          <div className="flex items-center space-x-3">
            <div className="w-12 h-8 relative overflow-hidden rounded-sm shadow-md border border-border">
              <div className="h-1/3 bg-heritage-black"></div>
              <div className="h-1/3 bg-heritage-red"></div>
              <div className="h-1/3 bg-heritage-green"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-6 h-4 border border-card bg-card/80 rounded-full flex items-center justify-center">
                  <div className="w-3 h-2 bg-heritage-red rounded-full"></div>
                </div>
              </div>
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">Ubuntu Voices</h1>
              <p className="text-xs text-muted-foreground">Preserving Kenya's Heritage</p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="text-foreground hover:text-primary transition-colors story-link flex items-center gap-1">
                  Tribes <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-48 bg-card border border-border shadow-lg">
                <DropdownMenuItem asChild>
                  <a href="/tribes/kikuyu" className="w-full cursor-pointer">Kikuyu</a>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <a href="/tribes/luo" className="w-full cursor-pointer">Luo</a>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <a href="/tribes/luhya" className="w-full cursor-pointer">Luhya</a>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <a href="/tribes/kalenjin" className="w-full cursor-pointer">Kalenjin</a>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <a href="/tribes/maasai" className="w-full cursor-pointer">Maasai</a>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <a href="/stories" className="text-foreground hover:text-primary transition-colors story-link">Stories</a>
            <a href="/ubuntu-voices" className="text-foreground hover:text-primary transition-colors story-link">Elders</a>
            <a href="/poetry" className="text-foreground hover:text-primary transition-colors story-link">Poetry</a>
            <a href="/medicinal-plants" className="text-foreground hover:text-primary transition-colors story-link">Healing</a>
            <a href="/heritage-map" className="text-foreground hover:text-primary transition-colors story-link">Places</a>
            <a href="/heroes" className="text-foreground hover:text-primary transition-colors story-link">Heroes</a>
            <a href="/learning-hub" className="text-foreground hover:text-primary transition-colors story-link">Learn</a>
          </nav>

          {/* Search and Menu */}
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="icon">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;