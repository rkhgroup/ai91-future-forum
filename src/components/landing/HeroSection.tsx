import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-background" />
      
      {/* Radial gradient glow */}
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[150%] h-[80%] opacity-60"
        style={{
          background: 'radial-gradient(ellipse at 50% 0%, hsl(38, 55%, 50%, 0.15) 0%, transparent 60%)',
        }}
      />
      
      {/* Animated particles/orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-[100px] animate-pulse-glow" />
      <div className="absolute bottom-1/3 right-1/4 w-48 h-48 bg-primary/5 rounded-full blur-[80px] animate-pulse-glow" style={{ animationDelay: '1s' }} />
      
      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(hsl(38, 55%, 71%) 1px, transparent 1px), linear-gradient(90deg, hsl(38, 55%, 71%) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 md:px-6 text-center">
        <div className="max-w-5xl mx-auto stagger-children">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 mb-8">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">First Republican Forum</span>
          </div>

          {/* Gradient Square Behind Headline */}
          <div className="relative">
            <div 
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] sm:w-[380px] sm:h-[380px] md:w-[480px] md:h-[480px] lg:w-[580px] lg:h-[580px] rounded-3xl opacity-50 blur-sm pointer-events-none"
              style={{
                background: `linear-gradient(135deg, 
                  hsl(38, 55%, 25%) 0%, 
                  hsl(38, 55%, 45%) 25%, 
                  hsl(38, 55%, 71%) 50%, 
                  hsl(38, 55%, 55%) 75%, 
                  hsl(38, 55%, 30%) 100%)`,
                boxShadow: '0 0 120px 40px hsl(38, 55%, 50%, 0.2)',
              }}
            />
            
            {/* Main Headline */}
            <h1 className="relative z-10 font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-6">
            <span className="text-foreground">AI91: </span>
            <span className="text-gradient-gold">Transforming</span>
            <br />
            <span className="text-foreground">School Governance</span>
            <br />
            <span className="text-foreground">in the </span>
            <span className="text-gradient-gold">Age of AI</span>
          </h1>
          </div>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
            The First Republican Forum for Education Leaders — bringing together experts, principals, and government officials to reshape the future of learning
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="gold" size="xl" className="group">
              Buy a Ticket
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="goldOutline" size="xl">
              Forum Program
            </Button>
          </div>

          {/* Stats preview */}
          <div className="mt-16 flex flex-wrap items-center justify-center gap-8 md:gap-12">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-display font-bold text-gradient-gold">500+</div>
              <div className="text-sm text-muted-foreground mt-1">Attendees</div>
            </div>
            <div className="h-8 w-px bg-border hidden md:block" />
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-display font-bold text-gradient-gold">20+</div>
              <div className="text-sm text-muted-foreground mt-1">Speakers</div>
            </div>
            <div className="h-8 w-px bg-border hidden md:block" />
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-display font-bold text-gradient-gold">1</div>
              <div className="text-sm text-muted-foreground mt-1">Day of Impact</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
