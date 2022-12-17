import { FC } from "react"

import { Container, Grid, StyledSection } from "@/components"
import landing from "@/content/landing"
import { ServiceCard } from "@/interface/Object/ServiceCard"

const ServiceCards: FC = () => {
  return (
    <>
      <StyledSection id="services" className="devui__max-width__section">
        <Grid.Container gap={1}>
          {landing.serviceCards.map(card => (
            <Grid xs={12} sm={6} md={4}>
              <ServiceCard {...card} />
            </Grid>
          ))}
          {landing.largeServiceCards.map(card => (
            <Grid xs={12} sm={6} md={6}>
              <ServiceCard {...card} />
            </Grid>
          ))}
        </Grid.Container>
      </StyledSection>
    </>
  )
}

export default ServiceCards
