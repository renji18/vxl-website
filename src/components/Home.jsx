import { Typewriter } from "react-simple-typewriter"
import home_video from "../assets/hero_section_video.mp4"
import { useEffect, useState } from "react"

function Home() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScrollVideo = () => {
      const scrollPosition = window.scrollY
      const screenHeight = window.innerHeight
      const threshold = screenHeight * 0.5

      if (scrollPosition > threshold) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScrollVideo)

    return () => {
      window.removeEventListener("scroll", handleScrollVideo)
    }
  }, [])
  return (
    <div className="flex relative h-screen justify-between sm:pl-[8rem] md:pl-[9.5rem] lg:pl-[12rem] items-center">
      <p className="font-[700] absolute left-10 xl:left-20 sm:max-w-[60%] lg:max-w-[50%] xl:max-w-[40%] text-[32px] sm:text-[40px] xl:text-[55px] leading-tight sm:leading-[50px] xl:leading-[60px] tracking-wider z-10">
        <Typewriter
          words={["Unlocking Your Digital Fort Knox"]}
          loop={1}
          cursor
          cursorStyle="_"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1000}
        />
      </p>

      <video
        muted
        autoPlay
        loop
        playsInline
        className={`${
          isScrolled ? "opacity-[0.2]" : "opacity-[0.5]"
        } opacity-[0.2] z-[-5] fixed scale-[0.8] transition-all duration-300 ease-linear`}
      >
        <source src={home_video} />
      </video>
    </div>
  )
}

export default Home
