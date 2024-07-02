import React from "react"
import dashX from "../assets/dashx.svg"

// import mail from "../assets/mail.svg fill.svg"
// import linkedin from "../assets/linkedin.svg"
// import twitter from "../assets/twitter.svg"
// import dashX from "../assets/dashx.svg"
// import insta from "../assets/instagram.svg"
import { FaInstagram, FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa"

const Footer = () => {
  // const links = [
  //   { title: "LinkedIn", link: "https://www.linkedin.com/", image: linkedin },
  //   { title: "Twitter", link: "https://www.twitter.com/", image: twitter },
  //   { title: "Instagram", link: "https://www.youtube.com/", image: insta },
  // ]
  return (
    // <div className="px-20 pt-24">
    //   <div className="bg-[#ffffff97] h-[0.2px] w-full mb-10 "></div>

    //   <div className="flex justify-between items-center pr-32 pl-10 ">
    //     <div className="">
    //       <p className="text-[45px] font-mulish relative tracking-widest font-[700]">
    //         vault<span className="text-[60px]">X</span>ledger
    //         <img src={dashX} className="absolute left-48 scale-[2] bottom-1" alt="" />
    //       </p>

    //     </div>
    //     <div className="flex justify-center items-center gap-36 text-lg ">
    //       <div className="flex flex-col">
    //         <p className="font-semibold text-[36px] mb-7">Menu</p>
    //         <p className="mt-1">About Us</p>
    //         <p className="mt-1">Contact Us</p>
    //         <p className="mt-1">Services</p>
    //       </div>
    //       <div className="flex flex-col ">
    //         <p className="font-semibold text-[36px] mb-7">Follow Us</p>
    //         {links.map((l, index) => (
    //           <div
    //             className={`flex mt-1 ${
    //               l.title === "Twitter" ? "gap-2" : "gap-[13px]"
    //             }`}
    //           >
    //             <img
    //               src={l.image}
    //               className={`-translate-y-[2px] ${
    //                 l.title === "Instagram" && "scale-90"
    //               }`}
    //               alt=""
    //             />
    //             <a href={l.link} target="_blank" rel="noreferrer">
    //               {l.title}
    //             </a>
    //           </div>
    //         ))}
    //       </div>
    //     </div>
    //   </div>
    //   <p className="mt-14 text-xl tracking-wide text-[#ffffff97] text-center mb-1 ">
    //     &copy; vaultXledger 2023
    //   </p>
    // </div>
    <div className=" font-karla text-white lg:px-[28px] xl:px-[32px]">
      <div
        style={{ borderBottom: "1px solid #535353" }}
        className="flex items-center justify-between lg:py-[16px] xl:py-[20px]"
      >
        <p className="text-[20px] font-mulish relative tracking-widest -translate-y-1 font-[700]">
          &copy; 2023 vault<span className="text-[35px]">X</span>ledger
          <img src={dashX} className="absolute left-[170px] bottom-0" alt="" />
        </p>
        <div className="flex items-center lg:gap-[20px] xl:gap-[23px]">
          <div>
            <FaInstagram size={23} />
          </div>
          <div>
            <FaFacebookF size={16} />
          </div>
          <div>
            <FaTwitter size={20} />
          </div>
          <div>
            <FaYoutube size={22} />
          </div>
        </div>
      </div>
      <div className="lg:py-[18px] lg:gap-[20px] xl:py-[24px] flex items-center xl:gap-[25px] text-[#FFFFFF] font-[400] lg:text-[12px] xl:text-[14px] 2xl:text-[16px]">
        <li>About Us</li>
        <li>Contact Us</li>
        <li>Privacy Policy</li>
        <li>Terms & Conditions</li>
      </div>
    </div>
  )
}

export default Footer
