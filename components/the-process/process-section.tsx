import Image from "next/image"
import { useRouter } from "next/router"
import React, { Suspense } from "react"

import clsx from "clsx"

import { type ProcessProps } from "@/content/landing/process"
import { useMediaQuery } from "@/hooks/use-media-query"
import { CSS } from "@/theme/stitches.config"

import Container from "../container"
import { Box } from "../primitives"
import {
  PathLine,
  SectionBody,
  SectionFeature,
  SectionFeatures,
  SectionFlex,
  SectionFlexItem,
  SectionHeader,
  SectionLabel,
  SectionSubTitle,
  SectionTitle,
} from "./process.styles"

type SectionProps = React.ComponentPropsWithRef<"div"> &
  ProcessProps & { css?: CSS; gradient?: string }

const ProcessSection = React.forwardRef<HTMLDivElement, SectionProps>(
  ({ title, gradient, children, css, ...props }, ref) => {
    const router = useRouter()
    const handleClick = () => {
      router.push(`/${props.slug}`)
    }
    const isMobile = useMediaQuery(960)
    return (
      <>
        {" "}
        <SectionHeader
          ref={ref}
          className={clsx("devops-process__section-header", {
            "devops-process__section-header--design": props.type === "design",
            "devops-process__section-header--develop": props.type === "develop",
            "devops-process__section-header--optimize":
              props.type === "optimize",
          })}
        >
          {props.type === "optimize" ? (
            <PathLine
              css={{ background: `$${gradient}Path` }}
              type="optimize"
            />
          ) : (
            <PathLine css={{ background: `$${gradient}Path` }} />
          )}
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
        <SectionBody
          className={clsx(
            `devops-process__section-body ${props.id}_section-body`
          )}
          css={css}
          {...props}
        >
          <Container>
            {props.description.map(desc => (
              <SectionFeature
                key={`head--description`}
                css={{ textAlign: "-webkit-center" }}
              >
                <p
                  key={desc.concat()}
                  className={clsx("devops-process__description")}
                >
                  {desc}
                </p>
              </SectionFeature>
            ))}
            {props.type === "design" && (
              <SectionFlex>
                {props.image && (
                  <SectionFlexItem position="left">
                    <Suspense>
                      {props.image.map(image => (
                        <Image
                          key={`${title} design-image`}
                          alt={`${title} design image`}
                          className="devops-process__image design-image"
                          height={332}
                          src={image}
                          width={304}
                        />
                      ))}
                    </Suspense>
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
                        height={800}
                        src={props.gradientBg}
                        width={800}
                      />
                    </Box>
                  </SectionFlexItem>
                )}
                {props.features && (
                  <SectionFlexItem position="right">
                    <SectionFeatures type="design">
                      {props.features.map(feature => (
                        <SectionFeature
                          key={feature.title}
                          css={{ marginBottom: "$12" }}
                        >
                          <h5 key={feature.title}>{feature.title}</h5>
                          <p key={feature.title}>{feature.description}</p>
                        </SectionFeature>
                      ))}
                    </SectionFeatures>
                  </SectionFlexItem>
                )}
              </SectionFlex>
            )}
            {props.type === "develop" && props.features && (
              <>
                {!isMobile && (
                  <SectionFeatures type="pathline">
                    <SectionFeature>
                      <span className="devops-process__path-line path-stretch path-line_gradient path-line--first" />
                    </SectionFeature>
                  </SectionFeatures>
                )}
                {props.features.map(feature => (
                  <>
                    <SectionFeatures
                      key={`${feature.id}__features-wrapper`}
                      className={clsx(`${feature.id}__features-wrapper`)}
                      type="develop"
                    >
                      <SectionFeature
                        key={feature.title}
                        className={clsx("devops-process__feature-left")}
                        position="left"
                      >
                        <Suspense>
                          <Image
                            alt={`${feature.title} buchanan devops process`}
                            className="devops-process__image develop-image"
                            height={400}
                            src={feature.image as string}
                            width={300}
                          />
                        </Suspense>
                      </SectionFeature>
                      <SectionFeature
                        className={clsx(`${feature.id}__feature-center`)}
                        position="center"
                      >
                        <span className="devops-process__path-circle" />
                        <span className="devops-process__path-line path-stretch path-line_dotted " />
                      </SectionFeature>
                      <SectionFeature
                        key={feature.title}
                        className={clsx("devops-process__feature-right")}
                        position="right"
                      >
                        <Image
                          alt={`${feature.title}icon`}
                          className="devops-process__icon"
                          height={50}
                          src={feature.icon}
                          width={50}
                        />
                        <h5 key={feature.title}>{feature.title}</h5>
                        <p key={feature.title}>{feature.description}</p>
                      </SectionFeature>
                    </SectionFeatures>
                    {!isMobile && (
                      <SectionFeatures
                        key={`${feature.id}__features__path-line`}
                        className={clsx(`${feature.id}__features--path-line`)}
                        type="pathline"
                      >
                        <SectionFeature
                          className={clsx("devops-proess__last--path-line ")}
                        >
                          <span className="devops-process__path-line path-stretch path-line_dotted path-line--last" />
                        </SectionFeature>
                      </SectionFeatures>
                    )}
                  </>
                ))}
              </>
            )}
            {props.type === "optimize" && props.features && (
              <SectionFlex>
                {props.features.map(feature => (
                  <SectionFlexItem key={feature.title}>
                    <SectionFeatures>
                      <SectionFeature
                        key={feature.title}
                        css={{ marginBottom: "$12" }}
                      >
                        <h5 key={feature.title}>{feature.title}</h5>
                        <p key={feature.title}>{feature.description}</p>
                      </SectionFeature>
                    </SectionFeatures>
                  </SectionFlexItem>
                ))}
              </SectionFlex>
            )}
          </Container>
        </SectionBody>
        {children}
      </>
    )
  }
)

export default ProcessSection
