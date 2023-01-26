import { NextPage } from "next"
import dynamic from "next/dynamic"

import landing from "@/content/landing"
import SEO from "@/interface/Common/SEO"

const ServiceCards = dynamic(
  () => import("@/interface/Sections/Landing/ServiceCards")
)

const Hero = dynamic(() => import("@/components/hero"))

const TheProcess = dynamic(() => import("@/components/the-process"))
const PortfolioCta = dynamic(() => import("@/components/portfolio-cta"))
const FormSection = dynamic(
  () => import("@/interface/Sections/Shared/FormSection")
)

const Page: NextPage = () => {
  return (
    <>
      <Hero {...landing.hero} />
      <ServiceCards />
      <TheProcess />
      <PortfolioCta item={[...landing.portfolioCta]} {...landing.cta} />
      <FormSection {...landing.form} />
      <SEO
        description={
          "Develop modern, personalized digital experiences powered by Buchanan DevOps. Faster and deploy to a global edge infrastructure for the fastest, most reliable sites."
        }
        keywords={""}
        title={"Web. App. Seo."}
      />
    </>
  )
}

export default Page
