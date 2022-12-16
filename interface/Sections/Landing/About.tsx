import { FC } from "react"

import { Container, Section } from "@/components"
import landing from "@/content/landing"

const About: FC = () => {
  return (
    <Container>
      <Section
        title={landing.about.title}
        image={landing.about.image}
        description={landing.about.description}
      />
    </Container>
  )
}

export default About
