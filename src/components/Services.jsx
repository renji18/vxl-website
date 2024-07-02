import React from "react"
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
    <div className="flex justify-between items-center lg:ml-4 xl:ml-32  max-h-screen">
      <div className=" font-bold xl:text-[50px] lg:text-[38px]  tracking-wide">
        <p className="leading-none">
          Learn More About 
        </p>
        <p className="text-[#7129D6] mt-0.5 leading-none">Our Services</p>
      </div>
      <div className="">
        <div className="grid grid-cols-[auto,auto,auto] xl:gap-3 lg:gap-1.5 p-6">
          {services?.map((e, indx) => (
            <div
              className={`${
                indx === 0 ? "row-span-2" : "xl:h-[300px] lg:h-[270px]"
              }  flex flex-col lg:w-[190px] xl:w-[220px] justify-end p-3 relative bg-black border-[0.7px] border-white`}
            >
              <img
                src={e.icon}
                alt=""
                className={`${
                  e.icon === web
                    ? "w-[100px] lg:top-[270px] xl:top-[290px] lg:right-[40px] xl:right-[50px] "
                    : e.icon === mobile
                    ? "w-[117px] lg:top-[30px] xl:top-[35px] lg:right-[15px] xl:right-[25px] "
                    : e.icon === uiux
                    ? "w-[117px] lg:top-[50px] xl:top-[80px] lg:right-[31px] xl:right-[41px] "
                    : e.icon === ai
                    ? "w-[107px] lg:top-[40px] xl:top-[60px] lg:right-[30px] xl:right-[40px] "
                    : e.icon === hosting
                    ? "w-[107px] lg:top-[60px] xl:top-[80px] lg:right-[31px] xl:right-[41px] "
                    : null
                } absolute xl:scale-100 lg:scale-75 `}
              />
              <div className="font-semibold tracking-wide text-[18px]">
                <p className="leading-none">{e.title1}</p>
                <p className="text-[#7129D6] leading-none mt-1 ">{e.title}</p>
              </div>
              <p className="text-[14.5px] lg:mt-3 xl:mt-5 leading-tight font-light ">
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
