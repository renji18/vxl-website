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

      const resetOpacity = () => {
        videoAsset.style.opacity = ""
        navbar.style.opacity = ""
        about.style.opacity = ""
      }

      const applyRotation = (widthFactor, rotationFactor) => {
        circleAsset.style.width = `${value / 10 + widthFactor}%`
        circleAsset.style.transform = `rotate3d(1, 0, 1, ${
          value / rotationFactor
        }deg)`
      }

      const adjustOpacity = (opacityLimit) => {
        homeDesc.style.opacity = 1 - value / opacityLimit
      }

      const applyVideoOpacity = (videoOpacity) => {
        videoAsset.style.opacity = videoOpacity
        navbar.style.opacity = 1
        about.style.opacity = 1
      }

      if (vw > 900) {
        if (value / 20 < 90) {
          resetOpacity()
          applyRotation(50, 10)
        } else {
          applyVideoOpacity(0.3)
        }
        adjustOpacity(2000)
      } else {
        if (value / 10 < 90) {
          resetOpacity()
          applyRotation(70, 5)
        } else {
          applyVideoOpacity(0.3)
        }
        adjustOpacity(1000)
      }

      circleAsset.style.opacity = 0.8 - value / 2500
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
      const vh = window.innerHeight
      const hdh = homeDesc.clientHeight

      homeTitle.style.scale = 1 - value / 1000

      const calculateStyles = (
        width,
        widthFactor,
        fontSizeBase,
        fontSizeFactor,
        leftBase,
        leftFactor,
        bottomBase,
        bottomFactor
      ) => {
        homeDesc.style.width = `${width + value * widthFactor}px`
        homeDesc.style.fontSize =
          vw > 900 &&
          value / 10 < 90 &&
          `${fontSizeBase + value / fontSizeFactor}px`
        homeDesc.style.left =
          value < vw / 4 && `${leftBase + value / leftFactor}px`
        homeDesc.style.bottom =
          value < (vh + hdh) / 1.5 && `${bottomBase + value / bottomFactor}px`
      }

      vw > 1200
        ? calculateStyles(255, 1.5, 24, 30, 40, 1, 20, 1.5)
        : vw > 900 && vw < 1199
        ? calculateStyles(225, 1.5, 20, 40, 40, 1.6, 20, 1.5)
        : vw > 500 && vw < 899
        ? calculateStyles(200, 1.5, 0, 0, 20, 1.8, 4, 1.5)
        : calculateStyles(180, 1.5, 0, 0, 20, 4, 4, 1.5)
    }

    window.addEventListener("scroll", move)
    return () => {
      window.removeEventListener("scroll", move)
    }
  }, [])

  return <div className="hidden"></div>
}

export default EffectController
