import { Typewriter } from "react-simple-typewriter"
import home_video from "../assets/hero_section_video.mp4"
import { useEffect } from "react"
import dashX from "../assets/svg/dashx.svg"
import circle from "../assets/realistic-golden-frame-design.png"
import { FaLinkedinIn } from "react-icons/fa"

function Home() {
  // rotate circle and bring out video, navbar and about section
  useEffect(() => {
    const rotate = () => {
      const circleAsset = document.getElementById("home-asset-circle")
      const videoAsset = document.getElementById("home-asset-video")
      const homeDesc = document.getElementById("home-desc")
      const navbar = document.getElementById("navbar")
      const about = document.getElementById("about-us")
      let value = window.scrollY
      if (value / 20 < 90) {
        // circleAsset.style.visibility = "visible"
        videoAsset.style.opacity = ""
        navbar.style.opacity = ""
        about.style.opacity = ""
        circleAsset.style.opacity = 0.8 - value / 2500
        homeDesc.style.opacity = 1 - value / 2000
        // homeDesc.style.visibility = "visible"
        // circleAsset.style.transform = `rotateX(${value / 10}deg)`
        // circleAsset.style.transform = `rotateZ(${value / 10}deg)`
        circleAsset.style.transform = `rotate3d(1 , 0, 1, ${value / 10}deg)`
        circleAsset.style.width = `${value / 10 + 50}%`
      } else {
        // homeDesc.style.visibility = "hidden"
        circleAsset.style.opacity = 0.8 - value / 2500
        homeDesc.style.opacity = 1 - value / 2000
        // circleAsset.style.visibility = "hidden"
        videoAsset.style.opacity = 0.3
        navbar.style.opacity = 1
        about.style.opacity = 1
      }
    }

    window.addEventListener("scroll", rotate)
    return () => {
      window.removeEventListener("scroll", rotate)
    }
  }, [])

  // move title and description
  useEffect(() => {
    const move = () => {
      const homeTitle = document.getElementById("home-title")
      const homeDesc = document.getElementById("home-desc")
      let value = window.scrollY

      homeTitle.style.scale = 1 - value / 1000
      homeDesc.style.bottom =
        value < (window.innerHeight + homeDesc.clientHeight * 10) / 2 &&
        `${20 + value / 1.5}px`
      homeDesc.style.left =
        value < (window.innerWidth - homeDesc.clientWidth - 200) / 2 &&
        `${40 + value}px`
      homeDesc.style.width = `${255 + value * 1.5}px`
      homeDesc.style.fontSize = value / 10 < 90 && `${24 + value / 30}px`
    }

    window.addEventListener("scroll", move)
    return () => {
      window.removeEventListener("scroll", move)
    }
  }, [])

  return (
    <div className="h-screen flex justify-center items-center">
      <video
        id="home-asset-video"
        src={home_video}
        muted
        autoPlay
        loop
        playsInline
        preload="auto"
        className="z-[-5] pl-[12rem] fixed scale-[0.8] transition-all duration-1000 ease-linear opacity-0"
      />

      <img
        src={circle}
        className="fixed w-[50%] opacity-[0.5] transition-all duration-300 ease-linear"
        alt=""
        id="home-asset-circle"
        style={{ transform: "rotateX(9deg)" }}
      />

      <p
        id="home-title"
        className="text-8xl tracking-wider font-bold sticky top-0"
      >
        <span className="invisible">a</span>vault
        <span className="text-[9rem]">X</span>
        ledger
        <img
          src={dashX}
          className="absolute left-[30rem] scale-[4] bottom-[-0.6rem]"
          alt=""
        />
      </p>

      <p
        id="home-desc"
        className="fixed left-10 bottom-5 text-2xl w-[255px] max-w-[910px] font-semibold tracking-wide"
        style={{ transform: "translate(-5%, -5%)" }}
      >
        <Typewriter
          words={["Unlocking Your Digital Fort Knox"]}
          loop={1}
          cursor
          cursorStyle="_"
          typeSpeed={40}
          deleteSpeed={50}
          delaySpeed={1000}
        />
      </p>

      <div className="fixed bottom-10 right-10">
        <a
          href="https://www.linkedin.com/company/vaultxledger-0112/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedinIn size={23} />
        </a>
      </div>
    </div>
  )
}

export default Home
