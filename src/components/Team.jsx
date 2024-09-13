import React from "react"
import TeamCard from "./TeamCard"
import aadarsh from "../assets/teams/aadarsh.jpeg"
import mittal from "../assets/teams/mittal.jpeg"
import kartik from "../assets/teams/kartik.jpg"
import divyapal from "../assets/teams/susmit.jpg"
import anas from "../assets/teams/anas.jpeg"
import darshil from "../assets/teams/darshil.jpg"
import manan from "../assets/teams/manan.jpg"
import susmit from "../assets/teams/susmit.jpg"

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
        "Relentless problem solver, unwavering fighter. Empathetic leader prioritizing team well-being and fosters innovation through collaboration and persistence.",
    },
    {
      name: "Darshil Mistry",
      position: "FOUNDING MEMBER & TECH LEAD",
      profile: darshil,
      socials: { linkedIn: "Linkedin.com/in/idarshilmistry", github: "" },
      portfolio: "",
      about:
        "Life is too short to think, just take a leap of faith. Developer by the day, gamer by the night.",
    },
    {
      name: "Aadarsh Jha",
      position: "FOUNDING MEMBER & TECH LEAD",
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
        "Graphic designers are visual storytellers, weaving tales of beauty and function, one design at time.",
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
        "Crafting impactful designs and pioneering tech solutions. Committed to continuous learning and constant upgrades to shape the future.",
    },
    {
      name: "Mittal Suthar",
      position: "FRONTEND DEV & UI/UX DESIGNER",
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
        "Digital magus, open-source crusader, imperial historian. Building the future, one commit at a time.",
    },
  ]

  return (
    <section className="min-h-screen flex justify-center items-center mt-32 md:mt-20 mb-[40px] md:mb-[80px]">
      <div className="w-full lg:max-w-[870px] xl:max-w-[1170px] flex flex-col items-center justify-center">
        <div className="flex flex-col mx-20 mb-10">
          <p className="font-bold text-4xl md:text-5xl lg:text-6xl">Team</p>
        </div>
        <div className="flex flex-wrap justify-evenly gap-x-3 gap-y-6 md:gap-y-10">
          {data?.map((row) => (
            <TeamCard key={row?.name} data={row} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Team
