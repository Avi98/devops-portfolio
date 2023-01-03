import { NextPage } from "next"
import dynamic from "next/dynamic"

import SEO from "@/interface/Common/SEO"

const ServiceCards = dynamic(
  () => import("@/interface/Sections/Landing/ServiceCards")
)

const Hero = dynamic(() => import("@/components/hero"))

const TheProcess = dynamic(() => import("@/components/the-process"))

const Page: NextPage = () => {
  return (
    <>
      <Hero
        buttonGroup={[
          {
            text: "DevOps Process",
            link: "/#the-devops-process",
            style: "default",
          },
          {
            text: "Contact Us",
            link: "/contact",
            style: "gradient",
          },
        ]}
        description="We build websites and apps with an emphasis on search engine optimization (SEO) for clients that range from startups to enterprise companies. "
        gradientBorder={true}
        subtitle="Development"
        title="Web. App. Seo."
        type="landing"
      />
      <ServiceCards />
      <TheProcess />
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
