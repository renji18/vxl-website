import React from "react"
import TeamCard from "./TeamCard"
import aadarsh from "../assets/teams/aadarsh.jpeg"
import mittal from "../assets/teams/mittal.jpeg"
import kartik from "../assets/teams/kartik.jpg"
import divyapal from "../assets/teams/divyapal.jpeg"
import anas from "../assets/teams/anas.jpg"
import darshil from "../assets/teams/darshil.jpg"
import manan from "../assets/teams/manan.jpg"

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
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis minima provident esse hic",
    },
    {
      name: "Divyapalsinh Chauhan",
      position: "C0-FOUNDER",
      profile: divyapal,
      socials: { linkedIn: "", github: "" },
      portfolio: "",
      about:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis minima provident esse hic",
    },
    {
      name: "Darshil Mistry",
      position: "DIRECTOR",
      profile: darshil,
      socials: { linkedIn: "", github: "" },
      portfolio: "",
      about:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis minima provident esse hic",
    },
    {
      name: "Aadarsh Jha",
      position: "DIRECTOR",
      profile: aadarsh,
      socials: {
        linkedIn: "https://www.linkedin.com/in/aadarshJha1401/",
        github: "",
      },
      portfolio: "https://aadarsh-jha-portfolio.netlify.app/",
      about:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis minima provident esse hic",
    },
    {
      name: "MohmedAnas Gandiwala",
      position: "LEAD",
      profile: anas,
      socials: { linkedIn: "", github: "" },
      portfolio: "",
      about:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis minima provident esse hic",
    },
    {
      name: "Manan Panchal",
      position: "LEAD",
      profile: manan,
      socials: { linkedIn: "", github: "" },
      portfolio: "",
      about:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis minima provident esse hic",
    },
    {
      name: "Mittal Suthar",
      position: "DIRECTOR",
      profile: mittal,
      socials: {
        linkedIn: "https://www.linkedin.com/in/mittal-suthar/",
        github: "",
      },
      portfolio: "",
      about:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis minima provident esse hic",
    },
    {
      name: "Susmit Kulkarni",
      position: "DIRECTOR",
      profile:
        "https://i.pinimg.com/564x/e9/c4/2e/e9c42e19607ff4923ad0696f2f27e52c.jpg",
      socials: { linkedIn: "", github: "" },
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
