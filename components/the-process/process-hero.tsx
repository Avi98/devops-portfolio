import { FC } from "react"

import process from "@/content/landing/process"

import { ExploreLabel, HeroSpan, HeroTitle } from "./styles"

const SectionHero: FC = () => {
  return (
    <>
      <HeroTitle>
        {process.map(section => (
          <HeroSpan
            key={section.title}
            css={{ background: `$${section.gradient}`, backgroundClip: "text" }}
          >
            {section.title}. &nbsp;
          </HeroSpan>
        ))}
      </HeroTitle>
      <ExploreLabel>EXPLORE THE DEVOPS PROCESS</ExploreLabel>
    </>
  )
}

export default SectionHero
