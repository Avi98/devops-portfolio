import { CSS, styled } from "@/theme/stitches.config"

export interface IconProps {
  fill?: string
  filled?: boolean
  size?: string | number
  height?: string | number
  width?: string | number
  label?: string
  onClick?: () => void
  className?: string
  css?: CSS
  type?: "web-design" | "app-development" | "seo"
}

export const Icon = styled("svg", {})

export { default as Twitter } from "./twitter"
export { default as Github } from "./github"
