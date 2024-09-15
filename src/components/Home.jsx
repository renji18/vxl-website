import { Typewriter } from "react-simple-typewriter"
import home_video from "../assets/hero_section_video.mp4"
import dashX from "../assets/svg/dashx.svg"
import circle from "../assets/realistic-golden-frame-design.png"
import { FaLinkedinIn } from "react-icons/fa"

function Home() {
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
        className="z-[-5] lg:pl-[12rem] fixed scale-[0.8] transition-all duration-300 lg:duration-1000 ease-linear opacity-0"
      />

      <img
        src={circle}
        className="fixed w-[70%] lg:w-[50%] opacity-[0.5] transition-all duration-300 ease-linear"
        alt=""
        id="home-asset-circle"
        style={{ transform: "rotateX(9deg)" }}
      />

      <p
        id="home-title"
        className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl tracking-wider font-bold sticky top-0"
      >
        <span className="invisible">a</span>vault
        <span className="text-[3.5rem] md:text-[4.5rem] lg:text-[6.75rem] xl:text-[9rem]">
          X
        </span>
        ledger
        <img
          src={dashX}
          className="absolute left-[13.5rem] md:left-[17rem] lg:left-[22rem] xl:left-[30rem] scale-[2] md:scale-[2.5] lg:scale-[3] xl:scale-[4] bottom-[-0.6rem]"
          alt=""
        />
      </p>

      <p
        id="home-desc"
        className="fixed left-5 bottom-1 lg:left-10 lg:bottom-5 text-lg md:text-xl lg:text-2xl xl:text-2xl w-[180px] md:w-[200px] lg:w-[225px] xl:w-[255px] max-w-fit font-semibold tracking-wide"
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

      <div className="hidden xl:block fixed bottom-10 right-10">
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
