import ecotrackLogo from "@/assets/ecotrack-logo.png";
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <img 
              src={ecotrackLogo} 
              alt="EcoTrack" 
              className="h-12 w-auto brightness-0 invert"
            />
            <p className="text-sm text-background/80">
              Gestão inteligente de resíduos para um futuro mais sustentável.
            </p>
          </div>

          {/* Product */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg">Produto</h3>
            <ul className="space-y-2 text-sm text-background/80">
              <li><a href="#" className="hover:text-secondary transition-colors">Funcionalidades</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Preços</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Casos de uso</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Demo</a></li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg">Empresa</h3>
            <ul className="space-y-2 text-sm text-background/80">
              <li><a href="#" className="hover:text-secondary transition-colors">Sobre nós</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Carreiras</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Contato</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg">Contato</h3>
            <ul className="space-y-3 text-sm text-background/80">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <a href="mailto:contato@ecotrack.com.br" className="hover:text-secondary transition-colors">
                  contato@ecotrack.com.br
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <a href="tel:+551140028922" className="hover:text-secondary transition-colors">
                  (11) 4002-8922
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-1" />
                <span>São Paulo, SP</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-background/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-background/60">
            © 2025 EcoTrack. Todos os direitos reservados.
          </p>
          
          <div className="flex items-center gap-4">
            <a href="#" className="text-background/60 hover:text-secondary transition-colors">
              <Facebook className="h-5 w-5" />
            </a>
            <a href="#" className="text-background/60 hover:text-secondary transition-colors">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="#" className="text-background/60 hover:text-secondary transition-colors">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="#" className="text-background/60 hover:text-secondary transition-colors">
              <Twitter className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
