import dynamic from "next/dynamic"
import { useRouter } from "next/router"
import React from "react"

import { Box, Container, Grid, Image } from "@/components"
import process, { type ProcessProps } from "@/content/landing/process"
import CollapseFeature from "@/interface/Object/CollapseFeature"
import ImageDisplay from "@/interface/Object/ImageDisplay"
import { CSS } from "@/theme/stitches.config"

import { StyledSection } from "../section"
import {
  ExploreLabel,
  HeroSpan,
  HeroTitle,
  PathLine,
  SectionBody,
  SectionFeature,
  SectionFeatures,
  SectionHeader,
  SectionLabel,
  SectionSubTitle,
  SectionTitle,
} from "./styles"

const SectionHero = () => {
  return (
    <>
      <HeroTitle>
        {process.map(section => (
          <HeroSpan
            key={section.title}
            css={{ background: `$${section.gradient}`, backgroundClip: "text" }}
          >
            {section.title}. &nbsp;
          </HeroSpan>
        ))}
      </HeroTitle>
      <ExploreLabel>EXPLORE THE DEVOPS PROCESS</ExploreLabel>
    </>
  )
}

type SectionProps = React.ComponentPropsWithRef<"div"> &
  ProcessProps & { css?: CSS; gradient?: string }

const Section = React.forwardRef<HTMLDivElement, SectionProps>(
  ({ title, gradient, children, css, ...props }, ref) => {
    const router = useRouter()
    const handleClick = () => {
      router.push(`/${props.slug}`)
    }
    return (
      <>
        {" "}
        <SectionHeader ref={ref}>
          <PathLine css={{ background: `$${gradient}Path` }} />
          <SectionLabel css={{ background: `$${gradient}` }}>
            {props.id}
          </SectionLabel>
          <SectionTitle
            css={{ background: `$${gradient}`, backgroundClip: "text" }}
          >
            {title}
          </SectionTitle>
          <SectionSubTitle
            id={`${props.slug}_button`}
            title={`${props.subTitle} Service`}
            onClick={handleClick}
          >
            {props.subTitle}
          </SectionSubTitle>
        </SectionHeader>
        <SectionBody css={css} {...props}>
          <Container>
            <Grid.Container>
              {props.description.map(desc => (
                <Grid
                  key={desc.concat()}
                  css={{ "@xsMax": { marginBottom: "$5" } }}
                  md={6}
                  xs={12}
                >
                  <p key={desc.concat()}>{desc}</p>
                </Grid>
              ))}
              {props.type === "design" && (
                <>
                  {props.image && (
                    <Grid
                      css={{ "@xsMax": { marginBottom: "$5" } }}
                      md={6}
                      xs={12}
                    >
                      <Image alt={`${title}`} src={props.image as string} />
                      <Box
                        css={{
                          position: "absolute",
                          zIndex: "-$1",
                          right: 0,
                          left: "0%",
                          xsMax: {
                            top: "15%",
                            left: "10% !important",
                          },
                          "@lg": {
                            top: "0%",
                            left: "0% !important",
                          },
                        }}
                      >
                        <Image
                          alt={`${title} Gradient`}
                          src={props.gradientBg}
                        />
                      </Box>
                    </Grid>
                  )}
                  {props.features && (
                    <Grid
                      css={{ "@xsMax": { marginBottom: "$5" } }}
                      md={6}
                      xs={12}
                    >
                      <SectionFeatures>
                        {props.features.map(feature => (
                          <SectionFeature key={feature.title}>
                            <h5 key={feature.title}>{feature.title}</h5>
                            <p key={feature.title}>{feature.description}</p>
                          </SectionFeature>
                        ))}
                      </SectionFeatures>
                    </Grid>
                  )}
                </>
              )}
              {props.type === "develop" && props.features && (
                <>
                  {props.features.map(feature => (
                    <SectionFeatures
                      key={`${title}-features-wrapper`}
                      type="develop"
                    >
                      <Grid key={feature.title} md={6} xs={12}>
                        <Image alt={`${title}`} src={feature.image as string} />
                      </Grid>
                      <Grid key={feature.title} md={6} xs={12}>
                        <SectionFeature key={feature.title}>
                          <h5 key={feature.title}>{feature.title}</h5>
                          <p key={feature.title}>{feature.description}</p>
                        </SectionFeature>
                      </Grid>
                    </SectionFeatures>
                  ))}
                </>
              )}
              {props.type === "optimize" && props.features && (
                <>
                  <Grid
                    css={{ "@xsMax": { marginBottom: "$5" } }}
                    md={6}
                    xs={12}
                  >
                    <CollapseFeature items={props.features} {...props} />
                  </Grid>
                  <Grid
                    css={{ "@xsMax": { marginBottom: "$5" } }}
                    md={6}
                    xs={12}
                  >
                    <ImageDisplay items={props.features} {...props} />
                  </Grid>
                </>
              )}
            </Grid.Container>
          </Container>
        </SectionBody>
        {children}
      </>
    )
  }
)
const Process = () => {
  return (
    <StyledSection
      css={{
        marginTop: "100px",
        paddingTop: "100px",
        position: "relative",
      }}
      id="the-devops-process"
    >
      <SectionHero />
      {process.map(section => (
        <Section
          key={section.id}
          css={{ maxWidth: "1000px", margin: "0 auto" }}
          description={section.description}
          features={section.features as any}
          gradient={section.gradient}
          gradientBg={section.gradientBg as string}
          id={section.id}
          image={section.image}
          slug={section.slug}
          subTitle={section.subTitle}
          tag={section.tag}
          title={section.title}
          type={`${section.type}`}
        />
      ))}
    </StyledSection>
  )
}

export default dynamic(() => Promise.resolve(Process), {
  ssr: false,
})
