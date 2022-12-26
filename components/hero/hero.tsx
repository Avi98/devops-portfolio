import { useRouter } from "next/router"

import clsx from "clsx"

import { useMediaQuery } from "@/hooks/use-media-query"

import Container from "../container"
import Announcement from "./announcement"
import {
  HeroButton,
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
  announcement?: {
    text: string
    status: "New" | "Updated" | "Coming Soon" | "Popular" | "Featured" | "Sale"
    href: string
    hrefText: string
  }
  description?: string
  type: "web-design" | "app-development" | "seo" | "landing" | "legal"
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
      | "legal"
  }[]
}

export const Hero = ({
  title,
  subtitle,
  description,
  image,
  announcement,
  type,
  buttonGroup,
  gradientBorder,
}: HeroProps) => {
  const router = useRouter()

  const handleButtonClick = (buttonGroup: string) => {
    router.push(buttonGroup)
  }

  const isSM = useMediaQuery(650)

  return (
    <StyledHero>
      {image ? (
        <StyledHeroImg
          alt={title}
          height={isSM ? 40 : 70}
          src={image}
          width={isSM ? 161 : 282}
        />
      ) : announcement ? (
        <Announcement
          href={announcement.href}
          hrefText={announcement.hrefText}
          status={announcement.status}
          text={announcement.text}
          type={type}
        />
      ) : null}
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
                {button.style === "default" ? (
                  <HeroButton
                    aria-label={button.text}
                    id={button.text}
                    style={button.style}
                    title={button.text}
                    onClick={() => handleButtonClick(button.link)}
                  >
                    {button.text}
                  </HeroButton>
                ) : (
                  <Container
                    css={{
                      position: "relative",
                      zIndex: 10,
                      pl: "0px",
                      pr: "0px",
                    }}
                  >
                    <div
                      className={clsx("gradient__background", {
                        "gradient__background--seo": button.style === "seo",
                        "gradient__background--web-design":
                          button.style === "web-design",
                        "gradient__background--app-development":
                          button.style === "app-development",
                        "gradient__background--legal": button.style === "legal",
                      })}
                    />
                    <HeroButton
                      aria-label={button.text}
                      id={button.text}
                      style={button.style}
                      title={button.text}
                      onClick={() => handleButtonClick(button.link)}
                    >
                      {button.text}
                    </HeroButton>
                  </Container>
                )}
              </HeroButtonsListItem>
            ))}
          </HeroButtonsList>
        </HeroButtons>
      ) : null}
    </StyledHero>
  )
}
