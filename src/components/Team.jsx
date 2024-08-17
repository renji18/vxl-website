import React from "react"
import TeamCard from "./TeamCard"
import aadarsh from "../assets/teams/aadarsh.jpeg"
import mittal from "../assets/teams/mittal.jpeg"
import kartik from "../assets/teams/kartik.jpg"
import divyapal from "../assets/teams/divyapal.jpeg"
import anas from "../assets/teams/anas.jpg"
import darshil from "../assets/teams/darshil.jpg"
import manan from "../assets/teams/manan.jpg"
import susmit from "../assets/teams/susmit.png"

const Team = () => {
  const data = [
    {
      name: "Kartik Joshi",
      position: "FOUNDER",
      profile: kartik,
      socials: {
        linkedIn: "https://www.linkedin.com/in/kartikjoshi23",
        github: "",
      },
      portfolio: "",
      about:
        "Driven by relentless pursuit of innovation and problem-solving, striving to make valuable contributions towards Nation Building. ",
    },
    {
      name: "Divyapalsinh Chauhan",
      position: "C0-FOUNDER",
      profile: divyapal,
      socials: {
        linkedIn:
          "https://www.linkedin.com/in/divyapalsinh-chauhan-627916235?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        github: "",
      },
      portfolio: "",
      about:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis minima provident esse hic",
    },
    {
      name: "Darshil Mistry",
      position: "TECH LEAD",
      profile: darshil,
      socials: { linkedIn: "Linkedin.com/in/idarshilmistry", github: "" },
      portfolio: "",
      about:
        "Life is too short to think, just take a leap of faith. Developer by the day, gamer by the night.",
    },
    {
      name: "Aadarsh Jha",
      position: "TECH LEAD",
      profile: aadarsh,
      socials: {
        linkedIn: "https://www.linkedin.com/in/aadarshJha1401/",
        github: "",
      },
      portfolio: "https://aadarsh-jha-portfolio.netlify.app/",
      about:
        "Turning complex problems into elegant code. Passionate about leveraging technology to build the future, one line at a time.",
    },
    {
      name: "MohmedAnas Gandiwala",
      position: "MARKETING & MEDIA",
      profile: anas,
      socials: {
        linkedIn: "https://linkedin.com/in/mohmedanas-gandiwala-a09264284",
        github: "",
      },
      portfolio: "",
      about:
        "Graphic design is my canvas where creativity meets strategy. Through color, form, and digital artistry, I craft visuals that captivate and communicate with purpose.",
    },
    {
      name: "Manan Panchal",
      position: "MARKETING & MEDIA",
      profile: manan,
      socials: {
        linkedIn: "https://www.linkedin.com/in/manan-panchal2802/",
        github: "",
      },
      portfolio: "",
      about:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis minima provident esse hic",
    },
    {
      name: "Mittal Suthar",
      position: "FRONTEND DEVELOPER & UI/UX DESIGNER",
      profile: mittal,
      socials: {
        linkedIn: "https://www.linkedin.com/in/mittal-suthar/",
        github: "",
      },
      portfolio: "",
      about:
        "Code artisan blending creativity with technology. Building impactful software solutions that push boundaries and inspire change.",
    },
    {
      name: "Susmit Kulkarni",
      position: "AI/ML DEVELOPER",
      profile: susmit,
      socials: {
        linkedIn: "https://www.linkedin.com/in/susmit-kulkarni-5a626124b/",
        github: "",
      },
      portfolio: "",
      about:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis minima provident esse hic",
    },
  ]

  return (
    <section className="sticky min-h-screen mt-20 pt-16 mb-[150px]">
      <div className="flex flex-col lg:mx-20 mb-[35px] md:mb-[57px] xl:mb-[77px]">
        <p className="font-bold text-6xl text-center">Team</p>
      </div>
      <div className="flex flex-wrap px-2 gap-x-2 justify-evenly gap-y-5 sm:gap-y-10 sm:mx-3 xl:mx-20">
        {data?.map((row) => (
          <TeamCard key={row?.name} data={row} />
        ))}
      </div>
    </section>
  )
}

export default Team
