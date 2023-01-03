import React from "react"

export interface ContentSectionProps {
  id?: string
  title: string
  description: string
  position?: "left" | "right" | "center"
  image?: {
    src: string | any
    alt: string | any
  }
  link?: {
    text?: string
    href?: string
  }
  gradient?:
    | "webGradient"
    | "seoGradient"
    | "appGradient"
    | "textGradient"
    | "gradient"
  buttonColor?: {
    color: {
      web: {
        webColorA: "#007cf0"
        webColorB: "#00dfd8"
      }
      app: {
        appColorA: "#9A1FB8"
        appColorB: "#FF0080"
      }
      seo: {
        seoColorA: "#ff4d4d"
        seoColorB: "#f9cb28"
      }
    }
  }
  opacity?: number
  icon?: React.ReactNode
  children?: React.ReactNode
}
