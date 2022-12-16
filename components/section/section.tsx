import { CSS } from "@/theme/stitches.config"

import { StyledSection, StyledSectionTitle } from "./section.styles"

interface Props {
  className?: string
  href?: string
  title?: string
  subtitle?: string
  description?: string[]
  type: "left" | "right" | "center" | "default"
  css?: CSS
  as?: keyof JSX.IntrinsicElements
}

type NativeAttrs = Omit<React.HTMLAttributes<unknown>, keyof Props>

export type ServiceSectionProps = Props & NativeAttrs

const Section = ({
  className,
  href,
  title,
  description,
  type,
  css,
  as,
  ...props
}: ServiceSectionProps) => {
  return (
    <StyledSection css={css} {...props} className={className}>
      <StyledSectionTitle>{title}</StyledSectionTitle>
      <p>{description}</p>
    </StyledSection>
  )
}

Section.toString = () => ".devui-service-section"

export default Section
