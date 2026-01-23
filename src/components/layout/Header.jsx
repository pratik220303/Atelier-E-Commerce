import { ShoppingBag, Search, Menu, X, Sparkles } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export function Header({ totalItems, onCartClick, onSearchClick }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 -ml-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>

          {/* Logo */}
          <div className="flex items-center gap-2">
            <h1 className="font-heading text-xl md:text-2xl font-semibold tracking-tight">
              Atelier
            </h1>
            <span className="hidden md:flex items-center gap-1 text-xs text-primary bg-primary/10 px-2 py-0.5 rounded-full">
              <Sparkles className="w-3 h-3" />
              AI-Powered
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a
              href="#"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              New Arrivals
            </a>
            <a
              href="#"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Collections
            </a>
            <a
              href="#"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              About
            </a>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={onSearchClick}
              className="relative"
            >
              <Search className="w-5 h-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={onCartClick}
              className="relative"
            >
              <ShoppingBag className="w-5 h-5" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-primary text-primary-foreground text-xs font-medium rounded-full flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col gap-4">
              <a
                href="#"
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                New Arrivals
              </a>
              <a
                href="#"
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                Collections
              </a>
              <a
                href="#"
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                About
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
