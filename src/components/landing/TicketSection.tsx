import { Button } from "@/components/ui/button";
import { Check, ArrowRight, Sparkles } from "lucide-react";

const TicketSection = () => {
  const benefits = [
    "Full forum access",
    "All keynote sessions",
    "Panel discussions",
    "Networking opportunities",
    "Forum materials & resources",
    "Certificate of attendance",
  ];

  return (
    <section id="tickets" className="relative py-24 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Attend <span className="text-gradient-gold">AI91</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Secure your spot at Kazakhstan's premier education forum
          </p>
        </div>

        {/* Ticket Card */}
        <div className="max-w-lg mx-auto">
          <div className="premium-card p-8 md:p-10 relative overflow-hidden">
            {/* Background glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/5" />
            
            {/* Content */}
            <div className="relative z-10">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 mb-6">
                <Sparkles className="w-3 h-3 text-primary" />
                <span className="text-xs font-medium text-primary">Standard Pass</span>
              </div>

              {/* Price */}
              <div className="mb-8">
                <div className="flex items-end gap-2 mb-2">
                  <span className="text-5xl md:text-6xl font-display font-bold text-gradient-gold">30,000</span>
                  <span className="text-xl text-muted-foreground mb-2">KZT</span>
                </div>
                <p className="text-sm text-muted-foreground">One-time payment • Full access</p>
              </div>

              {/* Benefits */}
              <ul className="space-y-3 mb-8">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-sm text-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Button variant="gold" size="xl" className="w-full group">
                Buy a Ticket
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>

              {/* Secure payment note */}
              <p className="text-center text-xs text-muted-foreground mt-4">
                Secure payment • Instant confirmation
              </p>
            </div>
          </div>
        </div>

        {/* Additional info */}
        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground">
            Have questions? Contact us at{" "}
            <a href="mailto:info@ai91.kz" className="text-primary hover:underline">
              info@ai91.kz
            </a>
          </p>
        </div>
      </div>

      {/* Section divider */}
      <div className="section-divider mt-24" />
    </section>
  );
};

export default TicketSection;
