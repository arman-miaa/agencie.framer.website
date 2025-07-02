import Banner from "./components/Banner"
import Choose from "./components/Choose"
import Navbar from "./components/Navbar"
import OurMission from "./components/OurMission"
import Partners from "./components/Partners"
import ServicesSection from "./components/ServicesSection"
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
        <ServicesSection/>
      </div>
   
    </>
  )
}

export default App
