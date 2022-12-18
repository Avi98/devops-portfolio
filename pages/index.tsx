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
        description="We build digital things with a bunch of code and alot of coffee. Chances are you're here because you need a website, app, or seo services for your business."
        gradientBorder={true}
        subtitle="Development"
        title="Web. App. Seo."
        type="landing"
      />
      <ServiceCards />
      <TheProcess />
      <SEO
        description={"Buchanan DevOps Index Description"}
        keywords={""}
        title={"Buchanan DevOps Index Title"}
      />
    </>
  )
}

export default Page
