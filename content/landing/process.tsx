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
      "Buchanan DevOps approach to the design process begins with a combination of cultural philosophies, best practices and software required to achieve your vision. By mapping and building your workflow we can guage the project requirements.",
    ],
    features: [
      {
        id: "design-feature-1",
        title: "Discovery + Strategy",
        description:
          "Create a robust differentiated online storefront that is easy to use and maintain empowering your customers to find what they need quickly and easily.",
        icon: "/icons/blue/code-window.svg",
      },
      {
        id: "design-feature-2",
        title: "UI/UX Web Design + Prototyping",
        description:
          "We build beautiful websites that are fast, secure, and easy to use.",
        icon: "/icons/blue/cicd.svg",
      },
      {
        id: "design-feature-3",
        title: "(QA + Testing) - Bugs = Launch",
        description:
          "We build beautiful websites that are fast, secure, and easy to use.",
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
      "The development of an app is mostly focused on dynamic data. Dynamic data bridges the gap between a static website and an app, giving a business real-time content tailored to their specific needs and business functions.",
    ],
    features: [
      {
        id: "develop-feature-1",
        title: "Agile + Licensing + CI/CD = DevOps",
        description:
          "Specific tooling and technology enable the operational development of an application to evolve quickly and reliably. We’ll curate a list of required licensing during the initial project discovery process.",
        icon: "/icons/blue/devops-blue.svg",
        image: "/content/monitoring.avif",
      },
      {
        id: "develop-feature-2",
        title: "Server + Database + API = Backend",
        description:
          "We’ll construct a conceptual data model specific to the business requirements, technology in use, economics and data processing. We’ll utilize the conceptual model to develop the interactions and associations between the database, server and API.",
        icon: "/icons/blue/backend.svg",
        image: "/content/code.svg",
      },
      {
        id: "develop-feature-3",
        title: "Frontend + Backend + DevOps = App",
        description:
          "Designing, developing and delivering dynamic content for user consumption requires certain DevOps technologies and a backend comprised of a Database, Server, and API. We’ll integrate the frontend to consume the backend and deliver the dynamic content to the user.",
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
