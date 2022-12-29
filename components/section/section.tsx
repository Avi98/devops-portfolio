import clsx from "clsx"

import { CSS } from "@/theme/stitches.config"

import {
  StyledSection,
  StyledSectionContent,
  StyledSectionDescription,
  StyledSectionTitle,
} from "./section.styles"

interface Props {
  className?: string
  href?: string
  title?: string
  description?: string
  image?: string
  border?: "top" | "bottom" | "default"
  type?: "web-design" | "app-development" | "seo"
  utility?: "center" | "left" | "right"
  css?: CSS
  as?: keyof JSX.IntrinsicElements
  children?: React.ReactNode
}

type NativeAttrs = Omit<React.HTMLAttributes<unknown>, keyof Props>

export type ServiceSectionProps = Props & NativeAttrs

const Section = ({
  className,
  href,
  title,
  description,
  image,
  border,
  type,
  css,
  as,
  children,
  ...props
}: ServiceSectionProps) => {
  return (
    <StyledSection css={css} type={type} {...props}>
      {border === "top" && (
        <div aria-hidden="true" className="section__styles--top-border">
          <div
            className={clsx("section__styles--top-border-left", {
              "section__styles--top-border-left--web-design":
                type === "web-design",
              "section__styles--top-border-left--app-development":
                type === "app-development",
              "section__styles--top-border-left--seo": type === "seo",
            })}
          />
          <div
            className={clsx("section__styles--top-border-right", {
              "section__styles--top-border-right--web-design":
                type === "web-design",
              "section__styles--top-border-right--app-development":
                type === "app-development",
              "section__styles--top-border-right--seo": type === "seo",
            })}
          />
        </div>
      )}
      {title && <StyledSectionTitle>{title}</StyledSectionTitle>}
      {description && (
        <StyledSectionDescription>{description}</StyledSectionDescription>
      )}
      <StyledSectionContent>{children}</StyledSectionContent>
      {border === "bottom" && (
        <div aria-hidden="true" className="section__styles--bottom-border">
          <div
            className={clsx("section__styles--bottom-border-left", {
              "section__styles--bottom-border-left--web-design":
                type === "web-design",
              "section__styles--bottom-border-left--app-development":
                type === "app-development",
              "section__styles--bottom-border-left--seo": type === "seo",
            })}
          />
          <div
            className={clsx("section__styles--bottom-border-right", {
              "section__styles--bottom-border-right--web-design":
                type === "web-design",
              "section__styles--bottom-border-right--app-development":
                type === "app-development",
              "section__styles--bottom-border-right--seo": type === "seo",
            })}
          />
        </div>
      )}
    </StyledSection>
  )
}

Section.toString = () => ".devui-service-section"

export default Section
