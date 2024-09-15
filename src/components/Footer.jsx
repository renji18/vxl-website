import React from "react"
import dashX from "../assets/svg/dashx.svg"
import { FaLinkedinIn } from "react-icons/fa"

const Footer = () => {
  return (
    <div className="text-white relative">
      <div className="flex items-center justify-center pb-10">
        <p className="text-[16px] sm:text-[20px] relative tracking-widest -translate-y-1 font-[700]">
          vault<span className="text-[28px] sm:text-[35px]">X</span>ledger
          <img
            src={dashX}
            className="absolute left-16 scale-90 sm:scale-100 sm:left-20 bottom-0 sm:bottom-0.5"
            alt=""
          />
        </p>
      </div>
      <div className="absolute xl:hidden bottom-12 lg:bottom-14 right-10">
        <a
          href="https://www.linkedin.com/company/vaultxledger-0112/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedinIn size={23} />
        </a>
      </div>
    </div>
  )
}

export default Footer
