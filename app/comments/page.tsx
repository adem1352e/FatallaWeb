"use client"

import type React from "react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Star, Send, MessageSquare, CheckCircle } from "lucide-react"
import { useState, useEffect } from "react"

export default function CommentsPage() {
  const [newComment, setNewComment] = useState({
    name: "",
    email: "",
    rating: 5,
    comment: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null
    message: string
  }>({ type: null, message: "" })
  const [visibleTestimonials, setVisibleTestimonials] = useState<any[]>([])

  // All testimonials (including those with less than 4 stars)
  const allTestimonials = [
    {
      name: "Sarah Johnson",
      company: "Tech Startup Inc.",
      rating: 5,
      comment:
        "Fatala Web delivered an exceptional website for our startup. The design is modern, responsive, and exactly what we envisioned. Highly professional and great communication throughout the project.",
      avatar: "/placeholder.svg?height=40&width=40",
      date: "2024-01-15",
    },
    {
      name: "Michael Chen",
      company: "E-commerce Solutions",
      rating: 5,
      comment:
        "Outstanding work on our e-commerce platform! The site is fast, secure, and user-friendly. Sales have increased by 40% since the launch. Couldn't be happier with the results.",
      avatar: "/placeholder.svg?height=40&width=40",
      date: "2024-01-10",
    },
    {
      name: "Emily Rodriguez",
      company: "Creative Agency",
      rating: 5,
      comment:
        "Working with Fatala Web was a pleasure. They understood our creative vision and brought it to life perfectly. The attention to detail and technical expertise is impressive.",
      avatar: "/placeholder.svg?height=40&width=40",
      date: "2024-01-05",
    },
    {
      name: "David Thompson",
      company: "Local Business",
      rating: 4,
      comment:
        "Great experience working with Fatala Web. They created a professional website that perfectly represents our business. The project was completed on time and within budget.",
      avatar: "/placeholder.svg?height=40&width=40",
      date: "2023-12-28",
    },
    {
      name: "Lisa Wang",
      company: "Non-Profit Organization",
      rating: 5,
      comment:
        "Fatala Web helped us create a website that truly captures our mission. The donation system works flawlessly, and we've seen increased engagement from our community.",
      avatar: "/placeholder.svg?height=40&width=40",
      date: "2023-12-20",
    },
    {
      name: "James Miller",
      company: "Restaurant Chain",
      rating: 4,
      comment:
        "The online ordering system Fatala Web built for us has revolutionized our business. It's intuitive, fast, and has significantly improved our customer experience.",
      avatar: "/placeholder.svg?height=40&width=40",
      date: "2023-12-15",
    },
    {
      name: "Anna Martinez",
      company: "Fashion Brand",
      rating: 5,
      comment:
        "Incredible work! Our new website perfectly showcases our fashion collections. The user experience is seamless and our online sales have tripled since launch.",
      avatar: "/placeholder.svg?height=40&width=40",
      date: "2023-12-10",
    },
    {
      name: "Robert Kim",
      company: "Consulting Firm",
      rating: 4,
      comment:
        "Professional service from start to finish. Fatala Web understood our business needs and delivered a website that generates leads effectively.",
      avatar: "/placeholder.svg?height=40&width=40",
      date: "2023-12-05",
    },
    // Some lower rated reviews that won't be shown
    {
      name: "John Doe",
      company: "Small Business",
      rating: 3,
      comment: "Decent work but could be better.",
      avatar: "/placeholder.svg?height=40&width=40",
      date: "2023-11-20",
    },
    {
      name: "Jane Smith",
      company: "Startup",
      rating: 2,
      comment: "Not satisfied with the delivery time.",
      avatar: "/placeholder.svg?height=40&width=40",
      date: "2023-11-15",
    },
  ]

  // Filter testimonials to show only 4+ stars
  useEffect(() => {
    const highRatedTestimonials = allTestimonials.filter((testimonial) => testimonial.rating >= 4)
    setVisibleTestimonials(highRatedTestimonials)
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus({ type: null, message: "" })

    // Simulate API call
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500))

      if (newComment.rating >= 4) {
        setSubmitStatus({
          type: "success",
          message: "Thank you for your excellent review! It will be published soon.",
        })
      } else {
        setSubmitStatus({
          type: "success",
          message: "Thank you for your feedback! We appreciate your input and will work to improve.",
        })
      }

      setNewComment({ name: "", email: "", rating: 5, comment: "" })
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: "Sorry, there was an error submitting your review. Please try again.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setNewComment({
      ...newComment,
      [e.target.name]: e.target.value,
    })
  }

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star key={i} className={`w-4 h-4 ${i < rating ? "fill-blue-400 text-blue-400" : "text-gray-400"}`} />
    ))
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-blue-900/10 to-background py-20 px-4">
      {/* Floating background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-400/5 rounded-full blur-2xl animate-float"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-blue-500/5 rounded-full blur-2xl animate-float-delayed"></div>
        <div className="absolute bottom-40 left-1/3 w-40 h-40 bg-blue-300/5 rounded-full blur-2xl animate-float-slow"></div>
      </div>

      <div className="max-w-6xl mx-auto relative">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl font-bold text-foreground mb-4 clean-text">Client Testimonials</h1>
          <p className="text-xl text-muted-foreground">What my clients say about working with me</p>
          <div className="flex items-center justify-center gap-2 mt-4">
            <div className="flex">{renderStars(5)}</div>
            <span className="text-blue-400 font-semibold">Only 4+ star reviews displayed</span>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Testimonials */}
          <div className="lg:col-span-2 space-y-6">
            {visibleTestimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="bg-gradient-to-br from-card/50 to-blue-400/10 border-blue-400/20 backdrop-blur-sm hover:scale-102 transition-all duration-500 animate-slide-in-left professional-glow"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <Avatar className="animate-bounce-gentle">
                      <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} />
                      <AvatarFallback className="bg-gradient-to-r from-blue-400 to-blue-500 text-white">
                        {testimonial.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <div>
                          <h3 className="font-semibold text-foreground">{testimonial.name}</h3>
                          <p className="text-sm text-blue-400">{testimonial.company}</p>
                        </div>
                        <div className="flex items-center gap-1 animate-pulse-gentle">
                          {renderStars(testimonial.rating)}
                        </div>
                      </div>
                      <p className="text-muted-foreground mb-2">{testimonial.comment}</p>
                      <p className="text-xs text-muted-foreground/70">{testimonial.date}</p>
                      {testimonial.rating === 5 && (
                        <div className="flex items-center gap-1 mt-2 text-green-500 text-sm animate-fade-in">
                          <CheckCircle className="w-4 h-4" />
                          <span>Verified 5-star review</span>
                        </div>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Leave a Comment Form */}
          <div className="lg:col-span-1">
            <Card className="bg-gradient-to-br from-card/50 to-blue-400/10 border-blue-400/20 backdrop-blur-sm sticky top-8 professional-glow animate-slide-in-right">
              <CardHeader>
                <CardTitle className="text-foreground flex items-center gap-2">
                  <MessageSquare className="w-5 h-5 text-blue-400 animate-pulse-gentle" />
                  Leave a Review
                </CardTitle>
                <p className="text-sm text-muted-foreground">
                  Reviews with 4+ stars will be featured on our testimonials
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-foreground">
                      Name
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      value={newComment.name}
                      onChange={handleChange}
                      required
                      disabled={isSubmitting}
                      className="bg-background/50 border-blue-400/30 text-foreground placeholder:text-muted-foreground focus:border-blue-400 transition-all duration-300 focus:scale-102"
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
                      value={newComment.email}
                      onChange={handleChange}
                      required
                      disabled={isSubmitting}
                      className="bg-background/50 border-blue-400/30 text-foreground placeholder:text-muted-foreground focus:border-blue-400 transition-all duration-300 focus:scale-102"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label className="text-foreground">Rating</Label>
                    <div className="flex gap-1">
                      {Array.from({ length: 5 }, (_, i) => (
                        <button
                          key={i}
                          type="button"
                          onClick={() => setNewComment({ ...newComment, rating: i + 1 })}
                          className="p-1 hover:scale-125 transition-transform duration-200 animate-bounce-gentle"
                          style={{ animationDelay: `${i * 100}ms` }}
                          disabled={isSubmitting}
                        >
                          <Star
                            className={`w-6 h-6 ${i < newComment.rating ? "fill-blue-400 text-blue-400" : "text-gray-400"}`}
                          />
                        </button>
                      ))}
                    </div>
                    {newComment.rating >= 4 && (
                      <p className="text-sm text-green-500 animate-fade-in">
                        ⭐ This review will be featured in our testimonials!
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="comment" className="text-foreground">
                      Comment
                    </Label>
                    <Textarea
                      id="comment"
                      name="comment"
                      value={newComment.comment}
                      onChange={handleChange}
                      required
                      disabled={isSubmitting}
                      rows={4}
                      className="bg-background/50 border-blue-400/30 text-foreground placeholder:text-muted-foreground focus:border-blue-400 transition-all duration-300 focus:scale-102"
                      placeholder="Share your experience..."
                    />
                  </div>

                  {/* Status Message */}
                  {submitStatus.type && (
                    <div
                      className={`p-4 rounded-lg animate-fade-in ${
                        submitStatus.type === "success"
                          ? "bg-green-500/10 border border-green-500/20 text-green-600"
                          : "bg-red-500/10 border border-red-500/20 text-red-600"
                      }`}
                    >
                      <p className="text-sm">{submitStatus.message}</p>
                    </div>
                  )}

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-blue-400 to-blue-500 hover:from-blue-300 hover:to-blue-400 text-white font-bold py-3 rounded-full transform hover:scale-105 transition-all duration-300 group professional-glow disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 mr-2 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2 group-hover:animate-bounce" />
                        Submit Review
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
