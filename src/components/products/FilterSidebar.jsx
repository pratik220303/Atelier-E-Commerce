import { SlidersHorizontal, X } from "lucide-react";
import { categories } from "@/data/products";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";

export function FilterSidebar({
  selectedCategory,
  priceRange,
  onCategoryChange,
  onPriceChange,
  onClearFilters,
  isOpen,
  onClose,
}) {
  const hasActiveFilters =
    selectedCategory !== "all" ||
    priceRange[0] > 0 ||
    priceRange[1] < 500;

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed lg:relative top-0 left-0 h-full lg:h-auto w-80 lg:w-full bg-background lg:bg-transparent z-50 lg:z-auto transform transition-transform duration-300 lg:transform-none ${
          isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
        <div className="p-6 lg:p-0">
          {/* Mobile Header */}
          <div className="flex items-center justify-between mb-6 lg:hidden">
            <div className="flex items-center gap-2">
              <SlidersHorizontal className="w-5 h-5" />
              <h2 className="font-heading text-lg font-semibold">Filters</h2>
            </div>
            <button onClick={onClose}>
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Desktop Header */}
          <div className="hidden lg:flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <SlidersHorizontal className="w-4 h-4" />
              <h2 className="font-medium">Filters</h2>
            </div>
            {hasActiveFilters && (
              <Button variant="ghost" size="sm" onClick={onClearFilters}>
                Clear all
              </Button>
            )}
          </div>

          {/* Categories */}
          <div className="mb-8">
            <h3 className="text-sm font-medium mb-4">Category</h3>
            <div className="space-y-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${
                    selectedCategory === category.id
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                  }`}
                  onClick={() => onCategoryChange(category.id)}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>

          {/* Price Range */}
          <div className="mb-8">
            <h3 className="text-sm font-medium mb-4">Price Range</h3>
            <Slider
              value={priceRange}
              min={0}
              max={500}
              step={10}
              onValueChange={(value) => onPriceChange(value)}
              className="mb-4"
            />
            <div className="flex items-center justify-between text-sm text-muted-foreground">
              <span>₹{priceRange[0]}</span>
              <span>₹{priceRange[1]}</span>
            </div>
          </div>

          {/* Mobile Apply Button */}
          <div className="lg:hidden mt-8">
            <Button className="w-full" onClick={onClose}>
              Apply Filters
            </Button>
          </div>
        </div>
      </aside>
    </>
  );
}
