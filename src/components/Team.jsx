import React from "react"
import TeamCard from "./TeamCard"
import aadarsh from "../assets/teams/aadarsh.jpeg"
import mittal from "../assets/teams/mittal.jpeg"
import kartik from "../assets/teams/kartik.jpg"
import divyapal from "../assets/teams/divyapal.jpeg"
import anas from "../assets/teams/anas.jpeg"

const Team = () => {
  const data = [
    {
      name: "Kartik Joshi",
      position: "FOUNDER",
      profile: kartik,
      socials: { github: "", linkedIn: "" },
      portfolio: "",
      about:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis minima provident esse hic",
    },
    {
      name: "Divyapalsinh Chauhan",
      position: "C0-FOUNDER",
      profile: divyapal,
      socials: { github: "", linkedIn: "" },
      portfolio: "",
      about:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis minima provident esse hic",
    },
    {
      name: "Darshil",
      position: "DIRECTOR",
      profile:
        "https://i.pinimg.com/564x/e9/c4/2e/e9c42e19607ff4923ad0696f2f27e52c.jpg",
      socials: { github: "", linkedIn: "" },
      portfolio: "",
      about:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis minima provident esse hic",
    },
    {
      name: "Aadarsh Jha",
      position: "DIRECTOR",
      profile: aadarsh,
      socials: { github: "", linkedIn: "" },
      portfolio: "https://aadarsh-jha-portfolio.netlify.app/",
      about:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis minima provident esse hic",
    },
    {
      name: "Manan Panchal",
      position: "LEAD",
      profile:
        "https://i.pinimg.com/564x/e9/c4/2e/e9c42e19607ff4923ad0696f2f27e52c.jpg",
      socials: { github: "", linkedIn: "" },
      portfolio: "",
      about:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis minima provident esse hic",
    },
    {
      name: "MohmedAnas Gandiwala",
      position: "LEAD",
      profile: anas,
      socials: { github: "", linkedIn: "" },
      portfolio: "",
      about:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis minima provident esse hic",
    },
    {
      name: "Susmit Kulkarni",
      position: "DIRECTOR",
      profile:
        "https://i.pinimg.com/564x/e9/c4/2e/e9c42e19607ff4923ad0696f2f27e52c.jpg",
      socials: { github: "", linkedIn: "" },
      portfolio: "",
      about:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis minima provident esse hic",
    },
    {
      name: "Mittal Suthar",
      position: "DIRECTOR",
      profile: mittal,
      socials: { github: "", linkedIn: "" },
      portfolio: "",
      about:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis minima provident esse hic",
    },
  ]

  return (
    <section className="sticky min-h-screen pt-16 pb-[120px]">
      <div className="flex flex-col mx-20 mb-[77px]">
        <p className="font-bold text-6xl text-center">Team</p>
      </div>
      <div className="flex flex-wrap justify-evenly gap-y-5 lg:gap-y-10 mx-20">
        {data?.map((row) => (
          <TeamCard key={row?.name} data={row} />
        ))}
      </div>
    </section>
  )
}

export default Team
