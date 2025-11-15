import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Gift, ShoppingBag, Coffee, Ticket } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const Rewards = () => {
  const [userPoints, setUserPoints] = useState(1247);
  const [rewards, setRewards] = useState([
    { 
      id: 1, 
      name: "Vale Supermercado", 
      points: 500, 
      icon: ShoppingBag,
      description: "R$ 25 de desconto",
      available: true 
    },
    { 
      id: 2, 
      name: "Café no Térreo", 
      points: 150, 
      icon: Coffee,
      description: "1 café expresso grátis",
      available: true 
    },
    { 
      id: 3, 
      name: "Desconto Academia", 
      points: 1000, 
      icon: Ticket,
      description: "15% off mensalidade",
      available: true 
    },
    { 
      id: 4, 
      name: "Vale-presente", 
      points: 2000, 
      icon: Gift,
      description: "R$ 100 em compras",
      available: false 
    },
  ]);

  const handleRedeem = (reward: typeof rewards[0]) => {
    if (userPoints >= reward.points && reward.available) {
      setUserPoints(prev => prev - reward.points);
      toast.success(`${reward.name} resgatado com sucesso! 🎉`);
    }
  };

  return (
    <div className="p-6 pb-24 space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-foreground">Recompensas</h1>
        <p className="text-muted-foreground">Troque seus pontos por prêmios</p>
      </div>

      {/* Points balance */}
      <Card className="p-6 bg-gradient-to-br from-primary to-accent text-primary-foreground">
        <div className="text-center space-y-2">
          <p className="text-sm opacity-90">Saldo disponível</p>
          <p className="text-5xl font-bold">{userPoints.toLocaleString('pt-BR')}</p>
          <p className="text-sm opacity-90">pontos acumulados</p>
        </div>
      </Card>

      {/* Rewards grid */}
      <div className="space-y-4">
        {rewards.map((reward) => {
          const Icon = reward.icon;
          const canRedeem = reward.points <= userPoints && reward.available;
          
          return (
            <Card key={reward.id} className={`p-4 ${!reward.available ? "opacity-60" : ""}`}>
              <div className="flex gap-4">
                <div className={`p-3 rounded-xl ${
                  canRedeem ? "bg-primary/10 text-primary" : "bg-muted text-muted-foreground"
                }`}>
                  <Icon className="h-8 w-8" />
                </div>
                
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="font-semibold">{reward.name}</h3>
                      <p className="text-sm text-muted-foreground">{reward.description}</p>
                    </div>
                    {!reward.available && (
                      <Badge variant="secondary" className="text-xs">Em breve</Badge>
                    )}
                  </div>
                  
                  <div className="flex items-center justify-between mt-3">
                    <div className="flex items-center gap-2">
                      <Gift className="h-4 w-4 text-primary" />
                      <span className="text-sm font-semibold">{reward.points} pontos</span>
                    </div>
                    
                    <Button 
                      size="sm" 
                      disabled={!canRedeem}
                      variant={canRedeem ? "default" : "outline"}
                      onClick={() => handleRedeem(reward)}
                    >
                      {canRedeem ? "Resgatar" : "Pontos insuficientes"}
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          );
        })}
      </div>

      {/* Info card */}
      <Card className="p-4 bg-accent/10 border-accent/20">
        <p className="text-sm font-semibold text-accent mb-2">ℹ️ Como funciona</p>
        <p className="text-sm text-muted-foreground">
          Acumule pontos descartando corretamente e troque por recompensas exclusivas do condomínio!
        </p>
      </Card>
    </div>
  );
};

export default Rewards;
