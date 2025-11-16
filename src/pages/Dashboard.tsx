import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Trash2, Droplet, Zap } from "lucide-react";
import ecotrackLogo from "@/assets/ecotrack-logo.png";

const Dashboard = () => {
  const containers = [
    { id: 1, name: "Orgânico", level: 75, icon: Trash2, color: "text-green-500" },
    { id: 2, name: "Reciclável", level: 45, icon: Droplet, color: "text-blue-500" },
    { id: 3, name: "Rejeito", level: 90, icon: Zap, color: "text-orange-500" },
  ];

  return (
    <div className="p-6 pb-24 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <img src={ecotrackLogo} alt="EcoTrack" className="h-8" />
        <div className="text-right">
          <p className="text-xs text-muted-foreground">Seus pontos</p>
          <p className="text-2xl font-bold text-primary">1.247</p>
        </div>
      </div>

      {/* Welcome */}
      <div>
        <h1 className="text-2xl font-bold text-foreground">Olá, Ana! 👋</h1>
        <p className="text-muted-foreground">Status dos containers em tempo real</p>
      </div>

      {/* Containers */}
      <div className="space-y-4">
        {containers.map((container) => {
          const Icon = container.icon;
          const isHigh = container.level >= 75;
          
          return (
            <Card key={container.id} className="p-4 space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-lg bg-muted ${container.color}`}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-semibold">{container.name}</p>
                    <p className="text-xs text-muted-foreground">
                      {isHigh ? "Coleta recomendada" : "Nível normal"}
                    </p>
                  </div>
                </div>
                <span className="text-2xl font-bold">{container.level}%</span>
              </div>
              <Progress value={container.level} className="h-2" />
            </Card>
          );
        })}
      </div>

      {/* Quick stats */}
      <Card className="p-4">
        <h3 className="font-semibold mb-3">Estatísticas da semana</h3>
        <div className="grid grid-cols-3 gap-4 text-center">
          <div>
            <p className="text-2xl font-bold text-primary">12</p>
            <p className="text-xs text-muted-foreground">Descartes</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-secondary">3.2kg</p>
            <p className="text-xs text-muted-foreground">Reciclados</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-accent">85</p>
            <p className="text-xs text-muted-foreground">Pontos</p>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Dashboard;
