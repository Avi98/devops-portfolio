import { NextPage } from "next"
import dynamic from "next/dynamic"

const Hero = dynamic(() => import("@/components/hero"))

const Page: NextPage = () => {
  return (
    <Hero
      buttonGroup={[
        {
          text: "Contact",
          link: "/contact",
          style: "default",
        },
      ]}
      description="Our work speaks for itself. We have worked with a variety of clients to create websites, apps, and digital marketing campaigns that define brands while increasing web traffic."
      gradientBorder={true}
      subtitle="Substance"
      title="Defining Style"
      type="landing"
    />
  )
}

export default Page
