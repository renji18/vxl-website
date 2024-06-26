import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick"
import aadarsh from "../assets/whyus/aadarsh.jpeg"
import mittal from "../assets/whyus/mittal.jpeg"
import divyapal from "../assets/whyus/divyapal.jpeg"
import kartik from "../assets/whyus/kartik.jpeg"
import asterisks from "../assets/asterisk.svg"

function WhyUs() {
  const slideImg = [kartik, divyapal, mittal, aadarsh]

  const settings = {
    dots: false,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: false,
    fade: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
  }

  return (
    <div className="min-h-screen px-28 flex items-center justify-center">
      <div className="flex items-center justify-center gap-24">
        <div className="w-[600px] items-start gap-12 h-[500px] flex flex-col relative justify-between">
          <img
            src={asterisks}
            alt=""
            className="absolute -top-[60px] right-[280px] rotate-[110deg]"
          />
          <h1 className="font-bold text-6xl">Why Us?</h1>
          <div className="font-light text-lg tracking-wide flex flex-col justify-between flex-1">
            <p>
              Choosing us means partnering with a team that adapts to your
              needs. Whether you require expertise in blockchain/web3 or cloud
              backend/web2, we have the skills to deliver.
            </p>
            <p>
              Our team of young, innovative minds is dedicated to bringing fresh
              perspectives to your projects. We pride ourselves on our
              credibility, demonstrated by our active collaborations with the
              Indian government. This partnership underscores our commitment to
              delivering reliable and high-quality service.
            </p>
            <p>
              With us, you&apos;re not just getting technical proficiency;
              you&apos;re gaining a partner who values innovation, trust, and
              your project&apos;s success. Let us help you achieve your goals
              with cutting-edge solutions tailored to your unique requirements.
            </p>
          </div>
        </div>
        <div className="h-[450px] relative w-[450px]">
          <Slider {...settings}>
            {slideImg?.map((si, indx) => (
              <div key={indx}>
                <img
                  src={si}
                  alt={indx}
                  className={`rounded opacity-80 hover:opacity-100 transition-all ease-linear duration-200 object-cover h-[450px] w-[450px] `}
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
