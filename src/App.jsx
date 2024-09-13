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

const App = () => {
  const [contactPop, setContactPop] = useState(false)

  // useEffect(() => {
  //   const handleContextmenu = (e) => {
  //     e.preventDefault()
  //   }
  //   document.addEventListener("contextmenu", handleContextmenu)
  //   return function cleanup() {
  //     document.removeEventListener("contextmenu", handleContextmenu)
  //   }
  // }, [])

  useEffect(() => {
    window.history.scrollRestoration = "manual"
  }, [])

  return (
    <div className="selection:bg-myPurple">
      <CustomCursor />
      <NavBar setContactPop={setContactPop} />
      <Home />
      <div className="h-[80vh] w-screen" />
      <AboutUs />
      <WhyUs />
      {/* <Services /> */}
      {/* <Contact contactPop={contactPop} setContactPop={setContactPop} /> */}
      {/* <Team /> */}
      {/* <Footer /> */}
    </div>
  )
}

export default App
