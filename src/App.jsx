import React from "react"
import NavBar from "./components/Navbar"
import Home from "./components/Home"
import WhyUs from "./components/WhyUs"
import AboutUs from "./components/AboutUs"
import Services from "./components/Services"
import Contact from "./components/Contact"
import Team from "./components/Team"
import Footer from "./components/Footer"
import CustomCursor from "./components/Cursor"



const App = () => {
  return (
    <div>
      <CustomCursor />
      <NavBar />
      <Home />
      <AboutUs />
      <WhyUs />
      <Services />
      <Contact />
      <Team />
      <Footer />
    </div>
  )
}

export default App
