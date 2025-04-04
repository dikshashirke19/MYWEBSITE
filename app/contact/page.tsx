"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Mail, Phone, MapPin, Calendar, Github, Linkedin, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useToast } from "@/hooks/use-toast"
import CICDPipeline from "@/components/ci-cd-pipeline"
import ServiceRequestForm from "@/components/service-request-form"

export default function Contact() {
  const { toast } = useToast()
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })

  // Parallax effect values
  const headerY = useTransform(scrollYProgress, [0, 1], [0, 50])
  const formY = useTransform(scrollYProgress, [0, 1], [0, 100])
  const infoY = useTransform(scrollYProgress, [0, 1], [0, 70])

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "dikshasshirke@gmail.com",
      link: "mailto:dikshasshirke@gmail.com",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+91 706-764-7180",
      link: "tel:+917067647180",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Bhopal, MP, India",
      link: "https://maps.google.com/?q=Bhopal,India",
    },
  ]

  const socialLinks = [
    {
      icon: Github,
      name: "GitHub",
      link: "https://github.com/",
      color: "hover:text-gray-300",
    },
    {
      icon: Linkedin,
      name: "LinkedIn",
      link: "https://linkedin.com/",
      color: "hover:text-blue-400",
    },
    {
      icon: Twitter,
      name: "Twitter",
      link: "https://twitter.com/",
      color: "hover:text-blue-400",
    },
  ]

  return (
    <div className="space-y-12" ref={containerRef}>
      <motion.div className="text-center space-y-4" style={{ y: headerY }}>
        <h1 className="text-4xl font-bold">Get in Touch</h1>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Have a project in mind or need DevOps consulting? I'd love to hear from you. Fill out the form below or use
          any of the contact methods.
        </p>
      </motion.div>

      {/* CI/CD Pipeline Animation */}
      <CICDPipeline />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Contact Form */}
        <motion.div
          className="lg:col-span-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          style={{ y: formY }}
        >
          <Card className="glass border-blue-900/50">
            <CardHeader>
              <CardTitle>Send a Message</CardTitle>
              <CardDescription>Fill out the form below and I'll get back to you as soon as possible.</CardDescription>
            </CardHeader>
            <CardContent>
              <ServiceRequestForm />
            </CardContent>
          </Card>
        </motion.div>

        {/* Contact Info & Calendar */}
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          style={{ y: infoY }}
        >
          {/* Contact Info */}
          <Card className="glass border-blue-900/50">
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
              <CardDescription>Reach out directly through any of these channels</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {contactInfo.map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start space-x-3 p-3 rounded-md hover:bg-blue-900/20 transition-colors"
                >
                  <div className="bg-blue-900/30 p-2 rounded-full">
                    <item.icon className="h-5 w-5 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="font-medium">{item.title}</h3>
                    <p className="text-sm text-gray-400">{item.value}</p>
                  </div>
                </a>
              ))}
            </CardContent>
          </Card>

          {/* Schedule Meeting */}
          <Card className="glass border-blue-900/50">
            <CardHeader>
              <CardTitle>Schedule a Meeting</CardTitle>
              <CardDescription>Book a time slot that works for you</CardDescription>
            </CardHeader>
            <CardContent>
              <Button
                className="w-full bg-blue-600 hover:bg-blue-700"
                onClick={() => {
                  toast({
                    title: "Calendar integration",
                    description: "This would open your calendar booking system (Calendly, Cal.com, etc.)",
                  })
                }}
              >
                <Calendar className="h-4 w-4 mr-2" /> Book a Time Slot
              </Button>
            </CardContent>
          </Card>

          {/* Social Links */}
          <Card className="glass border-blue-900/50">
            <CardHeader>
              <CardTitle>Connect with Me</CardTitle>
              <CardDescription>Follow me on social media</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 rounded-full bg-slate-900/50 text-gray-400 ${social.color} transition-colors`}
                    aria-label={social.name}
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}

