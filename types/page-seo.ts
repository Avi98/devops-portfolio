export interface PageSeo {
  type?:
    | "/"
    | "web-design"
    | "app-development"
    | "search-engine-optimization"
    | "digital-marketing"
    | "work-portfolio"
    | "contact"
    | "seo-audit"
    | "request-estimate"
    | string
  title: string
  description: string
  keywords: string
  image: string
}
