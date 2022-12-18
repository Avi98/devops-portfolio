import NextLink from "next/link"

import { Col, Container, Grid, Row, Text } from "@/components"

import Link from "../link/link"
import { DeployPathLine, DeploySectionLabel } from "./styles"

const IntroDeploymentSection = () => {
  return (
    <Container css={{ maxWidth: "1000px" }}>
      <Col className="sub-header_col">
        <Row
          css={{
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          <DeployPathLine />
        </Row>
        <Row
          css={{
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          <DeploySectionLabel>3</DeploySectionLabel>
        </Row>
        <Row
          css={{
            justifyContent: "center",
            textAlign: "center",
            marginBottom: "1.5rem",
          }}
        >
          <NextLink
            href="/search-engine-optimization"
            title="Search Engine Optimization"
          >
            <Text
              h2
              css={{
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundImage: "linear-gradient(90deg, #FF4D4D, #F9CB28)",
                fontWeight: "bolder",
              }}
            >
              Optimize
            </Text>
          </NextLink>
        </Row>
        <Row
          css={{
            justifyContent: "center",
            textAlign: "center",
            marginBottom: "3rem",
          }}
        >
          <NextLink
            href="/search-engine-optimization"
            title="Search Engine Optimization"
          >
            <Text
              h1
              css={{
                fontSize: "3.75rem",
                letterSpacing: "-.05em",
                "@xsMax": { fontSize: "2.5rem" },
              }}
            >
              Search Engine Optimization
            </Text>
          </NextLink>
        </Row>
        <Grid.Container>
          <Grid css={{ "@xsMax": { marginBottom: "$5" } }} md={6} xs={12}>
            <Text css={{ color: "#888" }}>
              <Link
                href="/search-engine-optimization"
                style={{ color: "#FF5B4F" }}
                title="Search Engine Optimization"
              >
                Search Engine Optimization
              </Link>
              , better known as &quot;seo&quot; is the process of incorporating
              metadata, schema$apos;s and certain strategies to ensure your
              company is found under the proper context and specific searches
              which as advantageous to your company.{" "}
            </Text>
          </Grid>
          <Grid css={{ "@mdMax": { marginTop: "$5" } }} md={6} xs={12}>
            <Text css={{ color: "#888" }}>
              From local seo to ecommerce seo, our approach to the process is a
              powerful way to bring traffic to your website and gain the
              notoriety your company deserves. We&apos;ve been nominated as a
              top digital marketing agency in the United States with clutch.{" "}
            </Text>
          </Grid>
        </Grid.Container>
        <Grid.Container css={{ mt: "30px" }} />
      </Col>
    </Container>
  )
}

export default IntroDeploymentSection
