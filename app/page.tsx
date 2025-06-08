"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Palette, Smartphone, Zap, ExternalLink, Github, ArrowRight, Star, Sparkles, Rocket } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"

// Easy to update portfolio - just add new projects here!
const portfolioProjects = [
  {
    id: 1,
    title: "E-Commerce Fashion Store",
    description: "Modern online store with payment integration and inventory management",
    image: "/placeholder.svg?height=300&width=400",
    technologies: ["React", "Node.js", "Stripe", "MongoDB"],
    liveUrl: "#",
    githubUrl: "#",
    category: "E-commerce",
  },
  {
    id: 2,
    title: "Restaurant Management System",
    description: "Complete restaurant solution with online ordering and table reservations",
    image: "/placeholder.svg?height=300&width=400",
    technologies: ["Next.js", "PostgreSQL", "Tailwind", "API"],
    liveUrl: "#",
    githubUrl: "#",
    category: "Business",
  },
  {
    id: 3,
    title: "Creative Portfolio Website",
    description: "Stunning portfolio for digital artist with interactive galleries",
    image: "/placeholder.svg?height=300&width=400",
    technologies: ["React", "Three.js", "GSAP", "CSS3"],
    liveUrl: "#",
    githubUrl: "#",
    category: "Portfolio",
  },
]

export default function HomePage() {
  const [isVisible, setIsVisible] = useState(false)
  const [currentProject, setCurrentProject] = useState(0)

  useEffect(() => {
    setIsVisible(true)
    const interval = setInterval(() => {
      setCurrentProject((prev) => (prev + 1) % portfolioProjects.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-blue-900/5 to-background overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl opacity-70"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl opacity-70"></div>
        <div className="absolute top-1/2 left-1/2 w-60 h-60 bg-blue-400/5 rounded-full blur-3xl"></div>
      </div>

      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div
              className={`space-y-8 transform transition-all duration-1000 ${isVisible ? "translate-x-0 opacity-100" : "-translate-x-20 opacity-0"}`}
            >
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-400/20 to-blue-500/20 backdrop-blur-sm rounded-full px-4 py-2 text-blue-500 text-sm font-medium border border-blue-400/30">
                  <Sparkles className="w-4 h-4" />
                  Available for new projects
                </div>
                <h1 className="text-6xl md:text-7xl font-bold leading-tight">
                  <span className="text-foreground">Fatala</span>
                  <span className="block text-transparent bg-gradient-to-r from-blue-400 via-blue-500 to-blue-700 bg-clip-text clean-text">
                    Web
                  </span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Professional Web Developer creating stunning digital experiences that drive results. Specialized in
                  modern technologies and user-centered design.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <Link href="/contact">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-blue-400 to-blue-500 hover:from-blue-300 hover:to-blue-400 text-white font-bold px-8 py-4 text-lg transform hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-400/25 group rounded-full"
                  >
                    <Rocket className="w-5 h-5 mr-2" />
                    Start Your Project
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link href="/about">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-blue-400 text-blue-500 hover:bg-blue-400/10 hover:text-blue-700 px-8 py-4 text-lg transform hover:scale-105 transition-all duration-300 backdrop-blur-sm rounded-full group"
                  >
                    <Star className="w-5 h-5 mr-2" />
                    View My Work
                  </Button>
                </Link>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8">
                <div className="text-center transform hover:scale-105 transition-all duration-300 p-4 rounded-xl bg-card backdrop-blur-sm border border-blue-400/20">
                  <div className="text-3xl font-bold text-blue-500 clean-text">20+</div>
                  <div className="text-sm text-muted-foreground">Projects Done</div>
                </div>
                <div className="text-center transform hover:scale-105 transition-all duration-300 p-4 rounded-xl bg-card backdrop-blur-sm border border-blue-400/20">
                  <div className="text-3xl font-bold text-blue-500 clean-text">5+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
                <div className="text-center transform hover:scale-105 transition-all duration-300 p-4 rounded-xl bg-card backdrop-blur-sm border border-blue-400/20">
                  <div className="text-3xl font-bold text-blue-500 clean-text">100%</div>
                  <div className="text-sm text-muted-foreground">Client Satisfaction</div>
                </div>
              </div>
            </div>

            {/* Right Content - Animated Profile */}
            <div
              className={`relative transform transition-all duration-1000 delay-300 ${isVisible ? "translate-x-0 opacity-100" : "translate-x-20 opacity-0"}`}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400/30 to-blue-500/30 rounded-3xl blur-2xl opacity-70"></div>
                <div className="relative bg-gradient-to-br from-card/50 to-blue-400/10 backdrop-blur-sm rounded-3xl p-8 border border-blue-400/20 transform hover:scale-102 transition-all duration-500">
                  <Image
                    src="/placeholder.svg?height=400&width=400"
                    alt="Fatala Web Developer"
                    width={400}
                    height={400}
                    className="rounded-2xl shadow-2xl hover:shadow-blue-400/25 transition-all duration-500"
                  />
                  <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-blue-400 to-blue-500 rounded-full p-4 shadow-lg">
                    <Code className="w-8 h-8 text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Showcase */}
      <section className="py-20 px-4 bg-gradient-to-r from-background/40 to-blue-900/5 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4 clean-text">Recent Projects</h2>
            <p className="text-xl text-muted-foreground">Websites I've created for amazing clients</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioProjects.map((project, index) => (
              <Card
                key={project.id}
                className={`bg-gradient-to-br from-card/50 to-blue-400/10 border-blue-400/20 backdrop-blur-sm overflow-hidden group hover:bg-gradient-to-br hover:from-card/70 hover:to-blue-400/15 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-400/20 ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4 flex gap-2">
                      <Button size="sm" className="bg-blue-400/80 hover:bg-blue-400 text-white backdrop-blur-sm">
                        <ExternalLink className="w-4 h-4" />
                      </Button>
                      <Button size="sm" className="bg-blue-500/80 hover:bg-blue-500 text-white backdrop-blur-sm">
                        <Github className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="mb-2">
                    <Badge
                      variant="secondary"
                      className="bg-gradient-to-r from-blue-400/20 to-blue-500/20 text-blue-500 mb-3 border border-blue-400/30"
                    >
                      {project.category}
                    </Badge>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-blue-500 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 text-sm">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="outline"
                        className="border-blue-400/30 text-muted-foreground text-xs hover:bg-blue-400/10 transition-colors"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Add More Projects Button */}
          <div className="text-center mt-12">
            <Link href="/about">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-blue-400 text-blue-500 hover:bg-blue-400/10 hover:text-blue-700 px-8 py-3 transform hover:scale-105 transition-all duration-300 rounded-full group"
              >
                <Sparkles className="w-5 h-5 mr-2" />
                View All Projects
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section with Animations */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-foreground text-center mb-16 clean-text">What I Do</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Code, title: "Web Development", desc: "Custom websites and web applications", color: "blue" },
              {
                icon: Smartphone,
                title: "Responsive Design",
                desc: "Mobile-first designs for all devices",
                color: "blue",
              },
              { icon: Palette, title: "UI/UX Design", desc: "Beautiful, intuitive user interfaces", color: "blue" },
              { icon: Zap, title: "Performance", desc: "Fast, optimized websites", color: "blue" },
            ].map((service, index) => (
              <Card
                key={index}
                className={`bg-gradient-to-br from-card/50 to-blue-400/10 border-blue-400/20 backdrop-blur-sm group hover:bg-gradient-to-br hover:from-card/70 hover:to-blue-400/15 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl cursor-pointer ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <CardContent className="p-6 text-center">
                  <div
                    className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-blue-400/20 to-blue-500/20 flex items-center justify-center group-hover:scale-105 transition-transform duration-300 border border-blue-400/30`}
                  >
                    <service.icon className={`w-8 h-8 text-blue-500`} />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-blue-500 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">{service.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-900/10 to-blue-500/10 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-foreground mb-6 clean-text">Ready to Start Your Project?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Let's work together to create something amazing for your business
          </p>
          <Link href="/contact">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-400 to-blue-500 hover:from-blue-300 hover:to-blue-400 text-white font-bold px-12 py-4 text-lg transform hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-400/50 group rounded-full"
            >
              <Rocket className="w-5 h-5 mr-2" />
              Start Your Project Today
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
