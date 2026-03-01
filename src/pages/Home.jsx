import logoImg from "../assets/logo1.png";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero"; 
import Founder from "../components/Founder";
import QuoteSection from "../components/QuoteSection";
import ServicesSection from "../components/ServicesSection";
import WhyChooseSection from "../components/WhyChooseSection";
import ReviewsSection from "../components/ReviewsSection";
import StepsSection from "../components/StepsSection";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";
import Treatments from "../components/Treatments";
function Home() {
    return (   
    <div className="min-h-screen bg-[#FAF4E6] text-black">
      <Navbar />
      <main>
        <Hero /> 
        <Founder />
        <Treatments />
        <QuoteSection />
        <ServicesSection />
        <WhyChooseSection />
        <ReviewsSection />
        <StepsSection />
        <FAQ />
      </main>
      <Footer />
    </div>
  )
}
export default Home