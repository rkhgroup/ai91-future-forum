import { TrendingUp, Users, Brain, Sparkles } from "lucide-react";

const ChallengesSection = () => {
  return (
    <section id="challenges" className="relative py-24 md:py-32">
      {/* Subtle background accent for depth (official, minimal) */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute right-[-120px] top-12 w-[520px] h-[520px] rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute left-[-140px] bottom-0 w-[560px] h-[560px] rounded-full bg-accent/5 blur-3xl" />
      </div>

      <div className="relative z-10 container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">

          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-gradient-gold">Вызовы</span> перед
            <br />
            лидерами образования
          </h2>

          <p className="text-lg text-muted-foreground leading-relaxed">
            Темпы внедрения ИИ растут быстрее, чем успевают обновляться процессы управления,
            учебные модели и подходы к оцениванию. Школам нужны понятные решения и управленческие
            ориентиры.
          </p>
        </div>

        {/* Main Stat Card */}
        <div className="premium-card p-8 md:p-14 text-center mb-12 relative overflow-hidden">
          {/* Decorative background */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/6 via-transparent to-accent/6" />

          {/* subtle inner border for crispness */}
          <div className="absolute inset-0 pointer-events-none ring-1 ring-primary/10" />

          <div className="relative z-10">
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-14">
              {/* Main Number */}
              <div className="flex-1">
                <div className="font-extrabold text-accent text-6xl md:text-8xl lg:text-9xl mb-3 tracking-tight">
                  800М
                </div>
                <div className="text-lg md:text-xl text-foreground font-display font-semibold">
                  человек используют ChatGPT
                </div>
                <div className="mt-2 text-sm text-muted-foreground">
                  По данным открытых источников и оценок рынка
                </div>
              </div>

              {/* Divider */}
              <div className="w-full md:w-px h-px md:h-28 bg-gradient-to-r md:bg-gradient-to-b from-transparent via-primary/35 to-transparent" />

              {/* Secondary Stat */}
              <div className="flex-1">
                <div className="font-extrabold text-accent text-6xl md:text-8xl lg:text-9xl mb-3 tracking-tight">
                  60%
                </div>
                <div className="text-lg md:text-xl text-foreground font-display font-semibold">
                  из них — молодёжь до 24 лет
                </div>
                <div className="mt-2 text-sm text-muted-foreground">
                  Самая активная аудитория — учащиеся и студенты
                </div>
              </div>
            </div>

            {/* Context */}
            <div className="mt-10 max-w-2xl mx-auto">
              <div className="inline-flex items-center justify-center gap-3 rounded-full bg-secondary px-5 py-3 border border-border">
                <Brain className="w-5 h-5 text-primary" />
                <p className="text-sm md:text-base text-foreground/90">
                  Использование ИИ в обучении и повседневных задачах становится нормой
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Supporting Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="premium-card p-6 text-center hover-lift">
            <TrendingUp className="w-8 h-8 text-primary mx-auto mb-4" />
            <div className="font-extrabold text-accent text-3xl md:text-4xl mb-2 tracking-tight">
              2×
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Ежегодный рост внедрения ИИ-инструментов
            </p>
          </div>

          <div className="premium-card p-6 text-center hover-lift">
            <Users className="w-8 h-8 text-primary mx-auto mb-4" />
            <div className="font-extrabold text-accent text-3xl md:text-4xl mb-2 tracking-tight">
              90%
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Учащихся регулярно используют инструменты искусственного интеллекта
            </p>
          </div>

          <div className="premium-card p-6 text-center hover-lift">
            <Brain className="w-8 h-8 text-primary mx-auto mb-4" />
            <div className="font-extrabold text-accent text-3xl md:text-4xl mb-2 tracking-tight">
              5 лет
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              До масштабного обновления подходов к оцениванию и учебным моделям
            </p>
          </div>
        </div>
      </div>

      {/* Section divider */}
      <div className="section-divider mt-24" />
    </section>
  );
};

export default ChallengesSection;
