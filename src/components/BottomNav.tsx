import { BarChart3, Recycle, Trophy, Gift } from "lucide-react";

interface BottomNavProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const tabs = [
  { id: "dashboard", icon: BarChart3, label: "Dashboard" },
  { id: "register", icon: Recycle, label: "Registrar" },
  { id: "ranking", icon: Trophy, label: "Ranking" },
  { id: "rewards", icon: Gift, label: "Recompensas" },
];

const BottomNav = ({ activeTab, onTabChange }: BottomNavProps) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-card border-t border-border px-6 py-3">
      <div className="flex items-center justify-around max-w-[380px] mx-auto">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          
          return (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className="flex flex-col items-center gap-1 transition-colors"
            >
              <Icon 
                className={`h-6 w-6 ${
                  isActive ? "text-primary" : "text-muted-foreground"
                }`} 
              />
              <span 
                className={`text-xs ${
                  isActive ? "text-primary font-semibold" : "text-muted-foreground"
                }`}
              >
                {tab.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default BottomNav;
