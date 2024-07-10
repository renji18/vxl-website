import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick"
import aadarsh from "../assets/whyus/aadarsh.jpeg"
import mittal from "../assets/whyus/mittal.jpeg"
import divyapal from "../assets/whyus/divyapal.jpeg"
import kartik from "../assets/whyus/kartik.jpeg"
import asterisks from "../assets/asterisk.svg"
import { useState } from "react"

function WhyUs() {
  const slideImg = [kartik, divyapal, mittal, aadarsh]
  const [readMore, setReadMore] = useState(false)

  const settings = {
    dots: false,
    autoplay: true,
    autoplaySpeed: 2500,
    pauseOnHover: false,
    fade: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
  }

  return (
    <div className="min-h-screen lg:px-20 xl:px-28 flex flex-col lg:flex-row items-center justify-center">
      <div className="relative w-full lg:hidden px-10 mb-3">
        <img
          src={asterisks}
          alt=""
          className="absolute -top-[53px] left-[93px] md:-top-[56px] md:left-[118px] lg:-top-[55px] xl:-top-[58px] lg:left-[157px] scale-50 md:scale-75 lg:scale-90 xl:scale-100 xl:left-[208px] rotate-[110deg]"
        />
        <h1 className="font-bold text-2xl md:text-3xl lg:text-5xl xl:text-6xl">
          Why Us?
        </h1>
      </div>
      <div className="flex px-10 sm:px-20 md:px-28 lg:px-0 flex-col-reverse lg:flex-row items-center justify-center gap-6 lg:gap-12 xl:gap-24">
        <div className="lg:w-[500px] lg:h-[420px] xl:w-[600px] items-start gap-12 xl:h-[500px] flex flex-col relative justify-between">
          <img
            src={asterisks}
            alt=""
            className="-top-[52px] left-[52px] md:-top-[56px] md:left-[79px] lg:-top-[55px] xl:-top-[58px] lg:left-[157px] scale-50 md:scale-75 hidden lg:block lg:absolute lg:scale-90 xl:scale-100 xl:left-[208px] rotate-[110deg]"
          />
          <h1 className="font-bold hidden lg:block text-2xl md:text-3xl lg:text-5xl xl:text-6xl">
            Why Us?
          </h1>
          <div className="font-light text-sm md:text-base xl:text-lg tracking-wide gap-3 lg:gap-0 flex flex-col justify-between flex-1">
            <p>
              Choosing us means partnering with a team that adapts to your
              needs. Whether you require expertise in blockchain/web3 or cloud
              backend/web2, we have the skills to deliver.
            </p>
            <p>
              Our team of young, innovative minds is dedicated to bringing fresh
              perspectives to your projects. We pride ourselves on our{" "}
              <span
                onClick={() => setReadMore(true)}
                className={`${
                  readMore ? "hidden" : ""
                } md:hidden bg-black  font-semibold text-base text-[#7129D6]`}
              >
                Read More...
              </span>{" "}
              <span className={`${readMore ? "" : "hidden"} md:block`}>
                credibility, demonstrated by our active collaborations with the
                Indian government. This partnership underscores our commitment
                to delivering reliable and high-quality service.
              </span>
            </p>
            <p className={`${readMore ? "" : "hidden"} md:block`}>
              With us, you&apos;re not just getting technical proficiency,
              you&apos;re gaining a partner who values innovation, trust, and
              your project&apos;s success. Let us help you achieve your goals
              with cutting-edge solutions tailored to your unique requirements.
            </p>
          </div>
        </div>
        <div className="h-[260px] w-[260px] md:h-[350px] md:w-[350px] xl:h-[450px] relative xl:w-[450px] lg:translate-y-5 xl:translate-y-0">
          <Slider {...settings}>
            {slideImg?.map((si, indx) => (
              <div key={indx}>
                <img
                  src={si}
                  alt={indx}
                  className={`rounded opacity-80 hover:opacity-100 transition-all ease-linear duration-200 object-cover h-[260px] w-[260px] md:h-[350px] md:w-[350px] xl:h-[450px] xl:w-[450px]`}
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  )
}

export default WhyUs
