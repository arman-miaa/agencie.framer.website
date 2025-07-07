import About from "./components/About";
import Answers from "./components/Answers";
import Banner from "./components/Banner";
import Choose from "./components/Choose";
import Contact from "./components/Contact";
import Differences from "./components/Differences";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import OurMission from "./components/OurMission";
import Partners from "./components/Partners";
import PortfolioSection from "./components/PortfolioSection";
import PricingSection from "./components/PricingSection";
import Process from "./components/Process";
import ServicesSection from "./components/ServicesSection";
import Testimonials from "./components/Testimonials";
import Video from "./components/Video";
import FadeUpOnScroll from "./shared/FadeUpOnScroll";
import StickyAd from "./shared/StickyPromo";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Banner />
        <Video />
        <OurMission />
        <Choose />
        <Partners />
        <ServicesSection />
        <PortfolioSection />
        <Process />
        <Differences />

        <Testimonials />
        <PricingSection />
        <About />
        {/* animation */}
        <FadeUpOnScroll  delay={2.0}>
          <Answers />
        </FadeUpOnScroll>
        <Contact />
        <Footer />
      </div>
      <StickyAd />
    </>
  );
}

export default App;
