import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WelcomeSection from "@/components/WelcomeSection";
import EquipmentSection from "@/components/EquipmentSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import ServicesBar from "@/components/ServicesBar";
import Footer from "@/components/Footer";
import OfferModal from "@/components/OfferModal"; // Importamos el modal

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* El modal se puede colocar en cualquier parte dentro del return */}
      <OfferModal />
      
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