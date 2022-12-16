import { CSS } from "@/theme/stitches.config"

import Grid from "../grid"
import {
  StyledSection,
  StyledSectionContent,
  StyledSectionDescription,
  StyledSectionImage,
  StyledSectionTitle,
} from "./section.styles"

interface Props {
  className?: string
  href?: string
  title?: string
  subtitle?: string
  description?: string[]
  image?: string
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
  subtitle,
  image,
  css,
  as,
  children,
  ...props
}: ServiceSectionProps) => {
  return (
    <StyledSection css={css} {...props} className={className}>
      <StyledSectionTitle>{title}</StyledSectionTitle>
      <Grid.Container gap={2}>
        <Grid md={6} sm={6} xs={12}>
          {subtitle && (
            <StyledSectionDescription>{subtitle}</StyledSectionDescription>
          )}
          {description && (
            <StyledSectionDescription>
              {description.map(item => (
                <p key={item}>{item}</p>
              ))}
            </StyledSectionDescription>
          )}
        </Grid>
        <Grid md={6} sm={6} xs={12}>
          {image ? (
            <StyledSectionImage
              alt={`${title}`}
              height={100}
              src={`${image}`}
              width={100}
            />
          ) : (
            <StyledSectionContent>{children}</StyledSectionContent>
          )}
        </Grid>
      </Grid.Container>
    </StyledSection>
  )
}

Section.toString = () => ".devui-service-section"

export default Section
