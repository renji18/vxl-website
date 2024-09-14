import React, { useEffect } from "react"

const EffectController = () => {
  // rotate circle and bring out video, navbar and about section
  useEffect(() => {
    const rotate = () => {
      const circleAsset = document.getElementById("home-asset-circle")
      const videoAsset = document.getElementById("home-asset-video")
      const homeDesc = document.getElementById("home-desc")
      const navbar = document.getElementById("navbar")
      const about = document.getElementById("about-us")

      let value = window.scrollY
      const vw = window.innerWidth

      if (value / 20 < 90) {
        videoAsset.style.opacity = ""
        navbar.style.opacity = ""
        about.style.opacity = ""
        circleAsset.style.opacity = 0.8 - value / 2500
        homeDesc.style.opacity = 1 - value / 2000
        circleAsset.style.transform = `rotate3d(1 , 0, 1, ${value / 10}deg)`

        if (vw > 900) {
          circleAsset.style.width = `${value / 10 + 50}%`
        } else {
          circleAsset.style.width = `${value / 10 + 70}%`
        }
      } else {
        circleAsset.style.opacity = 0.8 - value / 2500
        homeDesc.style.opacity = 1 - value / 2000
        videoAsset.style.opacity = 0.3
        navbar.style.opacity = 1
        about.style.opacity = 1
      }
    }

    window.addEventListener("scroll", rotate)
    return () => {
      window.removeEventListener("scroll", rotate)
    }
  }, [])

  // move title and description
  useEffect(() => {
    const move = () => {
      const homeTitle = document.getElementById("home-title")
      const homeDesc = document.getElementById("home-desc")

      if (!homeDesc) return
      let value = window.scrollY
      const vw = window.innerWidth

      homeTitle.style.scale = 1 - value / 1000
      homeDesc.style.width = `${255 + value * 1.5}px`

      homeDesc.style.bottom =
        value < (window.innerHeight + homeDesc.clientHeight) / 1.5 &&
        `${20 + value / 1.5}px`

      if (vw > 1200) {
        homeDesc.style.fontSize = value / 10 < 90 && `${24 + value / 30}px`
        homeDesc.style.left = value < vw / 4 && `${40 + value}px`
      } else if (vw > 900 && vw < 1199) {
        homeDesc.style.fontSize = value / 10 < 90 && `${20 + value / 50}px`
        homeDesc.style.left = value < vw / 4 && `${40 + value / 1.6}px`
      } else if (vw > 500 && vw < 899) {
        homeDesc.style.left = value < vw / 4 && `${40 + value / 1.3}px`
      } else {
        homeDesc.style.left = value < vw / 4 && `${40 + value / 3.5}px`
      }
    }

    window.addEventListener("scroll", move)
    return () => {
      window.removeEventListener("scroll", move)
    }
  }, [])

  return <div className="hidden"></div>
}

export default EffectController
