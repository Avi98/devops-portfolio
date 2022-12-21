import { NextPage } from "next"
import dynamic from "next/dynamic"

const Hero = dynamic(() => import("@/components/hero"))

const Page: NextPage = () => {
  return (
    <Hero
      buttonGroup={[
        {
          text: "Styled and Substance",
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
  )
}

export default Page
