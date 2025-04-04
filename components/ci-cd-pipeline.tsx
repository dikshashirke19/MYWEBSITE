"use client"

import { useEffect, useRef } from "react"
import { Code, GitBranch, Play, Check } from "lucide-react"

const CICDPipeline = () => {
  const pipelineRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!pipelineRef.current) return

    // Create pipeline dots
    for (let i = 0; i < 4; i++) {
      const dot = document.createElement("div")
      dot.className = "pipeline-dot"
      pipelineRef.current.appendChild(dot)
    }
  }, [])

  return (
    <div className="w-full my-8 glass p-4">
      <h3 className="text-lg font-semibold mb-4 text-center">CI/CD Pipeline</h3>
      <div className="pipeline-container" ref={pipelineRef}>
        <div className="pipeline-line"></div>

        {/* Pipeline nodes */}
        <div className="pipeline-node" style={{ left: "10%" }}>
          <div className="pipeline-node-pulse"></div>
          <Code size={14} className="text-blue-400" />
        </div>

        <div className="pipeline-node" style={{ left: "35%" }}>
          <div className="pipeline-node-pulse"></div>
          <GitBranch size={14} className="text-blue-400" />
        </div>

        <div className="pipeline-node" style={{ left: "60%" }}>
          <div className="pipeline-node-pulse"></div>
          <Play size={14} className="text-blue-400" />
        </div>

        <div className="pipeline-node" style={{ left: "85%" }}>
          <div className="pipeline-node-pulse"></div>
          <Check size={14} className="text-blue-400" />
        </div>
      </div>

      <div className="flex justify-between text-xs text-gray-400 mt-2 px-8">
        <span>Code</span>
        <span>Build</span>
        <span>Deploy</span>
        <span>Release</span>
      </div>
    </div>
  )
}

export default CICDPipeline

