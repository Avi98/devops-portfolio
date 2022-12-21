import { Github, LinkedIn, Mail, Twitter } from "@/components"

export interface NavLinkProps {
  title: string
  short: string
  href: string
}

export interface SocialLinkProps {
  title: string
  href: string
  icon: React.ReactNode
  at?: string
}

export interface NavButtonProps {
  title: string
  href: string
  style: string
  icon: React.ReactNode
}

export default {
  contactInfo: {
    avatar: "/brand/johnbuchanan.avif",
    name: "John Buchanan",
    title: "Full Stack Developer",
    email: "buchanandevops@gmail.com",
    phone: {
      number: "(302) 404-0184",
      href: "+3024040184",
    },
    locale: {
      city: "Middletown",
      state: "DE",
      country: "USA",
    },
  },
  navLinks: [
    {
      title: "Website Design",
      short: "Web",
      href: "/web-design",
    },
    {
      title: "App Development",
      short: "App",
      href: "/app-development",
    },
    {
      title: "Search Engine Optimization",
      short: "SEO",
      href: "/search-engine-optimization",
    },
    {
      title: "Digital Marketing",
      short: "Marketing",
      href: "/digital-marketing",
    },
    {
      title: "Work Portfolio",
      short: "Work",
      href: "/work-portfolio",
    },
  ],
  socialLinks: [
    {
      title: "LinkedIn",
      at: "John Buchanan",
      href: "https://www.linkedin.com/in/buchanandevops/",
      icon: <LinkedIn size={24} />,
    },
    {
      title: "GitHub",
      at: "BuchananDevOps",
      href: "https://github.com/BuchananDevOps",
      icon: <Github size={24} />,
    },
    {
      title: "Twitter",
      at: "BuchananDevOps",
      href: "https://twitter.com/BuchananDevOps",
      icon: <Twitter size={24} />,
    },
    {
      title: "Instagram",
      at: "JohnBuchanan",
      href: "https://www.instagram.com/johnbuchanan/",
      icon: <Mail size={24} />,
    },
  ],
  buttons: [
    {
      title: "Contact",
      href: "/contact",
      style: "default",
      icon: <Mail />,
    },
    {
      title: "SEO Audit",
      href: "/search-engine-optimization#seo-audit",
      style: "seo",
      icon: <Mail />,
    },
    {
      title: "Request a Quote",
      href: "/request-a-quote",
      style: "default",
      icon: <Mail />,
    },
    {
      title: "Consultation",
      href: "/consultation",
      style: "default",
      icon: <Mail />,
    },
  ],
}
