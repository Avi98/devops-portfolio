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
  css,
  as,
  children,
  ...props
}: ServiceSectionProps) => {
  return (
    <StyledSection css={css} {...props}>
      {border === "top" && (
        <div aria-hidden="true" className="section__styles--top-border">
          <div className="section__styles--top-border-left" />
          <div className="section__styles--top-border-right" />
        </div>
      )}
      {title && <StyledSectionTitle>{title}</StyledSectionTitle>}
      {description && (
        <StyledSectionDescription>{description}</StyledSectionDescription>
      )}
      <StyledSectionContent>{children}</StyledSectionContent>
      {border === "bottom" && (
        <div aria-hidden="true" className="section__styles--bottom-border">
          <div className="section__styles--bottom-border-left" />
          <div className="section__styles--bottom-border-right" />
        </div>
      )}
    </StyledSection>
  )
}

Section.toString = () => ".devui-service-section"

export default Section
