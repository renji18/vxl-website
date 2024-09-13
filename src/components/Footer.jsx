import React from "react"
import dashX from "../assets/svg/dashx.svg"

const Footer = () => {
  return (
    <div className="text-white">
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
    </div>
  )
}

export default Footer
