import { ProductCard } from "./ProductCard";

export function ProductGrid({
  products,
  onAddToCart,
  onView,
  generateDescription,
}) {
  if (!products || products.length === 0) {
    return (
      <div className="text-center py-16">
        <p className="text-muted-foreground">No products found.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
      {products.map((product, index) => (
        <div
          key={product.id}
          className="animate-fade-in-up"
          style={{ animationDelay: `${index * 50}ms` }}
        >
          <ProductCard
            product={product}
            onAddToCart={onAddToCart}
            onView={onView}
            aiDescription={
              generateDescription ? generateDescription(product) : undefined
            }
          />
        </div>
      ))}
    </div>
  );
}
