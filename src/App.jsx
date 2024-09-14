import React, { useEffect, useState } from "react"
import NavBar from "./components/Navbar"
import Home from "./components/Home"
import WhyUs from "./components/WhyUs"
import AboutUs from "./components/AboutUs"
import Services from "./components/Services"
import Contact from "./components/Contact"
import Team from "./components/Team"
import Footer from "./components/Footer"
import CustomCursor from "./components/Cursor"
import "./css/slider.css"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import EffectController from "./components/EffectController"

const App = () => {
  useEffect(() => {
    window.history.scrollRestoration = "manual"
  }, [])

  const [contactPop, setContactPop] = useState(false)
  return (
    <div id="app" className="selection:bg-myPurple overflow-x-hidden">
      <EffectController />
      {/* <CustomCursor /> */}
      <NavBar setContactPop={setContactPop} />
      <Home />
      <div className="h-[250vh] md:h-[170vh] lg:h-[230vh] xl:h-[190vh] w-screen" />
      <AboutUs />
      <WhyUs />
      <Services />
      <Contact contactPop={contactPop} setContactPop={setContactPop} />
      <Team />
      <Footer />
    </div>
  )
}

export default App
