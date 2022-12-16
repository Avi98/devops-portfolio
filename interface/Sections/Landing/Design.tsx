import { FC } from "react"

import { Container, Section } from "@/components"
import landing from "@/content/landing"

const Design: FC = () => {
  return (
    <Container>
      <Section
        title={landing.design.title}
        description={landing.design.description}
      />
    </Container>
  )
}

export default Design
