import React from "react"

import { Grid, Row, Spacer } from "@/components"
import { Github, LinkedIn, Subtitle, Title, Twitter } from "@/components"
import withDefaults from "@/utils/with-defaults"

import { StyledCommunityCard } from "./styles"

export interface CommunityProps {
  twitter?: string
  github?: string
  linkedin?: string
}

const defaultProps = {
  twitter: "https://twitter.com/buchanandevops",
  github: "https://github.com/buchanandevops",
  linkedin: "https://www.linkedin.com/in/buchanandevops/",
}

const Community: React.FC<CommunityProps> = ({ twitter, github, linkedin }) => {
  return (
    <Grid.Container css={{ position: "relative" }} gap={2} justify="center">
      <Grid css={{ mb: "$10" }} direction="column" xs={12}>
        <Row justify="center">
          <Title css={{ textAlign: "center" }}>Get in Touch</Title>
        </Row>
        <Row justify="center">
          <Subtitle css={{ textAlign: "center" }}>
            Get your business on the Map. Everyone business is Welcome!
          </Subtitle>
        </Row>
      </Grid>
      <Grid justify="center" md={3} sm={6} xs={12}>
        <StyledCommunityCard
          href={twitter}
          rel="noopener noreferrer"
          target="_blank"
        >
          <Row align="center" justify="flex-start">
            <Twitter fill="#00ACEE" size={30} />
            <Spacer />
            <h5>Twitter</h5>
          </Row>
          <Spacer />
          <Row align="center" justify="flex-start">
            <p style={{ color: "$accents8", textAlign: "left" }}>
              For announcements, tips and general information.
            </p>
          </Row>
        </StyledCommunityCard>
      </Grid>
      <Grid justify="center" md={3} sm={6} xs={12}>
        <StyledCommunityCard
          href={linkedin}
          rel="noopener noreferrer"
          target="_blank"
        >
          <Row align="center" justify="flex-start">
            <LinkedIn fill="#7289DA" size={30} />
            <Spacer />
            <h5>Discord</h5>
          </Row>
          <Spacer />
          <Row align="center" justify="flex-start">
            <p style={{ color: "$accents8" }}>
              To get involved in the community, ask questions and share tips.
            </p>
          </Row>
        </StyledCommunityCard>
      </Grid>
      <Grid justify="center" md={3} sm={6} xs={12}>
        <StyledCommunityCard
          href={github}
          rel="noopener noreferrer"
          target="_blank"
        >
          <Row align="center" justify="flex-start">
            <Github className="github-icon" fill="#E7E7E7" size={30} />
            <Spacer />
            <h5>GitHub</h5>
          </Row>
          <Spacer />
          <Row align="center" justify="flex-start">
            <p style={{ color: "$accents8" }}>
              For issues, feature requests and contribute.
            </p>
          </Row>
        </StyledCommunityCard>
      </Grid>
    </Grid.Container>
  )
}

export default withDefaults(Community, defaultProps)
