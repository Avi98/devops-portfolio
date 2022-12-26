import { NextPage } from "next"
import dynamic from "next/dynamic"

import webdesign from "@/content/web-design"
import SEO from "@/interface/Common/SEO"

const Hero = dynamic(() => import("@/components/hero"))
const Summary = dynamic(() => import("@/components/summary"))

const Page: NextPage = () => {
  return (
    <>
      <Hero
        buttonGroup={[
          {
            text: "Experience Matters",
            link: "",
            style: "default",
          },
          {
            text: "Style with Substance",
            link: "/search-engine-optimization#seo-audit",
            style: "web-design",
          },
        ]}
        description="I design and build websites that are fast, secure, and easy to use."
        image="/content/wdhero.svg"
        subtitle="Designer."
        title="Website"
        type={"web-design"}
      />
      <Summary item={webdesign.summaryInfo} />
      <SEO
        description={webdesign.seo.description}
        keywords={webdesign.seo.keywords}
        title={webdesign.seo.title}
      />
    </>
  )
}

export default Page
