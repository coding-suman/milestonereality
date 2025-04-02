
import DemoSection from "@/components/DemoSection";
import FindPropertiesSection from "@/components/FindPropertiesSection";
import HeroSection from "@/components/HeroSection";
import PropertiesSection from "@/components/PropertiesSection";
import ServicesSection from "@/components/ServicesSection";
import TestimonialsSection from "@/components/TestimonialsSection";

export default function Home() {
  return (
    <main className="w-full">
      <HeroSection />
      <ServicesSection />
      <PropertiesSection />
      <PropertiesSection/>
      <DemoSection/>
      <FindPropertiesSection />
      <TestimonialsSection />
    </main>
  );
}
