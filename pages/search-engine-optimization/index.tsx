import { NextPage } from "next"

import Hero from "@/components/hero"

const Page: NextPage = () => {
  return (
    <Hero
      description="We help you rank higher in search engines and get more traffic to your website."
      subtitle="Optimization"
      title="Search Engine"
      type={"seo"}
    />
  )
}

export default Page
