"use client"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Code, Menu, X, Home, User, MessageSquare, Mail, Zap, Phone } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState, useEffect } from "react"
import { ThemeToggle } from "./theme-toggle"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  const navItems = [
    { href: "/", label: "Home", icon: Home },
    { href: "/about", label: "About", icon: User },
    { href: "/comments", label: "Reviews", icon: MessageSquare },
    { href: "/contact", label: "Contact", icon: Mail },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const isActive = (href: string) => {
    return pathname === href
  }

  const handleWhatsAppClick = () => {
    const phoneNumber = "99671332" // Your phone number without + and spaces
    const message = "Hello! I'm interested in your web development services. Can we discuss my project?"
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <>
      {/* Main Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-background/95 backdrop-blur-xl border-b border-blue-400/20 shadow-2xl shadow-blue-400/10"
            : "bg-background/20 backdrop-blur-md border-b border-border/10"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo with Animation */}
            <Link href="/" className="group flex items-center gap-3">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-500 rounded-xl blur-lg opacity-50"></div>
                <div className="relative bg-gradient-to-r from-blue-400 to-blue-500 p-3 rounded-xl transform transition-all duration-300">
                  <Code className="w-6 h-6 text-white" />
                </div>
              </div>
              <div className="hidden sm:block">
                <h1 className="text-2xl font-bold bg-gradient-to-r from-foreground via-blue-400 to-blue-500 bg-clip-text text-transparent transition-all duration-500 clean-text">
                  Fatala Web
                </h1>
                <p className="text-xs text-blue-400 transition-colors duration-300">Web Developer</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-2">
              {navItems.map((item, index) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`group relative px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-102 ${
                    isActive(item.href)
                      ? "bg-gradient-to-r from-blue-400 to-blue-500 text-white shadow-lg shadow-blue-400/25"
                      : "text-foreground hover:bg-muted hover:text-blue-400"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <item.icon className="w-4 h-4" />
                    <span className="font-medium">{item.label}</span>
                  </div>
                  {isActive(item.href) && (
                    <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-white rounded-full"></div>
                  )}
                </Link>
              ))}
            </div>

            {/* Theme Toggle & CTA */}
            <div className="hidden md:flex items-center gap-4">
              <ThemeToggle />

              {/* WhatsApp Button */}
              <Button
                onClick={handleWhatsAppClick}
                className="bg-gradient-to-r from-green-400 to-green-500 hover:from-green-300 hover:to-green-400 text-white font-bold px-6 py-3 rounded-full transform hover:scale-102 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-green-400/25 group"
              >
                <Phone className="w-4 h-4 mr-2" />
                WhatsApp
              </Button>

              <Link href="/contact">
                <Button className="bg-gradient-to-r from-blue-400 to-blue-500 hover:from-blue-300 hover:to-blue-400 text-white font-bold px-6 py-3 rounded-full transform hover:scale-102 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-blue-400/25 group">
                  <Zap className="w-4 h-4 mr-2" />
                  Hire Me
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center gap-2">
              <ThemeToggle />
              <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-foreground hover:bg-blue-400/20 hover:text-blue-400 transition-all duration-300 transform hover:scale-102"
                  >
                    <Menu className="w-6 h-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent
                  side="right"
                  className="bg-gradient-to-br from-background via-blue-900/20 to-background border-l border-blue-400/20 backdrop-blur-xl"
                >
                  <div className="flex items-center justify-between mb-8">
                    <Link href="/" className="flex items-center gap-3">
                      <div className="bg-gradient-to-r from-blue-400 to-blue-500 p-2 rounded-lg">
                        <Code className="w-5 h-5 text-white" />
                      </div>
                      <span className="text-xl font-bold text-foreground">Fatala Web</span>
                    </Link>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => setIsOpen(false)}
                      className="text-foreground hover:bg-blue-400/20"
                    >
                      <X className="w-6 h-6" />
                    </Button>
                  </div>
                  <div className="flex flex-col gap-4">
                    {navItems.map((item, index) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className={`flex items-center gap-3 p-4 rounded-xl transition-all duration-300 transform hover:scale-102 ${
                          isActive(item.href)
                            ? "bg-gradient-to-r from-blue-400 to-blue-500 text-white shadow-lg"
                            : "text-foreground hover:bg-muted hover:text-blue-400"
                        }`}
                      >
                        <item.icon className="w-5 h-5" />
                        <span className="text-lg font-medium">{item.label}</span>
                      </Link>
                    ))}

                    {/* Mobile WhatsApp Button */}
                    <div className="mt-4">
                      <Button
                        onClick={() => {
                          handleWhatsAppClick()
                          setIsOpen(false)
                        }}
                        className="w-full bg-gradient-to-r from-green-400 to-green-500 hover:from-green-300 hover:to-green-400 text-white font-bold py-3 rounded-xl transform hover:scale-102 transition-all duration-300"
                      >
                        <Phone className="w-4 h-4 mr-2" />
                        WhatsApp Me
                      </Button>
                    </div>

                    <div className="mt-2">
                      <Link href="/contact" onClick={() => setIsOpen(false)}>
                        <Button className="w-full bg-gradient-to-r from-blue-400 to-blue-500 hover:from-blue-300 hover:to-blue-400 text-white font-bold py-3 rounded-xl transform hover:scale-102 transition-all duration-300">
                          <Zap className="w-4 h-4 mr-2" />
                          Hire Me Now
                        </Button>
                      </Link>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </nav>

      {/* Floating Action Buttons */}
      <div className="fixed bottom-8 right-8 z-40 flex flex-col gap-4">
        {/* WhatsApp Floating Button */}
        <Button
          onClick={handleWhatsAppClick}
          size="lg"
          className="bg-gradient-to-r from-green-400 to-green-500 hover:from-green-300 hover:to-green-400 text-white font-bold p-4 rounded-full shadow-2xl hover:shadow-green-400/25 transform hover:scale-105 transition-all duration-300 group"
          title="Contact via WhatsApp: +99671332"
        >
          <Phone className="w-6 h-6" />
        </Button>

        {/* Email Floating Button */}
        <Link href="/contact">
          <Button
            size="lg"
            className="bg-gradient-to-r from-blue-400 to-blue-500 hover:from-blue-300 hover:to-blue-400 text-white font-bold p-4 rounded-full shadow-2xl hover:shadow-blue-400/25 transform hover:scale-105 transition-all duration-300 group"
            title="Send Email"
          >
            <Mail className="w-6 h-6" />
          </Button>
        </Link>
      </div>
    </>
  )
}
