import { FC } from "react"

import clsx from "clsx"

import { Container, Grid, StyledSection } from "@/components"
import landing from "@/content/landing"
import { ServiceCard } from "@/interface/Object/ServiceCard"

const ServiceCards: FC = () => {
  return (
    <>
      <StyledSection id="services" className={clsx(`section__styles`)}>
        <Container css={{ maxWidth: "1400px" }}>
          <Grid.Container gap={1}>
            {landing.serviceCards.map(card => (
              <Grid xs={12} sm={6} md={4}>
                <ServiceCard key={card.title} {...card} />
              </Grid>
            ))}
            {landing.largeServiceCards.map(card => (
              <Grid xs={12} sm={6} md={6}>
                <ServiceCard {...card} />
              </Grid>
            ))}
          </Grid.Container>
        </Container>
      </StyledSection>
    </>
  )
}

export default ServiceCards
