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
        "Intuitive & Engaging Designs using Wireframing and Prototyping",
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
    <div className="md:min-h-screen mt-28 lg:mt-0 flex items-center justify-center">
      <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-5 xl:gap-14 md:max-w-[470px] lg:max-w-[870px] xl:max-w-[1170px]">
        <div className="font-bold text-3xl md:text-4xl xl:text-5xl">
          <p className="">
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
          <p className="text-myPurple mt-0.5">
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

        <div className="grid grid-cols-[auto,auto] md:grid-cols-[auto,auto,auto] gap-1 xl:gap-2 mt-5 md:mt-3 lg:mt-0">
          {services?.map((e, indx) => (
            <div
              key={indx}
              className={`${
                indx === 0
                  ? "row-span-2"
                  : "h-[150px] md:h-[220px] lg:h-[280px]"
              }  flex flex-col md:w-[140px] lg:w-[175px] xl:w-[200px] justify-end p-3 relative bg-black/65 border-[0.7px] border-white`}
            >
              <img
                src={e.icon}
                alt=""
                className={`${
                  e.icon === web
                    ? "w-[50px] md:w-[70px] lg:w-[80px] xl:w-[90px] top-[160px] md:top-[270px] lg:top-[290px] right-[50px] md:right-[35px] lg:right-[50px]"
                    : e.icon === mobile
                    ? "w-[67px] md:w-[87px] lg:w-[97px] xl:w-[107px] top-[20px] md:top-[35px] right-[35px] md:right-[25px]"
                    : e.icon === uiux
                    ? "w-[67px] md:w-[87px] lg:w-[97px] xl:w-[107px] top-[40px] md:top-[80px] right-[35px] md:right-[25px] lg:right-[41px]"
                    : e.icon === ai
                    ? "w-[57px] md:w-[77px] lg:w-[87px] xl:w-[97px] top-[25px] right-[45px] md:top-[60px] md:right-[30px] lg:right-[40px]"
                    : e.icon === hosting
                    ? "w-[57px] md:w-[77px] lg:w-[87px] xl:w-[97px] top-[35px] right-[50px] md:top-[80px] md:right-[30px] lg:right-[41px]"
                    : null
                } absolute`}
              />
              <div className="font-semibold tracking-wide md:text-[15px] lg:text-[18px]">
                <p className="leading-none">{e.title1}</p>
                <p className="text-[#7129D6] leading-none mt-1">{e.title}</p>
              </div>
              <p className="hidden sm:block text-sm mt-3 leading-tight font-light">
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
