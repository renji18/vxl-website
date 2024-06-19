import about_us from "../assets/about_us.jpg"

const AboutUs = () => {
  const points = [
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam, aspernatur. Repudiandae quisquam quae alias, exercitationem quas! Vero voluptate nisi aliquid, perferendis laboriosam vitae fuga totam saepe eos sapiente quam.",
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam, aspernatur. Repudiandae quisquam quae alias, exercitationem quas! Vero voluptate nisi aliquid, perferendis laboriosam vitae fuga totam saepe eos sapiente quam.",
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam, aspernatur. Repudiandae quisquam quae alias, exercitationem quas! Vero voluptate nisi aliquid, perferendis laboriosam vitae fuga totam saepe eos sapiente quam.",
  ]

  return (
    <div className="min-h-screen px-28 flex justify-center items-center">
      <div className="flex items-center justify-center gap-20">
        <div className="border border-[#ffffff9a] p-1">
          <img
            className="w-[600px] mix-blend-luminosity"
            src={about_us}
            alt="cube"
          />
        </div>
        <div className="w-[600px] items-start gap-12 h-[500px] flex flex-col justify-between">
          <h1 className="font-bold text-6xl">Our Story</h1>
          <div className="font-light text-lg tracking-wide flex flex-col justify-between flex-1">
            {points?.map((p, index) => (
              <p key={index}>{p}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUs
