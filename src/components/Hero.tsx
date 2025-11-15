import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import ecotrackLogo from "@/assets/ecotrack-logo.png";
import phoneDashboard from "@/assets/phone-dashboard.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-muted via-background to-accent/10">
      {/* Decorative blobs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-secondary/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8 animate-fade-in">
            <img 
              src={ecotrackLogo} 
              alt="EcoTrack" 
              className="h-20 w-auto"
            />
            
            <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight">
              Gestão inteligente de resíduos para{" "}
              <span className="text-primary">condomínios</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              O EcoTrack usa sensores IoT e gamificação para engajar moradores, 
              reduzir custos e tornar seu condomínio mais sustentável.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 shadow-lg hover:shadow-xl transition-all"
              >
                Ver app em ação
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              
              <Button 
                size="lg" 
                variant="outline"
                className="rounded-full px-8 border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all"
              >
                Saiba mais
              </Button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="space-y-1">
                <p className="text-3xl font-bold text-primary">75%</p>
                <p className="text-sm text-muted-foreground">Redução de custos</p>
              </div>
              <div className="space-y-1">
                <p className="text-3xl font-bold text-secondary">90%</p>
                <p className="text-sm text-muted-foreground">Engajamento</p>
              </div>
              <div className="space-y-1">
                <p className="text-3xl font-bold text-accent">24/7</p>
                <p className="text-sm text-muted-foreground">Monitoramento</p>
              </div>
            </div>
          </div>
          
          {/* Right content - Phone mockup */}
          <div className="relative flex justify-center lg:justify-end animate-slide-in-right">
            <div className="relative">
              {/* Phone frame shadow */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-[3rem] blur-2xl transform scale-95" />
              
              {/* Phone mockup */}
              <div className="relative bg-foreground rounded-[3rem] p-3 shadow-2xl animate-float">
                <div className="bg-background rounded-[2.5rem] overflow-hidden">
                  <img 
                    src={phoneDashboard} 
                    alt="EcoTrack Dashboard" 
                    className="w-full h-auto"
                  />
                </div>
              </div>
              
              {/* Floating badge */}
              <div className="absolute -right-8 top-20 bg-secondary text-secondary-foreground rounded-2xl px-6 py-3 shadow-xl animate-fade-in">
                <p className="text-sm font-semibold">IoT em tempo real</p>
              </div>
              
              <div className="absolute -left-8 bottom-32 bg-accent text-accent-foreground rounded-2xl px-6 py-3 shadow-xl animate-fade-in" style={{ animationDelay: "0.3s" }}>
                <p className="text-sm font-semibold">+1000 pts hoje</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
