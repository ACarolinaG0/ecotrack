import { useState } from "react";
import { Card } from "@/components/ui/card";
import phoneDashboard from "@/assets/phone-dashboard.png";
import phoneRegister from "@/assets/phone-register.png";
import phoneRanking from "@/assets/phone-ranking.png";
import phoneRewards from "@/assets/phone-rewards.png";
import { BarChart3, Recycle, Trophy, Gift } from "lucide-react";

const screens = [
  {
    id: "dashboard",
    title: "Dashboard",
    description: "Monitore o status dos containers em tempo real",
    image: phoneDashboard,
    icon: BarChart3,
  },
  {
    id: "register",
    title: "Registrar Descarte",
    description: "Registre seus descartes e ganhe pontos",
    image: phoneRegister,
    icon: Recycle,
  },
  {
    id: "ranking",
    title: "Ranking de Moradores",
    description: "Veja sua posição no ranking do condomínio",
    image: phoneRanking,
    icon: Trophy,
  },
  {
    id: "rewards",
    title: "Pontos e Recompensas",
    description: "Troque seus pontos por recompensas",
    image: phoneRewards,
    icon: Gift,
  },
];

const AppShowcase = () => {
  const [activeScreen, setActiveScreen] = useState(0);

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Explore o app
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Descubra todas as funcionalidades que tornam a gestão de resíduos simples e divertida
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left - Phone display */}
          <div className="flex justify-center lg:justify-end order-2 lg:order-1">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-[3rem] blur-2xl" />
              <div className="relative bg-foreground rounded-[3rem] p-3 shadow-2xl transition-transform duration-500 hover:scale-105">
                <div className="bg-background rounded-[2.5rem] overflow-hidden">
                  <img 
                    src={screens[activeScreen].image} 
                    alt={screens[activeScreen].title}
                    className="w-full h-auto transition-opacity duration-300"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right - Feature cards */}
          <div className="space-y-4 order-1 lg:order-2">
            {screens.map((screen, index) => {
              const Icon = screen.icon;
              const isActive = activeScreen === index;
              
              return (
                <Card
                  key={screen.id}
                  className={`p-6 cursor-pointer transition-all duration-300 border-2 ${
                    isActive 
                      ? "bg-primary text-primary-foreground border-primary shadow-lg scale-105" 
                      : "bg-card border-border hover:border-primary/50 hover:shadow-md"
                  }`}
                  onClick={() => setActiveScreen(index)}
                >
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-xl ${
                      isActive ? "bg-primary-foreground/20" : "bg-primary/10"
                    }`}>
                      <Icon className={`h-6 w-6 ${
                        isActive ? "text-primary-foreground" : "text-primary"
                      }`} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-2">
                        {screen.title}
                      </h3>
                      <p className={isActive ? "opacity-90" : "text-muted-foreground"}>
                        {screen.description}
                      </p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppShowcase;
