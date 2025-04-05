"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Award, Briefcase, GraduationCap, Github, ExternalLink, ArrowLeft } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import CICDPipeline from "@/components/ci-cd-pipeline"

export default function Portfolio() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })

  // Parallax effect values
  const headerY = useTransform(scrollYProgress, [0, 1], [0, 50])
  const profileY = useTransform(scrollYProgress, [0, 1], [0, 80])
  const skillsY = useTransform(scrollYProgress, [0, 1], [0, 100])
  const experienceY = useTransform(scrollYProgress, [0, 1], [0, 70])
  const projectsY = useTransform(scrollYProgress, [0, 1], [0, 40])

  const skills = [
    { name: "Linux (RHEL)", level: 95 },
    { name: "AWS", level: 90 },
    { name: "Kubernetes", level: 85 },
    { name: "Docker", level: 90 },
    { name: "Python", level: 80 },
    { name: "Terraform", level: 85 },
    { name: "CI/CD", level: 90 },
    { name: "OpenShift", level: 80 },
  ]

  const experiences = [
    {
      title: "DevOps Engineer",
      company: "Tech Solutions Inc.",
      period: "2023 - Present",
      description:
        "Implemented and maintained CI/CD pipelines, managed Kubernetes clusters, and automated infrastructure deployment using Terraform and Ansible.",
    },
    {
      title: "Systems Administrator",
      company: "Cloud Innovations",
      period: "2021 - 2023",
      description: "Managed Linux servers, implemented monitoring solutions, and assisted in cloud migration projects.",
    },
  ]

  const certifications = [
    {
      name: "Red Hat Certified Engineer (RHEL 9)",
      issuer: "Red Hat",
      date: "2023",
    },
    {
      name: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      date: "2022",
    },
    {
      name: "Certified Kubernetes Administrator",
      issuer: "Cloud Native Computing Foundation",
      date: "2022",
    },
  ]

  const projects = [
    {
      title: "Kubernetes Cluster Automation",
      description: "Automated deployment and scaling of Kubernetes clusters using Terraform and Ansible",
      tags: ["Kubernetes", "Terraform", "Ansible"],
      github: "https://github.com",
      demo: "https://github.com",
    },
    {
      title: "CI/CD Pipeline Framework",
      description: "Reusable CI/CD pipeline templates for various application stacks",
      tags: ["Jenkins", "GitHub Actions", "Docker"],
      github: "https://github.com",
    },
    {
      title: "Cloud Cost Optimization Tool",
      description: "Python tool to analyze and optimize cloud resource usage and costs",
      tags: ["Python", "AWS", "Cost Management"],
      github: "https://github.com",
    },
    {
      title: "Infrastructure Monitoring Dashboard",
      description: "Comprehensive monitoring solution using Prometheus and Grafana",
      tags: ["Prometheus", "Grafana", "Monitoring"],
      github: "https://github.com",
      demo: "https://github.com",
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
    <div className="space-y-16" ref={containerRef}>
      <motion.div className="text-center space-y-4" style={{ y: headerY }}>
        <Link href="/" className="inline-flex items-center text-blue-400 hover:text-blue-300 mb-4">
          <ArrowLeft className="h-4 w-4 mr-1" /> Back to Home
        </Link>
        <h1 className="text-4xl font-bold">Meet Our Expert</h1>
        <p className="text-gray-400 max-w-2xl mx-auto">The driving force behind Devico's DevOps excellence</p>
      </motion.div>

      {/* Profile Section */}
      <motion.section className="glass p-8 md:p-12 rounded-xl" style={{ y: profileY }}>
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
                <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                  View My GitHub
                </a>
              </Button>
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
          </div>
        </div>
      </motion.section>

      {/* CI/CD Pipeline Animation */}
      <CICDPipeline />

      {/* Skills Section */}
      <motion.section style={{ y: skillsY }}>
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <Award className="h-6 w-6 text-blue-400" />
          Technical Skills
        </h2>
        <div className="glass p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                className="space-y-2"
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex justify-between">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-gray-400">{skill.level}%</span>
                </div>
                <Progress value={skill.level} className="h-2" />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Experience Section */}
      <motion.section style={{ y: experienceY }}>
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <Briefcase className="h-6 w-6 text-blue-400" />
          Work Experience
        </h2>
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="glass p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                <h3 className="text-xl font-semibold">{exp.title}</h3>
                <Badge variant="outline" className="mt-2 md:mt-0">
                  {exp.period}
                </Badge>
              </div>
              <p className="text-blue-400 mb-3">{exp.company}</p>
              <p className="text-gray-400">{exp.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Certifications Section */}
      <motion.section style={{ y: experienceY }}>
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <GraduationCap className="h-6 w-6 text-blue-400" />
          Certifications
        </h2>
        <div className="glass p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                className="p-4 border border-blue-900/50 rounded-lg bg-blue-950/30"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <h3 className="font-semibold mb-2">{cert.name}</h3>
                <p className="text-sm text-gray-400">{cert.issuer}</p>
                <p className="text-xs text-gray-500 mt-1">{cert.date}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Projects Section */}
      <motion.section style={{ y: projectsY }}>
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <Github className="h-6 w-6 text-blue-400" />
          GitHub Projects
        </h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="glass p-6 hover:border-blue-500/50 transition-all"
              variants={item}
              whileHover={{ y: -5 }}
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <div className="flex space-x-2">
                  <Link
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    <Github className="h-5 w-5" />
                  </Link>
                  {project.demo && (
                    <Link
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-blue-400 transition-colors"
                    >
                      <ExternalLink className="h-5 w-5" />
                    </Link>
                  )}
                </div>
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
        </motion.div>
      </motion.section>

      {/* Education Section */}
      <motion.section style={{ y: projectsY }}>
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <GraduationCap className="h-6 w-6 text-blue-400" />
          Education
        </h2>
        <div className="glass p-6">
          <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
            <h3 className="text-xl font-semibold">Bachelor of Technology in Computer Science</h3>
            <Badge variant="outline">2017 - 2021</Badge>
          </div>
          <p className="text-blue-400 mb-3">Technical University</p>
          <p className="text-gray-400">
            Focused on computer networks, operating systems, and cloud computing technologies.
          </p>
        </div>
      </motion.section>

      {/* Back to Website Button */}
      <div className="text-center mb-8">
        <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
          <Link href="/">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Devico Website
          </Link>
        </Button>
      </div>
    </div>
  )
}

