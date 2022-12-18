import { FC } from "react"

import { StyledSection } from "../section"
import DesignSection from "./design"
import DevelopSection from "./develop"
import IntroHero from "./intro-hero"
import OptimizeSection from "./optimize"

const TheProcess: FC = () => {
  return (
    <StyledSection id="the-devops-process">
      <IntroHero />
      <DesignSection />
      <DevelopSection />
      <OptimizeSection />
    </StyledSection>
  )
}

export default TheProcess
