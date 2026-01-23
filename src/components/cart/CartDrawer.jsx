import { ShoppingBag, X, Minus, Plus, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CartDrawer({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemove,
  totalPrice,
}) {
  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/50 z-50 animate-fade-in"
        onClick={onClose}
      />

      {/* Drawer */}
      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-background z-50 shadow-2xl animate-slide-in-right">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-border">
            <div className="flex items-center gap-3">
              <ShoppingBag className="w-5 h-5" />
              <h2 className="font-heading text-lg font-semibold">Your Cart</h2>
              <span className="text-sm text-muted-foreground">
                ({items.length} items)
              </span>
            </div>
            <button
              className="p-2 hover:bg-secondary rounded-full transition-colors"
              onClick={onClose}
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-6">
            {items.length === 0 ? (
              <div className="text-center py-12">
                <ShoppingBag className="w-12 h-12 mx-auto text-muted-foreground mb-4" />
                <p className="text-muted-foreground">Your cart is empty</p>
              </div>
            ) : (
              <div className="space-y-6">
                {items.map((item) => (
                  <div key={item.id} className="flex gap-4 animate-fade-in">
                    {/* Image */}
                    <div className="w-24 h-28 rounded-lg overflow-hidden bg-secondary shrink-0">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Details */}
                    <div className="flex-1 min-w-0">
                      <h3 className="font-medium text-sm truncate">
                        {item.name}
                      </h3>
                      <p className="text-xs text-muted-foreground capitalize mt-1">
                        {item.category}
                      </p>
                      <p className="font-semibold mt-2">₹{item.price}</p>

                      {/* Quantity Controls */}
                      <div className="flex items-center gap-3 mt-3">
                        <div className="flex items-center border border-border rounded-md">
                          <button
                            className="p-1.5 hover:bg-secondary transition-colors"
                            onClick={() =>
                              onUpdateQuantity(item.id, item.quantity - 1)
                            }
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="w-8 text-center text-sm">
                            {item.quantity}
                          </span>
                          <button
                            className="p-1.5 hover:bg-secondary transition-colors"
                            onClick={() =>
                              onUpdateQuantity(item.id, item.quantity + 1)
                            }
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                        <button
                          className="p-1.5 text-destructive hover:bg-destructive/10 rounded-md transition-colors"
                          onClick={() => onRemove(item.id)}
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {items.length > 0 && (
            <div className="p-6 border-t border-border bg-secondary/30">
              <div className="flex items-center justify-between mb-4">
                <span className="text-muted-foreground">Subtotal</span>
                <span className="font-semibold text-lg">
                  ₹{totalPrice.toFixed(2)}
                </span>
              </div>
              <p className="text-xs text-muted-foreground mb-4">
                Shipping and taxes calculated at checkout
              </p>
              <Button className="w-full" size="lg">
                Checkout
              </Button>
              <button
                className="w-full text-center text-sm text-muted-foreground mt-4 hover:text-foreground transition-colors"
                onClick={onClose}
              >
                Continue Shopping
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
