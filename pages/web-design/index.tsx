import { NextPage } from "next"
import dynamic from "next/dynamic"

import webdesign from "@/content/web-design"
import SEO from "@/interface/Common/SEO"

const Hero = dynamic(() => import("@/components/hero"))
const Summary = dynamic(() => import("@/components/summary"))
const WebDesignContent = dynamic(
  () => import("@/interface/Sections/Web/WebDesignContent")
)
const PortfolioCta = dynamic(() => import("@/components/portfolio-cta"))
const FormSection = dynamic(
  () => import("@/interface/Sections/Shared/FormSection")
)

const Page: NextPage = () => {
  return (
    <>
      <Hero {...webdesign.hero} />
      <Summary
        id="style-and-substance"
        item={webdesign.summaryInfo}
        type="web-design"
      />
      <WebDesignContent />
      <PortfolioCta item={[...webdesign.portfolioCta]} {...webdesign.cta} />
      <FormSection {...webdesign.form} />
      <SEO {...webdesign.seo} />
    </>
  )
}

export default Page
