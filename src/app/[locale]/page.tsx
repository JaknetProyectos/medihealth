import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WelcomeSection from "@/components/WelcomeSection";
import EquipmentSection from "@/components/EquipmentSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import ServicesBar from "@/components/ServicesBar";
import Footer from "@/components/Footer";


export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <WelcomeSection />
        <EquipmentSection />
        <WhyChooseUs />
        <ServicesBar />
      </main>
      <Footer />
    </div>
  );
}
