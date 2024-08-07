import React from "react"
import dashX from "../assets/dashx.svg"
import {
  FaInstagram,
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa"

const Footer = () => {
  return (
    <div className=" font-karla text-white px-[20px] sm:px-[28px] xl:px-[32px]">
      <div
        style={{ borderBottom: "1px solid #535353" }}
        className="flex items-center justify-between sm:py-[16px] xl:py-[20px]"
      >
        <p className="text-[15px] sm:text-[20px] font-mulish relative tracking-widest -translate-y-1 font-[700]">
          &copy; 2023 vault<span className="text-[25px] sm:text-[35px]">X</span>
          ledger
          <img
            src={dashX}
            className="absolute scale-90 sm:scale-100 sm:left-[170px] left-[125px] bottom-0 sm:bottom-0.5"
            alt=""
          />
        </p>
        <div className="flex items-center gap-[6px] sm:gap-[9px] md:gap-[20px] xl:gap-[23px] scale-90 sm:scale-100">
          <a
            href="https://www.linkedin.com/company/vaultxledger-0112/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedinIn size={23} />
          </a>
          {/* <div>
            <FaInstagram size={23} />
          </div> */}
          {/* <div>
            <FaFacebookF size={16} />
          </div> */}
          {/* <div>
            <FaTwitter size={20} />
          </div> */}
          {/* <div>
            <FaYoutube size={22} />
          </div> */}
        </div>
      </div>
      {/* <div className="py-[13px] sm:py-[18px] sm:gap-[20px] xl:py-[24px] flex flex-wrap gap-x-[25px] gap-y-1 items-center xl:gap-[25px] text-[#ffffff80] font-[400] text-[12px] xl:text-[14px] 2xl:text-[16px] tracking-wide">
        <p>
          Designed and Developed by{" "}
          <a
            href="https://www.linkedin.com/in/aadarshJha1401/"
            target="_blank"
            className="text-white cursor-pointer"
            rel="noreferrer"
          >
            Aadarsh
          </a>{" "}
          and{" "}
          <a
            href="https://www.linkedin.com/in/mittal-suthar/"
            target="_blank"
            className="text-white cursor-pointer"
            rel="noreferrer"
          >
            Mittal
          </a>
        </p>
      </div> */}
    </div>
  )
}

export default Footer
