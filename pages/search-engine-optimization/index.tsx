import { NextPage } from "next"
import dynamic from "next/dynamic"

import seo from "@/content/seo"
import SEO from "@/interface/Common/SEO"

const Hero = dynamic(() => import("@/components/hero"))
const FormSection = dynamic(
  () => import("@/interface/Sections/Shared/FormSection")
)
const Summary = dynamic(() => import("@/components/summary"))

const Page: NextPage = () => {
  return (
    <>
      <Hero
        announcement={{
          text: "We've updated our SEO Strategy!",
          status: "New",
          href: "/search-engine-optimization#seo-audit",
          hrefText: "Learn more",
        }}
        buttonGroup={[
          {
            text: "How does it work?",
            link: "",
            style: "default",
          },
          {
            text: "SEO Audit",
            link: "/search-engine-optimization#seo-audit",
            style: "seo",
          },
        ]}
        description={seo.seo.description}
        subtitle="Optimization"
        title="Search Engine"
        type="seo"
      />
      <Summary item={seo.summaryInfo} type="seo" />
      <FormSection
        description="Do you have an exisiting website and want to know how to improve your SEO? Fill out the form below and we'll get back to you with a comprenhensive SEO audit."
        id="seo-audit"
        title="Want an SEO Audit?"
        type="contact"
      />
      <SEO {...seo.seo} />
    </>
  )
}

export default Page
