import { Linkedin } from "lucide-react";

const SpeakersSection = () => {
  const speakers = [
    {
      name: "Ростилав Коняшкин",
      role: "Первый вице-министр искусственного интеллекта и цифрового развития РК",
      photo: `${import.meta.env.BASE_URL}speakers/rostislav.jpg`,
    },
    {
      name: "Асылбек Ахметжанов",
      role: "Вице министр просвещения РК ",
      photo: `${import.meta.env.BASE_URL}speakers/asylbek.jpg`,
    },
    {
      name: "Ышыл Бой Эргюль",
      role: "Основатель Teacher X",
      photo: `${import.meta.env.BASE_URL}speakers/yshyl.jpg`,
    },
    {
      name: "Александр Гулин",
      role: "Директор частной школы «Снегири»",
      photo: `${import.meta.env.BASE_URL}speakers/alex.jpg`,
    },
    {
      name: "Павел Северинец",
      role: "Директор московской частной школы «Хорошкола»",
      photo: `${import.meta.env.BASE_URL}speakers/pavel.jpg`,
    },
    {
      name: "Андрей Комиссаров",
      role: "Директор по искусственному интеллекту корпорации «Синергия»",
      photo: `${import.meta.env.BASE_URL}speakers/andrey.jpg`,
    },
    {
      name: "Нурлан Киясов",
      role: "Основатель образовательной платформы Amansultan",
      photo: `${import.meta.env.BASE_URL}speakers/nurlan.jpeg`,
    },
    {
      name: "Айдын Мауытхан",
      role: "Основатель компании NEO AI и специалист по нейросетям",
      photo: `${import.meta.env.BASE_URL}speakers/aidyn.jpeg`,
    },
    {
      name: "Ескендир Бестай",
      role: "Тренер-педагог",
      photo: `${import.meta.env.BASE_URL}speakers/eskendir.jpg`,
    },
    {
      name: "Арсен Байтуков",
      role: "Эксперт в образовании",
      photo: `${import.meta.env.BASE_URL}speakers/arsen.jpg`,
    },
  ];

  return (
    <section id="speakers" className="relative py-24 md:py-32">
      {/* Background accent */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[900px] h-[420px] bg-primary/5 blur-3xl rounded-full" />
      </div>

      <div className="relative z-10 container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14 md:mb-18">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-foreground ring-1 ring-primary/15 mb-6">
            Экспертный состав форума
          </div>

          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-gradient-gold">Ожидаемые</span> спикеры
          </h2>

          <p className="text-lg text-muted-foreground leading-relaxed">
            Руководители, исследователи и практики, формирующие подходы к управлению и внедрению
            искусственного интеллекта в образовании
          </p>
        </div>

        {/* Speakers Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {speakers.map((speaker, index) => (
            <div key={index} className="premium-card p-5 text-left hover-lift group">
              {/* Photo */}
              <div className="relative mb-4 overflow-hidden rounded-xl border border-border bg-secondary ring-1 ring-primary/10">
                {/* Portrait ratio for speaker photos */}
                <div className="aspect-[3/4] w-full max-w-[260px] mx-auto">
                  <img
                    src={speaker.photo}
                    alt={speaker.name}
                    loading="lazy"
                    className="h-full w-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                      const fallback = e.currentTarget.nextElementSibling as HTMLElement | null;
                      if (fallback) fallback.style.display = "flex";
                    }}
                  />

                  {/* Placeholder — hidden by default, shows only if image fails */}
                  <div
                    className="absolute inset-0 items-center justify-center"
                    style={{ display: "none" }}
                  >
                    <span className="text-3xl font-display font-bold text-primary/60">
                      {speaker.name
                        .split(" ")
                        .map((n) => n[0])
                        .slice(0, 2)
                        .join("")}
                    </span>
                  </div>
                </div>
              </div>

              {/* Info */}
              <h3 className="font-display text-base font-semibold text-foreground leading-snug">
                {speaker.name}
              </h3>

              <p className="text-xs text-foreground/80 leading-relaxed mt-1">
                {speaker.role}
              </p>

              {!!speaker.expertise && (
                <p className="text-xs text-muted-foreground mt-2">{speaker.expertise}</p>
              )}
            </div>
          ))}
        </div>

        {/* Note */}
        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground">Список спикеров будет дополняться</p>
        </div>
      </div>

      {/* Section divider */}
      <div className="section-divider mt-24" />
    </section>
  );
};

export default SpeakersSection;
