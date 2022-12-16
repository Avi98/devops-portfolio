import { Anecdote, Github, LinkedIn, Mail, Twitter } from "@/components"

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
      href: "https://www.linkedin.com/company/development-ui",
      icon: <LinkedIn />,
    },
    {
      title: "GitHub: Buchanan DevOps",
      href: "https://github.com/BuchananDevOps",
      icon: <Github />,
    },
    {
      title: "Twitter: @BuchananDevOps",
      href: "https://twitter.com/BuchananDevOps",
      icon: <Twitter />,
    },
    {
      title: "Anecdote: News, Reviews, and Opinions",
      href: "https://anecdote.buchanandevops.com",
      icon: <Anecdote />,
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
