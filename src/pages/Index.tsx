import Hero from "@/components/Hero";
import AppShowcase from "@/components/AppShowcase";
import HowItWorks from "@/components/HowItWorks";
import Benefits from "@/components/Benefits";
import ImpactMetrics from "@/components/ImpactMetrics";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <AppShowcase />
      <HowItWorks />
      <Benefits />
      <ImpactMetrics />
      <Footer />
    </div>
  );
};

export default Index;
