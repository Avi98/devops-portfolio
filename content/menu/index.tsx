import { Github, LinkedIn, Mail, Twitter } from "@/components/icons"

export interface NavLinkProps {
  id: string
  title: string
  short: string
  href: string
}

export interface SocialLinkProps {
  id: string
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
    email: "john@buchanandevops.com",
    phone: {
      number: "(302) 217-3382",
      href: "+3022173382",
    },
    locale: {
      city: "Middletown",
      state: "DE",
      country: "USA",
    },
  },
  navLinks: [
    {
      id: "web-design",
      title: "Website Design",
      short: "Web",
      href: "/web-design",
    },
    {
      id: "app-development",
      title: "App Development",
      short: "App",
      href: "/app-development",
    },
    {
      id: "search-engine-optimization",
      title: "Search Engine Optimization",
      short: "Seo",
      href: "/search-engine-optimization",
    },
    {
      id: "work-portfolio",
      title: "Work Portfolio",
      short: "Work",
      href: "/work-portfolio",
    },
  ],
  socialLinks: [
    {
      id: "linkedin",
      title: "LinkedIn",
      at: "John Buchanan",
      href: "https://www.linkedin.com/in/buchanandevops/",
      icon: <LinkedIn size={24} />,
    },
    {
      id: "github",
      title: "GitHub",
      at: "BuchananDevOps",
      href: "https://github.com/BuchananDevOps",
      icon: <Github size={24} />,
    },
    {
      id: "twitter",
      title: "Twitter",
      at: "BuchananDevOps",
      href: "https://twitter.com/BuchananDevOps",
      icon: <Twitter size={24} />,
    },
    {
      id: "email",
      title: "Contact Buchanan DevOps",
      at: "John Buchanan",
      href: "/contact",
      icon: <Mail fill="var(--devui-colors-red600)" size={24} />,
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
