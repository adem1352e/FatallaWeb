// 🎯 EASY UPDATE SECTION - Add your new projects here!
// Just copy the format below and add your project details

export interface Project {
  id: number
  title: string
  description: string
  image: string
  technologies: string[]
  liveUrl: string
  githubUrl: string
  category: string
}

export const portfolioProjects: Project[] = [
  // ✅ Project 1 - E-Commerce Store
  {
    id: 1,
    title: "E-Commerce Fashion Store",
    description: "Modern online store with payment integration and inventory management",
    image: "/placeholder.svg?height=300&width=400",
    technologies: ["React", "Node.js", "Stripe", "MongoDB"],
    liveUrl: "https://your-ecommerce-site.com",
    githubUrl: "https://github.com/fatalaweb/ecommerce-project",
    category: "E-commerce",
  },

  // ✅ Project 2 - Restaurant System
  {
    id: 2,
    title: "Restaurant Management System",
    description: "Complete restaurant solution with online ordering and table reservations",
    image: "/placeholder.svg?height=300&width=400",
    technologies: ["Next.js", "PostgreSQL", "Tailwind", "API"],
    liveUrl: "https://your-restaurant-site.com",
    githubUrl: "https://github.com/fatalaweb/restaurant-project",
    category: "Business",
  },

  // ✅ Project 3 - Portfolio Website
  {
    id: 3,
    title: "Creative Portfolio Website",
    description: "Stunning portfolio for digital artist with interactive galleries",
    image: "/placeholder.svg?height=300&width=400",
    technologies: ["React", "Three.js", "GSAP", "CSS3"],
    liveUrl: "https://your-portfolio-site.com",
    githubUrl: "https://github.com/fatalaweb/portfolio-project",
    category: "Portfolio",
  },

  // 🆕 ADD NEW PROJECTS HERE - Just copy the format above!
  // Example:
  // {
  //   id: 4,
  //   title: "Your New Project Name",
  //   description: "Brief description of what this project does",
  //   image: "/placeholder.svg?height=300&width=400", // Replace with your image
  //   technologies: ["Technology1", "Technology2", "Technology3"],
  //   liveUrl: "https://your-new-project.com",
  //   githubUrl: "https://github.com/fatalaweb/new-project",
  //   category: "Category Name"
  // },
]

// 📝 INSTRUCTIONS FOR ADDING NEW PROJECTS:
// 1. Copy the project template above
// 2. Change the id to the next number (4, 5, 6, etc.)
// 3. Update the title, description, and other details
// 4. Replace the image placeholder with your actual image
// 5. Add the technologies you used
// 6. Add your live site and GitHub URLs
// 7. Choose a category (E-commerce, Business, Portfolio, etc.)
// 8. Save the file - that's it! 🎉

export const projectCategories = ["All", "E-commerce", "Business", "Portfolio", "Blog", "Landing Page", "Web App"]
