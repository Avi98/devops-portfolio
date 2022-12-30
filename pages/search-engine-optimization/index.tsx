import { NextPage } from "next"
import dynamic from "next/dynamic"

import seo from "@/content/seo"
import process from "@/content/seo/process"
import SEO from "@/interface/Common/SEO"

const Hero = dynamic(() => import("@/components/hero"))
const FormSection = dynamic(
  () => import("@/interface/Sections/Shared/FormSection")
)
const Summary = dynamic(() => import("@/components/summary"))
const SeoContent = dynamic(() => import("@/interface/Sections/Seo/SeoContent"))
const Infographic = dynamic(() => import("@/components/infographic"))

const Page: NextPage = () => {
  return (
    <>
      <Hero {...seo.hero} />
      <Summary item={seo.summaryInfo} type="seo" />
      <SeoContent />
      <Infographic item={process.process} type="seo" />
      <FormSection {...seo.form} />
      <SEO {...seo.seo} />
    </>
  )
}

export default Page
