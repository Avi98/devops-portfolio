import { useRouter } from "next/router"

import Container from "../container"
import { Button } from "../primitives"
import {
  HeroButtons,
  HeroButtonsList,
  HeroButtonsListItem,
  StyledGradientBorder,
  StyledHero,
  StyledHeroDescription,
  StyledHeroImg,
  StyledHeroSubtitle,
  StyledHeroTitle,
} from "./hero.styles"

export interface HeroProps {
  title: string
  subtitle: string
  image?: string
  description?: string
  type: "web-design" | "app-development" | "seo" | "landing"
  gradientBorder?: boolean
  buttonGroup?: {
    text: string
    link: string
    style: "default" | "gradient" | "ghost"
  }[]
}

export const Hero = ({
  title,
  subtitle,
  description,
  image,
  type,
  buttonGroup,
  gradientBorder,
}: HeroProps) => {
  const router = useRouter()

  const handleButtonClick = (buttonGroup: string) => {
    router.push(buttonGroup)
  }

  return (
    <StyledHero>
      {image ? <StyledHeroImg src={image} /> : null}
      <StyledHeroTitle
        aria-label={`${title}` + `	` + `${subtitle}`}
        gradientBorder={gradientBorder}
      >
        {gradientBorder === true ? (
          <StyledGradientBorder
            css={{
              position: "absolute",
              zIndex: -10,
            }}
          >
            {title}
          </StyledGradientBorder>
        ) : null}
        {title}
        <StyledHeroSubtitle aria-hidden="true" gradient={type}>
          {subtitle}
        </StyledHeroSubtitle>
      </StyledHeroTitle>
      <StyledHeroDescription>{description}</StyledHeroDescription>
      {buttonGroup ? (
        <HeroButtons>
          <HeroButtonsList>
            {buttonGroup.map(button => (
              <HeroButtonsListItem key={button.text}>
                {button.style === "gradient" ? (
                  <Container
                    css={{
                      position: "relative",
                      zIndex: 10,
                      pl: "0px",
                      pr: "0px",
                    }}
                  >
                    <Button
                      style={button.style}
                      title={button.text}
                      onClick={() => handleButtonClick(button.link)}
                    >
                      {button.text}
                    </Button>
                  </Container>
                ) : (
                  <Button
                    style={button.style}
                    title={button.text}
                    onClick={() => handleButtonClick(button.link)}
                  >
                    {button.text}
                  </Button>
                )}
              </HeroButtonsListItem>
            ))}
          </HeroButtonsList>
        </HeroButtons>
      ) : null}
    </StyledHero>
  )
}
