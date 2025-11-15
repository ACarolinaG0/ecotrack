import { useState } from "react";
import MobileLayout from "@/components/MobileLayout";
import BottomNav from "@/components/BottomNav";
import Dashboard from "./Dashboard";
import Register from "./Register";
import Ranking from "./Ranking";
import Rewards from "./Rewards";

const Index = () => {
  const [activeTab, setActiveTab] = useState("dashboard");

  const renderContent = () => {
    switch (activeTab) {
      case "dashboard":
        return <Dashboard />;
      case "register":
        return <Register />;
      case "ranking":
        return <Ranking />;
      case "rewards":
        return <Rewards />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <MobileLayout>
      {renderContent()}
      <BottomNav activeTab={activeTab} onTabChange={setActiveTab} />
    </MobileLayout>
  );
};

export default Index;
