import { FC } from "react"

import { Card, Container, Grid, Section } from "@/components"
import landing from "@/content/landing"

const ServiceCards: FC = () => {
  return (
    <Section id="services">
      <Container>
        <Grid.Container gap={1}>
          {landing.serviceCards.map(card => (
            <Grid xs={12} sm={6} md={4}>
              <Card {...card} />
            </Grid>
          ))}
        </Grid.Container>
      </Container>
    </Section>
  )
}

export default ServiceCards
