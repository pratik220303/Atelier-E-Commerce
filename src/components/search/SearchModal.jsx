import { Search, X, Sparkles, TrendingUp } from "lucide-react";
import { useEffect, useRef } from "react";
import { Input } from "@/components/ui/input";

export function SearchModal({
  isOpen,
  onClose,
  searchQuery,
  onSearchChange,
  suggestions,
  onSuggestionClick,
}) {
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [onClose]);

  if (!isOpen) return null;

  const trendingSearches = ["cashmere", "linen", "organic", "minimalist"];

  return (
    <div className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm animate-fade-in">
      <div className="container mx-auto px-4 pt-20 md:pt-32">
        <div className="max-w-2xl mx-auto">
          {/* Close Button */}
          <button
            className="absolute top-4 right-4 p-2 text-muted-foreground hover:text-foreground transition-colors"
            onClick={onClose}
          >
            <X className="w-6 h-6" />
          </button>

          {/* Search Input */}
          <div className="relative mb-8">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              ref={inputRef}
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="pl-12 pr-4 py-6 text-lg bg-secondary border-0 rounded-xl"
            />
            {searchQuery && (
              <button
                className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                onClick={() => onSearchChange("")}
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* AI Suggestions */}
          {suggestions.length > 0 && (
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="w-4 h-4 text-primary" />
                <h3 className="text-sm font-medium">AI Suggestions</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {suggestions.map((suggestion, index) => (
                  <button
                    key={index}
                    className="px-4 py-2 bg-secondary hover:bg-primary hover:text-primary-foreground rounded-full text-sm transition-colors animate-fade-in"
                    style={{ animationDelay: `₹{index * 50}ms` }}
                    onClick={() => {
                      onSuggestionClick(suggestion);
                      onClose();
                    }}
                  >
                    {suggestion}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Trending Searches */}
          {!searchQuery && (
            <div>
              <div className="flex items-center gap-2 mb-4">
                <TrendingUp className="w-4 h-4 text-muted-foreground" />
                <h3 className="text-sm font-medium text-muted-foreground">
                  Trending Searches
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {trendingSearches.map((term) => (
                  <button
                    key={term}
                    className="px-4 py-2 bg-secondary hover:bg-secondary/80 rounded-full text-sm transition-colors"
                    onClick={() => {
                      onSearchChange(term);
                    }}
                  >
                    {term}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
