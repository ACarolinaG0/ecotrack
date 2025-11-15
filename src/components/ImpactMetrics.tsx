import { Card } from "@/components/ui/card";
import { Leaf, Recycle, TreePine, Droplets } from "lucide-react";

const metrics = [
  {
    icon: Recycle,
    value: "2.5 ton",
    label: "Resíduos reciclados",
    color: "text-secondary",
    bgColor: "bg-secondary/10",
  },
  {
    icon: Leaf,
    value: "850 kg",
    label: "CO₂ evitado",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    icon: TreePine,
    value: "45",
    label: "Árvores equivalentes",
    color: "text-accent",
    bgColor: "bg-accent/10",
  },
  {
    icon: Droplets,
    value: "12.4k L",
    label: "Água economizada",
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
  },
];

const ImpactMetrics = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Impacto ambiental
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Veja o impacto real que estamos causando no meio ambiente
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {metrics.map((metric, index) => {
            const Icon = metric.icon;
            
            return (
              <Card 
                key={index}
                className="p-6 text-center space-y-4 border-2 hover:border-primary/50 transition-all hover:shadow-lg group"
              >
                <div className="flex justify-center">
                  <div className={`p-4 rounded-2xl ${metric.bgColor} group-hover:scale-110 transition-transform`}>
                    <Icon className={`h-10 w-10 ${metric.color}`} />
                  </div>
                </div>
                
                <div className="space-y-1">
                  <p className={`text-3xl font-bold ${metric.color}`}>
                    {metric.value}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {metric.label}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground">
            Dados acumulados nos últimos 30 dias • Atualizado em tempo real
          </p>
        </div>
      </div>
    </section>
  );
};

export default ImpactMetrics;
