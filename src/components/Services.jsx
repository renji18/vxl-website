import React from "react"
import { Typewriter } from "react-simple-typewriter"
import ai from "../assets/services/ai.svg"
import uiux from "../assets/services/uiux.svg"
import mobile from "../assets/services/mobile.svg"
import hosting from "../assets/services/hosting.svg"
import web from "../assets/services/webdev.svg"

const Services = () => {
  const services = [
    {
      icon: web,
      title1: "CUSTOM WEB",
      title: "DEVELOPMENT",
      description: "Frontend & Backend Development - NodeJS, ReactJS",
    },
    {
      icon: mobile,
      title1: "iOS & ANDROID",
      title: "MOBILE APPS",
      description: "iOS & Android mobile APP development - React Native",
    },
    {
      icon: uiux,
      title1: "PIXEL PERFECT",
      title: "UI/UX",
      description:
        "Intuitive & Engaging Designs using Wireframing, High Fidelity Prototyping",
    },
    {
      icon: ai,
      title1: "INNOVATIVE",
      title: "AI/ML",
      description: "Computer Vision, Deep learning, Chatbots (NLP)",
    },
    {
      icon: hosting,
      title1: "SCALABLE",
      title: "HOSTING",
      description: "Dedicated Servers, Server Clusters, Cloud Server",
    },
  ]

  return (
    <div className="flex flex-col lg:flex-row justify-center gap-5 lg:gap-0 lg:justify-between items-center lg:ml-4 xl:ml-32 mt-32 sm:mt-0 sm:min-h-screen">
      <div className="font-bold text-[30px] sm:text-[40px] xl:text-[50px] lg:text-[38px] tracking-wide">
        {/* <p className="leading-none">Learn More About</p>
        <p className="text-[#7129D6] mt-0.5 leading-none">Our Services</p> */}
        <p className="leading-none">
          <Typewriter
            words={["Learn More About"]}
            loop={1}
            cursor
            cursorStyle=""
            typeSpeed={50}
            deleteSpeed={50}
            delaySpeed={0}
          />
        </p>
        <p className="text-[#7129D6] mt-0.5 leading-none">
          <Typewriter
            words={["Our Services"]}
            loop={1}
            cursor
            cursorStyle="_"
            typeSpeed={50}
            deleteSpeed={50}
            delaySpeed={0}
          />
        </p>
      </div>
      <div className="">
        <div className="grid grid-cols-[auto,auto] sm:grid-cols-[auto,auto,auto] gap-1 sm:gap-1.5 xl:gap-3 p-6">
          {services?.map((e, indx) => (
            <div
              className={`${
                indx === 0
                  ? "row-span-2"
                  : "h-[140px] sm:h-[200px] lg:h-[270px] xl:h-[300px]"
              }  flex flex-col lg:w-[190px] xl:w-[220px] justify-end p-3 relative bg-black/65 border-[0.7px] border-white`}
            >
              <img
                src={e.icon}
                alt=""
                className={`${
                  e.icon === web
                    ? "w-[100px] top-[120px] right-[-5px] sm:top-[185px] sm:right-[10px] md:top-[185px] md:right-[15px] lg:top-[270px] lg:right-[40px] xl:top-[290px] xl:right-[50px] "
                    : e.icon === mobile
                    ? "w-[117px] top-[0px] right-[-15px] sm:top-[5px] sm:right-[-15px] md:top-[10px] md:right-[-5px] lg:top-[30px] lg:right-[15px] xl:top-[35px] xl:right-[25px] "
                    : e.icon === uiux
                    ? "w-[117px] top-[25px] right-[-15px] sm:top-[30px] sm:right-[0px] md:top-[35px] md:right-[10px] lg:top-[50px] lg:right-[31px] xl:top-[80px] xl:right-[41px] "
                    : e.icon === ai
                    ? "w-[107px] top-[0px] right-[-5px] sm:top-[10px] sm:right-[5px] md:top-[20px] md:right-[10px] lg:top-[40px] lg:right-[30px] xl:top-[60px] xl:right-[40px] "
                    : e.icon === hosting
                    ? "w-[107px] top-[20px] right-[-5px] sm:top-[30px] sm:right-[5px] md:top-[40px] md:right-[15px] lg:top-[60px] lg:right-[31px] xl:top-[80px] xl:right-[41px] "
                    : null
                } absolute scale-50 sm:scale-[0.65] md:scale-75 xl:scale-100`}
              />
              <div className="font-semibold tracking-wide text-[16px] lg:text-[18px]">
                <p className="leading-none">{e.title1}</p>
                <p className="text-[#7129D6] leading-none mt-0.5 lg:mt-1">
                  {e.title}
                </p>
              </div>
              <p className="hidden sm:block sm:text-[12px] lg:text-[14.5px] sm:mt-1.5 lg:mt-3 xl:mt-5 leading-tight font-light">
                {e.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Services
