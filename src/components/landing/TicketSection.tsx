import { Button } from "@/components/ui/button";
import { Check, ArrowRight, Sparkles, AlertCircle } from "lucide-react";

const TicketSection = () => {
  const benefits = [
    "Полный доступ ко всем мероприятиям форума",
    "Участие во всех ключевых сессиях",
    "Панельные дискуссии с экспертами",
    "Возможности профессионального нетворкинга",
    "Материалы и ресурсы форума",
    "Именной сертификат участника",
  ];

  return (
    <section id="tickets" className="relative py-24 md:py-32">
      {/* Subtle background accent */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[720px] h-[360px] bg-primary/5 blur-3xl rounded-full" />
      </div>

      <div className="relative z-10 container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14 md:mb-16">

          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Участвовать в <span className="text-gradient-gold">AI91</span>
          </h2>

          <p className="text-lg text-muted-foreground leading-relaxed">
            Забронируйте место на Республиканском форуме для лидеров образования
            и получите практические инструменты внедрения ИИ в школе
          </p>
        </div>

        {/* Ticket Card */}
        <div className="max-w-lg mx-auto">
          <div className="premium-card p-8 md:p-10 relative overflow-hidden">
            {/* Background glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/5" />
            <div className="absolute inset-0 ring-1 ring-primary/10 pointer-events-none" />

            {/* Content */}
            <div className="relative z-10">
              {/* Date / Location */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 mb-6 text-sm font-semibold text-foreground">
                18 февраля 2026 • Астана
              </div>

              {/* Price */}
              <div className="mb-6">
                <div className="flex items-end gap-2 mb-1">
                  <span className="text-5xl md:text-6xl font-display font-extrabold text-gradient-gold">
                    30 000
                  </span>
                  <span className="text-xl text-muted-foreground mb-2">KZT</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Единовременный платеж • Полный доступ
                </p>
              </div>

              {/* Availability note (scarcity, but official) */}
              <div className="flex items-start gap-3 rounded-xl bg-secondary px-4 py-3 mb-6 border border-border">
                <AlertCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <p className="text-sm text-foreground/90 leading-relaxed">
                  Количество билетов ограничено. Регистрация будет закрыта
                  при достижении лимита участников.
                </p>
              </div>

              {/* Benefits */}
              <ul className="space-y-3 mb-8">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-sm text-foreground leading-relaxed">
                      {benefit}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Button variant="gold" size="xl" className="w-full group">
                Зарегистрироваться
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>

              {/* Trust / payment note */}
              <p className="text-center text-xs text-muted-foreground mt-4">
                Безопасная оплата • Мгновенное подтверждение участия
              </p>
            </div>
          </div>
        </div>

        {/* Additional info */}
        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground">
            Остались вопросы? Свяжитесь с нами по адресу{" "}
            <a
              href="mailto:info@ai91.kz"
              className="text-primary font-medium hover:underline"
            >
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
