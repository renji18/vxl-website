//* Last Edited: Darshil Mistry 2024-05-02 13:09:24
//! There is an error

import { useState } from "react"
import "../customCard.css"
import { FaGithub } from "react-icons/fa6"
import { FaLinkedin } from "react-icons/fa6"
import { IoNavigate } from "react-icons/io5"

const TeamCard = ({ data }) => {
  const [hovering, isHovering] = useState(false)

  const socials = [
    {
      href: data?.socials?.github,
      className: "hover:text-zinc-700",
      element: <FaGithub size={19} />,
    },
    {
      href: data?.socials?.linkedIn,
      className: "hover:text-cyan-700",
      element: <FaLinkedin size={19} />,
    },
  ]

  return (
    <div
      onMouseEnter={() => isHovering(true)}
      onMouseLeave={() => isHovering(false)}
      className="flex  cursor-pointer items-center justify-center"
    >
      <div className="card">
        <div className="relative profile-pic">
          <div className={`${hovering ? "" : "bg-black/25"} absolute top-0 left-0 right-0 bottom-0 z-10`} />

          <img src={data?.profile} alt="Profile" />
        </div>

        <div className="details">
          <div className="content">
            <h2>{data?.name}</h2>
            <p className="tag">{data?.position}</p>
            <p className="about">{data?.about}</p>
          </div>

          <div className="buttons">
            <div className="social">
              {socials?.map((s) => (
                <a
                  key={s?.href}
                  href={s?.href}
                  className={s?.className}
                  target="_blank"
                  rel="noreferrer"
                >
                  {s?.element}
                </a>
              ))}
              {data?.portfolio && data?.portfolio !== "" && (
                <a
                  className="hover:text-rose-700"
                  href={data?.portfolio}
                  target="_blank"
                  rel="noreferrer"
                >
                  <IoNavigate size={19} />
                </a>
              )}
            </div>
            <div className="text-[13.2px] lg:text-[14.5px] tracking-wider link text font-semibold py-2 px-3">
              {data?.name}
            </div>

            {/* {hovering ? (
              <a
                href={data?.portfolio}
                target="_blank"
                rel="noreferrer"
                className="link text-white border-2 border-[#7129d6] flex items-center gap-1 text-[14.5px] tracking-wider font-semibold py-2 px-3"
              >
                <span>Portfolio</span>
                <i>
                  <GrWaypoint size={17} />
                </i>
              </a>
            ) : (
              <div className="border-2 text-[14.5px] tracking-wider border-[#a59dfd] text-white link text font-semibold py-2 px-3">
                {data?.name}
              </div>
            )} */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default TeamCard
