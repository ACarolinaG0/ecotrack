import { ReactNode } from "react";
import logo from "@/assets/ecotrack-logo.png";

interface MobileLayoutProps {
  children: ReactNode;
}

const MobileLayout = ({ children }: MobileLayoutProps) => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      {/* Phone frame */}
      <div className="relative w-full max-w-[380px]">
        {/* Phone shadow/glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-[3rem] blur-2xl" />
        
        {/* Phone mockup */}
        <div className="relative bg-foreground rounded-[3rem] p-3 shadow-2xl">
          <div className="bg-background rounded-[2.5rem] overflow-hidden">
            {/* Status bar */}
            <div className="bg-card px-6 py-2 flex items-center justify-between text-xs">
              <span className="text-muted-foreground">9:41</span>
              <div className="flex gap-1 items-center text-muted-foreground">
                <div className="w-4 h-3 border border-current rounded-sm relative">
                  <div className="absolute inset-0.5 bg-current rounded-sm" />
                </div>
              </div>
            </div>
            
            {/* Logo header */}
            <div className="bg-card px-6 py-4 flex justify-center border-b border-border">
              <img src={logo} alt="EcoTrack" className="h-12" />
            </div>
            
            {/* App content */}
            <div className="h-[630px] overflow-y-auto">
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileLayout;
