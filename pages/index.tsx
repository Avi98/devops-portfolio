import { NextPage } from "next"
import dynamic from "next/dynamic"

import Hero from "@/components/hero"

const ServiceCards = dynamic(
  () => import("@/interface/Sections/Landing/ServiceCards")
)

const Page: NextPage = () => {
  return (
    <>
      <Hero
        buttonGroup={[
          {
            text: "The Ideal Process",
            link: "/web-design",
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
    </>
  )
}

export default Page
