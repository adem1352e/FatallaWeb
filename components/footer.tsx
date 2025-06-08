import { Code, Mail, MapPin, Phone, Star, Zap } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-background via-blue-900/20 to-background border-t border-blue-500/20 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-500 rounded-xl blur-lg opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative bg-gradient-to-r from-blue-400 to-blue-500 p-3 rounded-xl transform group-hover:scale-110 transition-all duration-300">
                  <Code className="w-5 h-5 text-white" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground group-hover:text-blue-400 transition-colors">
                  Fatala Web
                </h3>
                <p className="text-xs text-blue-400">Web Developer</p>
              </div>
            </Link>
            <p className="text-muted-foreground text-sm">
              Professional web development services creating digital solutions that make a difference.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-foreground font-semibold flex items-center gap-2">
              <Star className="w-4 h-4 text-blue-400" />
              Quick Links
            </h3>
            <div className="space-y-2">
              <Link
                href="/"
                className="block text-muted-foreground hover:text-blue-400 transition-colors text-sm transform hover:translate-x-1 duration-300"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="block text-muted-foreground hover:text-blue-400 transition-colors text-sm transform hover:translate-x-1 duration-300"
              >
                About
              </Link>
              <Link
                href="/comments"
                className="block text-muted-foreground hover:text-blue-400 transition-colors text-sm transform hover:translate-x-1 duration-300"
              >
                Reviews
              </Link>
              <Link
                href="/contact"
                className="block text-muted-foreground hover:text-blue-400 transition-colors text-sm transform hover:translate-x-1 duration-300"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-foreground font-semibold flex items-center gap-2">
              <Zap className="w-4 h-4 text-blue-500" />
              Services
            </h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="hover:text-blue-400 transition-colors cursor-pointer">Web Development</div>
              <div className="hover:text-blue-500 transition-colors cursor-pointer">E-commerce Solutions</div>
              <div className="hover:text-blue-400 transition-colors cursor-pointer">UI/UX Design</div>
              <div className="hover:text-blue-500 transition-colors cursor-pointer">WordPress Development</div>
              <div className="hover:text-blue-400 transition-colors cursor-pointer">Website Maintenance</div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-foreground font-semibold">Contact</h3>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-muted-foreground text-sm hover:text-blue-400 transition-colors group">
                <Mail className="w-4 h-4 group-hover:animate-bounce" />
                <span>adem1352e@gmail.com</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground text-sm hover:text-blue-500 transition-colors group">
                <Phone className="w-4 h-4 group-hover:animate-bounce" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground text-sm hover:text-blue-400 transition-colors group">
                <MapPin className="w-4 h-4 group-hover:animate-bounce" />
                <span>Remote Worldwide</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-blue-500/20 mt-8 pt-8 text-center">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Developed by{" "}
            <span className="text-transparent bg-gradient-to-r from-blue-400 to-blue-500 bg-clip-text font-bold animate-pulse">
              Fatala Web
            </span>
            . All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
