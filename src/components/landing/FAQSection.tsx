import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "Who is this forum for?",
      answer: "AI91 is designed for school principals, education administrators, government officials, EdTech developers, teachers, and anyone passionate about transforming education through AI. Whether you're an educator looking to adapt to new technologies or a policymaker shaping the future of learning, this forum is for you.",
    },
    {
      question: "When and where will it take place?",
      answer: "The forum will be held in Astana, Kazakhstan. The exact date and venue will be announced soon. Stay tuned for updates on our website and social media channels.",
    },
    {
      question: "How can I pay for tickets?",
      answer: "We accept various payment methods including credit/debit cards, bank transfers, and popular local payment systems. All payments are processed securely through our trusted payment partners.",
    },
    {
      question: "Will participants receive a certificate?",
      answer: "Yes! All registered participants who attend the forum will receive an official certificate of attendance that can be used for professional development credits.",
    },
    {
      question: "Is online attendance available?",
      answer: "We are exploring options for virtual participation. Priority is given to in-person attendees, but stay tuned for announcements about potential livestream access.",
    },
    {
      question: "Can I get a refund if I can't attend?",
      answer: "Refunds are available up to 14 days before the event. After that, tickets can be transferred to another attendee. Please contact our support team for assistance.",
    },
  ];

  return (
    <section id="faq" className="relative py-24 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Frequently Asked{" "}
            <span className="text-gradient-gold">Questions</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Everything you need to know about AI91
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="premium-card px-6 border-none"
              >
                <AccordionTrigger className="text-left font-display text-lg font-medium text-foreground hover:text-primary hover:no-underline py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>

      {/* Section divider */}
      <div className="section-divider mt-24" />
    </section>
  );
};

export default FAQSection;
