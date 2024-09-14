import Slider from "react-slick"
import aadarsh from "../assets/whyus/aadarsh.jpeg"
import mittal from "../assets/whyus/mittal.jpeg"
import divyapal from "../assets/whyus/divyapal.jpeg"
import kartik from "../assets/whyus/kartik.jpeg"
import asterisks from "../assets/svg/asterisk.svg"
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
    <div className="lg:min-h-screen flex items-center justify-center mt-0 lg:mt-0">
      <div className="w-full max-w-[300px] md:max-w-[470px] lg:max-w-[870px] xl:max-w-[1170px]">
        <div className="relative w-full">
          <p className="font-bold text-4xl md:text-5xl lg:text-6xl">Why Us?</p>
          <img
            src={asterisks}
            alt=""
            className="absolute left-[104px] top-[-56px] md:left-[154px] md:top-[-56px] lg:left-[204px] lg:top-[-55px] xl:left-[205px] xl:top-[-55px] rotate-[110deg]"
          />
        </div>

        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-5 xl:gap-14">
          <div className="space-y-3 lg:w-3/5 text-sm md:text-base xl:text-xl font-light text-justify">
            <p>
              Choosing us means partnering with a team that adapts to your
              needs. Whether you require expertise in blockchain/web3 or cloud
              backend/web2, we have the skills to deliver.{" "}
              <span
                onClick={() => setReadMore(true)}
                className={`${
                  readMore ? "hidden" : ""
                } lg:hidden bg-black font-semibold text-base text-[#7129D6]`}
              >
                Read More...
              </span>
            </p>
            <p className={`${readMore ? "" : "hidden"} lg:block`}>
              Our team of young, innovative minds is dedicated to bringing fresh
              perspectives to your projects. We pride ourselves on our
              credibility, demonstrated by our active collaborations with the
              Legal Department of Government. This partnership underscores our
              commitment to delivering reliable and high-quality service.
            </p>
            <p className={`${readMore ? "" : "hidden"} lg:block`}>
              With us, you&apos;re not just getting technical proficiency,
              you&apos;re gaining a partner who values innovation, trust, and
              your project&apos;s success. Let us help you achieve your goals
              with cutting-edge solutions tailored to your unique requirements.
            </p>
          </div>
          <div className="lg:w-2/5 mt-5 lg:mt-0">
            <Slider {...settings}>
              {slideImg?.map((si, indx) => (
                <div key={indx}>
                  <img
                    style={{
                      boxShadow: "0 0 8px 1px #7129D6",
                    }}
                    src={si}
                    alt={indx}
                    className={`border rounded-md p-1 border-myPurple mx-auto opacity-100 lg:opacity-80 hover:opacity-100 transition-all ease-linear duration-200 object-cover why-us-slider-boxes`}
                  />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WhyUs
