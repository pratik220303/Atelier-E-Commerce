import { ShoppingBag, Heart, Sparkles } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function ProductCard({
  product,
  onAddToCart,
  onView,
  aiDescription,
}) {
  const [isHovered, setIsHovered] = useState(false);
  const [showAIDescription, setShowAIDescription] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  const handleClick = () => {
    onView(product.id);
  };

  const discount = product.originalPrice
    ? Math.round((1 - product.price / product.originalPrice) * 100)
    : 0;

  return (
    <div
      className="group relative bg-card rounded-lg overflow-hidden shadow-card hover:shadow-medium transition-all duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
    >
      {/* Image Container */}
      <div className="relative aspect-[3/4] overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {product.featured && (
            <Badge className="bg-primary text-primary-foreground">
              Featured
            </Badge>
          )}
          {discount > 0 && (
            <Badge variant="destructive">-{discount}%</Badge>
          )}
        </div>

        {/* Favorite Button */}
        <button
          className={`absolute top-3 right-3 p-2 rounded-full transition-all duration-200 ₹{
            isFavorite
              ? "bg-primary text-primary-foreground"
              : "bg-background/80 text-foreground hover:bg-background"
          }`}
          onClick={(e) => {
            e.stopPropagation();
            setIsFavorite(!isFavorite);
          }}
        >
          <Heart className={`w-4 h-4 ₹{isFavorite ? "fill-current" : ""}`} />
        </button>

        {/* Quick Add Button */}
        <div
          className={`absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent transition-opacity duration-300 ₹{
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        >
          <Button
            className="w-full"
            onClick={(e) => {
              e.stopPropagation();
              onAddToCart(product);
            }}
          >
            <ShoppingBag className="w-4 h-4 mr-2" />
            Add to Cart
          </Button>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-4">
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="font-medium text-sm leading-tight">
            {product.name}
          </h3>
          <div className="flex items-center gap-1 text-xs text-muted-foreground shrink-0">
            <span className="text-yellow-500">★</span>
            {product.rating}
          </div>
        </div>

        <p className="text-xs text-muted-foreground capitalize mb-3">
          {product.category}
        </p>

        {/* AI Description Toggle */}
        {aiDescription && (
          <div className="mb-3">
            <button
              className="flex items-center gap-1 text-xs text-primary hover:text-primary/80 transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                setShowAIDescription(!showAIDescription);
              }}
            >
              <Sparkles className="w-3 h-3" />
              {showAIDescription ? "Hide" : "AI"} Description
            </button>

            {showAIDescription && (
              <p className="mt-2 text-xs text-muted-foreground italic animate-fade-in">
                {aiDescription}
              </p>
            )}
          </div>
        )}

        {/* Price */}
        <div className="flex items-center gap-2">
          <span className="font-semibold">₹{product.price}</span>
          {product.originalPrice && (
            <span className="text-sm text-muted-foreground line-through">
              ₹{product.originalPrice}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
