import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import SobreSection from "@/components/SobreSection";
import ServicosSection from "@/components/ServicosSection";
import DiferenciaisSection from "@/components/DiferenciaisSection";
import RegiaoSection from "@/components/RegiaoSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export default function Home() {
  return (
    <main className="bg-[#F4F1EB] min-h-screen">
      <Header />
      <HeroSection />
      <SobreSection />
      <ServicosSection />
      <DiferenciaisSection />
      <RegiaoSection />
      <CTASection />
      <Footer />
      <WhatsAppFloat />
    </main>
  );
}
