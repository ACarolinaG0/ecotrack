import { useState } from "react";
import MobileLayout from "@/components/MobileLayout";
import BottomNav from "@/components/BottomNav";
import Dashboard from "./Dashboard";
import Register from "./Register";
import Ranking from "./Ranking";
import Rewards from "./Rewards";
import Login from "./Login";

const Index = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeTab, setActiveTab] = useState("dashboard");

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  if (!isLoggedIn) {
    return <Login onLogin={handleLogin} />;
  }

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
