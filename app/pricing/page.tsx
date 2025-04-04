"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Server, Cloud, Database, GitBranch, Check, X, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import CICDPipeline from "@/components/ci-cd-pipeline"
import { Badge } from "@/components/ui/badge"
import { useToast } from "@/hooks/use-toast"

export default function Pricing() {
  const { toast } = useToast()
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })

  // Parallax effect values
  const headerY = useTransform(scrollYProgress, [0, 1], [0, 50])
  const pricingY = useTransform(scrollYProgress, [0, 1], [0, 100])

  const services = [
    {
      icon: Server,
      title: "Linux Training & Administration",
      description: "Master Linux administration with hands-on RHEL training",
      color: "from-red-500/20 to-red-600/20",
      textColor: "text-red-400",
      plans: [
        {
          name: "Basic",
          price: "$299",
          duration: "per person",
          features: [
            "Command line basics",
            "System administration",
            "User management",
            "Basic troubleshooting",
            "5 hours of training",
          ],
          notIncluded: ["Advanced security", "Performance tuning", "Custom scripts"],
        },
        {
          name: "Professional",
          price: "$599",
          duration: "per person",
          popular: true,
          features: [
            "All Basic features",
            "Advanced security",
            "Performance tuning",
            "Custom scripts",
            "Service management",
            "10 hours of training",
          ],
          notIncluded: ["Enterprise deployment", "24/7 support"],
        },
        {
          name: "Enterprise",
          price: "$1,299",
          duration: "per team (up to 5)",
          features: [
            "All Professional features",
            "Enterprise deployment",
            "High availability setup",
            "Load balancing",
            "Disaster recovery",
            "20 hours of training",
            "3 months email support",
          ],
          notIncluded: [],
        },
      ],
    },
    {
      icon: GitBranch,
      title: "DevOps Implementation",
      description: "Transform your development workflow with DevOps practices",
      color: "from-blue-500/20 to-blue-600/20",
      textColor: "text-blue-400",
      plans: [
        {
          name: "Starter",
          price: "$499",
          duration: "per month",
          features: [
            "CI/CD pipeline setup",
            "Basic automation",
            "Version control integration",
            "Basic monitoring",
            "10 hours of consulting",
          ],
          notIncluded: ["Advanced automation", "Custom integrations", "Team training"],
        },
        {
          name: "Business",
          price: "$999",
          duration: "per month",
          popular: true,
          features: [
            "All Starter features",
            "Advanced automation",
            "Custom integrations",
            "Team training",
            "Infrastructure as Code",
            "20 hours of consulting",
          ],
          notIncluded: ["Enterprise scaling", "24/7 support"],
        },
        {
          name: "Enterprise",
          price: "$2,499",
          duration: "per month",
          features: [
            "All Business features",
            "Enterprise scaling",
            "Multi-environment setup",
            "Security compliance",
            "Custom dashboards",
            "40 hours of consulting",
            "24/7 priority support",
          ],
          notIncluded: [],
        },
      ],
    },
    {
      icon: Database,
      title: "Kubernetes & Container Orchestration",
      description: "Deploy, scale, and manage containerized applications",
      color: "from-cyan-500/20 to-cyan-600/20",
      textColor: "text-cyan-400",
      plans: [
        {
          name: "Basic",
          price: "$699",
          duration: "per cluster",
          features: [
            "Kubernetes setup",
            "Basic pod deployment",
            "Service configuration",
            "Ingress setup",
            "10 hours of support",
          ],
          notIncluded: ["Auto-scaling", "Custom operators", "Multi-cluster management"],
        },
        {
          name: "Advanced",
          price: "$1,499",
          duration: "per cluster",
          popular: true,
          features: [
            "All Basic features",
            "Auto-scaling",
            "Custom operators",
            "Helm chart development",
            "Monitoring integration",
            "20 hours of support",
          ],
          notIncluded: ["Multi-cluster management", "Disaster recovery"],
        },
        {
          name: "Enterprise",
          price: "$2,999",
          duration: "per environment",
          features: [
            "All Advanced features",
            "Multi-cluster management",
            "Disaster recovery",
            "Custom controllers",
            "Security hardening",
            "Performance optimization",
            "40 hours of support",
          ],
          notIncluded: [],
        },
      ],
    },
    {
      icon: Cloud,
      title: "Cloud Architecture",
      description: "Design and implement scalable cloud solutions",
      color: "from-purple-500/20 to-purple-600/20",
      textColor: "text-purple-400",
      plans: [
        {
          name: "Starter",
          price: "$899",
          duration: "per project",
          features: [
            "Cloud assessment",
            "Basic architecture design",
            "Cost optimization",
            "Single region setup",
            "15 hours of consulting",
          ],
          notIncluded: ["Multi-region deployment", "Serverless architecture", "Advanced security"],
        },
        {
          name: "Professional",
          price: "$1,899",
          duration: "per project",
          popular: true,
          features: [
            "All Starter features",
            "Multi-region deployment",
            "Serverless architecture",
            "Advanced security",
            "Performance optimization",
            "30 hours of consulting",
          ],
          notIncluded: ["Enterprise integration", "24/7 support"],
        },
        {
          name: "Enterprise",
          price: "$3,499",
          duration: "per project",
          features: [
            "All Professional features",
            "Enterprise integration",
            "Hybrid cloud setup",
            "Disaster recovery",
            "Compliance management",
            "60 hours of consulting",
            "3 months of support",
          ],
          notIncluded: [],
        },
      ],
    },
  ]

  const handleRequestService = (service: string, plan: string) => {
    toast({
      title: "Service request sent!",
      description: `Your request for ${service} (${plan} plan) has been sent. I'll contact you soon.`,
    })
  }

  return (
    <div className="space-y-12" ref={containerRef}>
      <motion.div className="text-center space-y-4" style={{ y: headerY }}>
        <h1 className="text-4xl font-bold">Service Pricing</h1>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Transparent pricing for all my DevOps services. Choose the plan that fits your needs or contact me for a
          custom solution tailored to your specific requirements.
        </p>
      </motion.div>

      {/* CI/CD Pipeline Animation */}
      <CICDPipeline />

      <motion.div className="space-y-24" style={{ y: pricingY }}>
        {services.map((service, serviceIndex) => (
          <section key={serviceIndex} className="space-y-8">
            <div className="flex items-center gap-3">
              <div className={`bg-gradient-to-br ${service.color} p-3 rounded-full`}>
                <service.icon className={`h-6 w-6 ${service.textColor}`} />
              </div>
              <div>
                <h2 className="text-2xl font-bold">{service.title}</h2>
                <p className="text-gray-400">{service.description}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {service.plans.map((plan, planIndex) => (
                <motion.div
                  key={planIndex}
                  className={`glass rounded-xl overflow-hidden border ${
                    plan.popular ? "border-blue-500/50" : "border-blue-900/50"
                  }`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: planIndex * 0.1 }}
                >
                  {plan.popular && <div className="bg-blue-600 text-center py-1 text-xs font-medium">MOST POPULAR</div>}
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
                    <div className="mb-4">
                      <span className="text-3xl font-bold">{plan.price}</span>
                      <span className="text-gray-400 ml-1">{plan.duration}</span>
                    </div>

                    <div className="space-y-3 mb-6">
                      {plan.features.map((feature, index) => (
                        <div key={index} className="flex items-start gap-2">
                          <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-gray-300">{feature}</span>
                        </div>
                      ))}

                      {plan.notIncluded.map((feature, index) => (
                        <div key={index} className="flex items-start gap-2">
                          <X className="h-5 w-5 text-gray-500 flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-gray-500">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="space-y-3">
                      <Button
                        className={`w-full ${plan.popular ? "bg-blue-600 hover:bg-blue-700" : ""}`}
                        onClick={() => handleRequestService(service.title, plan.name)}
                      >
                        Request Service
                      </Button>
                      <Link href="/contact" className="block">
                        <Button variant="outline" className="w-full">
                          Contact for Details <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>
        ))}
      </motion.div>

      <div className="glass p-8 text-center space-y-6">
        <Badge variant="outline" className="mb-2">
          Need a custom solution?
        </Badge>
        <h2 className="text-2xl font-bold">Don't see what you're looking for?</h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          I offer custom DevOps solutions tailored to your specific needs. Contact me for a personalized quote and let's
          discuss how I can help you achieve your goals.
        </p>
        <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
          <Link href="/contact">Get a Custom Quote</Link>
        </Button>
      </div>
    </div>
  )
}

