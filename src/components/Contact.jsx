import React, { useEffect, useRef, useState } from "react"
import emailjs from "@emailjs/browser"
import mail from "../assets/svg/mail.svg"
import user from "../assets/svg/user.svg"
import message from "../assets/svg/message-2.svg"

const Contact = ({ contactPop, setContactPop }) => {
  const formRef = useRef()
  const [input, setInput] = useState({})
  const [showError, setShowError] = useState("")
  const [sentEmail, setSentEmail] = useState(false)

  const handleInput = (e) => {
    setShowError("")
    setInput({ ...input, [e.target.id]: e.target.value })
  }

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const sendEmail = async (object, templateId) => {
    const { email, message, name } = input
    if (!email || !message || !name)
      return setShowError("Please Fill All The Fields")
    if (!validateEmail(email))
      return setShowError("Please Provide A Valid Email")

    const res = await emailjs.sendForm(
      process.env.REACT_APP_EMAIL_SERVICE_ID,
      templateId,
      object,
      {
        publicKey: process.env.REACT_APP_EMAIL_PUBLIC_ID,
      }
    )

    if (res.text === "OK") {
      setSentEmail(true)
    }
  }

  useEffect(() => {
    const disableScroll = (e) => {
      e.preventDefault()
    }

    if (contactPop) {
      window.addEventListener("scroll", disableScroll, { passive: false })
      window.addEventListener("wheel", disableScroll, { passive: false })
      window.addEventListener("touchmove", disableScroll, { passive: false })
    } else {
      window.removeEventListener("scroll", disableScroll, { passive: false })
      window.removeEventListener("wheel", disableScroll, { passive: false })
      window.removeEventListener("touchmove", disableScroll, { passive: false })
    }

    return () => {
      window.removeEventListener("scroll", disableScroll, { passive: false })
      window.removeEventListener("wheel", disableScroll, { passive: false })
      window.removeEventListener("touchmove", disableScroll, { passive: false })
    }
  }, [contactPop])

  useEffect(() => {
    const clearSent = () => {
      if (sentEmail === false) return
      setTimeout(() => {
        setInput({})
        setShowError("")
        setSentEmail(false)
        setContactPop(false)
      }, 2500)
    }
    clearSent()
  }, [sentEmail])

  return (
    <div
      className={`${
        contactPop ? "flex" : "hidden"
      } fixed top-0 left-0 bottom-0 right-0 z-[5056] justify-center items-center `}
    >
      <div
        className="bg-white/25 absolute h-screen w-screen"
        onClick={() => {
          setContactPop(false)
          setInput({})
          setShowError("")
          setSentEmail(false)
        }}
      />
      <div
        className={`bg-black border-[#7129D6] border-b-4 z-[5058] flex scale-110 h-[410px] sm:scale-95 items-center justify-center p-5 sm:p-14 xl:p-20 rounded-xl relative`}
      >
        {sentEmail ? (
          <div className="relative scale-[1.5]">
            <iframe
              title="check"
              src="https://giphy.com/embed/ibolLe3mOqHE3PQTtk"
              frameBorder="0"
              // class="giphy-embed"
              allowFullScreen
              onMouseEnter={(e) => e.preventDefault()}
              style={{
                filter: "invert(1)",
                width: "100%",
                height: "100%",
                zIndex: 0,
                scale: 3,
              }}
            ></iframe>
          </div>
        ) : (
          <form
            className="flex flex-col justify-center items-center gap-[16px] xl:gap-[20px]"
            ref={formRef}
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="flex bg-black border-[#7129D6] border-2  items-center gap-2 xl:gap-3 rounded-[5px] px-[17px] ">
              <img src={user} alt="" className="h-[18px] xl:h-[24px]" />
              <input
                id="name"
                value={input?.name}
                onChange={handleInput}
                autoComplete="off"
                className="bg-black tracking-wider text-sm xl:text-base py-[7px] xl:py-[11px] w-[200px] sm:w-[350px] xl:w-[400px] outline-none"
                type="text"
                name="from_name"
                placeholder="Your Name"
              />
            </div>

            <div className="flex bg-black border-[#7129D6] border-2 items-center gap-2 xl:gap-3 rounded-[5px] px-[17px]">
              <img src={mail} alt="" className="h-[15px] xl:h-[20px]" />
              <input
                id="email"
                value={input?.email}
                onChange={handleInput}
                autoComplete="off"
                className="bg-black tracking-wider text-sm xl:text-base py-[7px] xl:py-[11px] w-[200px] sm:w-[350px] xl:w-[400px] outline-none"
                type="email"
                name="from_email"
                placeholder="Your Email"
              />
            </div>
            <div className="flex bg-black border-[#7129D6] border-2 items-start gap-2 xl:gap-3 py-[11px] rounded-[5px] px-[17px]">
              <img src={message} alt="" className="h-[19px] xl:h-[24px]" />
              <textarea
                id="message"
                value={input?.message}
                onChange={handleInput}
                rows={5}
                className=" bg-black tracking-wider text-sm xl:text-base w-[200px] sm:w-[350px] xl:w-[400px] -mt-0.5 outline-none resize-none"
                name="message"
                placeholder="Your Message"
              ></textarea>
            </div>

            {showError !== "" && (
              <p className="leading-none -my-2.5 text-sm">{showError}</p>
            )}

            <button
              type="submit"
              className=" rounded-[8px] py-[6px] px-[40px] xl:py-[8px] xl:px-[45px] font-medium text-white bg-gradient-to-br from-[#7129D6] to-[#412565]"
              onClick={() => {
                sendEmail(
                  formRef.current,
                  process.env.REACT_APP_EMAIL_TEMPLATE_VXL
                )
              }}
            >
              Send Email
            </button>
          </form>
        )}
      </div>
    </div>
  )
}

export default Contact
