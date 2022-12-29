import { NextPage } from "next"
import dynamic from "next/dynamic"

import webdesign from "@/content/web-design"
import SEO from "@/interface/Common/SEO"

const Hero = dynamic(() => import("@/components/hero"))
const Summary = dynamic(() => import("@/components/summary"))
const WebDesignContent = dynamic(
  () => import("@/interface/Sections/Web/WebDesignContent")
)
const Testimonial = dynamic(
  () => import("@/components/testimonial/testimonial")
)

const Page: NextPage = () => {
  return (
    <>
      <Hero
        buttonGroup={[
          {
            text: "Experience Matters",
            link: "#style-and-substance",
            style: "default",
          },
          {
            text: "Style with Substance",
            link: "#testimonials",
            style: "web-design",
          },
        ]}
        description={webdesign.seo.description}
        image="/content/wdhero.svg"
        subtitle="Designer."
        title="Website"
        type={"web-design"}
      />
      <Summary
        id="style-and-substance"
        item={webdesign.summaryInfo}
        type="web-design"
      />
      <WebDesignContent />
      <Testimonial
        id="testimonials"
        item={webdesign.testimonials}
        type="web-design"
      />
      <SEO {...webdesign.seo} />
    </>
  )
}

export default Page
