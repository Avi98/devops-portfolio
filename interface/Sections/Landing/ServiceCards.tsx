import { FC } from "react"

import { Card, Container, Grid, StyledSection } from "@/components"
import landing from "@/content/landing"

const ServiceCards: FC = () => {
  return (
    <StyledSection id="services">
      <Container>
        <Grid.Container gap={1}>
          {landing.serviceCards.map(card => (
            <Grid xs={12} sm={6} md={4}>
              <Card {...card} />
            </Grid>
          ))}
        </Grid.Container>
      </Container>
    </StyledSection>
  )
}

export default ServiceCards
