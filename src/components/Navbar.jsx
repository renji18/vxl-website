import dashX from "../assets/svg/dashx.svg"

const NavBar = ({ setContactPop }) => {
  return (
    <div
      id="navbar"
      className="flex fixed top-0 left-0 right-0 justify-center items-center z-[5054] py-2 transition-all duration-300 ease-linear opacity-0 bg-black"
      style={{
        boxShadow: "0px -5px 15px #ffffffb3",
      }}
    >
      <div className="flex w-full px-4 md:px-8 lg:px-0 lg:max-w-[870px] xl:max-w-[1170px] items-center justify-between">
        <p className="text-[16px] sm:text-[20px] relative tracking-widest -translate-y-1 font-[700]">
          vault<span className="text-[28px] sm:text-[35px]">X</span>ledger
          <img
            src={dashX}
            className="absolute left-16 scale-90 sm:scale-100 sm:left-20 bottom-0 sm:bottom-0.5"
            alt=""
          />
        </p>
        <button
          onClick={() => setContactPop(true)}
          className="flex items-center gap-1.5 border-[3.5px] sm:border-4 border-[#7129D6] text-white hover:text-white hover:bg-[#7129D6] font-[700] transition-all duration-700 ease-linear bg-black pr-[10px] sm:pr-[16px] pl-[6px] sm:pl-[10px] py-[3px] sm:py-[7px] text-[13px] sm:text-[15px] leading-[25.1px] rounded-[10px]"
        >
          <img
            src="https://raw.githubusercontent.com/MartinHeinz/MartinHeinz/master/wave.gif"
            alt=""
            className="w-[20px] sm:w-[26px]"
          ></img>
          <span className="sm:translate-y-[1px] ">Say Hi!</span>
        </button>
      </div>
    </div>
  )
}

export default NavBar
