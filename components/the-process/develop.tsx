import { Col, Container, Row, Text } from "@/components"

import { DevelopPathLine, DevelopSectionLabel } from "./styles"

const DevelopSection = () => {
  return (
    <Container css={{ maxWidth: "1000px" }}>
      <Col className="sub-header_col">
        <Row
          css={{
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          <DevelopPathLine />
        </Row>
        <Row
          css={{
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          <DevelopSectionLabel>2</DevelopSectionLabel>
        </Row>
        <Row
          css={{
            justifyContent: "center",
            textAlign: "center",
            marginBottom: "1.5rem",
          }}
        >
          <Text
            h2
            css={{
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundImage: "linear-gradient(90deg, #9A1FB8, #FF0080)",
              fontWeight: "bolder",
              "@xsMax": {
                fontSize: "2rem",
              },
            }}
          >
            App Development
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
            Make your design dynamic
          </Text>
        </Row>
        <Row
          css={{
            marginLeft: "40px",
            marginRight: "40px",
            "@xsMax": {
              marginLeft: "0px",
              marginRight: "0px",
            },
          }}
        >
          <Col>
            <Text css={{ color: "#888", marginTop: "-40px" }}>
              Development Operations, &quot;DevOps&quot; for short requires
              strategy and intent for your companies technical challenges. Under
              our DevOps model, development professionals are merged into single
              team where the engineers work across the entire application
              lifecycle while supporting and maintaining the project after
              production deployment. By sticking with your initial DevOps
              professionals, your long-term support costs are significantly
              lower than onboarding new developers for each issue that may
              arise.{" "}
            </Text>
          </Col>
        </Row>
      </Col>
    </Container>
  )
}

export default DevelopSection
