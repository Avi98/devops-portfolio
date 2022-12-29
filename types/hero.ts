export interface HeroProps {
  title: string
  subtitle: string
  image?: string
  announcement?: {
    text: string
    status: "New" | "Updated" | "Coming Soon" | "Popular" | "Featured" | "Sale"
    href: string
    hrefText: string
  }
  description?: string
  type:
    | "web-design"
    | "app-development"
    | "seo"
    | "marketing"
    | "landing"
    | "legal"
  gradientBorder?: boolean
  buttonGroup?: {
    text: string
    link: string
    style:
      | "default"
      | "gradient"
      | "seo"
      | "web-design"
      | "app-development"
      | "marketing"
      | "legal"
  }[]
}
