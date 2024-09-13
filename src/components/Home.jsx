import { Typewriter } from "react-simple-typewriter"
import home_video from "../assets/hero_section_video.mp4"
import { useEffect, useState } from "react"
import dashX from "../assets/svg/dashx.svg"
import circle from "../assets/realistic-golden-frame-design.png"
import logo from "../assets/logo_v2.png"

// function Home() {
//   const [isScrolled, setIsScrolled] = useState(false)

//   useEffect(() => {
//     const handleScrollVideo = () => {
//       const scrollPosition = window.scrollY
//       const screenHeight = window.innerHeight
//       const threshold = screenHeight * 0.5

//       if (scrollPosition > threshold) {
//         setIsScrolled(true)
//       } else {
//         setIsScrolled(false)
//       }
//     }

//     window.addEventListener("scroll", handleScrollVideo)

//     return () => {
//       window.removeEventListener("scroll", handleScrollVideo)
//     }
//   }, [])

//   return (
//     <div className="flex relative h-screen justify-between sm:pl-[8rem] md:pl-[9.5rem] lg:pl-[12rem] items-center">
//       <p className="font-[700] absolute text-center md:text-start w-full md:left-10 xl:left-20 sm:max-w-[60%] lg:max-w-[50%] xl:max-w-[40%] text-[32px] sm:text-[40px] xl:text-[55px] leading-tight sm:leading-[50px] xl:leading-[60px] tracking-wider z-10">
//         <Typewriter
//           words={["Unlocking Your Digital Fort Knox"]}
//           loop={1}
//           cursor
//           cursorStyle="_"
//           typeSpeed={70}
//           deleteSpeed={50}
//           delaySpeed={1000}
//         />
//       </p>

//       <video
//         muted
//         autoPlay
//         loop
//         playsInline
//         preload="auto"
//         className={`${
//           isScrolled ? "opacity-[0.2]" : "opacity-[0.5]"
//         } opacity-[0.2] z-[-5] fixed scale-[0.8] transition-all duration-300 ease-linear`}
//       >
//         <source src={home_video} />
//       </video>
//     </div>
//   )
// }

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
      if (value / 10 < 90) {
        circleAsset.style.visibility = "visible"
        videoAsset.style.opacity = ""
        navbar.style.opacity = ""
        about.style.opacity = ""
        circleAsset.style.opacity = 0.8 - value / 2500
        // circleAsset.style.opacity = 0.5 - value / 2500
        homeDesc.style.visibility = "visible"
        circleAsset.style.transform = `rotateX(${value / 10}deg)`
        circleAsset.style.width = `${value / 10 + 50}%`
      } else {
        homeDesc.style.visibility = "hidden"
        circleAsset.style.visibility = "hidden"
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
        `${40 + value / 1.5}px`
      homeDesc.style.left =
        value < (window.innerWidth - homeDesc.clientWidth - 200) / 2 &&
        `${40 + value}px`
      homeDesc.style.width = `${255 + value * 1.5}px`
      homeDesc.style.fontSize = `${24 + value / 30}px`
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
        className="fixed w-[50%] opacity-[0.5]"
        alt=""
        id="home-asset-circle"
        style={{ transform: "rotateX(9deg)" }}
      />

      {/* <section
        id="home-asset-circle"
        style={{ transform: "rotateX(9deg)" }}
        className="fixed flex justify-center items-center"
      >
        <div className="relative rounded-full w-[500px] h-[500px] bg-transparent pulse">
          <span style={{ "--i": 0 }}></span>
          <span style={{ "--i": 1 }}></span>
          <span style={{ "--i": 2 }}></span>
          <span style={{ "--i": 3 }}></span>
        </div>
      </section> */}

      <p
        id="home-title"
        className="text-8xl font-mulish tracking-wider font-bold sticky top-0"
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
      {/* <img src={logo} alt="" /> */}

      <p
        id="home-desc"
        className="fixed left-10 bottom-10 text-2xl w-[255px] font-semibold tracking-wide"
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
    </div>
  )
}

export default Home
