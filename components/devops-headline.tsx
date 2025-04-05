"use client"

import { useState, useEffect } from "react"
import { Terminal } from "lucide-react"

// DevOps facts and commands covering various topics with brief descriptions
const devopsFacts = [
  // Kubernetes
  {
    text: "kubectl get pods -o wide → Lists all pods with detailed information including IP and node",
    category: "Kubernetes",
  },
  { text: "kubectl rollout restart deployment/app → Restart pods without downtime", category: "Kubernetes" },
  { text: "kubectl top nodes → Shows CPU/Memory usage of nodes", category: "Kubernetes" },
  {
    text: "kubectl port-forward svc/redis 6379:6379 → Create a tunnel to access services locally",
    category: "Kubernetes",
  },

  // Docker
  { text: "docker stats → Real-time container resource usage statistics", category: "Docker" },
  { text: "docker-compose down -v → Stop and remove containers, networks, and volumes", category: "Docker" },
  { text: "docker history image:tag → Show the history of an image's layers", category: "Docker" },
  { text: "docker system prune -a → Remove all unused containers, networks, and images", category: "Docker" },

  // CI/CD
  { text: "Trunk-based development → Short-lived branches merged to main frequently", category: "CI/CD" },
  { text: "Canary deployments → Release to a small subset of users before full rollout", category: "CI/CD" },
  { text: "Feature flags → Toggle features without redeploying code", category: "CI/CD" },
  { text: "Blue-green deployments → Zero downtime by switching between identical environments", category: "CI/CD" },

  // GitHub
  { text: "git bisect → Binary search to find which commit introduced a bug", category: "GitHub" },
  { text: "git rebase -i HEAD~3 → Squash or edit your last 3 commits", category: "GitHub" },
  { text: "gh pr create --draft → Create a draft pull request with GitHub CLI", category: "GitHub" },
  { text: "git worktree → Work on multiple branches simultaneously without switching", category: "GitHub" },

  // DevOps Facts
  { text: "DORA metrics → Deployment frequency, lead time, MTTR, and change failure rate", category: "DevOps" },
  { text: "SRE → Site Reliability Engineering focuses on automation and observability", category: "DevOps" },
  { text: "Chaos Engineering → Intentionally break things to improve resilience", category: "DevOps" },
  { text: "GitOps → Infrastructure and application definitions stored as code in Git", category: "DevOps" },

  // Security
  { text: "Least privilege → Grant only the permissions needed to perform a task", category: "Security" },
  { text: "SBOM → Software Bill of Materials lists all components in your application", category: "Security" },
  { text: "CVE scanning → Continuously check for known vulnerabilities in dependencies", category: "Security" },
  { text: "Secret rotation → Regularly change credentials to limit exposure", category: "Security" },
]

const DevOpsHeadline = () => {
  const [currentFact, setCurrentFact] = useState(devopsFacts[0])

  useEffect(() => {
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * devopsFacts.length)
      setCurrentFact(devopsFacts[randomIndex])
    }, 5000) // Reduced from 8000ms to 5000ms

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="w-full bg-slate-900/80 backdrop-blur-sm border-b border-blue-900/30 py-1.5 px-4 text-sm overflow-hidden">
      <div className="container mx-auto flex items-center gap-2">
        <div className="bg-blue-900/50 p-1 rounded-full flex-shrink-0">
          <Terminal className="h-3 w-3 text-blue-400" />
        </div>
        <div className="flex items-center gap-2 overflow-hidden">
          <span
            className={`font-medium text-xs whitespace-nowrap flex-shrink-0 ${getCategoryColor(currentFact.category)}`}
          >
            {currentFact.category}:
          </span>
          <p className="font-mono text-xs text-gray-300 truncate">{currentFact.text}</p>
        </div>
      </div>
    </div>
  )
}

// Helper function to get color based on category
function getCategoryColor(category: string): string {
  switch (category) {
    case "Kubernetes":
      return "text-blue-400"
    case "Docker":
      return "text-cyan-400"
    case "CI/CD":
      return "text-green-400"
    case "GitHub":
      return "text-purple-400"
    case "DevOps":
      return "text-yellow-400"
    case "Security":
      return "text-red-400"
    default:
      return "text-gray-400"
  }
}

export default DevOpsHeadline

