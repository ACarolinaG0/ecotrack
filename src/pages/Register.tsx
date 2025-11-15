import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Trash2, Droplet, Zap, Camera } from "lucide-react";
import { useState } from "react";

const Register = () => {
  const [selected, setSelected] = useState<string | null>(null);

  const types = [
    { id: "organic", name: "Orgânico", icon: Trash2, points: 10, color: "bg-green-500/10 text-green-500 border-green-500" },
    { id: "recyclable", name: "Reciclável", icon: Droplet, points: 15, color: "bg-blue-500/10 text-blue-500 border-blue-500" },
    { id: "waste", name: "Rejeito", icon: Zap, points: 5, color: "bg-orange-500/10 text-orange-500 border-orange-500" },
  ];

  return (
    <div className="p-6 pb-24 space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-foreground">Registrar Descarte</h1>
        <p className="text-muted-foreground">Selecione o tipo de resíduo e ganhe pontos</p>
      </div>

      {/* Type selection */}
      <div className="space-y-3">
        {types.map((type) => {
          const Icon = type.icon;
          const isSelected = selected === type.id;
          
          return (
            <Card
              key={type.id}
              className={`p-4 cursor-pointer transition-all border-2 ${
                isSelected ? type.color : "border-border"
              }`}
              onClick={() => setSelected(type.id)}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className={`p-3 rounded-lg ${type.color}`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-semibold">{type.name}</p>
                    <p className="text-sm text-muted-foreground">+{type.points} pontos</p>
                  </div>
                </div>
                <div className={`h-5 w-5 rounded-full border-2 ${
                  isSelected ? type.color : "border-border"
                } flex items-center justify-center`}>
                  {isSelected && <div className="h-3 w-3 rounded-full bg-current" />}
                </div>
              </div>
            </Card>
          );
        })}
      </div>

      {/* Photo section */}
      <Card className="p-6 text-center space-y-4">
        <div className="mx-auto w-16 h-16 rounded-full bg-muted flex items-center justify-center">
          <Camera className="h-8 w-8 text-muted-foreground" />
        </div>
        <div>
          <p className="font-semibold">Tire uma foto (opcional)</p>
          <p className="text-sm text-muted-foreground">
            Ajude a validar seu descarte correto
          </p>
        </div>
        <Button variant="outline" className="w-full">
          Adicionar foto
        </Button>
      </Card>

      {/* Submit */}
      <Button 
        className="w-full" 
        size="lg"
        disabled={!selected}
      >
        Registrar Descarte
      </Button>

      {/* Tips */}
      <Card className="p-4 bg-primary/5 border-primary/20">
        <p className="text-sm font-semibold text-primary mb-2">💡 Dica</p>
        <p className="text-sm text-muted-foreground">
          Lave as embalagens recicláveis antes de descartar para aumentar sua pontuação!
        </p>
      </Card>
    </div>
  );
};

export default Register;
