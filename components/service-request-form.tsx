"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useToast } from "@/hooks/use-toast"

interface ServiceRequestFormProps {
  service?: string
  plan?: string
}

export default function ServiceRequestForm({ service, plan }: ServiceRequestFormProps) {
  const { toast } = useToast()
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: service ? `Request for ${service} - ${plan} plan` : "",
    message: "",
    service: service || "",
    plan: plan || "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        toast({
          title: "Request sent successfully!",
          description: "I'll get back to you as soon as possible.",
        })

        // Reset form
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
          service: service || "",
          plan: plan || "",
        })
      } else {
        throw new Error("Failed to send email")
      }
    } catch (error) {
      toast({
        title: "Error sending request",
        description: "Please try again or contact me directly via email.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  const services = [
    "Linux Training & Administration",
    "DevOps Implementation",
    "Kubernetes & Container Orchestration",
    "Docker & Containerization",
    "Cloud Architecture",
    "Infrastructure as Code",
    "Monitoring & Observability",
    "Security & Compliance",
  ]

  const plans = ["Basic", "Professional", "Enterprise", "Starter", "Business", "Advanced", "Custom"]

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium">
            Your Name
          </label>
          <Input
            id="name"
            name="name"
            placeholder="John Doe"
            value={formData.name}
            onChange={handleChange}
            required
            className="bg-slate-900/50 border-blue-900/50"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium">
            Your Email
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="john@example.com"
            value={formData.email}
            onChange={handleChange}
            required
            className="bg-slate-900/50 border-blue-900/50"
          />
        </div>
      </div>

      {!service && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label htmlFor="service" className="text-sm font-medium">
              Service
            </label>
            <Select value={formData.service} onValueChange={(value) => handleSelectChange("service", value)}>
              <SelectTrigger className="bg-slate-900/50 border-blue-900/50">
                <SelectValue placeholder="Select a service" />
              </SelectTrigger>
              <SelectContent>
                {services.map((service) => (
                  <SelectItem key={service} value={service}>
                    {service}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <label htmlFor="plan" className="text-sm font-medium">
              Plan
            </label>
            <Select value={formData.plan} onValueChange={(value) => handleSelectChange("plan", value)}>
              <SelectTrigger className="bg-slate-900/50 border-blue-900/50">
                <SelectValue placeholder="Select a plan" />
              </SelectTrigger>
              <SelectContent>
                {plans.map((plan) => (
                  <SelectItem key={plan} value={plan}>
                    {plan}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      )}

      <div className="space-y-2">
        <label htmlFor="subject" className="text-sm font-medium">
          Subject
        </label>
        <Input
          id="subject"
          name="subject"
          placeholder="How can I help you?"
          value={formData.subject}
          onChange={handleChange}
          required
          className="bg-slate-900/50 border-blue-900/50"
        />
      </div>
      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-medium">
          Message
        </label>
        <Textarea
          id="message"
          name="message"
          placeholder="Tell me about your project or inquiry..."
          value={formData.message}
          onChange={handleChange}
          required
          className="min-h-[150px] bg-slate-900/50 border-blue-900/50"
        />
      </div>
      <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700" disabled={isLoading}>
        {isLoading ? "Sending..." : "Send Request"}
      </Button>
    </form>
  )
}

