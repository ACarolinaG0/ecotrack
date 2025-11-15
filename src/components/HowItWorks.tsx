import { Card } from "@/components/ui/card";
import { Radio, Bell, Trophy } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Radio,
    title: "Sensores IoT monitoram",
    description: "Sensores inteligentes monitoram o nível de resíduos em tempo real, coletando dados precisos sobre cada container.",
    color: "primary",
  },
  {
    number: "02",
    icon: Bell,
    title: "App envia alertas",
    description: "O aplicativo envia notificações e dicas personalizadas para moradores e síndicos sobre o melhor momento para descarte.",
    color: "secondary",
  },
  {
    number: "03",
    icon: Trophy,
    title: "Moradores ganham pontos",
    description: "Cada descarte correto gera pontos que podem ser trocados por recompensas, criando um ranking do condomínio.",
    color: "accent",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Como funciona
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Um sistema simples e inteligente em três passos
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => {
            const Icon = step.icon;
            
            return (
              <div key={index} className="relative">
                {/* Connecting line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-16 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-primary/30 to-transparent" />
                )}
                
                <Card className="p-8 text-center space-y-6 border-2 hover:border-primary/50 transition-all hover:shadow-lg group">
                  {/* Number badge */}
                  <div className="inline-block px-4 py-2 bg-muted rounded-full text-sm font-bold text-muted-foreground">
                    {step.number}
                  </div>
                  
                  {/* Icon */}
                  <div className="flex justify-center">
                    <div className={`p-4 rounded-2xl bg-${step.color}/10 group-hover:scale-110 transition-transform`}>
                      <Icon className={`h-12 w-12 text-${step.color}`} />
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="space-y-3">
                    <h3 className="text-xl font-bold text-foreground">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
