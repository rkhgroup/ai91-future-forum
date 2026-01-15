import { TrendingUp, Users, Brain } from "lucide-react";

const ChallengesSection = () => {
  return (
    <section id="challenges" className="relative py-24 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-gradient-gold">Challenges</span> Facing
            <br />
            Education Leaders
          </h2>
        </div>

        {/* Main Stat Card */}
        <div className="premium-card p-8 md:p-16 text-center mb-12 relative overflow-hidden">
          {/* Decorative background */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5" />
          
          <div className="relative z-10">
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
              {/* Main Number */}
              <div className="flex-1">
                <div className="number-highlight text-6xl md:text-8xl lg:text-9xl mb-4">
                  800M
                </div>
                <div className="text-xl md:text-2xl text-foreground font-display font-medium">
                  people worldwide
                </div>
              </div>

              {/* Divider */}
              <div className="w-full md:w-px h-px md:h-32 bg-gradient-to-r md:bg-gradient-to-b from-transparent via-primary/50 to-transparent" />

              {/* Secondary Stat */}
              <div className="flex-1">
                <div className="number-highlight text-5xl md:text-7xl lg:text-8xl mb-4">
                  60%
                </div>
                <div className="text-xl md:text-2xl text-foreground font-display font-medium">
                  are children under 24
                </div>
              </div>
            </div>

            {/* Context */}
            <div className="mt-12 max-w-2xl mx-auto">
              <p className="text-lg text-muted-foreground flex items-center justify-center gap-3">
                <Brain className="w-6 h-6 text-primary" />
                Using ChatGPT for learning and problem-solving tasks
              </p>
            </div>
          </div>
        </div>

        {/* Supporting Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="premium-card p-6 text-center hover-lift">
            <TrendingUp className="w-8 h-8 text-primary mx-auto mb-4" />
            <div className="number-highlight text-3xl md:text-4xl mb-2">2x</div>
            <p className="text-sm text-muted-foreground">Growth in AI adoption annually</p>
          </div>
          <div className="premium-card p-6 text-center hover-lift">
            <Users className="w-8 h-8 text-primary mx-auto mb-4" />
            <div className="number-highlight text-3xl md:text-4xl mb-2">90%</div>
            <p className="text-sm text-muted-foreground">Of students use AI tools weekly</p>
          </div>
          <div className="premium-card p-6 text-center hover-lift">
            <Brain className="w-8 h-8 text-primary mx-auto mb-4" />
            <div className="number-highlight text-3xl md:text-4xl mb-2">5 yrs</div>
            <p className="text-sm text-muted-foreground">Until traditional methods become obsolete</p>
          </div>
        </div>
      </div>

      {/* Section divider */}
      <div className="section-divider mt-24" />
    </section>
  );
};

export default ChallengesSection;
