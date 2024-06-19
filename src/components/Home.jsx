import { Typewriter } from "react-simple-typewriter"
import home_video from "../assets/hero_section_video.mp4"

function Home() {
  return (
    <div className="flex relative h-screen justify-between pl-[15rem] xl:pl-[20rem] items-center">
      <p className="font-[700] absolute left-20 max-w-[60%] xl:max-w-[37%] text-[50px] leading-[60px] tracking-widest z-10">
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
        className="opacity-[0.35] z-0"
        loop={true}
      >
        <source src={home_video} />
      </video>
    </div>
  )
}

export default Home
