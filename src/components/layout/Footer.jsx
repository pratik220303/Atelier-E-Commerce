import { Sparkles } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-secondary/50 border-t border-border mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <h3 className="font-heading text-xl font-semibold mb-4">
              Atelier
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
              Curated essentials for the modern lifestyle, enhanced by AI.
            </p>
            <div className="flex items-center gap-2 text-xs text-primary">
              <Sparkles className="w-3 h-3" />
              AI-Powered Shopping Experience
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-medium mb-4">Shop</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  New Arrivals
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Best Sellers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Sale
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Gift Cards
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-medium mb-4">Support</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Shipping Info
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Returns
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* About */}
          <div>
            <h4 className="font-medium mb-4">About</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Our Story
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Sustainability
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Press
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 text-center text-sm text-muted-foreground">
          <p>Thank you for choosing Atelier. We’re grateful to be part of your journey.</p>

        </div>
      </div>
    </footer>
  );
}  