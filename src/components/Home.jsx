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
    <div className="flex relative h-screen justify-between lg:pl-[12rem] items-center">
      <p className="font-[700] absolute lg:left-14 xl:left-20 lg:max-w-[50%] xl:max-w-[40%] lg:text-[42px] xl:text-[55px] lg:leading-[50px] xl:leading-[60px] tracking-wider z-10">
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
        controls={false}
        muted={true}
        autoPlay={true}
        className={`${
          isScrolled ? "opacity-[0.2]" : "opacity-[0.5]"
        } opacity-[0.2] z-[-5] fixed scale-[0.8] transition-all duration-300 ease-linear`}
        loop={true}
      >
        <source src={home_video} />
      </video>
    </div>
  )
}

export default Home
