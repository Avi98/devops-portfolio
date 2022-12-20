import React from "react"

import { NextJsLogo } from "@/components"

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
    icon?: React.ReactNode
    image?: string
  }[]
  image?: string | string[]
  gradientBg: string
}

const process = [
  {
    id: "1",
    type: "design",
    gradient: "design",
    title: "Design ",
    subTitle: "Build rich experiences ",
    tag: "Interface",
    slug: "web-design",
    description: [
      "Buchanan DevOps approach to the design process begins with a combination of cultural philosophies, best practices and software required to achieve your vision. By mapping and building your workflow we can guage the project requirements.",
      "After doing our initial research into your industry, we'll put together a preliminary wireframe to define the components required for the development stage. Once the project is outlined we'll begin designing the components required.",
    ],
    features: [
      {
        title: "Discovery + Strategy",
        description:
          "Create a robust differentiated online storefront that is easy to use and maintain empowering your customers to find what they need quickly and easily.",
      },
      {
        title: "UI/UX Web Design + Prototyping",
        description:
          "We build beautiful websites that are fast, secure, and easy to use.",
      },
      {
        title: "(QA + Testing) - Bugs = Launch",
        description:
          "We build beautiful websites that are fast, secure, and easy to use.",
      },
    ],
    image: "/content/production-dark.svg",
    gradientBg: "/bgk/gradient/highlight.svg",
  },
  {
    id: "2",
    type: "develop",
    gradient: "develop",
    title: "Develop",
    subTitle: "The hard work behind web apps",
    tag: "Dynamics",
    slug: "app-development",
    description: [
      "At Buchanan DevOps, we understand the importance of delivering top-notch technical talent to build great apps and keep them running. Our team is comprised of experienced professionals with a deep understanding of coding languages and development frameworks who are dedicated to creating robust applications that will help your business succeed. ",
      "With our expertise in app design, development and maintenance, you can rest assured that your application will be up-to-date with modern standards while providing exceptional performance for users on all platforms. We also have an extensive network of developers from around the United States, allowing us access to specialized skillsets when needed. ",
    ],
    features: [
      {
        title: "Agile + Licensing + CI/CD = DevOps",
        description:
          "We build beautiful websites that are fast, secure, and easy to use.",
        icon: <NextJsLogo />,
        image: "/content/people.svg",
      },
      {
        title: "(Server + Database) x (API x (s)) = Backend",
        description:
          "We build beautiful websites that are fast, secure, and easy to use.",
        icon: <NextJsLogo />,
        image: "/content/people.svg",
      },
      {
        title: "(Frontend + Backend) x (DevOps) = App",
        description:
          "We build beautiful websites that are fast, secure, and easy to use.",
        icon: <NextJsLogo />,
        image: "/content/people.svg",
      },
    ],
  },
  {
    id: "3",
    type: "optimize",
    gradient: "optimize",
    title: "Optimize",
    subTitle: "The Art of SEO",
    tag: "Strategy",
    slug: "search-engine-optimization",
    description: [
      "Search Engine Optimization (SEO) is an invaluable strategy for businesses to increase their visibility. SEO helps your business stand out from the competition by applying semantic logic, schemas, and structured data to optimize your website’s content for search engine algorithms. ",
      "By utilizing SEO techniques such as keyword research, meta tags optimization and link building you can improve your website's ranking on major search engines like Google or Bing. This will help potential customers find you more easily when searching for the products or services that you offer. ",
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
