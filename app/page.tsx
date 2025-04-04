"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Cloud, Server, Database, Code, ChevronRight, Github } from "lucide-react"
import CICDPipeline from "@/components/ci-cd-pipeline"

export default function Home() {
  const [text, setText] = useState("")
  const fullText = "kubectl deploy awesome-devops-engineer"
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })

  // Parallax effect values
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 200])
  const skillsY = useTransform(scrollYProgress, [0, 1], [0, 100])
  const projectsY = useTransform(scrollYProgress, [0, 1], [0, 50])

  useEffect(() => {
    let i = 0
    const typingInterval = setInterval(() => {
      if (i < fullText.length) {
        setText(fullText.substring(0, i + 1))
        i++
      } else {
        clearInterval(typingInterval)
        setTimeout(() => {
          setText("")
          i = 0
        }, 2000)
      }
    }, 100)

    return () => clearInterval(typingInterval)
  }, [text])

  return (
    <div className="space-y-24" ref={containerRef}>
      {/* Hero Section */}
      <motion.section className="glass p-8 md:p-12 rounded-xl" style={{ y: heroY }}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <div className="inline-block px-3 py-1 rounded-full bg-blue-900/50 text-blue-300 text-sm font-medium mb-2">
              RHEL 9 Certified DevOps Engineer
            </div>
            <h1 className="text-4xl md:text-5xl font-bold">
              Hey, I&apos;m{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                Diksha Shirke
              </span>
            </h1>
            <p className="text-lg text-gray-300">
              Slaying the DevOps game with 2+ years of experience in Cloud Architecture, Automation, and Server
              Management. I make servers behave and clouds rain efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
                <Link href="/contact">Get in Touch</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/portfolio">View My Work</Link>
              </Button>
            </div>
            <div className="bg-slate-900 p-3 rounded-md font-mono text-sm text-blue-400">
              <span className="text-green-400">$</span> {text}
              <span className="animate-pulse">_</span>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 animated-gradient rounded-full"></div>
            <div className="relative z-10 p-2">
              <div className="relative w-full aspect-square max-w-md mx-auto overflow-hidden rounded-full border-4 border-blue-600/30">
                <Image
                  src="/placeholder.svg?height=500&width=500"
                  alt="Diksha Shirke"
                  width={500}
                  height={500}
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            {/* Floating DevOps Icons */}
            <motion.div
              className="absolute top-0 right-0 text-blue-400"
              animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
              transition={{ repeat: Number.POSITIVE_INFINITY, duration: 3 }}
            >
              <Cloud size={32} />
            </motion.div>
            <motion.div
              className="absolute bottom-10 left-0 text-blue-400"
              animate={{ y: [0, 10, 0], rotate: [0, -5, 0] }}
              transition={{ repeat: Number.POSITIVE_INFINITY, duration: 4 }}
            >
              <Server size={32} />
            </motion.div>
            <motion.div
              className="absolute top-1/4 left-0 text-blue-400"
              animate={{ y: [0, -8, 0], rotate: [0, -3, 0] }}
              transition={{ repeat: Number.POSITIVE_INFINITY, duration: 3.5 }}
            >
              <Database size={32} />
            </motion.div>
            <motion.div
              className="absolute bottom-0 right-1/4 text-blue-400"
              animate={{ y: [0, 8, 0], rotate: [0, 3, 0] }}
              transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2.5 }}
            >
              <Code size={32} />
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* CI/CD Pipeline Animation */}
      <CICDPipeline />

      {/* Skills Overview */}
      <motion.section style={{ y: skillsY }}>
        <h2 className="text-3xl font-bold mb-8 text-center">My DevOps Superpowers</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: "Cloud Architecture",
              description: "AWS, Azure, GCP infrastructure design and implementation",
              icon: Cloud,
            },
            {
              title: "Containerization",
              description: "Docker, Kubernetes, OpenShift orchestration and management",
              icon: Database,
            },
            {
              title: "Automation",
              description: "CI/CD pipelines, Infrastructure as Code with Terraform",
              icon: Code,
            },
            {
              title: "Server Management",
              description: "Linux administration, monitoring, and optimization",
              icon: Server,
            },
          ].map((skill, index) => (
            <motion.div
              key={index}
              className="glass p-6 hover:border-blue-500/50 transition-all"
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="bg-blue-900/30 p-3 rounded-full w-fit mb-4">
                <skill.icon className="h-6 w-6 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{skill.title}</h3>
              <p className="text-gray-400">{skill.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* GitHub Projects Preview */}
      <motion.section style={{ y: projectsY }}>
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">Featured Projects</h2>
          <Link href="/portfolio" className="text-blue-400 hover:text-blue-300 flex items-center gap-1">
            View all <ChevronRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              title: "Kubernetes Cluster Automation",
              description: "Automated deployment and scaling of Kubernetes clusters using Terraform and Ansible",
              tags: ["Kubernetes", "Terraform", "Ansible"],
            },
            {
              title: "CI/CD Pipeline Framework",
              description: "Reusable CI/CD pipeline templates for various application stacks",
              tags: ["Jenkins", "GitHub Actions", "Docker"],
            },
          ].map((project, index) => (
            <motion.div
              key={index}
              className="glass p-6 hover:border-blue-500/50 transition-all"
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <Github className="h-5 w-5 text-blue-400" />
              </div>
              <p className="text-gray-400 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="px-2 py-1 bg-blue-900/30 text-blue-300 text-xs rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  )
}

