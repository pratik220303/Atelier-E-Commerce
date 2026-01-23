import { Sparkles } from "lucide-react";
import { ProductCard } from "../products/ProductCard";

export function Recommendations({
  products,
  onAddToCart,
  onView,
}) {
  if (products.length === 0) return null;

  return (
    <section className="py-12">
      <div className="flex items-center gap-3 mb-8">
        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
          <Sparkles className="w-5 h-5 text-primary" />
        </div>
        <div>
          <h2 className="font-heading text-xl font-semibold">
            Recommended for You
          </h2>
          <p className="text-sm text-muted-foreground">
            AI-curated picks based on your interests
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {products.map((product, index) => (
          <div
            key={product.id}
            className="animate-fade-in-up"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <ProductCard
              product={product}
              onAddToCart={onAddToCart}
              onView={onView}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
