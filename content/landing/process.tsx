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
    description: string
    icon?: string | any
    image?: string
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
    image: ["/content/bassnectar-unlimited.avif"],
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
        icon: "/icons/blue/devops-blue.svg",
        image: "/content/monitoring.avif",
      },
      {
        id: "develop-feature-2",
        title: "Backend Development",
        description:
          "Building the backend of an application requires a database to store data, a server to handle requests from users, and an API (Application Programming Interface) as the bridge between the two. ",
        icon: "/icons/blue/backend.svg",
        image: "/content/code.svg",
      },
      {
        id: "develop-feature-3",
        title: "CI/CD Production Application",
        description:
          "The continuous integration (CI) process allows us to integrate changes asynchronously with our MVP. This enables us to continuously deliver (CD) updates and improvements, allowing for faster iteration cycle. ",
        icon: "/icons/blue/matrix.svg",
        image: "/content/people.svg",
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
        id: "seo-audit",
        title: "Target Market Business Analysis Audit",
        description:
          "Analysis of your target market and business to determine the best keywords to target and develop a strategy to rank higher in search engines.",
        lines: "2-21",
        prev: "merchandising-seo",
        next: "deep-learning",
      },
      {
        id: "deep-learning",
        title: "Keyword Research and Development",
        description:
          "Through deep learning, we will research the optimal keywords for your industry which see the highest Clickthrough rates (CTR).",
        lines: "23-73",
        prev: "seo-audit",
        next: "comprehensive-reporting",
      },
      {
        id: "comprehensive-reporting",
        title: "Comprehensive Reporting",
        description:
          "We provide a comprehensive report of your website’s SEO performance and recommendations for improvement each month based on our analytics.",
        lines: "69-85",
        prev: "deep-learning",
        next: "customer-aquisition",
      },
      {
        id: "customer-aquisition",
        title: " Customer Acquisition",
        description:
          "We will help you acquire new customers through SEO and social media marketing. We will also help you retain your current customers.",
        lines: "85-118",
        prev: "comprehensive-reporting",
        next: "merchandising-seo",
      },
      {
        id: "merchandising-seo",
        title: "Merchandising SEO.",
        description:
          "By applying merchandising SEO, we will help you increase your sales and revenue by optimizing your product pages and listings.",
        lines: "85-118",
        prev: "customer-aquisition",
        next: "seo-audit",
      },
    ],
    image: [
      "/analytics/comprehensive-reporting.avif",
      "/analytics/customer-aquisition.avif",
      "/analytics/deep-learning.avif",
      "public/analytics/merchandising-seo.avif",
      "/analytics/seo-audit.avif",
    ],
    gradientBg: "/bgk/gradient/highlight.svg",
  },
]

export default process
