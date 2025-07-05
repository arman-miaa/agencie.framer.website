import About from "./components/About"
import Answers from "./components/Answers"
import Banner from "./components/Banner"
import Choose from "./components/Choose"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import OurMission from "./components/OurMission"
import Partners from "./components/Partners"
import PortfolioSection from "./components/PortfolioSection"
import PricingSection from "./components/PricingSection"
import ServicesSection from "./components/ServicesSection"
import Testimonials from "./components/Testimonials"
import Video from "./components/Video"


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
        <PortfolioSection/>
        
        <Testimonials/>
        <PricingSection/>
        <About/>
        <Answers/>
        <Contact/>
        <Footer/>
      </div>
   
    </>
  )
}

export default App
