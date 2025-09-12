import { Button } from "@/components/ui/button";
import { Menu, Search, ChevronDown } from "lucide-react";
import kenyanFlag from "@/assets/kenyan-flag.png";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = () => {
  return (
    <header className="border-b border-border bg-card/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-3 sm:px-4 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          {/* Logo with Kenyan Flag */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            <img 
              src={kenyanFlag} 
              alt="Kenyan Flag"
              className="w-8 h-6 sm:w-12 sm:h-8 object-cover rounded-sm shadow-md border border-border"
            />
            <div className="hidden sm:block">
              <h1 className="text-lg sm:text-xl font-bold text-foreground">Ubuntu Voices</h1>
              <p className="text-xs text-muted-foreground hidden md:block">Preserving Kenya's Heritage</p>
            </div>
            <div className="block sm:hidden">
              <h1 className="text-base font-bold text-foreground">Ubuntu Voices</h1>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden lg:flex items-center space-x-4 xl:space-x-6">
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

          {/* Search and Menu */}
          <div className="flex items-center space-x-1 sm:space-x-2">
            <Button variant="ghost" size="icon" className="h-8 w-8 sm:h-10 sm:w-10">
              <Search className="h-4 w-4 sm:h-5 sm:w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="lg:hidden h-8 w-8 sm:h-10 sm:w-10">
              <Menu className="h-4 w-4 sm:h-5 sm:w-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;