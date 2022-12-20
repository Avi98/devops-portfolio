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
}

export interface NavButtonProps {
  title: string
  href: string
  style: string
  icon: React.ReactNode
}

export default {
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
      title: "LinkedIn: John Buchanan",
      href: "https://www.linkedin.com/in/buchanandevops/",
      icon: <LinkedIn size={24} />,
    },
    {
      title: "GitHub: Buchanan DevOps",
      href: "https://github.com/BuchananDevOps",
      icon: <Github size={24} />,
    },
    {
      title: "Twitter: @BuchananDevOps",
      href: "https://twitter.com/BuchananDevOps",
      icon: <Twitter size={24} />,
    },
  ],
  buttons: [
    {
      title: "Contact",
      href: "/contact",
      style: "default",
      icon: <Mail />,
    },
  ],
}
