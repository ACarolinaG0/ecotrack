import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import logo from "@/assets/ecotrack-logo.png";

interface LoginProps {
  onLogin: () => void;
}

const Login = ({ onLogin }: LoginProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulação de login - em produção, validar credenciais
    if (email && password) {
      onLogin();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center p-6">
      <Card className="w-full max-w-md p-8 space-y-6">
        <div className="text-center space-y-4">
          <img 
            src={logo} 
            alt="EcoTrack" 
            className="h-24 mx-auto"
          />
          <div>
            <h1 className="text-2xl font-bold text-foreground">Bem-vindo ao EcoTrack</h1>
            <p className="text-muted-foreground">Faça login para continuar</p>
          </div>
        </div>

        <form onSubmit={handleLogin} className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground">Email</label>
            <Input
              type="email"
              placeholder="seu@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground">Senha</label>
            <Input
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <Button type="submit" className="w-full" size="lg">
            Entrar
          </Button>
        </form>

        <div className="text-center text-sm text-muted-foreground">
          <p>Não tem uma conta? <span className="text-primary font-semibold cursor-pointer">Cadastre-se</span></p>
        </div>
      </Card>
    </div>
  );
};

export default Login;
