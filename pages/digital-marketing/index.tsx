import { NextPage } from "next"
import dynamic from "next/dynamic"

const Hero = dynamic(() => import("@/components/hero"))

const Page: NextPage = () => {
  return (
    <Hero
      buttonGroup={[
        {
          text: "Learn More",
          link: "/web-design",
          style: "default",
        },
        {
          text: "Contact Us",
          link: "/contact",
          style: "marketing",
        },
      ]}
      description="We build full stack applications with incredible performance and love for the craft. If you've made it this far, you're ready to unlock your full potential."
      gradientBorder={false}
      subtitle="Marketing."
      title="Search Engine"
      type="marketing"
    />
  )
}

export default Page
