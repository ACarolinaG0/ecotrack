import { Card } from "@/components/ui/card";
import { DollarSign, Users, Activity } from "lucide-react";

const benefits = [
  {
    icon: DollarSign,
    title: "Redução de custos",
    description: "Otimize a coleta de resíduos e reduza gastos em até 75% com rotas inteligentes e coletas sob demanda.",
    stat: "75%",
    statLabel: "economia média",
  },
  {
    icon: Users,
    title: "Mais engajamento",
    description: "Gamificação e recompensas criam uma cultura de sustentabilidade entre os moradores do condomínio.",
    stat: "90%",
    statLabel: "participação",
  },
  {
    icon: Activity,
    title: "Dados em tempo real",
    description: "Dashboard completo com métricas, alertas e relatórios para tomada de decisão baseada em dados.",
    stat: "24/7",
    statLabel: "monitoramento",
  },
];

const Benefits = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Benefícios para condomínios
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Transforme a gestão de resíduos em vantagem competitiva
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            
            return (
              <Card 
                key={index}
                className="p-8 space-y-6 border-2 hover:border-primary/50 transition-all hover:shadow-xl group bg-card"
              >
                <div className="flex items-start justify-between">
                  <div className="p-4 rounded-2xl bg-primary/10 group-hover:bg-primary group-hover:scale-110 transition-all">
                    <Icon className="h-8 w-8 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  
                  <div className="text-right">
                    <p className="text-3xl font-bold text-primary">
                      {benefit.stat}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {benefit.statLabel}
                    </p>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <h3 className="text-2xl font-bold text-foreground">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
