import { ComponentPropsWithRef, forwardRef } from "react"

import { styled } from "@/theme/stitches.config"
import type { CSS, VariantProps } from "@/theme/stitches.config"

interface Props {
  primaryTitle: string
  secondaryTitle?: string
  gradient?: string
  css?: CSS
}

const SectionComponent = styled("section", {})

const SectionTitle = styled("h3", {})

const PrimaryTitle = styled("span", {})
const SecondaryTitle = styled("span", {})

type GradientHeroVariants = VariantProps<typeof SectionComponent>
type GradientHeroProps = ComponentPropsWithRef<"section"> &
  GradientHeroVariants &
  Props

const GradientHero = forwardRef<HTMLDivElement, GradientHeroProps>(
  (props, ref) => {
    const { gradient, css, primaryTitle, secondaryTitle, ...rest } = props
    return (
      <SectionComponent
        ref={ref}
        css={{ backgroundImage: `url(${gradient})`, css }}
        {...rest}
      >
        <SectionTitle>
          <PrimaryTitle>{props.primaryTitle}</PrimaryTitle>
          <SecondaryTitle>{props.secondaryTitle}</SecondaryTitle>
        </SectionTitle>
      </SectionComponent>
    )
  }
)

GradientHero.toString = () => ".devui-gradient-hero"

export default GradientHero
