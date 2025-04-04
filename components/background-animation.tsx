"use client"

import { useEffect, useState, useRef } from "react"
import { useTheme } from "next-themes"

const BackgroundAnimation = () => {
  const { theme } = useTheme()
  const [scrollY, setScrollY] = useState(0)
  const contributionGridRef = useRef<HTMLDivElement>(null)
  const pipelinePathsRef = useRef<HTMLDivElement>(null)

  // Create contribution grid data
  const generateContributionGrid = () => {
    const rows = 7
    const cols = 15
    const grid = []

    for (let i = 0; i < rows; i++) {
      const row = []
      for (let j = 0; j < cols; j++) {
        // Random intensity level (0-4)
        const intensity = Math.floor(Math.random() * 5)
        row.push(intensity)
      }
      grid.push(row)
    }

    return grid
  }

  const [contributionGrid] = useState(generateContributionGrid())

  // Handle scroll for parallax effect
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Animate contribution cells
  useEffect(() => {
    if (!contributionGridRef.current) return

    const cells = contributionGridRef.current.querySelectorAll(".contribution-cell")

    const animateCells = () => {
      // Randomly activate cells
      const randomIndex = Math.floor(Math.random() * cells.length)
      const cell = cells[randomIndex] as HTMLElement

      if (cell) {
        cell.classList.add("active")
        setTimeout(() => {
          cell.classList.remove("active")
        }, 1500)
      }
    }

    const interval = setInterval(animateCells, 300)
    return () => clearInterval(interval)
  }, [])

  // Create pipeline paths with dots
  useEffect(() => {
    if (!pipelinePathsRef.current) return

    const paths = pipelinePathsRef.current.querySelectorAll(".pipeline-path")

    paths.forEach((path) => {
      for (let i = 0; i < 2; i++) {
        const dot = document.createElement("div")
        dot.className = "pipeline-scroll-dot"
        path.appendChild(dot)
      }
    })
  }, [])

  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden">
      {/* GitHub contribution grid background */}
      <div
        ref={contributionGridRef}
        className="absolute inset-0 w-full h-full opacity-20 flex items-center justify-center"
        style={{
          transform: `translateY(${scrollY * 0.1}px)`,
        }}
      >
        <div className="grid grid-cols-15 gap-3 max-w-4xl mx-auto">
          {contributionGrid.flat().map((intensity, index) => {
            // Color based on intensity
            let color
            switch (intensity) {
              case 0:
                color = "bg-blue-950"
                break
              case 1:
                color = "bg-blue-900"
                break
              case 2:
                color = "bg-blue-800"
                break
              case 3:
                color = "bg-blue-700"
                break
              case 4:
                color = "bg-blue-600"
                break
              default:
                color = "bg-blue-950"
            }

            return (
              <div
                key={index}
                className={`contribution-cell w-6 h-6 rounded-sm ${color}`}
                style={{
                  transform: `translateY(${Math.sin(index * 0.5 + scrollY * 0.01) * 10}px)`,
                }}
              />
            )
          })}
        </div>
      </div>

      {/* Vertical pipeline paths */}
      <div
        ref={pipelinePathsRef}
        className="scrolling-pipeline"
        style={{
          transform: `translateY(${scrollY * 0.05}px)`,
        }}
      >
        <div className="pipeline-path pipeline-path-1"></div>
        <div className="pipeline-path pipeline-path-2"></div>
      </div>

      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent to-slate-950 opacity-70"></div>
    </div>
  )
}

export default BackgroundAnimation

