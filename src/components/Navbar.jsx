import { useEffect } from "react"
import { useState } from "react"
import dashX from "../assets/dashx.svg"

const NavBar = ({ setContactPop }) => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const screenHeight = window.innerHeight
      const threshold = screenHeight * 0.2

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
      className={`flex fixed top-0 left-0 right-0 justify-between items-center z-[5054] sm:py-[15px] p-[1rem] sm:px-[2rem] transition-all duration-300 ease-linear ${
        isScrolled ? "blur-backdrop-filter" : ""
      }`}
      style={{
        boxShadow: isScrolled && "0 0 20px -12px #ffffffb3",
      }}
    >
      <p className="text-[16px] sm:text-[20px] font-mulish relative tracking-widest -translate-y-1 font-[700]">
        vault<span className="text-[28px] sm:text-[35px]">X</span>ledger
        <img
          src={dashX}
          className="absolute left-16 scale-90 sm:scale-100 sm:left-20 bottom-0 sm:bottom-0.5"
          alt=""
        />
      </p>
      <button
        onClick={() => setContactPop(true)}
        className="flex items-center gap-1.5 border-[3.5px] sm:border-4 border-[#7129D6] text-white hover:text-white hover:bg-[#7129D6] font-[700] transition-all duration-300 ease-linear bg-black pr-[10px] sm:pr-[16px] pl-[6px] sm:pl-[10px] py-[3px] sm:py-[7px] text-[13px] sm:text-[15px] leading-[25.1px] rounded-[10px]"
      >
        <img
          src="https://raw.githubusercontent.com/MartinHeinz/MartinHeinz/master/wave.gif"
          alt=""
          className="w-[20px] sm:w-[26px]"
        ></img>
        <span className="sm:translate-y-[1px] ">Say Hi!</span>
      </button>
    </div>
  )
}

export default NavBar
