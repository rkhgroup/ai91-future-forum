import { Linkedin, Twitter } from "lucide-react";

const SpeakersSection = () => {
  const speakers = [
    {
      name: "Dr. Aigerim Suleimenova",
      role: "Ministry of Education, Kazakhstan",
      expertise: "Education Policy",
    },
    {
      name: "Prof. Michael Chen",
      role: "Stanford AI Lab",
      expertise: "AI in Learning",
    },
    {
      name: "Saule Nazarbayeva",
      role: "Founder, EduTech KZ",
      expertise: "EdTech Innovation",
    },
    {
      name: "Dr. James Morrison",
      role: "UNESCO Education Sector",
      expertise: "Global Education",
    },
    {
      name: "Aida Karimova",
      role: "School Principal, Almaty",
      expertise: "School Leadership",
    },
    {
      name: "Prof. Elena Volkova",
      role: "Moscow State University",
      expertise: "Pedagogy Research",
    },
  ];

  return (
    <section id="speakers" className="relative py-24 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-gradient-gold">Expected</span> Speakers
          </h2>
          <p className="text-lg text-muted-foreground">
            World-class experts shaping the future of AI in education
          </p>
        </div>

        {/* Speakers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {speakers.map((speaker, index) => (
            <div
              key={index}
              className="premium-card p-6 hover-lift group"
            >
              {/* Avatar Placeholder */}
              <div className="relative w-24 h-24 mx-auto mb-6">
                <div className="w-full h-full rounded-full bg-gradient-to-br from-primary/30 to-primary/10 flex items-center justify-center">
                  <span className="text-3xl font-display font-bold text-primary">
                    {speaker.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                {/* Glow effect */}
                <div className="absolute inset-0 rounded-full bg-primary/20 blur-xl opacity-0 group-hover:opacity-50 transition-opacity" />
              </div>

              {/* Info */}
              <div className="text-center">
                <h3 className="font-display text-lg font-semibold text-gradient-gold mb-1">
                  {speaker.name}
                </h3>
                <p className="text-sm text-foreground mb-2">{speaker.role}</p>
                <p className="text-xs text-muted-foreground mb-4">{speaker.expertise}</p>

                {/* Social Links */}
                <div className="flex items-center justify-center gap-3">
                  <button className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center hover:bg-primary/20 transition-colors">
                    <Linkedin className="w-4 h-4 text-muted-foreground" />
                  </button>
                  <button className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center hover:bg-primary/20 transition-colors">
                    <Twitter className="w-4 h-4 text-muted-foreground" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* More speakers coming */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground">
            And many more speakers to be announced...
          </p>
        </div>
      </div>

      {/* Section divider */}
      <div className="section-divider mt-24" />
    </section>
  );
};

export default SpeakersSection;
