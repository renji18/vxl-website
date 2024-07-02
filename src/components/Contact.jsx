import React, { useState } from "react"
import mail from "../assets/mail.svg"
import user from "../assets/user.svg"
import message from "../assets/message-2.svg"

const Contact = ({ contactPop, setContactPop }) => {
  const [input, setInput] = useState({})

  const handleInput = (e) => {
    setInput({ ...input, [e.target.id]: e.target.value })
  }

  return (
    <div
      className={`${
        contactPop ? "flex" : "hidden"
      } fixed top-0 left-0 bottom-0 right-0 z-[5056] justify-center items-center `}
    >
      <div
        className="bg-white/25 absolute h-screen w-screen"
        onClick={() => setContactPop(false)}
      />
      <div
        className={`bg-black border-[#7129D6] border-b-4 z-[5058] flex lg:scale-95 items-center justify-center lg:p-14 xl:p-20 rounded-xl`}
        // style={{
        //   boxShadow: "0 5px 20px -5px #7129D6",
        // }}
      >
        <div className="flex flex-col justify-center items-center lg:gap-[15px] xl:gap-[20px]">
          <div className="flex bg-black border-[#7129D6] border-2  items-center lg:gap-2 xl:gap-3 rounded-[5px] px-[17px] ">
            <img src={user} alt="" className="lg:h-[18px] xl:h-[24px]" />
            <input
              type="text"
              placeholder="Name"
              id="name"
              value={input.name}
              onChange={handleInput}
              autoComplete="off"
              className="bg-black tracking-wider lg:text-sm xl:text-base lg:py-[7px] xl:py-[11px] lg:w-[350px] xl:w-[400px] outline-none"
            />
          </div>

          <div className="flex bg-black border-[#7129D6] border-2 items-center lg:gap-2 xl:gap-3 rounded-[5px] px-[17px]">
            <img src={mail} alt="" className="lg:h-[15px] xl:h-[20px]" />
            <input
              type="email"
              placeholder="Email"
              id="email"
              value={input.email}
              onChange={handleInput}
              autoComplete="off"
              className="bg-black tracking-wider lg:text-sm xl:text-base lg:py-[7px] xl:py-[11px] lg:w-[350px] xl:w-[400px] outline-none"
            />
          </div>
          <div className="flex bg-black border-[#7129D6] border-2 items-start lg:gap-2 xl:gap-3 py-[11px] rounded-[5px] px-[17px]">
            <img src={message} alt="" className="lg:h-[19px] xl:h-[24px]" />
            <textarea
              placeholder="Message"
              id="message"
              value={input.message}
              onChange={handleInput}
              rows={4}
              className=" bg-black tracking-wider lg:text-sm xl:text-base lg:w-[350px] xl:w-[400px] -mt-0.5 outline-none"
            />
          </div>

          <button
            onClick={console.log(input)}
            className=" rounded-[8px] lg:py-[6px] lg:px-[40px] xl:py-[8px] xl:px-[45px] font-medium text-white bg-gradient-to-br from-[#7129D6] to-[#412565] "
          >
            Send
          </button>
        </div>
      </div>
    </div>
  )
}

export default Contact
