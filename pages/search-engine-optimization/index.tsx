import { NextPage } from "next"
import dynamic from "next/dynamic"

const Hero = dynamic(() => import("@/components/hero"))

const Page: NextPage = () => {
  return (
    <Hero
      announcement={{
        text: "We're hiring!",
        status: "New",
        href: "/careers",
        hrefText: "Join our team",
      }}
      description="We help you rank higher in search engines and get more traffic to your website."
      subtitle="Optimization"
      title="Search Engine"
      type={"seo"}
    />
  )
}

export default Page
