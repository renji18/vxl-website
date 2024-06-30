import React, { useEffect, useRef } from "react"

const CustomCursor = () => {
  const cursorRef = useRef(null)
  const innerCursorRef = useRef(null)

  useEffect(() => {
    const handleMouseMove = (event) => {
      const { clientX, clientY } = event

      innerCursorRef.current.style.left = `${clientX}px`
      innerCursorRef.current.style.top = `${clientY}px`

      // cursorRef.current.style.left = `${clientX}px`
      // cursorRef.current.style.top = `${clientY}px`

      cursorRef.current.animate(
        {
          left: `${clientX}px`,
          top: `${clientY}px`,
        },
        { duration: 200, fill: "forwards" }
      )
    }

    document.addEventListener("mousemove", handleMouseMove)

    return () => document.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <>
      <div
        ref={cursorRef}
        className="rounded-full z-[5055] pointer-events-none w-[30px] h-[30px] border-[2px] border-white fixed top-0 left-0"
        style={{
          transform: "translate(-50%,-50%)",
          boxShadow: "0 0 10px 5px #7129D6",
        }}
      ></div>
      <div
        ref={innerCursorRef}
        className="rounded-full z-[5055] pointer-events-none fixed bg-[#7129D6] h-[5px] w-[5px] top-0 left-0"
        style={{ transform: "translate(-50%,-50%)" }}
      ></div>
    </>
  )
}

export default CustomCursor
