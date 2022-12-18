import Image from "next/image"

import { Col, Container, Grid, Row, Text } from "@/components"

import { DesignPathLine, DesignSectionLabel } from "./styles"

const DesignSection = () => {
  return (
    <Container css={{ maxWidth: "1000px" }}>
      <Col className="sub-header_col">
        <Row
          css={{
            justifyContent: "center",
            textAlign: "center",
            marginBottom: "1rem",
          }}
        >
          <Text
            css={{
              fontSize: ".75rem",
              letterSpacing: ".2rem",
            }}
          >
            EXPLORE THE DEVOPS PROCESS
          </Text>
        </Row>
        <Row
          css={{
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          <DesignPathLine />
        </Row>
        <Row
          css={{
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          <DesignSectionLabel>1</DesignSectionLabel>
        </Row>
        <Row
          css={{
            justifyContent: "center",
            textAlign: "center",
            marginBottom: "1.5rem",
          }}
        >
          <Text
            h5
            css={{
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundImage: "linear-gradient(90deg, #007cf0, #00dfd8)",
              fontWeight: "$extrabold",
            }}
          >
            Web Design
          </Text>
        </Row>
        <Row
          css={{
            justifyContent: "center",
            textAlign: "center",
            marginBottom: "3rem",
          }}
        >
          <Text
            h1
            css={{
              fontSize: "3.75rem",
              letterSpacing: "-.05em",
              "@xsMax": { fontSize: "2.5rem" },
            }}
          >
            Style &amp; Substance
          </Text>
        </Row>
        <Row
          css={{
            marginLeft: "25px",
            marginRight: "30px",
            marginBottom: "30px",
            "@xsMax": {
              marginLeft: "0px",
              marginRight: "0px",
              marginBottom: "30px",
            },
          }}
        >
          <Grid.Container>
            <Grid css={{ "@xsMax": { marginBottom: "$5" } }} md={6} xs={12}>
              <Text css={{ color: "#888" }}>
                <a
                  href="https://buchanandevops.com"
                  style={{ color: "#0A72EF" }}
                >
                  Buchanan DevOps
                </a>{" "}
                approach to the design process begins with a combination of
                cultural philosophies, best practices and software required to
                achieve your vision. By mapping and building your workflow we
                can guage the project requirements.{" "}
              </Text>
            </Grid>
            <Grid css={{ "@mdMax": { marginTop: "$5" } }} md={6} xs={12}>
              <Text css={{ color: "#888" }}>
                After doing our initial research into your industry, we&apos;ll
                put together a preliminary wireframe to define the components
                required for the development stage. Once the project is outlined
                we&apos;ll begin designing the components required.
              </Text>
            </Grid>
          </Grid.Container>
        </Row>
        <Row>
          <Grid.Container gap={2}>
            <Grid md={6} xs={12}>
              <Image
                alt="Target Mobile App Design"
                height={574}
                src="/content/target-mobile.avif"
                width={400}
              />
            </Grid>
            <Grid md={6} xs={12}>
              <Grid.Container>
                <Grid xs={12}>
                  <Text h3>Ecommerce Storefronts</Text>
                  <br />
                </Grid>
                <Grid xs={12}>
                  <Text css={{ color: "#888", marginBottom: "$10" }}>
                    Create a robust differentiated online storefront that is
                    easy to use and maintain empowering your customers to find
                    what they need quickly and easily.
                  </Text>
                </Grid>
                <Grid xs={12}>
                  <Text h3>Mobile Responsive Designs</Text>
                  <br />
                </Grid>
                <Grid xs={12}>
                  <Text css={{ color: "#888", marginBottom: "$10" }}>
                    Make your site mobile-responsive with our mobile-first
                    approach to design. For 13 years, we&apos;ve been designing
                    and developing mobile-first websites and applications
                    ensuring the integrity of the product on every device.
                  </Text>
                </Grid>
                <Grid xs={12}>
                  <Text h3>Cross-Channel Commerce</Text>
                  <br />
                </Grid>
                <Grid xs={12}>
                  <Text css={{ color: "#888", marginBottom: "$10" }}>
                    Designing with React &amp; Next.js, we can create a seamless
                    experience across all channels. Some features we can include
                    are customer groups, price lists, bulk pricing, purchase
                    roders, quote management, b2b payments, and more.
                  </Text>
                </Grid>
              </Grid.Container>
            </Grid>
          </Grid.Container>
        </Row>
      </Col>
    </Container>
  )
}

export default DesignSection
