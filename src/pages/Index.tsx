import Header from "@/components/Header";
import Hero from "@/components/Hero";
import CarCategories from "@/components/CarCategories";
import About from "@/components/About";
import Services from "@/components/Services";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <CarCategories />
      <About />
      <Services />
      <Footer />
    </div>
  );
};

export default Index;
