import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Calendar, MapPin, User, Download, Star, Zap } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function AboutPage() {
  const skills = [
    { name: "HTML/CSS", level: 95 },
    { name: "JavaScript", level: 90 },
    { name: "React/Next.js", level: 88 },
    { name: "Node.js", level: 85 },
    { name: "PHP", level: 80 },
    { name: "WordPress", level: 85 },
    { name: "UI/UX Design", level: 82 },
    { name: "Database Design", level: 78 },
  ]

  const projects = [
    {
      title: "E-commerce Platform",
      description: "Full-stack e-commerce solution with payment integration",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      image: "/placeholder.svg?height=200&width=350",
    },
    {
      title: "Corporate Website",
      description: "Professional business website with CMS integration",
      tech: ["WordPress", "PHP", "MySQL", "Custom Theme"],
      image: "/placeholder.svg?height=200&width=350",
    },
    {
      title: "Mobile App Landing",
      description: "Responsive landing page for mobile application",
      tech: ["Next.js", "Tailwind CSS", "Framer Motion"],
      image: "/placeholder.svg?height=200&width=350",
    },
    {
      title: "Portfolio Website",
      description: "Creative portfolio for digital artist",
      tech: ["React", "GSAP", "Three.js", "Netlify"],
      image: "/placeholder.svg?height=200&width=350",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-blue-900/10 to-background py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-foreground mb-4 clean-text">About Me</h1>
          <p className="text-xl text-muted-foreground">Get to know Fatala Web</p>
        </div>

        {/* Profile Section */}
        <div className="grid lg:grid-cols-3 gap-12 mb-16">
          <div className="lg:col-span-1">
            <Card className="bg-gradient-to-br from-card/50 to-blue-500/10 border-blue-500/20 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <Image
                  src="/placeholder.svg?height=200&width=200"
                  alt="Fatala Web Developer"
                  width={200}
                  height={200}
                  className="mx-auto rounded-full border-4 border-blue-500/50 mb-6 hover:scale-105 transition-transform duration-300"
                />
                <h2 className="text-2xl font-bold text-foreground mb-2">Fatala Web</h2>
                <p className="text-blue-400 mb-4">Full-Stack Web Developer</p>
                <div className="space-y-2 text-muted-foreground mb-6">
                  <div className="flex items-center justify-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span>Available Worldwide</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>5+ Years Experience</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <User className="w-4 h-4" />
                    <span>20+ Projects Completed</span>
                  </div>
                </div>
                <Button className="w-full bg-gradient-to-r from-blue-400 to-blue-500 hover:from-blue-300 hover:to-blue-400 text-white font-bold rounded-full group">
                  <Download className="w-4 h-4 mr-2" />
                  Download CV
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-2">
            <Card className="bg-gradient-to-br from-card/50 to-blue-500/10 border-blue-500/20 backdrop-blur-sm h-full">
              <CardHeader>
                <CardTitle className="text-foreground text-2xl flex items-center gap-2">
                  <Star className="w-6 h-6 text-blue-400" />
                  My Story
                </CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground space-y-4">
                <p>
                  Welcome! I'm Fatala Web, a passionate web developer with over 5 years of experience creating digital
                  solutions that make a difference. My journey in web development started with a simple curiosity about
                  how websites work, and it has evolved into a deep passion for crafting exceptional digital
                  experiences.
                </p>
                <p>
                  I specialize in full-stack web development, combining modern frontend technologies with robust backend
                  solutions. My approach focuses on creating websites that are not only visually stunning but also
                  highly functional, fast, and user-friendly.
                </p>
                <p>
                  Every project I work on is an opportunity to solve unique challenges and deliver solutions that exceed
                  expectations. I believe in the power of clean code, thoughtful design, and continuous learning to stay
                  ahead in this ever-evolving field.
                </p>
                <p>
                  When I'm not coding, I enjoy exploring new technologies, contributing to open-source projects, and
                  sharing knowledge with the developer community.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12 flex items-center justify-center gap-2 clean-text">
            <Zap className="w-8 h-8 text-blue-400" />
            Technical Skills
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between text-foreground">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-blue-400">{skill.level}%</span>
                </div>
                <Progress value={skill.level} className="h-3 bg-muted" />
              </div>
            ))}
          </div>
        </div>

        {/* Recent Projects */}
        <div>
          <h2 className="text-3xl font-bold text-foreground text-center mb-12 clean-text">Recent Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="bg-gradient-to-br from-card/50 to-blue-500/10 border-blue-500/20 backdrop-blur-sm hover:scale-102 transition-all duration-300"
              >
                <div className="overflow-hidden rounded-t-lg">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={350}
                    height={200}
                    className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-foreground">{project.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="secondary"
                        className="bg-gradient-to-r from-blue-400/20 to-blue-500/20 text-blue-400 border border-blue-400/30"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <Link href="/contact">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-400 to-blue-500 hover:from-blue-300 hover:to-blue-400 text-white font-bold px-12 py-4 text-lg transform hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-400/50 group rounded-full"
            >
              <Zap className="w-5 h-5 mr-2" />
              Let's Work Together
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
