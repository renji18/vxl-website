import about_us from "../assets/about_us.jpg"
import asterisks from "../assets/Clip path group (1).svg"

const AboutUs = () => {
  return (
    <div className="min-h-screen px-28 flex justify-center items-center">
      <div className="flex items-center justify-center gap-20">
        <div
          className="border mt-10 border-[#7129D6] p-1"
          style={{
            boxShadow: "0 0 10px 3px #7129D6",
          }}
        >
          <img
            className="w-[600px] opacity-80 hover:opacity-100 transition-all duration-200 ease-linear"
            src={about_us}
            alt="cube"
          />
        </div>
        <div className="w-[600px] items-start gap-10 flex relative flex-col justify-between">
          <img
            src={asterisks}
            alt=""
            className="absolute -top-[44px] -left-[68px]"
          />
          <h1 className="font-bold text-6xl">Our Story</h1>
          <div className="font-light gap-4 text-lg tracking-wide flex flex-col justify-between flex-1">
            <p>
              Our journey began with a spark of innovation at the Vadodara
              Police Hackathon, hosted by PIERC, Parul University. Our project
              impressed the Police Department, earning us an incubation letter
              from IGP Sandeep Singh IPS Sir and the opportunity to launch our
              SaaS startup.
            </p>
            <p>
              We were soon entrusted with "Project SecureScan", based on a
              problem statement provided by IPS Rohan Anand Sir at the Vadodara
              Rural Police Department and mentored by Prob. IPS Jayvir Gadhvi
              Sir.
            </p>
            <p>
              Our story is one of seizing opportunities and overcoming
              challenges, blending creativity with technical prowess, and fueled
              by the encouragement and support of visionary partners. From our
              hackathon triumph to our ongoing endeavors, we forge a path of
              success, committed to making a real difference.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUs
