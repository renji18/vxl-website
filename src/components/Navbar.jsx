import { useEffect } from "react"
import { useState } from "react"
import dashX from "../assets/dashx.svg"

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const screenHeight = window.innerHeight
      const threshold = screenHeight * 0.3

      if (scrollPosition > threshold) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <div
      className={`flex rounded-full fixed top-5 left-5 right-5 justify-between items-center z-[5054] pt-[15px] pb-[10px] px-[2rem] transition-all duration-300 ease-linear ${
        isScrolled ? "blur-backdrop-filter" : ""
      }`}
    >
      <p className="text-[20px] font-mulish relative tracking-widest font-[700]">
        vault<span className="text-[35px]">X</span>ledger
        <img src={dashX} className="absolute left-20 bottom-0" alt="" />
      </p>
      <button className="border-4 border-[#7129D6] text-black hover:text-white hover:bg-[#7129D6] font-[700] transition-all duration-300 ease-linear bg-white px-[20px] py-[7px] text-[13px] leading-[25.1px] rounded-[10px]">
        Request Demo
      </button>
    </div>
  )
}

export default NavBar
