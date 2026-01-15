import { Cpu, Target, BookOpen, GraduationCap, RefreshCw, Users } from "lucide-react";

const SolutionsSection = () => {
  const solutions = [
    {
      icon: Cpu,
      title: "AI as the Next Stage of Education",
      description: "After the printing press and computers, artificial intelligence opens a new chapter in school education.",
    },
    {
      icon: Target,
      title: "Shift in Educational Priorities",
      description: "Children will no longer live in a world where knowing is key, but in a world where thinking, managing, and choosing matter most.",
    },
    {
      icon: BookOpen,
      title: "Obsolescence of Traditional Assignments",
      description: "When AI solves tasks faster than students, the task no longer develops learning.",
    },
    {
      icon: GraduationCap,
      title: "Rethinking Pedagogy",
      description: "Kazakhstan's schools must rethink how teaching and learning are designed.",
    },
    {
      icon: RefreshCw,
      title: "Updating Educational Programs",
      description: "If schools do not update curricula, AI will make them meaningless for children—preparing them for a world that no longer exists.",
    },
    {
      icon: Users,
      title: "Reskilling Educators and Leaders",
      description: "The greatest threat to schools is not AI, but leaders and educators who try to learn the old way in a changed world.",
    },
  ];

  return (
    <section id="solutions" className="relative py-24 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            From <span className="text-gradient-gold">Challenges</span> to{" "}
            <span className="text-gradient-gold">Solutions</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Key transformations shaping the future of education
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="premium-card p-8 hover-lift group relative"
            >
              {/* Number indicator */}
              <div className="absolute top-6 right-6 text-5xl font-display font-bold text-primary/10 group-hover:text-primary/20 transition-colors">
                {String(index + 1).padStart(2, '0')}
              </div>
              
              {/* Icon */}
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <solution.icon className="w-7 h-7 text-primary" />
              </div>
              
              {/* Content */}
              <h3 className="font-display text-xl font-semibold text-foreground mb-3 pr-8">
                {solution.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {solution.description}
              </p>

              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-8 right-8 h-0.5 bg-gradient-to-r from-primary/50 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
      </div>

      {/* Section divider */}
      <div className="section-divider mt-24" />
    </section>
  );
};

export default SolutionsSection;
