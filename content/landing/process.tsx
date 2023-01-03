export type ProcessProps = {
  id: string
  type: "design" | "develop" | "optimize" | string
  title: string
  subTitle: string
  tag: string
  slug: string
  description: string[]
  features?: {
    id?: string
    title: string
    description?: string
    icon?: string | any
    image?: string
    type?: "text" | "image"
  }[]
  image?: string[]
  gradientBg: string
}

const process = [
  {
    id: "1",
    type: "design",
    gradient: "design",
    title: "Design ",
    subTitle: "Rich customer experiences.",
    tag: "Interface",
    slug: "web-design",
    description: [
      "Our team of experienced professionals takes time to research and understand your business, ensuring customers get the best possible experience from interacting with your brand. We use this knowledge to create engaging interfaces that not only looks great but also drive audiences to action, helping you reach and exceed your business goals.",
    ],
    features: [
      {
        id: "design-feature-1",
        title: "Discovery + Strategy",
        description:
          "At the start of any project, we like to take a deep dive into understanding your business goals, technology in use, economics and objectives.",
        icon: "/icons/blue/code-window.svg",
      },
      {
        id: "design-feature-2",
        title: "UI/UX Web Design ",
        description:
          "Once the business insights and requirements are identified, we will use them to design a user interface (UI) that is tailored to enhance brand recognition and user experience.",
        icon: "/icons/blue/cicd.svg",
      },
      {
        id: "design-feature-3",
        title: "Minimal Viable Product (MVP)",
        description:
          "At this stage of the process, we will have a hosted Minimum Viable Product (MVP) for the business to collaborate with us in real time. ",
        icon: "/icons/blue/status.svg",
      },
    ],
    image: ["/content/web_design_story.avif"],
    gradientBg: "/bgk/gradient/highlight.svg",
  },
  {
    id: "2",
    type: "develop",
    gradient: "develop",
    title: "Develop",
    subTitle: "Dynamic web apps.",
    tag: "Dynamics",
    slug: "app-development",
    description: [
      "Application development unequivocally focuses on dynamic data. Dynamic data bridges the gap between static websites and full stack applications, giving a business real-time functionality tailored to their business requirements. Using our conceptual data model we’ll create a unified architecture that will allow for effective communication among all components of the application.",
    ],
    features: [
      {
        id: "develop-feature-1",
        title: "Agile Development and Operations (DevOps)",
        description:
          "Agile development focuses on delivering value through rapid iterations with continuous feedback from stakeholders throughout the process. ",
        icon: "/icons/purple/devops.svg",
        image: "/content/monitoring.avif",
      },
      {
        id: "develop-feature-2",
        title: "Backend Development",
        description:
          "Building the backend of an application requires a database to store data, a server to handle requests from users, and an API (Application Programming Interface) as the bridge between the two. ",
        icon: "/icons/purple/backend.svg",
        image: "/content/backend_monorepo.avif",
      },
      {
        id: "develop-feature-3",
        title: "CI/CD Production Application",
        description:
          "The continuous integration (CI) process allows us to integrate changes asynchronously with our MVP. This enables us to continuously deliver (CD) updates and improvements, allowing for faster iteration cycle. ",
        icon: "/icons/purple/matrix.svg",
        image: "/content/cicd_production_application.avif",
      },
    ],
  },
  {
    id: "3",
    type: "optimize",
    gradient: "optimize",
    title: "Optimize",
    subTitle: "The Art of SEO.",
    tag: "Strategy",
    slug: "search-engine-optimization",
    description: [
      "Search Engine Optimization (SEO) is an invaluable strategy for businesses to increase their visibility. SEO helps your business stand out from the competition by applying semantic logic, schemas, and structured data to optimize your website’s content for search engine algorithms. ",
    ],
    features: [
      {
        id: "technical-seo",
        title: "Technical SEO",
        image: "/icons/orange/seo-technical.svg",
        type: "text",
      },
      {
        id: "search-engine-audit",
        title: "Search Engine Audit",
        image: "/icons/orange/seo-audit.svg",
        type: "text",
      },
      {
        id: "keyword-research",
        title: "Keyword Research",
        image: "/icons/orange/seo-keyword.svg",
        type: "text",
      },
      {
        id: "seo-strategy",
        title: "SEO Strategy",
        image: "/icons/orange/seo-strategy.svg",
        type: "text",
      },
      {
        id: "organic-marketing",
        title: "Organic Marketing",
        image: "/icons/orange/seo-organic.svg",
        type: "text",
      },
      {
        id: "measuring-reporting",
        title: "Measuring + Reporting",
        image: "/icons/orange/seo-measuring.svg",
        type: "text",
      },
    ],
    image: ["/analytics/comprehensive-reporting.avif"],
    gradientBg: "/bgk/gradient/highlight.svg",
  },
]

export default process
