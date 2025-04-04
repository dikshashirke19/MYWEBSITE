"use client"

import { useEffect, useState } from "react"

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [hidden, setHidden] = useState(true)
  const [clicked, setClicked] = useState(false)
  const [linkHovered, setLinkHovered] = useState(false)

  useEffect(() => {
    // Only run on client
    if (typeof window === "undefined") return

    setHidden(false)

    const mMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
    }

    const mDown = () => {
      setClicked(true)
      setTimeout(() => setClicked(false), 150)
    }

    const handleLinkHoverIn = () => {
      setLinkHovered(true)
    }

    const handleLinkHoverOut = () => {
      setLinkHovered(false)
    }

    window.addEventListener("mousemove", mMove)
    window.addEventListener("mousedown", mDown)

    // Add event listeners to all clickable elements
    const clickables = document.querySelectorAll('a, button, input, textarea, select, [role="button"]')
    clickables.forEach((el) => {
      el.addEventListener("mouseenter", handleLinkHoverIn)
      el.addEventListener("mouseleave", handleLinkHoverOut)
    })

    return () => {
      window.removeEventListener("mousemove", mMove)
      window.removeEventListener("mousedown", mDown)

      clickables.forEach((el) => {
        el.removeEventListener("mouseenter", handleLinkHoverIn)
        el.removeEventListener("mouseleave", handleLinkHoverOut)
      })
    }
  }, [])

  // Don't render on server
  if (hidden) return null

  return (
    <>
      <div
        className={`cursor-dot ${clicked ? "active" : ""}`}
        style={{ left: `${position.x}px`, top: `${position.y}px` }}
      />
      <div
        className={`cursor-outline ${clicked || linkHovered ? "active" : ""}`}
        style={{ left: `${position.x}px`, top: `${position.y}px` }}
      />
    </>
  )
}

export default CustomCursor

