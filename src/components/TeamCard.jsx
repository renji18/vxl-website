const TeamCard = ({ data }) => {
  return (
    <div className="max-w-[260px] xl:max-w-[270px] border border-white">
      <img
        src={data?.profile}
        className="w-[260px] h-[270px] xl:w-[270px] xl:h-[310px] object-cover object-top"
        alt=""
      />
      <div className="bg-[#f5f5f5] text-[#35393b] p-2">
        <p className="text-xl text-center w-full mb-1 font-semibold">
          {data?.name}
        </p>
        <p className="text-sm text-center">{data?.position}</p>
      </div>
    </div>
  )
}

export default TeamCard
