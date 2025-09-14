import { useState } from "react";
import { Search, ShoppingCart, User, Menu, X, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
      <div className="container mx-auto px-4">
        {/* Top bar */}
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            <h1 className="text-2xl font-bold text-gradient">
              ShopLux
            </h1>
          </div>

          {/* Search bar - hidden on mobile */}
          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder="Search products..."
                className="pl-10 rounded-full"
              />
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="hidden md:flex">
              <User className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon" className="relative">
              <Heart className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground rounded-full w-4 h-4 text-xs flex items-center justify-center">
                0
              </span>
            </Button>
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground rounded-full w-4 h-4 text-xs flex items-center justify-center">
                0
              </span>
            </Button>
          </div>
        </div>

        {/* Navigation - desktop */}
        <nav className="hidden md:flex items-center space-x-8 py-4 border-t">
          <a href="#" className="text-foreground hover:text-primary transition-colors font-medium">
            Home
          </a>
          <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
            Women
          </a>
          <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
            Men
          </a>
          <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
            Accessories
          </a>
          <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
            Sale
          </a>
        </nav>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              <div className="relative mb-4">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input
                  placeholder="Search products..."
                  className="pl-10 rounded-full"
                />
              </div>
              <a href="#" className="text-foreground hover:text-primary transition-colors font-medium py-2">
                Home
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors py-2">
                Women
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors py-2">
                Men
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors py-2">
                Accessories
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors py-2">
                Sale
              </a>
              <Button variant="ghost" className="justify-start p-2">
                <User className="w-5 h-5 mr-2" />
                Account
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;