import { ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Hero({ onExplore }) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-secondary via-background to-secondary/50 py-16 md:py-24">
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-terracotta-light/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="max-w-3xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 animate-fade-in">
            <Sparkles className="w-4 h-4" />
            AI-Powered Shopping Experience
          </div>

          {/* Headline */}
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight mb-6 animate-fade-in-up">
            Curated Essentials for the{' '}
            <span className="text-primary">Modern Lifestyle</span>
          </h1>

          {/* Subheadline */}
          <p
            className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl mx-auto animate-fade-in-up"
            style={{ animationDelay: '100ms' }}
          >
            Discover thoughtfully designed products with intelligent recommendations
            tailored just for you.
          </p>

          {/* CTA */}
          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up"
            style={{ animationDelay: '200ms' }}
          >
            <Button size="lg" onClick={onExplore} className="group">
              Explore Collection
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg">
              Learn More
            </Button>
          </div>

          {/* Features */}
          <div
            className="grid grid-cols-3 gap-4 md:gap-8 mt-16 animate-fade-in-up"
            style={{ animationDelay: '300ms' }}
          >
            {[
              { label: 'Smart Recommendations', value: 'AI-Powered' },
              { label: 'Free Shipping', value: 'Over ₹1,000' },
              { label: 'Easy Returns', value: '30 Days' },
            ].map((feature) => (
              <div key={feature.label} className="text-center">
                <p className="font-semibold text-lg md:text-xl">{feature.value}</p>
                <p className="text-xs md:text-sm text-muted-foreground">
                  {feature.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
