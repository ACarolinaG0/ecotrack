import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Medal, Award } from "lucide-react";

const Ranking = () => {
  const rankings = [
    { id: 1, name: "João Silva", apt: "301", points: 2450, position: 1 },
    { id: 2, name: "Maria Santos", apt: "205", points: 1890, position: 2 },
    { id: 3, name: "Pedro Costa", apt: "102", points: 1650, position: 3 },
    { id: 4, name: "Ana Carolina", apt: "404", points: 1247, position: 4, isCurrentUser: true },
    { id: 5, name: "Carlos Lima", apt: "203", points: 1120, position: 5 },
    { id: 6, name: "Julia Mendes", apt: "501", points: 980, position: 6 },
  ];

  const getIcon = (position: number) => {
    switch (position) {
      case 1: return Trophy;
      case 2: return Medal;
      case 3: return Award;
      default: return null;
    }
  };

  const getColor = (position: number) => {
    switch (position) {
      case 1: return "text-yellow-500";
      case 2: return "text-gray-400";
      case 3: return "text-orange-500";
      default: return "text-muted-foreground";
    }
  };

  return (
    <div className="p-6 pb-24 space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-foreground">Ranking</h1>
        <p className="text-muted-foreground">Top moradores do condomínio</p>
      </div>

      {/* Current position highlight */}
      <Card className="p-4 bg-primary/10 border-primary">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-muted-foreground">Sua posição</p>
            <p className="text-3xl font-bold text-primary">#4</p>
          </div>
          <div className="text-right">
            <p className="text-sm text-muted-foreground">Seus pontos</p>
            <p className="text-2xl font-bold">1.247</p>
          </div>
        </div>
      </Card>

      {/* Rankings list */}
      <div className="space-y-3">
        {rankings.map((user) => {
          const Icon = getIcon(user.position);
          const color = getColor(user.position);
          
          return (
            <Card
              key={user.id}
              className={`p-4 ${
                user.isCurrentUser ? "border-2 border-primary bg-primary/5" : ""
              }`}
            >
              <div className="flex items-center gap-4">
                {/* Position */}
                <div className="flex items-center justify-center w-12">
                  {Icon ? (
                    <Icon className={`h-8 w-8 ${color}`} />
                  ) : (
                    <span className="text-2xl font-bold text-muted-foreground">
                      {user.position}
                    </span>
                  )}
                </div>

                {/* Avatar */}
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold">
                  {user.name.split(" ").map(n => n[0]).join("")}
                </div>

                {/* Info */}
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <p className="font-semibold">{user.name}</p>
                    {user.isCurrentUser && (
                      <Badge variant="secondary" className="text-xs">Você</Badge>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground">Apto {user.apt}</p>
                </div>

                {/* Points */}
                <div className="text-right">
                  <p className="text-xl font-bold text-primary">{user.points}</p>
                  <p className="text-xs text-muted-foreground">pontos</p>
                </div>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default Ranking;
