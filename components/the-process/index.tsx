import dynamic from "next/dynamic"
import React from "react"

import process from "@/content/landing/process"

import { StyledSection } from "../section"

const SectionHero = dynamic(() => import("./process-hero"))
const ProcessSection = dynamic(() => import("./process-section"))

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
        <ProcessSection
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
