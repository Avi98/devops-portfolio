import { FC } from "react"

import clsx from "clsx"

import Container from "@/components/container"
import Grid from "@/components/grid"
import StyledSection from "@/components/section"
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
          </Grid.Container>
        </Container>
      </StyledSection>
    </>
  )
}

export default ServiceCards
