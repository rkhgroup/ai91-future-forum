import { Target, Users, Lightbulb, Globe } from "lucide-react";

const PurposeSection = () => {
  const features = [
    {
      icon: Target,
      title: "Strategic Vision",
      description: "Design a new teaching strategy for the AI era",
    },
    {
      icon: Users,
      title: "Expert Collaboration",
      description: "Connect with international and Kazakh education leaders",
    },
    {
      icon: Lightbulb,
      title: "Innovation Exchange",
      description: "Share proven AI-powered teaching methodologies",
    },
    {
      icon: Globe,
      title: "Global Impact",
      description: "Shape the future of education worldwide",
    },
  ];

  return (
    <section id="purpose" className="relative py-24 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-gradient-gold">Forum</span> Purpose
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            To bring together international and Kazakh experts, school principals, platform developers, 
            government officials, and education leaders to jointly rethink and design a new teaching strategy.
          </p>
        </div>

        {/* Main Content Card */}
        <div className="premium-card p-8 md:p-12 mb-12">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg md:text-xl text-foreground/90 leading-relaxed">
              <span className="text-gradient-gold font-semibold">AI91</span> is an annual platform for 
              experience exchange and the dissemination of proven AI-powered teaching methodologies worldwide. 
              We believe in the power of collaboration to transform how education serves the next generation.
            </p>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="premium-card p-6 hover-lift group"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Section divider */}
      <div className="section-divider mt-24" />
    </section>
  );
};

export default PurposeSection;
