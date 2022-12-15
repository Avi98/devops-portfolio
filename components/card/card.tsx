import { useRouter } from "next/router"
import React from "react"

import type { CSS } from "@/theme"

import {
  StyledCard,
  StyledDescription,
  StyledIcon,
  StyledIconWrapper,
  StyledTitle,
} from "./card.styles"
import type { CardVariantsProps } from "./card.styles"

interface Props {
  slug: string
  icon?: string
  title: string
  description: string
  css?: CSS
  image: string
}

type NativeAttrs = Omit<React.HTMLAttributes<unknown>, keyof Props>

export type CardProps = React.ComponentPropsWithRef<"div"> &
  Props &
  NativeAttrs &
  CardVariantsProps

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ slug, icon, title, description, css, image, ...props }, ref) => {
    const router = useRouter()
    const handleClick = () => {
      router.push(`/${slug}`)
    }

    return (
      <StyledCard
        ref={ref}
        css={{ backgroundImage: `url(${image})`, ...css }}
        onClick={handleClick}
        {...props}
      >
        {icon ? (
          <StyledIconWrapper>
            <StyledIcon alt={`${title}`} src={icon} />
          </StyledIconWrapper>
        ) : null}
        <StyledTitle>{title}</StyledTitle>
        <StyledDescription>{description}</StyledDescription>
      </StyledCard>
    )
  }
)

export default Card
