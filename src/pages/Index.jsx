import { useState, useCallback, useMemo } from "react";
import { SlidersHorizontal } from "lucide-react";
import { products } from "@/data/products";
import { useCart } from "@/hooks/useCart";
import { useAIFeatures } from "@/hooks/useAIFeatures";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/hero/Hero";
import { ProductGrid } from "@/components/products/ProductGrid";
import { FilterSidebar } from "@/components/products/FilterSidebar";
import { SearchModal } from "@/components/search/SearchModal";
import { CartDrawer } from "@/components/cart/CartDrawer";
import { Recommendations } from "@/components/ai/Recommendations";
import { Button } from "@/components/ui/button";

const Index = () => {
  // State
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [priceRange, setPriceRange] = useState([0, 500]);
  const [viewedProducts, setViewedProducts] = useState([]);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // Hooks
  const {
    cartItems,
    isCartOpen,
    setIsCartOpen,
    addToCart,
    removeFromCart,
    updateQuantity,
    totalItems,
    totalPrice,
  } = useCart();

  const {
    searchQuery,
    setSearchQuery,
    searchSuggestions,
    recommendations,
    generateDescription,
    searchProducts,
  } = useAIFeatures(cartItems, viewedProducts);

  // Track viewed products for AI recommendations
  const handleViewProduct = useCallback((productId) => {
    setViewedProducts((prev) => {
      if (prev.includes(productId)) return prev;
      return [...prev.slice(-9), productId]; // Keep last 10
    });
  }, []);

  // Filter products
  const filteredProducts = useMemo(() => {
    let result = searchQuery ? searchProducts(searchQuery) : products;

    if (selectedCategory !== "all") {
      result = result.filter((p) => p.category === selectedCategory);
    }

    result = result.filter(
      (p) => p.price >= priceRange[0] && p.price <= priceRange[1]
    );

    return result;
  }, [searchQuery, selectedCategory, priceRange, searchProducts]);

  const handleClearFilters = () => {
    setSelectedCategory("all");
    setPriceRange([0, 500]);
    setSearchQuery("");
  };

  const scrollToProducts = () => {
    document
      .getElementById("products")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header
        totalItems={totalItems}
        onCartClick={() => setIsCartOpen(true)}
        onSearchClick={() => setIsSearchOpen(true)}
      />

      {/* Hero Section */}
      <Hero onExplore={scrollToProducts} />

      {/* AI Recommendations */}
      <div className="container mx-auto px-4">
        <Recommendations
          products={recommendations}
          onAddToCart={addToCart}
          onView={handleViewProduct}
        />
      </div>

      {/* Products Section */}
      <section id="products" className="container mx-auto px-4 py-12">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="font-heading text-2xl md:text-3xl font-semibold">
              All Products
            </h2>
            <p className="text-muted-foreground text-sm mt-1">
              {filteredProducts.length} products
            </p>
          </div>
          <Button
            variant="outline"
            className="lg:hidden"
            onClick={() => setIsFilterOpen(true)}
          >
            <SlidersHorizontal className="w-4 h-4 mr-2" />
            Filters
          </Button>
        </div>

        {/* Products Grid with Sidebar */}
        <div className="flex gap-8">
          {/* Sidebar - Desktop */}
          <div className="hidden lg:block w-64 shrink-0">
            <FilterSidebar
              selectedCategory={selectedCategory}
              priceRange={priceRange}
              onCategoryChange={setSelectedCategory}
              onPriceChange={setPriceRange}
              onClearFilters={handleClearFilters}
              isOpen={isFilterOpen}
              onClose={() => setIsFilterOpen(false)}
            />
          </div>

          {/* Products Grid */}
          <div className="flex-1">
            <ProductGrid
              products={filteredProducts}
              onAddToCart={addToCart}
              onView={handleViewProduct}
              generateDescription={generateDescription}
            />
          </div>
        </div>

        {/* Sidebar - Mobile */}
        <div className="lg:hidden">
          <FilterSidebar
            selectedCategory={selectedCategory}
            priceRange={priceRange}
            onCategoryChange={setSelectedCategory}
            onPriceChange={setPriceRange}
            onClearFilters={handleClearFilters}
            isOpen={isFilterOpen}
            onClose={() => setIsFilterOpen(false)}
          />
        </div>
      </section>

      {/* Footer */}
      <Footer />

      {/* Search Modal */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        suggestions={searchSuggestions}
        onSuggestionClick={(suggestion) => {
          setSearchQuery(suggestion);
          setIsSearchOpen(false);
        }}
      />

      {/* Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={updateQuantity}
        onRemove={removeFromCart}
        totalPrice={totalPrice}
      />
    </div>
  );
};

export default Index;
