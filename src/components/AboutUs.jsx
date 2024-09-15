import { useState } from "react"
import about_us from "../assets/about_us.jpg"
import asterisks from "../assets/svg/asterisk.svg"

const AboutUs = () => {
  const [readMore, setReadMore] = useState(false)
  return (
    <div
      id="about-us"
      className="min-h-screen opacity-0 flex items-center justify-center transition-all duration-1000 ease-linear"
    >
      <div className="w-full max-w-[300px] md:max-w-[470px] lg:max-w-[870px] xl:max-w-[1170px]">
        <div className="relative text-end w-full">
          <p className="font-bold text-4xl md:text-5xl lg:text-6xl">
            Our Story
          </p>
          <img
            src={asterisks}
            alt=""
            className="absolute right-[123px] top-[-44px] md:right-[178px] md:top-[-43px] lg:right-[237px] lg:top-[-39px]"
          />
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-5 xl:gap-14 mt-8 xl:mt-12">
          <div
            className="border rounded-md p-1 border-myPurple lg:w-1/2"
            style={{
              boxShadow: "0 0 8px 1px #7129D6",
            }}
          >
            <img
              src={about_us}
              alt=""
              className="rounded lg:opacity-80 hover:opacity-100 transition-all duration-200 ease-linear"
            />
          </div>
          <div className="space-y-3 lg:w-1/2 text-sm md:text-base xl:text-xl font-light text-justify">
            <p>
              Our journey began with a spark of innovation at Vadodara Police
              Hackathon, hosted by PIERC, Parul University. Our project
              impressed the Police Department, earning us an incubation letter
              from IGP Sandeep Singh IPS Sir and the opportunity to launch{" "}
              <span className={`${readMore ? "" : "hidden"} lg:inline`}>
                our startup.
              </span>
              <span
                onClick={() => setReadMore(true)}
                className={`${
                  readMore ? "hidden" : ""
                } lg:hidden bg-black  font-semibold text-base text-[#7129D6]`}
              >
                Read More...
              </span>
            </p>
            <p className={`${readMore ? "" : "hidden"} lg:block`}>
              We were entrusted with "Project SecureScan", based on a problem
              statement provided by IPS Rohan Anand Sir at the Vadodara Police
              Department and mentored by Prob. IPS Jayvir Gadhvi Sir.
            </p>
            <p className={`${readMore ? "" : "hidden"} lg:block`}>
              Our story is one of seizing opportunities and overcoming
              challenges, blending creativity with technical prowess. From our
              hackathon triumph to our ongoing endeavors, we forge a path of
              success, committed to making a difference.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUs
