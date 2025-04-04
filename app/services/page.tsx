"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Server, Cloud, Database, Code, GitBranch, Monitor, Shield, Cpu } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import CICDPipeline from "@/components/ci-cd-pipeline"

export default function Services() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })

  // Parallax effect values
  const headerY = useTransform(scrollYProgress, [0, 1], [0, 50])
  const servicesY = useTransform(scrollYProgress, [0, 1], [0, 100])

  const services = [
    {
      title: "Linux Training & Administration",
      description:
        "Master the command line and system administration with hands-on RHEL training. From basic commands to advanced system management.",
      icon: Server,
      color: "from-red-500/20 to-red-600/20",
      textColor: "text-red-400",
    },
    {
      title: "DevOps Implementation",
      description:
        "Transform your development workflow with DevOps practices. Learn CI/CD pipelines, automation, and collaboration tools.",
      icon: GitBranch,
      color: "from-blue-500/20 to-blue-600/20",
      textColor: "text-blue-400",
    },
    {
      title: "Kubernetes & Container Orchestration",
      description:
        "Deploy, scale, and manage containerized applications with Kubernetes. From pods to production-ready clusters.",
      icon: Database,
      color: "from-cyan-500/20 to-cyan-600/20",
      textColor: "text-cyan-400",
    },
    {
      title: "Docker & Containerization",
      description:
        "Package applications into portable containers. Learn Docker fundamentals, image creation, and container management.",
      icon: Code,
      color: "from-blue-500/20 to-blue-600/20",
      textColor: "text-blue-400",
    },
    {
      title: "Cloud Architecture (AWS, Azure, GCP)",
      description:
        "Design and implement scalable cloud solutions. Learn infrastructure as code, serverless computing, and cloud-native patterns.",
      icon: Cloud,
      color: "from-purple-500/20 to-purple-600/20",
      textColor: "text-purple-400",
    },
    {
      title: "Infrastructure as Code",
      description:
        "Automate infrastructure provisioning with Terraform and Ansible. Version-controlled, repeatable deployments.",
      icon: Cpu,
      color: "from-green-500/20 to-green-600/20",
      textColor: "text-green-400",
    },
    {
      title: "Monitoring & Observability",
      description:
        "Implement comprehensive monitoring solutions. From metrics collection to alerting and visualization with Prometheus and Grafana.",
      icon: Monitor,
      color: "from-yellow-500/20 to-yellow-600/20",
      textColor: "text-yellow-400",
    },
    {
      title: "Security & Compliance",
      description:
        "Secure your infrastructure and applications. Learn security best practices, vulnerability scanning, and compliance automation.",
      icon: Shield,
      color: "from-red-500/20 to-red-600/20",
      textColor: "text-red-400",
    },
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 },
  }

  return (
    <div className="space-y-12" ref={containerRef}>
      <motion.div className="text-center space-y-4" style={{ y: headerY }}>
        <h1 className="text-4xl font-bold">Services I Offer</h1>
        <p className="text-gray-400 max-w-2xl mx-auto">
          From Linux administration to cloud architecture, I provide training and consulting services to help you level
          up your DevOps game.
        </p>
      </motion.div>

      {/* CI/CD Pipeline Animation */}
      <CICDPipeline />

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        style={{ y: servicesY }}
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="glass hover:border-blue-500/50 transition-all h-full"
            variants={item}
            whileHover={{ y: -5 }}
          >
            <div className={`bg-gradient-to-br ${service.color} p-6 rounded-t-lg`}>
              <service.icon className={`h-8 w-8 ${service.textColor}`} />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-400 mb-4">{service.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <div className="glass p-8 text-center space-y-6">
        <h2 className="text-2xl font-bold">Ready to level up your DevOps skills?</h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Whether you need personalized training, consulting, or a complete DevOps transformation, I'm here to help you
          navigate the complex world of modern infrastructure.
        </p>
        <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
          <Link href="/contact">Schedule a Consultation</Link>
        </Button>
      </div>
    </div>
  )
}

