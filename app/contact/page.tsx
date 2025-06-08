"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Phone, Send, Zap, Star, Rocket, AlertCircle, MessageSquare } from "lucide-react"
import { useState } from "react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null
    message: string
  }>({ type: null, message: "" })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus({ type: null, message: "" })

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (result.success) {
        setSubmitStatus({
          type: "success",
          message: "Sent OK! 🎉",
        })
        setFormData({ name: "", email: "", subject: "", message: "" })
      } else {
        setSubmitStatus({
          type: "error",
          message: result.message,
        })
      }
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: "Network error. Please check your connection and try again.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleWhatsAppClick = () => {
    const phoneNumber = "99671332"
    const message = "Hello! I'm interested in your web development services. Can we discuss my project?"
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-blue-900/10 to-background py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-foreground mb-4 clean-text">Contact Me</h1>
          <p className="text-xl text-muted-foreground">Let's discuss your next project</p>
        </div>

        {/* Quick Contact Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <Button
            onClick={handleWhatsAppClick}
            size="lg"
            className="bg-gradient-to-r from-green-400 to-green-500 hover:from-green-300 hover:to-green-400 text-white font-bold px-8 py-4 rounded-full transform hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl shadow-green-400/25 group whatsapp-glow"
          >
            <Phone className="w-5 h-5 mr-2 group-hover:animate-bounce" />
            WhatsApp: +99671332
          </Button>

          <Button
            onClick={() => (window.location.href = "tel:+99671332")}
            size="lg"
            variant="outline"
            className="border-2 border-blue-400 text-blue-500 hover:bg-blue-500/10 hover:text-blue-700 px-8 py-4 rounded-full transform hover:scale-110 transition-all duration-300 backdrop-blur-sm group"
          >
            <Phone className="w-5 h-5 mr-2 group-hover:animate-bounce" />
            Call: +99671332
          </Button>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="bg-gradient-to-br from-card/50 to-blue-500/10 border-blue-400/20 backdrop-blur-sm professional-glow">
              <CardHeader>
                <CardTitle className="text-foreground text-2xl flex items-center gap-2">
                  <Star className="w-6 h-6 text-blue-400" />
                  Get In Touch
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-muted-foreground">
                  Ready to start your next web project? I'd love to hear about your ideas and help bring them to life.
                  Whether you need a simple website or a complex web application, let's discuss how we can work
                  together.
                </p>

                <div className="space-y-4">
                  <div className="flex items-center gap-4 text-muted-foreground p-3 rounded-lg bg-card/50 hover:bg-card/70 transition-colors">
                    <Mail className="w-5 h-5 text-blue-400" />
                    <span>adem1352e@gmail.com</span>
                  </div>

                  <div
                    className="flex items-center gap-4 text-muted-foreground p-3 rounded-lg bg-card/50 hover:bg-card/70 transition-colors cursor-pointer group"
                    onClick={handleWhatsAppClick}
                  >
                    <MessageSquare className="w-5 h-5 text-green-400 group-hover:animate-bounce" />
                    <span className="group-hover:text-green-500 transition-colors">WhatsApp: +99671332</span>
                  </div>

                  <div
                    className="flex items-center gap-4 text-muted-foreground p-3 rounded-lg bg-card/50 hover:bg-card/70 transition-colors cursor-pointer group"
                    onClick={() => (window.location.href = "tel:+99671332")}
                  >
                    <Phone className="w-5 h-5 text-blue-500 group-hover:animate-bounce" />
                    <span className="group-hover:text-blue-500 transition-colors">Call: +99671332</span>
                  </div>

                  <div className="flex items-center gap-4 text-muted-foreground p-3 rounded-lg bg-card/50 hover:bg-card/70 transition-colors">
                    <MapPin className="w-5 h-5 text-blue-400" />
                    <span>Available for remote work worldwide</span>
                  </div>
                </div>

                <div className="pt-6">
                  <h3 className="text-foreground font-semibold mb-4 flex items-center gap-2">
                    <Zap className="w-5 h-5 text-blue-400" />
                    Services I Offer:
                  </h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Custom Website Development</li>
                    <li>• E-commerce Solutions</li>
                    <li>• Web Application Development</li>
                    <li>• WordPress Development</li>
                    <li>• UI/UX Design</li>
                    <li>• Website Maintenance & Support</li>
                  </ul>
                </div>

                {/* WhatsApp CTA */}
                <div className="bg-gradient-to-r from-green-400/10 to-green-500/10 border border-green-400/20 rounded-lg p-4">
                  <h4 className="text-foreground font-semibold mb-2 flex items-center gap-2">
                    <MessageSquare className="w-5 h-5 text-green-400" />
                    Quick Response via WhatsApp
                  </h4>
                  <p className="text-muted-foreground text-sm mb-3">
                    Get instant replies! Message me on WhatsApp for faster communication about your project.
                  </p>
                  <Button
                    onClick={handleWhatsAppClick}
                    className="bg-gradient-to-r from-green-400 to-green-500 hover:from-green-300 hover:to-green-400 text-white font-bold px-6 py-2 rounded-full transform hover:scale-105 transition-all duration-300 group whatsapp-glow"
                  >
                    <Phone className="w-4 h-4 mr-2 group-hover:animate-bounce" />
                    Chat on WhatsApp
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div>
            <Card className="bg-gradient-to-br from-card/50 to-blue-500/10 border-blue-400/20 backdrop-blur-sm professional-glow">
              <CardHeader>
                <CardTitle className="text-foreground text-2xl flex items-center gap-2">
                  <Rocket className="w-6 h-6 text-blue-400" />
                  Send Message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-foreground">
                        Name
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        disabled={isSubmitting}
                        className="bg-background/50 border-blue-400/30 text-foreground placeholder:text-muted-foreground focus:border-blue-400 transition-colors"
                        placeholder="Your name"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-foreground">
                        Email
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        disabled={isSubmitting}
                        className="bg-background/50 border-blue-400/30 text-foreground placeholder:text-muted-foreground focus:border-blue-400 transition-colors"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject" className="text-foreground">
                      Subject
                    </Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      disabled={isSubmitting}
                      className="bg-background/50 border-blue-400/30 text-foreground placeholder:text-muted-foreground focus:border-blue-400 transition-colors"
                      placeholder="Project inquiry"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-foreground">
                      Message
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      disabled={isSubmitting}
                      rows={6}
                      className="bg-background/50 border-blue-400/30 text-foreground placeholder:text-muted-foreground focus:border-blue-400 transition-colors"
                      placeholder="Tell me about your project..."
                    />
                  </div>

                  {/* Status Message */}
                  {submitStatus.type && (
                    <div
                      className={`flex items-center justify-center gap-3 p-6 rounded-lg ${
                        submitStatus.type === "success"
                          ? "bg-green-500/10 border border-green-500/20 text-green-600"
                          : "bg-red-500/10 border border-red-500/20 text-red-600"
                      }`}
                    >
                      {submitStatus.type === "success" ? (
                        <>
                          <div className="text-6xl animate-bounce">😊</div>
                          <div className="text-center">
                            <div className="text-2xl font-bold mb-1">Sent OK!</div>
                            <div className="text-sm">Your message has been delivered successfully</div>
                          </div>
                        </>
                      ) : (
                        <>
                          <AlertCircle className="w-5 h-5" />
                          <span>{submitStatus.message}</span>
                        </>
                      )}
                    </div>
                  )}

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-blue-400 to-blue-500 hover:from-blue-300 hover:to-blue-400 text-white font-bold py-3 rounded-full transform hover:scale-105 transition-all duration-300 group professional-glow disabled:opacity-50 disabled:cursor-not-allowed"
                    size="lg"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 mr-2 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2 group-hover:animate-bounce" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
