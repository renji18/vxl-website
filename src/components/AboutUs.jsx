import about_us from "../assets/about_us.jpg"
import asterisks from "../assets/asterisk.svg"

const AboutUs = () => {
  return (
    <div className="min-h-screen lg:px-20 xl:px-28 flex justify-center items-center">
      <div className="flex items-center justify-center lg:gap-10 xl:gap-16 2xl:gap-20">
        <div
          className="border lg:translate-y-8 xl:translate-y-4 rounded-md mt-10 border-[#7129D6] p-1"
          style={{
            boxShadow: "0 0 8px 1px #7129D6",
          }}
        >
          <img
            className="w-[600px] rounded opacity-80 hover:opacity-100 transition-all duration-200 ease-linear"
            src={about_us}
            alt="cube"
          />
        </div>
        <div className="lg:w-[750px] xl:w-[600px] items-start gap-10 flex relative flex-col justify-between">
          <img
            src={asterisks}
            alt=""
            className="absolute lg:scale-90 xl:scale-100 lg:-top-[41px] lg:-left-[63px] xl:-top-[44px] xl:-left-[68px]"
          />
          <h1 className="font-bold lg:text-5xl xl:text-6xl">Our Story</h1>
          <div className="font-light lg:gap-4 xl:gap-5 lg:text-base xl:text-lg 2xl:text-xl tracking-wide flex flex-col justify-between flex-1">
            <p>
              Our journey began with a spark of innovation at Vadodara Police
              Hackathon, hosted by PIERC, Parul University. Our project
              impressed the Police Department, earning us an incubation letter
              from IGP Sandeep Singh IPS Sir and the opportunity to launch our
              startup.
            </p>
            <p>
              We were entrusted with "Project SecureScan", based on a problem
              statement provided by IPS Rohan Anand Sir at the Vadodara Police
              Department and mentored by Prob. IPS Jayvir Gadhvi Sir.
            </p>
            <p>
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
