"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Terminal } from "lucide-react"

// Funny Kubernetes commands with descriptions
const kubernetesCommands = [
  {
    command: "kubectl get pods --field-selector status.phase=Running",
    description: "Finding all the pods that are actually doing their job",
  },
  {
    command: "kubectl delete pod --grace-period=0 --force",
    description: "When you're done asking nicely",
  },
  {
    command: "kubectl describe pod | grep -i error",
    description: "Looking for problems in all the right places",
  },
  {
    command: "kubectl logs --tail=100 deployment/app",
    description: "Reading the last chapter of your app's diary",
  },
  {
    command: "kubectl scale deployment app --replicas=10",
    description: "Making 10 copies because one wasn't problematic enough",
  },
  {
    command: "kubectl rollout undo deployment/app",
    description: "The technical equivalent of 'CTRL+Z'",
  },
  {
    command: "kubectl port-forward pod/database 5432:5432",
    description: "Creating a secret tunnel to your database",
  },
  {
    command: "kubectl exec -it pod/app -- /bin/bash",
    description: "Breaking into your own container",
  },
  {
    command: "kubectl get nodes -o wide",
    description: "Checking which servers are about to cause you problems",
  },
  {
    command: "kubectl apply -f chaos-monkey.yaml",
    description: "Officially introducing chaos into your cluster",
  },
  {
    command: "kubectl top pods",
    description: "Finding out which pod is hogging all the resources",
  },
  {
    command: "kubectl get all --all-namespaces",
    description: "When you want to see EVERYTHING at once",
  },
]

interface KubernetesCommandsProps {
  position?: "top" | "bottom" | "random"
  interval?: number
}

const KubernetesCommands = ({ position = "random", interval = 8000 }: KubernetesCommandsProps) => {
  const [command, setCommand] = useState(kubernetesCommands[0])
  const [isVisible, setIsVisible] = useState(false)
  const [positionStyle, setPositionStyle] = useState({})

  useEffect(() => {
    // Show command after a short delay on initial load
    const initialTimer = setTimeout(() => {
      updateCommandAndPosition()
      setIsVisible(true)
    }, 2000)

    // Set up interval for changing commands
    const intervalTimer = setInterval(() => {
      setIsVisible(false)

      // Wait for exit animation to complete before updating
      setTimeout(() => {
        updateCommandAndPosition()
        setIsVisible(true)
      }, 500)
    }, interval)

    return () => {
      clearTimeout(initialTimer)
      clearInterval(intervalTimer)
    }
  }, [interval, position])

  const updateCommandAndPosition = () => {
    // Select a random command
    const randomIndex = Math.floor(Math.random() * kubernetesCommands.length)
    setCommand(kubernetesCommands[randomIndex])

    // Set position based on prop or random if specified
    if (position === "random") {
      const randomPosition = Math.random() > 0.5 ? "top" : "bottom"
      const randomLeft = Math.floor(Math.random() * 60) + 20 // 20% to 80%

      if (randomPosition === "top") {
        setPositionStyle({
          top: "20px",
          left: `${randomLeft}%`,
          transform: "translateX(-50%)",
        })
      } else {
        setPositionStyle({
          bottom: "20px",
          left: `${randomLeft}%`,
          transform: "translateX(-50%)",
        })
      }
    } else if (position === "top") {
      setPositionStyle({
        top: "20px",
        left: "50%",
        transform: "translateX(-50%)",
      })
    } else {
      setPositionStyle({
        bottom: "20px",
        left: "50%",
        transform: "translateX(-50%)",
      })
    }
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed z-50 max-w-md w-full px-4"
          style={positionStyle}
          initial={{ opacity: 0, y: position === "top" ? -50 : 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: position === "top" ? -50 : 50 }}
          transition={{ duration: 0.5 }}
        >
          <div className="glass p-4 border-blue-500/30 border shadow-lg">
            <div className="flex items-start gap-3">
              <div className="bg-blue-900/50 p-2 rounded-full flex-shrink-0">
                <Terminal className="h-5 w-5 text-blue-400" />
              </div>
              <div>
                <p className="font-mono text-sm text-blue-300 mb-1 overflow-x-auto pb-2 scrollbar-thin">
                  $ {command.command}
                </p>
                <p className="text-sm text-gray-400">{command.description}</p>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default KubernetesCommands

