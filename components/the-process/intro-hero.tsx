import { Container, Grid } from "@/components"

import { HeroTitle, TitleDesign, TitleDevelop, TitleOptimize } from "./styles"

const IntroHero: React.FC = () => {
  return (
    <Container
      as="section"
      className="intro-hero__container"
      css={{
        mt: "150px",
      }}
    >
      <Grid.Container css={{}} justify="center">
        <Grid>
          <HeroTitle>
            <TitleDesign>Design.</TitleDesign>
          </HeroTitle>
        </Grid>
        <Grid>
          <HeroTitle>
            <TitleDevelop>Develop.</TitleDevelop>
          </HeroTitle>
        </Grid>
        <Grid>
          <HeroTitle>
            <TitleOptimize>Optimize.</TitleOptimize>
          </HeroTitle>
        </Grid>
      </Grid.Container>
    </Container>
  )
}

export default IntroHero
