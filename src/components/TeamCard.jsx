import { FaGithub } from "react-icons/fa6"
import { FaLinkedin } from "react-icons/fa6"
import { GrWaypoint } from "react-icons/gr"

const TeamCard = ({ data }) => {
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
    <div className="flex cursor-pointer items-center justify-center">
      <div className="card">
        <div className="profile-pic">
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
                  <GrWaypoint size={17} />
                </a>
              )}
            </div>
            <div className="text-[14.5px] tracking-wider link text font-semibold py-2 px-3">
              {data?.name}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TeamCard
